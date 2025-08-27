// src/app/api/products/route.js
import { addProduct, getProducts } from "@/lib/products";
import { NextResponse } from "next/server";



export async function GET() {
  return NextResponse.json(getProducts());
}

export async function POST(req) {
  const body = await req.json();
  const newProduct = addProduct(body);
  return NextResponse.json(newProduct);
}
