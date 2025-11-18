import { Metadata } from "next";
import { Footer, Header } from "./_components/layout";

export const metadata: Metadata = {
  title: "My Portofolio",
  description: "Menampilkan portofolio saya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
