import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Toaster } from "sonner";
import { Providers } from "@/components/Providers";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Agent Riona | Instagram + X Automation",
  description:
    "Agent Riona automates Instagram and X with AI-generated content, scheduling, and engagement workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} font-sora antialiased`}>
        <Providers>
          {children}
          <Toaster
            position="top-right"
            richColors
            theme="dark"
            toastOptions={{
              style: {
                background: "#12121A",
                border: "1px solid #2A2A35",
                color: "#F5F5F7",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
