"use client";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope as farEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGlobe as fasGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCode as fasCode } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare as fasArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { Timeline, TimelineData } from "./_components/ui";
import { useEffect, useState } from "react";
import { AboutMeSection, HeroSection } from "./_types";

const experiences: TimelineData[] = [
  {
    id: 1,
    period: "Maret 2024 - Sekarang",
    role: "Front-End Developer",
    company: "Rumah Sakit Panti Rapih Yogyakarta",
    description: [
      {
        id: 1,
        desc: "Mengembangkan dan memelihara aplikasi web responsif menggunakan React JS, Bootstrap, dan komponen UI internal khusus.",
      },
      {
        id: 2,
        desc: "Bekerja sama dengan pengembang back-end untuk mengintegrasikan RESTful API dan memastikan komunikasi ata berjalan lancar.",
      },
      {
        id: 3,
        desc: "Menggunakan PHP CodeIgniter 3 untuk logika server-side, pemrosesan data, dan pemeliharaan sistem.",
      },
      {
        id: 4,
        desc: "Melakukan debugging, pemecahan masalah, dan penyelesaian isu untuk meningkatkan performa aplikasi.",
      },
      {
        id: 5,
        desc: "Mengoptimalkan aplikasi agar cepat, skalabel, dan kompatibel lintas browser.",
      },
      {
        id: 6,
        desc: "Melakukan pembaruan dan pemeliharaan aplikasi web secara rutin untuk memastikan kompatibilitas dengan standar web terbaru.",
      },
      {
        id: 7,
        desc: "Menyampaikan kemajuan pengembangan dan hasil kerja secara langsung kepada pemangku kepentingan dan pengguna.",
      },
    ],
  },
  {
    id: 2,
    period: "Maret 2024 - Sekarang",
    role: "Front-End Developer",
    company: "Rumah Sakit Panti Rapih Yogyakarta",
    description: [
      {
        id: 1,
        desc: "Mengembangkan dan memelihara aplikasi web responsif menggunakan React JS, Bootstrap, dan komponen UI internal khusus.",
      },
      {
        id: 2,
        desc: "Bekerja sama dengan pengembang back-end untuk mengintegrasikan RESTful API dan memastikan komunikasi ata berjalan lancar.",
      },
      {
        id: 3,
        desc: "Menggunakan PHP CodeIgniter 3 untuk logika server-side, pemrosesan data, dan pemeliharaan sistem.",
      },
      {
        id: 4,
        desc: "Melakukan debugging, pemecahan masalah, dan penyelesaian isu untuk meningkatkan performa aplikasi.",
      },
      {
        id: 5,
        desc: "Mengoptimalkan aplikasi agar cepat, skalabel, dan kompatibel lintas browser.",
      },
      {
        id: 6,
        desc: "Melakukan pembaruan dan pemeliharaan aplikasi web secara rutin untuk memastikan kompatibilitas dengan standar web terbaru.",
      },
      {
        id: 7,
        desc: "Menyampaikan kemajuan pengembangan dan hasil kerja secara langsung kepada pemangku kepentingan dan pengguna.",
      },
    ],
  },
];

