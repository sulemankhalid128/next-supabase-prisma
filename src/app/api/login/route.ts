import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { signIn } from '../../../utils/auth';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
  console.log('-------------->', req)
  const { email, password } = await req.json();
    const user = await signIn(email, password)
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
