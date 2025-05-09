import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {Toaster} from 'sonner'

import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sync Life",
  description: "Plataforma integrada que documenta e analisa seus dados de treino, alimentação, humor, força, estresse mental e qualidade do sono para promover um bem-estar holístico e equilibrado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="dark">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Toaster
        position="bottom-right"
        toastOptions={{ 
          style:{
            backgroundColor: "#f1f1f1",
            color: "#131313",
            borderColor:"rgba(255,255,255, 0.5)"
          }
        }}
        />
           {children}

      </body>
    </html>
  );
}