export default function Page() {
  const [hero, setHero] = useState<HeroSection | undefined>(undefined);
  const [aboutMe, setAboutMe] = useState<AboutMeSection | undefined>(undefined);

  useEffect(() => {
    fetch("/api/portfolio/hero")
      .then((res) => res.json())
      .then((result) => setHero(result?.data));
  }, []);

  useEffect(() => {
    fetch("/api/portfolio/about-me")
      .then((res) => res.json())
      .then((result) => setAboutMe(result?.data));
  }, []);

  return (
    <>
      {/* Hero section */}
      <section className="flex items-center h-[calc(100vh-3.75rem)] px-28 font-quicksand text-gray-950">
        <div className="basis-1/2 flex flex-wrap gap-y-2">
          <div className="basis-1/5"></div>
          <div className="basis-4/5">
            <h1 className="text-gray-500 font-medium">{hero?.title}</h1>
          </div>
          <div className="basis-1/5"></div>
          <div className="basis-4/5">
            <h2 className="text-5xl font-nunito-sans font-bold uppercase">
              {hero?.subTitle}
            </h2>
          </div>
          <div className="basis-1/5 flex flex-col items-center gap-y-6 ">
            <a className="block size-4">
              <i>
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-gray-500"
                />
              </i>
            </a>
            <a className="block size-4">
              <i>
                <FontAwesomeIcon icon={faGithub} className="text-gray-500" />
              </i>
            </a>
            <a className="block size-4">
              <i>
                <FontAwesomeIcon icon={fasGlobe} />
              </i>
            </a>
          </div>
          <div className="basis-4/5">
            <p className="text-justify">{hero?.description}</p>
          </div>
          <div className="basis-1/5"></div>
          <div className="basis-3/5 flex items-start gap-x-3 pt-16">
            <p className="text-xl font-bold underline">Kontak Saya</p>
            <i className="inline-block size-6">
              <FontAwesomeIcon icon={farEnvelope} />
            </i>
          </div>
        </div>
        <div className="basis-1/2 flex justify-center">
          <div className="blob size-[18.25rem]- flex justify-center items-center border border-gray-900">
            <figure className="blob size-72 overflow-hidden">
              <Image
                src="https://picsum.photos/id/77/300/300"
                alt="photo"
                width={300}
                height={300}
              />
            </figure>
          </div>
        </div>
      </section>
      {/* Description section */}
      <section className="flex items-center h-screen px-24 font-quicksand text-gray-950">
        <div className="basis-2/5">
          <div className="border rounded-sm overflow-hidden">
            <figure className="relative h-72 shadow-gray-400 overflow-hidden">
              <Image
                priority
                src="https://picsum.photos/id/77/300/300"
                alt="photo"
                fill={true}
                sizes="(min-width: 1024px) 90vw, 100vw"
              />
            </figure>
          </div>
        </div>
        <div className="basis-3/5 ps-7">
          <h1 className="mb-5 text-3xl font-bold font-nunito-sans">
            {aboutMe?.title}
          </h1>
          <p className="text-justify">{aboutMe?.text}</p>
          <div className="flex gap-6 px-7 items-center mt-7">
            <p className="text-lg text-center font-bold">Tech Stack</p>
            <div className="h-14 mx-5 border border-gray-400 rounded-full"></div>
            <figure className="basis-8 relative h-8">
              <Image
                src={"/image/tech/css_logo.svg"}
                alt="React JS"
                fill={true}
                sizes="70vw"
              />
            </figure>
            <figure className="basis-8 relative h-8">
              <Image
                src={"/image/tech/react_logo.svg"}
                alt="React JS"
                fill={true}
                sizes="70vw"
              />
            </figure>
            <figure className="basis-8 relative h-8">
              <Image
                src={"/image/tech/laravel_logo.svg"}
                alt="React JS"
                fill={true}
                sizes="70vw"
              />
            </figure>
          </div>
        </div>
      </section>
      {/* Experience section */}
      <section className="min-h-screen px-24 font-quicksand text-gray-950">
        <h1 className="mb-2 text-3xl text-center font-bold font-nunito-sans">
          Pengalaman
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          cupiditate autem corporis, esse ullam ipsum obcaecati ea libero.
        </p>
        <Timeline data={experiences} />
      </section>
      {/* Portfolio section*/}
      <section className="flex flex-col justify-center h-screen px-24 font-quicksand text-gray-950">
        <div className="mb-10">
          <h1 className="mb-2 text-3xl text-center font-bold font-nunito-sans">
            Portofolio
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            cupiditate autem corporis, <br /> esse ullam ipsum obcaecati ea
            libero.
          </p>
        </div>
        <div className="flex gap-5">
          <div className="basis-1/3 border rounded overflow-hidden">
            <figure className="relative h-48 group overflow-hidden">
              <Image
                priority
                src="https://picsum.photos/id/77/300/300"
                alt="photo"
                fill={true}
                sizes="(min-width: 1024px) 90vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <figcaption
                className="absolute inset-0 flex justify-center items-center gap-10 bg-black/40 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300"
              >
                <span className="flex items-center gap-2 text-white font-semibold cursor-pointer hover-underline">
                  <p className="text-lg">Kode</p>
                  <i>
                    <FontAwesomeIcon icon={fasCode} className="text-base" />
                  </i>
                </span>
                <span className="flex items-center gap-2 text-white font-semibold cursor-pointer hover-underline">
                  <p className="text-lg">Demo</p>
                  <i>
                    <FontAwesomeIcon
                      icon={fasArrowUpRightFromSquare}
                      className="text-base"
                    />
                  </i>
                </span>
              </figcaption>
            </figure>
            <div className="p-3">
              <h2 className="text-lg font-semibold">Website 1</h2>
              <p className="text-justify leading-[22px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto cupiditate.
              </p>
            </div>
          </div>
          <div className="basis-1/3 h-36 border"></div>
          <div className="basis-1/3 h-36 border"></div>
        </div>
      </section>
    </>
  );
}
