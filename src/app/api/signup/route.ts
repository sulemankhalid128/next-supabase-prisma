import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient,  } from '@prisma/client';
import { signUp } from '../../../utils/auth';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log('-------> data', data)
    const { email, password, confirmPassword,age, ...result } = data;
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if(!existingUser){
    //   let user = await signUp(email,password)
    //   if(user){
    // const newUser = await prisma.user.create({
    //   data: {
    //     supabaseId: "940ffbd9-ad5a-4d24-b0e8-b03c0888cdd7", // Replace with actual supabase ID if necessary
    //     ...result,
    //     email,
    //     age: parseInt(age)
    //   },
    // });
    return NextResponse.json({user:'user'}, { status: 201 });
  }
  return NextResponse.json({error:`Email ${existingUser.email} already exist!`},{status:402})

  
  } catch (error:any) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};
