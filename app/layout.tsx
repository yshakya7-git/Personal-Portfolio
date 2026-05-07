import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <div className="min-h-screen w-full flex justify-center">
          <div className="w-full max-w-9xl ">
            <Navbar />
            {children}
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  );
}
