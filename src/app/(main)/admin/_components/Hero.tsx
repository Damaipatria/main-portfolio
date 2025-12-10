import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope as farEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGlobe as fasGlobe } from "@fortawesome/free-solid-svg-icons";
import { Skeleton } from "@/components";
import { Suspense } from "react";
import { getHero } from "../actions";

export const Hero = () => {
  return (
    <>
      <section className="flex items-center h-[calc(100vh-3.75rem)] px-28 font-quicksand text-gray-950">
        <Suspense fallback={<HeroLoading />}>
          <HeroContent />
        </Suspense>
      </section>
    </>
  );
};

const HeroContent = async () => {
  const hero = await getHero();

  return (
    <>
      <div className="basis-1/2 flex flex-wrap gap-y-2">
        <div className="basis-1/5"></div>
        <div className="basis-4/5">
          <h1 className="text-gray-500 font-medium">{hero.data?.title}</h1>
        </div>
        <div className="basis-1/5"></div>
        <div className="basis-4/5">
          <h2 className="text-5xl font-nunito-sans font-bold uppercase">
            {hero.data?.subTitle}
          </h2>
        </div>
        <div className="basis-1/5 flex flex-col items-center gap-y-6 ">
          <a className="block size-4">
            <i>
              <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-500" />
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
          <p className="text-justify">{hero.data?.description}</p>
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
    </>
  );
};

const HeroLoading = () => {
  return (
    <>
      <div className="basis-1/2 space-y-2.5">
        <Skeleton variant="text" className="w-1/3! h-4! mb-3 rounded-xl!" />
        <Skeleton variant="text" count={3} />
        <Skeleton variant="text" className="w-3/4!" />
        <Skeleton variant="text" className="w-18! h-6! mt-12 rounded-xl!" />
      </div>
    </>
  );
};
