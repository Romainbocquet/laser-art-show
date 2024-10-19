import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 mt-8 flex flex-col items-center">
      <p>&copy; 2024 Laser Art Show. Tous droits réservés.</p>
      <Link href="/mentions-legales" className="hover:underline mt-2">
        Mentions légales
      </Link>
    </footer>
  );
}