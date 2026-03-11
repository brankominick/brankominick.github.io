import "@/app/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Brian Kominick",
  description: "Exploring code, cognition, and the space between.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100">
        <Navbar />
        <main className="pt-14">
            {children}
        </main>
        </body>
    </html>
  );
}
