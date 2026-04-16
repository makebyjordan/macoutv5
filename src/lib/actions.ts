'use server';

import { supabase } from './supabase';

// --- PRODUCTS ---
export async function fetchProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('name');
  
  if (error) throw error;
  return data;
}

export async function createProduct(product: any) {
  const { data, error } = await supabase
    .from('products')
    .insert([product])
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

export async function updateProduct(id: string, product: any) {
  const { error } = await supabase
    .from('products')
    .update(product)
    .eq('id', id);
  
  if (error) throw error;
}

export async function removeProduct(id: string) {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
}

// --- TRANSACTIONS ---
export async function fetchTransactions() {
  const { data, error } = await supabase
    .from('transactions')
    .select('*')
    .order('date', { ascending: false });
  
  if (error) throw error;
  return data;
}

export async function createTransaction(transaction: any) {
  const { data, error } = await supabase
    .from('transactions')
    .insert([{ ...transaction, date: transaction.date || new Date().toISOString() }])
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

export async function updateTransaction(id: string, transaction: any) {
  const { error } = await supabase
    .from('transactions')
    .update(transaction)
    .eq('id', id);
  
  if (error) throw error;
}

export async function removeTransaction(id: string) {
  const { error } = await supabase
    .from('transactions')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
}

// --- TESTIMONIALS ---
export async function fetchTestimonials() {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('name');
  
  if (error) throw error;
  return data;
}

export async function createTestimonial(testimonial: any) {
  const { data, error } = await supabase
    .from('testimonials')
    .insert([testimonial])
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

export async function removeTestimonial(id: string) {
  const { error } = await supabase
    .from('testimonials')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
}
