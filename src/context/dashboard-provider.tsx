"use client";

import { createContext, useState, useMemo, useCallback, useEffect } from "react";
import { 
  fetchProducts, 
  createProduct, 
  updateProduct as updateProductAction, 
  removeProduct, 
  fetchTransactions, 
  createTransaction, 
  updateTransaction as updateTransactionAction, 
  removeTransaction, 
  fetchTestimonials, 
  createTestimonial, 
  removeTestimonial 
} from "@/lib/actions";
import type { Product, ProductData, Transaction, TransactionData, Testimonial, TestimonialData } from "@/types";
import { useToast } from "@/hooks/use-toast";

interface DashboardContextType {
  loading: boolean;
  products: Product[];
  addProduct: (product: ProductData) => Promise<void>;
  updateProduct: (id: string, updatedProduct: ProductData) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  transactions: Transaction[];
  addTransaction: (transaction: TransactionData) => Promise<void>;
  updateTransaction: (id: string, updatedTransaction: TransactionData) => Promise<void>;
  deleteTransaction: (id: string) => Promise<void>;
  testimonials: Testimonial[];
  addTestimonial: (testimonial: TestimonialData) => Promise<void>;
  deleteTestimonial: (id: string) => Promise<void>;
  totalIncome: number;
  totalExpenses: number;
  netBalance: number;
}

export const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const { toast } = useToast();

  const fetchAllData = useCallback(async () => {
    setLoading(true);
    try {
      // Fetch products
      const productsList = await fetchProducts();
      setProducts(productsList);

      // Fetch transactions
      const transactionsList = await fetchTransactions();
      const formattedTransactions = transactionsList.map((t: any) => ({
        ...t,
        date: new Date(t.date)
      }));
      setTransactions(formattedTransactions);

      // Fetch testimonials
      const testimonialsList = await fetchTestimonials();
      setTestimonials(testimonialsList);

    } catch (error) {
      console.error("Error fetching data:", error);
      toast({
        variant: "destructive",
        title: "Error de Carga",
        description: "No se pudieron cargar los datos locales.",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);
  
  const addProduct = async (productData: ProductData) => {
    const newProduct = await createProduct(productData);
    setProducts(prev => [...prev, newProduct].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const updateProduct = async (id: string, updatedProductData: ProductData) => {
    await updateProductAction(id, updatedProductData);
    setProducts(prev => prev.map(p => p.id === id ? { ...updatedProductData, id } : p).sort((a, b) => a.name.localeCompare(b.name)));
  };
  
  const deleteProduct = async (id: string) => {
    await removeProduct(id);
    setProducts(prev => prev.filter(p => p.id !== id));
  };
  
  const addTransaction = async (transactionData: TransactionData) => {
    const newTx = await createTransaction(transactionData);
    const formattedTx = { ...newTx, date: new Date(newTx.date) };
    setTransactions(prev => [...prev, formattedTx].sort((a, b) => b.date.getTime() - a.date.getTime()));
  };
  
  const updateTransaction = async (id: string, updatedTransactionData: TransactionData) => {
    await updateTransactionAction(id, updatedTransactionData);
    setTransactions(prev => prev.map(t => t.id === id ? { ...t, ...updatedTransactionData } : t).sort((a, b) => b.date.getTime() - a.date.getTime()));
  };

  const deleteTransaction = async (id: string) => {
    await removeTransaction(id);
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  const addTestimonial = async (testimonialData: TestimonialData) => {
    const newTestimonial = await createTestimonial(testimonialData);
    setTestimonials(prev => [...prev, newTestimonial].sort((a,b) => a.name.localeCompare(b.name)));
  };

  const deleteTestimonial = async (id: string) => {
    await removeTestimonial(id);
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };


  const { totalIncome, totalExpenses, netBalance } = useMemo(() => {
    const totalIncome = transactions
      .filter(t => t.type === 'income')
      .reduce((acc, t) => acc + t.amount, 0);

    const totalExpenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((acc, t) => acc + t.amount, 0);

    return { totalIncome, totalExpenses, netBalance: totalIncome - totalExpenses };
  }, [transactions]);


  const value = useMemo(() => ({
    loading,
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    testimonials,
    addTestimonial,
    deleteTestimonial,
    totalIncome,
    totalExpenses,
    netBalance
  }), [loading, products, transactions, testimonials, totalIncome, totalExpenses, netBalance]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
