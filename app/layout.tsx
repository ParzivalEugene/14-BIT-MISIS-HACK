import Provider from "@/components/Provider";
import AuthStatus from "@/components/auth-status";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const title = "MISIS CONNECT";
const description = "MISIS CONNECT";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <Provider>
      <html lang="en" className="dark font-steppe bg-[#0B011B]">
        <body>
          <Toaster />
          <Suspense fallback="Loading...">
            <AuthStatus />
          </Suspense>
          {children}
        </body>
      </html>
    </Provider>
  );
}
