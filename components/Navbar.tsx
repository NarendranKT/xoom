import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
   return (
      <nav className="bg-dark-1 h-[72px] text-white flex-between fixed w-full z-50 px-6 py-4 lg:px-10">
         <Link href="/" className="flex items-center gap-1">
            <Image src={"/icons/logo.svg"} alt="Logo" height={32} width={32} className=" max-sm:size-10" />
            <p className="text-white text-[26px] font-extrabold max-sm:hidden">Xoom</p>
         </Link>
         <div className="flex-between gap-5">
            {/* Clerk Bar */}
            <MobileNav />
         </div>
      </nav>
   );
};

export default Navbar;
