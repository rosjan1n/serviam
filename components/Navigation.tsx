import Link from "next/link";

const Navigation = () => {
  return (
    <header className="flex items-center w-full border-b border-gray-200 h-16">
      <div className="max-w-screen-xl w-full mx-2 xl:mx-auto flex items-center justify-between">
        <Link href={"/"} className="font-bold text-2xl text-amber-400">
          SERVIAM
        </Link>
        <div className="flex gap-5">
          <Link
            href={"/about"}
            className="hover:text-amber-400 hover:underline hover:underline-offset-4"
          >
            O firmie
          </Link>
          <Link
            href={"/services"}
            className="hover:text-amber-400 hover:underline hover:underline-offset-4"
          >
            Zakres usług
          </Link>
          <Link
            href={"/realizations"}
            className="hover:text-amber-400 hover:underline hover:underline-offset-4"
          >
            Realizacje
          </Link>
          <Link
            href={"/gallery"}
            className="hover:text-amber-400 hover:underline hover:underline-offset-4"
          >
            Galeria
          </Link>
          <Link
            href={"/contact"}
            className="hover:text-amber-400 hover:underline hover:underline-offset-4"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
