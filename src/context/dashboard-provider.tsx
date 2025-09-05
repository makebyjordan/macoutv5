"use client";

import { createContext, useState, useMemo, useCallback } from "react";
import type { Product, Transaction, TransactionType } from "@/types";

interface DashboardContextType {
  products: Product[];
  addProduct: (product: Omit<Product, "id">) => void;
  updateProduct: (id: string, updatedProduct: Product) => void;
  deleteProduct: (id: string) => void;
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, "id" | "date">) => void;
  updateTransaction: (id: string, updatedTransaction: Transaction) => void;
  deleteTransaction: (id: string) => void;
  totalIncome: number;
  totalExpenses: number;
  netBalance: number;
}

export const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

const initialProducts: Product[] = Array.from({ length: 50 }, (_, i) => ({
    id: `prod_${i + 1}`,
    name: `MacBook Pro 14" M3 (${i % 5 + 1})`,
    description: 'Chip M3 de Apple con CPU de 8 núcleos, GPU de 10 núcleos, memoria unificada de 16 GB, almacenamiento SSD de 512 GB. Pantalla Liquid Retina XDR de 14.2 pulgadas.',
    image: `https://picsum.photos/seed/${i+1}/600/400`,
    price: 1599 + i * 10,
    buyLink: 'https://wallapop.com',
}));

const initialTransactions: Transaction[] = [
    { id: 'inc_1', type: 'income', title: 'Venta Lote MacBook Air', description: '', amount: 25000, date: new Date() },
    { id: 'inc_2', type: 'income', title: 'Venta iMac 27"', description: '', amount: 15000, date: new Date() },
    { id: 'inc_3', type: 'income', title: 'Servicios de reparación', description: '', amount: 10000, date: new Date() },
    { id: 'exp_1', type: 'expense', title: 'Compra lote iPhones', description: '', amount: 12000, date: new Date() },
    { id: 'exp_2', type: 'expense', title: 'Alquiler local', description: '', amount: 5000, date: new Date() },
    { id: 'exp_3', type: 'expense', title: 'Nóminas', description: '', amount: 3000, date: new Date() },
];


export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);

  const addProduct = useCallback((product: Omit<Product, "id">) => {
    setProducts(prev => [...prev, { ...product, id: `prod_${Date.now()}` }]);
  }, []);

  const updateProduct = useCallback((id: string, updatedProduct: Product) => {
    setProducts(prev => prev.map(p => p.id === id ? updatedProduct : p));
  }, []);
  
  const deleteProduct = useCallback((id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  }, []);
  
  const addTransaction = useCallback((transaction: Omit<Transaction, "id" | "date">) => {
    setTransactions(prev => [...prev, { ...transaction, id: `${transaction.type}_${Date.now()}`, date: new Date() }]);
  }, []);
  
  const updateTransaction = useCallback((id: string, updatedTransaction: Transaction) => {
    setTransactions(prev => prev.map(t => t.id === id ? updatedTransaction : t));
  }, []);

  const deleteTransaction = useCallback((id: string) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  }, []);

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
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    totalIncome,
    totalExpenses,
    netBalance
  }), [products, addProduct, updateProduct, deleteProduct, transactions, addTransaction, updateTransaction, deleteTransaction, totalIncome, totalExpenses, netBalance]);

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
