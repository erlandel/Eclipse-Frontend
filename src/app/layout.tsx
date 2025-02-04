import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'animate.css'; 
import 'swiper/css';
import 'react-toastify/dist/ReactToastify.css';
import { Providers } from "./provider";


import ClientOnlyLayout from "./clientLayout";
import ToastContainerMessage from "@/messages/ToastContainerMessage";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Equipo Eclipse",
  description: "Aplicación web para el equipo Eclipse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">

      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>    
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Providers>
          <ClientOnlyLayout>
            {children}
          </ClientOnlyLayout>
        </Providers>
        <ToastContainerMessage />

      </body>
    </html>
  );
}
