import { Metadata } from "next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark as fasXmark } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeftLong as fasArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
  description: "Halaman yang Anda cari tidak tersedia atau telah dipindahkan.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <header className="px-24 font-nunito">
        <h1 className="h-14 px-6 text-gray-950 text-xl font-bold leading-14 border-b border-gray-300">
          DamaiPs
        </h1>
      </header>
      <main className="flex justify-center items-center h-[calc(100vh-3.75rem)] p-10 font-nunito text-gray-950">
        <div className="w-6/12">
          <div className="relative h-16 border border-gray-950 rounded-t-lg">
            <div className="absolute -right-1 -top-1 flex justify-center items-center w-19 h-19 bg-white border-4 border-gray-950 outline-8 outline-white">
              <span>
                <FontAwesomeIcon icon={fasXmark} size="4x" />
              </span>
            </div>
            <div className="w-1/2 flex gap-x-2 p-2">
              <div className="size-4 bg-red-500 border border-red-900 rounded-full"></div>
              <div className="size-4 bg-yellow-500 border border-yellow-900 rounded-full"></div>
              <div className="w-12 h-4 bg-green-500 border border-green-900 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center h-80 border-b border-x border-gray-950 rounded-b-lg">
            <p className="font-extrabold font-nunito-sans text-9xl">404</p>
            <p className="font-medium text-xl">Halaman Tidak Ditemukan</p>
            <div className="mt-10">
              <Link href={"/"}>
                <button className="flex items-center gap-x-3 py-1.5 px-10 text-base font-bold border shadow-[0px_0px_0px_0px] transition-all duration-200 hover:shadow-[4px_4px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-1">
                  <span>
                    <FontAwesomeIcon icon={fasArrowLeftLong} size="lg" />
                  </span>
                  <span>Beranda</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
