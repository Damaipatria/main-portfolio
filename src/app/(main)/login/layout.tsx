import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Halaman login portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
