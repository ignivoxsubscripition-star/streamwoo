import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Maintenance from "@/components/layout/Maintenance";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Streamwoo | Premium OTT Streaming",
  description: "Watch the latest movies, web series, and exclusive originals on Streamwoo.",
  icons: {
    icon: "/thumbnails/logo.jpeg",
    shortcut: "/thumbnails/logo.jpeg",
    apple: "/thumbnails/logo.jpeg",
  }
};

const isMaintenanceMode = false; // Maintenance mode switch

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <AuthProvider>
          {isMaintenanceMode ? <Maintenance /> : children}
        </AuthProvider>
      </body>
    </html>
  );
}
