import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const PRODUCTS_FILE = path.join(DATA_DIR, 'products.json');
const TRANSACTIONS_FILE = path.join(DATA_DIR, 'transactions.json');
const TESTIMONIALS_FILE = path.join(DATA_DIR, 'testimonials.json');

// Ensure data directory and files exist
function initData() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
  }
  [PRODUCTS_FILE, TRANSACTIONS_FILE, TESTIMONIALS_FILE].forEach(file => {
    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, JSON.stringify([]));
    }
  });
}

initData();

function readJson(file: string) {
  const content = fs.readFileSync(file, 'utf-8');
  return JSON.parse(content);
}

function writeJson(file: string, data: any) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

export async function getLocalProducts() {
  return readJson(PRODUCTS_FILE);
}

export async function addLocalProduct(product: any) {
  const products = readJson(PRODUCTS_FILE);
  const newProduct = { ...product, id: Date.now().toString() };
  products.push(newProduct);
  writeJson(PRODUCTS_FILE, products);
  return newProduct;
}

export async function updateLocalProduct(id: string, updatedProduct: any) {
  const products = readJson(PRODUCTS_FILE);
  const index = products.findIndex((p: any) => p.id === id);
  if (index !== -1) {
    products[index] = { ...updatedProduct, id };
    writeJson(PRODUCTS_FILE, products);
  }
}

export async function deleteLocalProduct(id: string) {
  const products = readJson(PRODUCTS_FILE);
  const filtered = products.filter((p: any) => p.id !== id);
  writeJson(PRODUCTS_FILE, filtered);
}

export async function getLocalTransactions() {
  return readJson(TRANSACTIONS_FILE).map((t: any) => ({
    ...t,
    date: new Date(t.date)
  }));
}

export async function addLocalTransaction(transaction: any) {
  const transactions = readJson(TRANSACTIONS_FILE);
  const newTransaction = { 
    ...transaction, 
    id: Date.now().toString(),
    date: transaction.date || new Date().toISOString()
  };
  transactions.push(newTransaction);
  writeJson(TRANSACTIONS_FILE, transactions);
  return { ...newTransaction, date: new Date(newTransaction.date) };
}

export async function updateLocalTransaction(id: string, updatedTransaction: any) {
  const transactions = readJson(TRANSACTIONS_FILE);
  const index = transactions.findIndex((t: any) => t.id === id);
  if (index !== -1) {
    transactions[index] = { 
      ...updatedTransaction, 
      id,
      date: transactions[index].date // Preserve original date
    };
    writeJson(TRANSACTIONS_FILE, transactions);
  }
}

export async function deleteLocalTransaction(id: string) {
  const transactions = readJson(TRANSACTIONS_FILE);
  const filtered = transactions.filter((t: any) => t.id !== id);
  writeJson(TRANSACTIONS_FILE, filtered);
}

export async function getLocalTestimonials() {
  return readJson(TESTIMONIALS_FILE);
}

export async function addLocalTestimonial(testimonial: any) {
  const testimonials = readJson(TESTIMONIALS_FILE);
  const newTestimonial = { ...testimonial, id: Date.now().toString() };
  testimonials.push(newTestimonial);
  writeJson(TESTIMONIALS_FILE, testimonials);
  return newTestimonial;
}

export async function deleteLocalTestimonial(id: string) {
  const testimonials = readJson(TESTIMONIALS_FILE);
  const filtered = testimonials.filter((t: any) => t.id !== id);
  writeJson(TESTIMONIALS_FILE, filtered);
}
