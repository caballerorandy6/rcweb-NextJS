import Link from "next/link";
import Image from "next/image";

const Logo = ({ children }) => {
  return (
    <Link
      href="/"
      className="font-sans text-5xl font-bold text-gurkha/90 hover:text-gold/80 transition-colors"
    >
      <Image
        src="/logo.webp"
        alt="Logo"
        width={150}
        height={150}
        priority={true}
        quality={100}
        className="h-auto cursor-pointer object-contain w-36"
      />
    </Link>
  );
};

export default Logo;
