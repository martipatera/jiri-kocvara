import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider  from "./store/provider"; //import provideru ktery jsem si musel vytvorit ja sam, dole tim pak obalim to co chci aby videlo moje aktualni hodnoty


//components
import {CustomNavbar} from "./components/Navbar";
import Footer from "./components/Footer";
import {Navbar} from "./components/CustomNavbar";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jiří Kočvara | Certifikovaný Fitness trenér",
  description: "Jiří Kočvara je certifikovaný fitness trenér a bodybuilder s dlouholetou praxí. Nabízím osobní tréninky, výživové poradenství a skupinové lekce. Najděte plán, který vám vyhovuje.",
  icons:{
    icon: "/favicon.ico"
  }
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      
      <body className={inter.className}>
      <ReduxProvider>   
        <Navbar></Navbar>
        {children}
      </ReduxProvider>  
      <Footer></Footer>
      </body>
    </html>
  );
}