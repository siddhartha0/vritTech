"use client";

import { modalContext } from "@/app/page";
import { NavbarMidData, NavbarRightData } from "@/constant/nav-bar-data";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export const Navbar = () => {
  const context = useContext(modalContext);

  return (
    <main className="flex p-4 place-items-center justify-between ">
      <Image src="/companyLogo.svg" alt="companyLogo" height={20} width={110} />
      <div className="flex justify-between w-[30%] capitalize">
        {NavbarMidData.map((nav) => (
          <Link href={nav.path} key={nav.id}>
            {nav.title}
          </Link>
        ))}
      </div>
      <div className="flex justify-between w-[10%] capitalize">
        {NavbarRightData.map((nav) => (
          <button key={nav.id} onClick={() => context?.setModalStatus(true)}>
            {nav.title}
          </button>
        ))}
      </div>
    </main>
  );
};
