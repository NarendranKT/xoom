"use client";
import React from "react";
import {Sheet, SheetClose, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import {sidebarLinks} from "@/constants";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const MobileNav = () => {
   const pathName = usePathname();
   return (
      <section className=" w-full max-w-[264px]">
         <Sheet>
            <SheetTrigger>
               <Image src={"/icons/hamburger.svg"} alt="Xoom Menu" height={36} width={36} className=" cursor-pointer sm:hidden" />
            </SheetTrigger>
            <SheetContent side={"left"} className=" border-none bg-dark-1">
               <Link href="/" className="flex items-center gap-1">
                  <Image src={"/icons/logo.svg"} alt="Logo" height={32} width={32} className=" max-sm:size-10" />
                  <p className="text-white text-[26px] font-extrabold max-sm:hidden">Xoom</p>
               </Link>
               <div className="flex h-[clac(100vh-72px)] flex-col justify-between overflow-y-auto mt-10">
                  <SheetClose asChild>
                     <section className="flex h-full flex-col gap-6 text-white">
                        {sidebarLinks.map((link) => {
                           const isActive = pathName.startsWith(link.route) || pathName === link.route;

                           return (
                              <Link
                                 href={link.route}
                                 key={link.label}
                                 className={cn("flex gap-4 items-center p-4 rounded-lg justify-start", {
                                    "bg-blue-1": isActive,
                                 })}
                              >
                                 <Image src={link.imgUrl} alt={link.label} width={24} height={24} />
                                 <p className="text-lg font-semibold">{link.label}</p>
                              </Link>
                           );
                        })}
                     </section>
                  </SheetClose>
               </div>
            </SheetContent>
         </Sheet>
      </section>
   );
};

export default MobileNav;
