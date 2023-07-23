import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await prisma.user.findMany();
    return NextResponse.json(user);
  } catch (error) {}
}
export async function POST(request) {
  const body = await request.json();
  return NextRequest.json(body);
}
export async function PATCH() {}
export async function DELETE() {}
