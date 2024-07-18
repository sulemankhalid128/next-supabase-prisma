// utils/auth.ts
import  supabase  from './supbaseClient';
import { User, Session, AuthApiError } from '@supabase/supabase-js';

export const signUp = async (email: string, password: string): Promise<{ user: User | null, session: Session | null, error: AuthApiError | null }> => {
  const data:any = await supabase.auth.signUp({ email, password });
  debugger
  return { user:data?.user, session:data?.session, error:data?.error };
};

export const signIn = async (email: string, password: string): Promise<{data:any, error: any | null }> => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return  {data, error};
};

export const signOut = async (): Promise<{ error: any | null }> => {
  const { error } = await supabase.auth.signOut();
  return { error };
};