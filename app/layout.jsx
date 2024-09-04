import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider  from "./store/provider"; //import provideru ktery jsem si musel vytvorit ja sam, dole tim pak obalim to co chci aby videlo moje aktualni hodnoty


//components
import {CustomNavbar} from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jiří Kočvara | Fitness trenér",
  description: "Fitness trenér",
  icons:{
    icon: "/favicon1.png"
  }
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      
      <body className={inter.className}>
      <ReduxProvider>   
        <CustomNavbar></CustomNavbar>
        {children}
      </ReduxProvider>  
      <Footer></Footer>
      </body>
    </html>
  );
}
