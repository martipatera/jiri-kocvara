
'use client';

import { Button, Navbar } from "flowbite-react";
import Link from "next/link";
import LogoJirka from "./navbarLogoJirkaKocvara.png"
import LogoJiri from "./navbarLogoJiriKocvara.png"
import LogoJK from "./navbarLogoJK.png"
import Image from "next/image";
import Logout from "./Logout"
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";


export function CustomNavbar() {

  const { email, isLogged, role } = useSelector(state =>state.login) //takto muzu cist z reduceru hodnotu kterou chci
  const pathname = usePathname()  


  return (
    <div className="">
      <Navbar fluid rounded className="fixed w-screen z-50">
        <Navbar.Brand href="/">
        
          <Image src={LogoJiri}
              height={125}
              width={185}
              alt="Logo stránky Jiřího Kočvary" 
              priority
              className="sm:ml-10 ml-0 md:ml-0 my-5 hidden lg:block"
          />

          <Image src={LogoJK}
              height={50}
              width={50}
              alt="Logo stránky Jiřího Kočvary" 
              priority
              className="sm:ml-10 ml-0 md:ml-0 my-5 lg:hidden"
          />
            
      </Navbar.Brand>
      
        <div className="flex items-center justify-center mt-0  mx-0 sm:mr-10 md:order-2 md:mt-2 lg:mt-0">
          {!isLogged?
          <div>
            <button className="bg-orange border-2 rounded-full p-1 xl:p-3 whitespace-nowrap text-white hover:brightness-110 hover:scale-105 transition-all"><Link href="/register">Registrovat se</Link></button>
            <button className="bg-orange border-2 rounded-full p-1 xl:p-3 text-white hover:brightness-110 hover:scale-105 transition-all"><Link href="/login">Přihlásit se</Link></button>
          </div>
          :
          <div>
            <Logout></Logout>
          </div>
          }
        <Navbar.Toggle />

        </div>

            
        
        <Navbar.Collapse>
          <Link  className={`text-base lg:text-xl focus:text-orange active:text-orange hover:text-orange hover:scale-105 transition-all ${pathname === "/" ? "text-orange" : ""}`} href="/">Domů</Link>
          <Link  className={`text-base lg:text-xl focus:text-orange active:text-orange hover:text-orange hover:scale-105 transition-all ${pathname === "/sluzby" ? "text-orange" : ""}`} href="/sluzby">Služby</Link>
          <Link  className={`text-base lg:text-xl focus:text-orange active:text-orange hover:text-orange hover:scale-105 transition-all ${pathname === "/profil" ? "text-orange" : ""}`} href="/profil">Profil</Link>
          <Link  className={`text-base lg:text-xl focus:text-orange active:text-orange hover:text-orange hover:scale-105 transition-all ${pathname === "/reference" ? "text-orange" : ""}`} href="/reference">Reference</Link>
          <Link  className={`text-base lg:text-xl focus:text-orange active:text-orange hover:text-orange hover:scale-105 transition-all ${pathname === "/cenik" ? "text-orange" : ""}`} href="/cenik">Ceník</Link>
          <Link  className={`text-base lg:text-xl focus:text-orange active:text-orange hover:text-orange hover:scale-105 transition-all ${pathname === "/kontakt" ? "text-orange" : ""}`} href="/kontakt">Kontakt</Link>
          <Link  className={`text-base lg:text-xl focus:text-orange active:text-orange hover:text-orange hover:scale-105 transition-all ${pathname === "/konzultace" ? "text-orange" : ""}`} href="/konzultace">Konzultace</Link>
            {
              isLogged && (role === "admin" || role === "trenér")? 
                <Link  className="text-base lg:text-xl focus:text-orange hover:text-orange hover:scale-105 transition-all" href="/moji_klienti">Moji klienti</Link>
              : 
                <p></p>
            }
            {
              isLogged && (role === "klient")? 
                <Link  className="text-base lg:text-xl focus:text-orange hover:text-orange hover:scale-105 transition-all" href="/muj_trenink">Můj trénink</Link>
              : 
                <p></p>
            }
        </Navbar.Collapse>
      </Navbar>
    </div>
    
  );
}
