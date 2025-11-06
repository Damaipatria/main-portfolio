import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope as farEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp as fasArrowUp } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <>
      <footer className="py-3 px-7 font-nunito bg-gray-50">
        <div className="flex items-center justify-between px-10">
          <p className="basis-1/3 text-lg text-gray-950 font-bold">DamaiPs</p>
          <nav aria-label="Footer Navigation" className="basis-1/3">
            <ul className="flex justify-center-safe space-x-6 text-[15px] text-gray-800 font-normal">
              <li>
                <a href="#beranda" className="hover:text-black">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-black">
                  Tentang Saya
                </a>
              </li>
              <li>
                <a href="#portofolio" className="hover:text-black">
                  Portofolio
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-black">
                  Kontak Saya
                </a>
              </li>
            </ul>
          </nav>
          <div className="basis-1/3"></div>
          {/* <a
            // href="#top"
            className="basis-1/3 flex justify-end items-center gap-1 text-base text-gray-950 font-bold underline underline-offset-2 decoration-2"
          >
            <p>Atas&nbsp;</p>
            <i>
              <FontAwesomeIcon icon={fasArrowUp} />
            </i>
          </a> */}
        </div>
        <hr className="my-3 text-gray-300" />
        <section
          aria-label="Social Links"
          className="flex justify-center space-x-8 text-gray-950"
        >
          <a href="mailto:damai@example.com" aria-label="Email">
            <i>
              <FontAwesomeIcon icon={farEnvelope} />
            </i>
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </i>
          </a>
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i>
              <FontAwesomeIcon icon={faGithub} />
            </i>
          </a>
        </section>
      </footer>
    </>
  );
};
