import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv';

dotenv.config();

const SUPABASE_URL = 'https://jlobiuwqxfgpksllrjvs.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impsb2JpdXdxeGZncGtzbGxyanZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM2NDc2MDgsImV4cCI6MjAwOTIyMzYwOH0.WYpsnhngo04LQAg2QmrkZR3Q7QuqOcCys_dCiNSt5sE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
