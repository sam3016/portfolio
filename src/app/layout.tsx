import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Sam H.'s portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
      >
        <body className="min-h-screen">
          <Header />
          {children}
        </body>
        <Footer />
      </ThemeProvider>
    </html>
  );
}
