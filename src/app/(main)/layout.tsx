import { Metadata } from "next";
import { Footer, Header } from "./_components/layout";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "My Portofolio",
  description: "Menampilkan portofolio saya",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";

  if (pathname?.startsWith("/admin") || pathname?.startsWith("/login")) {
    return <>{children}</>;
  } else {
    return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    );
  }
}
