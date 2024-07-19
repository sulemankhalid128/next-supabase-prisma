import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    debugger
  console.log('-------------->', req)
    // If the login is successful
    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } catch (error:any) {
    console.error('Error during login:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};
