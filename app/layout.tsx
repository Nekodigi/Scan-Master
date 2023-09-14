import { StoreVitalProvider } from "@/components/contexts/storeVital";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "./themeRegistory";
import { SnackbarProvider } from "notistack";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "S COFFEE",
  description: "STORES Techcamp課題",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ThemeRegistry options={{ key: "mui" }}>
          <StoreVitalProvider>{children}</StoreVitalProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
