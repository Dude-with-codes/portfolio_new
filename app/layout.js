import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Sami's Portfolio",
  description:
    "Hello, World! This is my Portfolio site. Everything related to me, my career, and my education is in here. Let's get connected if my portfolio intrests you!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
