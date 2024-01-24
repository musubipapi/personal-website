import type { Metadata } from "next";
import { Abhaya_Libre } from "next/font/google";
import "./globals.css";

const abhayaLibre = Abhaya_Libre({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-abhaya-serif",
});

export const metadata: Metadata = {
  title: "Andy Gao",
  description:
    "A Personal Website for Lord Andy Gao, First of His Name, King of the Cows, and Protector of the Realm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${abhayaLibre.variable}`}>
      <body className="dark:bg-[#282C34]">{children}</body>
    </html>
  );
}
