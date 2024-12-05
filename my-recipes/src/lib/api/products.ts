import type Product from '@/lib/types/product';

export async function getAllProducts() {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  console.log(data.pro);
  return data.products as Product[];
}

export async function getProductById(id: number) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data as Product;
}
