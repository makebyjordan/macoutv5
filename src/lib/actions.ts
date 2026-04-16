'use server';

import { 
  getLocalProducts, 
  addLocalProduct, 
  updateLocalProduct, 
  deleteLocalProduct, 
  getLocalTransactions, 
  addLocalTransaction, 
  updateLocalTransaction, 
  deleteLocalTransaction, 
  getLocalTestimonials, 
  addLocalTestimonial, 
  deleteLocalTestimonial 
} from './data-service';

export async function fetchProducts() {
  return getLocalProducts();
}

export async function createProduct(product: any) {
  return addLocalProduct(product);
}

export async function updateProduct(id: string, product: any) {
  return updateLocalProduct(id, product);
}

export async function removeProduct(id: string) {
  return deleteLocalProduct(id);
}

export async function fetchTransactions() {
  const transactions = await getLocalTransactions();
  // Ensure we return simple objects (no Date objects as results can be passed to client components)
  return transactions.map((t: any) => ({
    ...t,
    date: t.date.toISOString()
  }));
}

export async function createTransaction(transaction: any) {
  const res = await addLocalTransaction(transaction);
  return { ...res, date: res.date.toISOString() };
}

export async function updateTransaction(id: string, transaction: any) {
  return updateLocalTransaction(id, transaction);
}

export async function removeTransaction(id: string) {
  return deleteLocalTransaction(id);
}

export async function fetchTestimonials() {
  return getLocalTestimonials();
}

export async function createTestimonial(testimonial: any) {
  return addLocalTestimonial(testimonial);
}

export async function removeTestimonial(id: string) {
  return deleteLocalTestimonial(id);
}
