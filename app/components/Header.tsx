import Link from "next/link";

const Header = () => {
  return (
    <div className={`text-white w-full`}>
      <div className="flex justify-between items-center w-full">
        <h1 className="font-bold text-2xl md:text-3xl">
          DRIVE
        </h1>

        <nav className="text-sm md:text-base flex gap-2 md:gap-4">
          <Link href="/">Keşfet</Link>
          <Link href="/orders">Siparişlerim</Link>
          <Link href="/">Hakkımızda</Link>
          <Link
            className="max-md:hidden"
            href="/"
          >
            Fiyatlandırma
          </Link>
        </nav>

        <div className="flex gap-5">
          <button className="max-md:hidden">
            İletişim
          </button>
          <button className="bg-white text-sm text-black rounded-full px-5 py-2 text-nowrap transition hover:bg-gray-100">
            Kaydol
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
