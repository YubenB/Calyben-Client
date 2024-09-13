"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathName = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 flex cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Calyben logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Calyben</h1>
        </Link>
        {sidebarLinks.map((items) => {
          const isActive =
            pathName === items.route || pathName.startsWith(`${items.route}/`);
          return (
            <Link
              href={items.route}
              key={items.label}
              className={cn("sidebar-link", {
                "bg-bank-gradient": isActive,
              })}
            >
              <div className="relative flex items-center justify-center w-8 h-8">
                <Image
                  src={items.imgURL}
                  alt={items.label}
                  fill
                  className={cn("object-contain", {
                    "brightness-[3] invert-0": isActive,
                  })}
                />
              </div>
              <p
                className={cn("sidebar-label text-sm", {
                  "!text-white": isActive,
                })}
              >
                {items.label}
              </p>
            </Link>
          );
        })}
        USER
      </nav>
      FOOTER
    </section>
  );
};

export default Sidebar;
