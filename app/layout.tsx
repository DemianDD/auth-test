'use client'

import './globals.css'
import type { Metadata } from 'next'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { PostProvider } from '@/contexts/post_context';
import LoginForm from '@/components/login_form';
import { useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { AuthProvider } from '@/contexts/auth_context';

export const metadata: Metadata = {
  title: 'Auth app test',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [session, setSession] = useState<Session | null>(null);
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <PostProvider>
            {session === null ? 
            <LoginForm setSession={setSession}/> :
            children}
          </PostProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
