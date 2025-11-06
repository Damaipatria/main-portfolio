export const Header = () => {
  return (
    <>
      <header className="px-24 font-nunito">
        <nav
          aria-label="Header navigation"
          className="flex justify-between items-center h-14 px-6 border-b border-gray-300"
        >
          <h1 className="text-gray-950 text-xl font-bold">DamaiPs</h1>
          <ul className="flex gap-x-7 text-gray-700">
            <li>
              <a
                href="#beranda"
                className="hover-underline hover:text-gray-950"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#tentang"
                className="hover-underline hover:text-gray-950"
              >
                Tentang Saya
              </a>
            </li>
            <li>
              <a
                href="#portofolio"
                className="hover-underline hover:text-gray-950"
              >
                Portofolio
              </a>
            </li>
            <li>
              <a href="#kontak" className="hover-underline hover:text-gray-950">
                Kontak Saya
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
