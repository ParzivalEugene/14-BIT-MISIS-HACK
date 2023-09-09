import dotenv from "dotenv";

dotenv.config();
export const DATABASE_URL = process.env.DATABASE_URL;
export const DIRECT_URL = process.env.DIRECT_URL;
export const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;
export const SUPABASE_URL = process.env.SUPABASE_URL;
export const SUPABASE_PUBLIC_KEY = process.env.SUPABASE_PUBLIC_KEY;
export const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE;
export const SUPABASE_TOKEN = process.env.SUPABASE_TOKEN;
