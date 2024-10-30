
'use client';

import { Button, Navbar } from "flowbite-react";
import Link from "next/link";
import Logo from "./logoWhite.png"
import Image from "next/image";
import Logout from "./Logout"
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";


export function CustomNavbar() {

  const { email, isLogged, role } = useSelector(state =>state.login) //takto muzu cist z reduceru hodnotu kterou chci
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll); // 7. Přidání event listeneru, který zavolá handleScroll při scrollování

    return () => {
      window.removeEventListener('scroll', handleScroll); // 8. Odstraní event listener při unmountování komponenty, aby se předešlo únikům paměti
    };  }, []);//Prázdné pole závislostí znamená, že effect běží pouze při mountování komponenty

  


  return (
    <div >
      <Navbar fluid rounded className={`fixed w-screen z-50 bg-gray-500 rounded-none  ${isScrolled? "bg-opacity-75 " : "bg-opacity-100"}`}>
        <Navbar.Brand  href="/">
        
          <Image src={Logo}
              height={65}
              width={65}
              alt="Logo stránky Jiřího Kočvary" 
              priority
              className="sm:ml-10 ml-0 md:ml-0 lg:ml-0 hidden lg:block"
          />

          <Image src={Logo}
              height={50}
              width={50}
              alt="Logo stránky Jiřího Kočvary" 
              priority
              className="sm:ml-10 ml-0 md:ml-0 lg:hidden"
          />
            
      </Navbar.Brand >
      
        <div className="flex mt-0  mx-0 sm:mr-0 md:order-2 md:mt-2 lg:mt-0">
          {!isLogged?
          <div className="flex flex-col md:flex-row lg:flex-col gap-1">
            <button className=" border-2 rounded-full p-1 xl:p-1 whitespace-nowrap text-white hover:brightness-110 hover:scale-105 transition-all"><Link href="/register">Registrovat se</Link></button>
            <button className=" border-2 rounded-full p-1 xl:p-1 text-white hover:brightness-110 hover:scale-105 transition-all"><Link href="/login">Přihlásit se</Link></button>
          </div>
          :
          <div>
            <Logout></Logout>
          </div>
          }
        <Navbar.Toggle className="bg-white" />

        </div>

            
        
        <Navbar.Collapse className="">
          <Link  className={`text-base lg:text-xl text-white font-semibold focus:text-white  active:text-white  hover:text-white hover:scale-105 transition-all ${pathname === "/" ? "text-white border-2 rounded-full px-2" : ""}`} href="/">Domů</Link>
          <Link  className={`text-base lg:text-xl text-white font-semibold focus:text-orange  active:text-orange hover:text-orange hover:scale-105 transition-all ${pathname === "/sluzby" ? "text-orange border-2 rounded-full px-2" : ""}`} href="/sluzby">Služby</Link>
          <Link  className={`text-base lg:text-xl text-white font-semibold focus:text-orange  active:text-orange hover:text-orange hover:scale-105 transition-all ${pathname === "/profil" ? "text-orange border-2 rounded-full px-2" : ""}`} href="/profil">Profil</Link>
          <Link  className={`text-base lg:text-xl text-white font-semibold focus:text-orange  active:text-orange hover:text-orange hover:scale-105 transition-all ${pathname === "/reference" ? "text-orange border-2 rounded-full px-2" : ""}`} href="/reference">Reference</Link>
          <Link  className={`text-base lg:text-xl text-white font-semibold focus:text-orange  active:text-orange hover:text-orange hover:scale-105 transition-all ${pathname === "/cenik" ? "text-orange border-2 rounded-full px-2" : ""}`} href="/cenik">Ceník</Link>
          <Link  className={`text-base lg:text-xl text-white font-semibold focus:text-orange  active:text-orange hover:text-orange hover:scale-105 transition-all ${pathname === "/kontakt" ? "text-orange border-2 rounded-full px-2" : ""}`} href="/kontakt">Kontakt</Link>
          <Link  className={`text-base lg:text-xl text-white font-semibold focus:text-orange  active:text-orange hover:text-orange hover:scale-105 transition-all ${pathname === "/konzultace" ? "text-orange border-2 rounded-full px-2" : ""}`} href="/konzultace">Konzultace</Link>
            {
              isLogged && (role === "admin" || role === "trenér")? 
                <Link  className={`text-base lg:text-xl text-white font-semibold focus:text-orange  active:text-orange hover:text-orange hover:scale-105 transition-all ${pathname === "/moji_klienti" ? "text-orange border-2 rounded-full px-2" : ""}`} href="/moji_klienti">Moji klienti</Link>
              : 
                <p></p>
            }
            {
              isLogged && (role === "klient")? 
                <Link  className={`text-base lg:text-xl text-white font-semibold focus:text-orange  active:text-orange hover:text-orange hover:scale-105 transition-all ${pathname === "/muj_trenink" ? "text-orange border-2 rounded-full px-2" : ""}`} href="/muj_trenink">Můj trénink</Link>
              : 
                <p></p>
            }
        </Navbar.Collapse>
      </Navbar >
    </div>
    
  );
}
