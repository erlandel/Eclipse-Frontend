"use client"; // Solo este componente es de cliente

import { usePathname } from 'next/navigation';
import { Banner } from "@/components/my-components/publicity/Banner";

import { Footer } from "@/components/ui/Footer";
import Navbar_Main from '@/components/ui/Navbar';


export default function ClientOnlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Obtener la ruta actual

  const excludedRoutes = ['/login', '/confirmPassword', '/recoveryPassword', '/register', '/verifyCode','/addTicket','/updateTicket','/adminPanel']; // Rutas donde no quieres mostrar Banner, Navbar y Footer
  const shouldRenderLayout = !excludedRoutes.includes(pathname); // Verificar si se deben renderizar los componentes

  return (
    <div>      
      {shouldRenderLayout && <Banner />}
      {shouldRenderLayout && <Navbar_Main />}
      {children}
      {shouldRenderLayout && <Footer />}  
     </div>
  );
}
