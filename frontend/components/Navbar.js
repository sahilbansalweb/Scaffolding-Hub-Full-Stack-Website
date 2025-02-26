import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">Scaffolding Hub</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about" className="hover:text-[#FFDE57] font-semibold">About Us</Link>  {/* ✅ Added this */}
        <Link href="/gallery" className="hover:text-[#FFDE57]">Gallery</Link>
        <Link href="/products">Products</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}


