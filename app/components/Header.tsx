import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white py-4">
      <nav className="flex justify-center space-x-8">
        <Link href="/" className="hover:underline">
          Accueil
        </Link>
        <Link href="/about" className="hover:underline">
          À propos
        </Link>
        <Link href="/services" className="hover:underline">
          Services
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>
    </header>
  );
}