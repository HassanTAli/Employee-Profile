"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

import IconComponent from "../Icon";
import { NavItemProps } from "@/types";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavProps = {};

const NavItem = ({
  label,
  icon,
  isNested,
  href,
  subItemProps,
}: NavItemProps) => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  console.log({ pathname });

  const isActive = pathname === href || pathname.includes(`${href}`);

  return (
    <>
      <li
        className={cn(
          "hover:bg-[#F9EAEB] hover:text-[#EE232F] hover:border-l-[5px] border-l-[5px] border-l-transparent hover:border-l-[#EE232F] hover:rounded-e-2xl py-2",
          {
            "bg-[#F9EAEB] border-l-[#EE232F] rounded-e-2xl text-[#EE232F]":
              isActive,
          }
        )}
      >
        <Link href={href} className="py-2">
          <div className="ml-[20%] flex items-center justify-between mr-4">
            <div className="flex items-center gap-2">
              <IconComponent
                icon={icon}
                color="#242223"
                height={26}
                width={26}
              />
              <span className="font-medium text-base leading-5 text-[#242223]">
                {label}
              </span>
            </div>
            <div className="flex items-center">
              {isNested && (
                <button
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  {toggle || isActive ? <FaChevronDown /> : <FaChevronRight />}
                </button>
              )}
            </div>
          </div>
        </Link>
      </li>
      {(toggle || isActive) && (
        <div>
          <ul className="flex flex-col gap-3 mt-3">
            {subItemProps?.map((item, idx) => {
              const isSubActive = pathname.includes(`${item.href}`);
              return (
                <li key={idx} className="pt-2">
                  <Link href={item.href}>
                    <div className="ml-[30%] flex items-center gap-2">
                      <IconComponent icon={item.icon} color="#242223" />
                      <span
                        className={cn(
                          "font-light text-base leading-6 text-[#16151C]",
                          {
                            "text-[#7B7B7B]": isSubActive,
                          }
                        )}
                      >
                        {item.label}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavItem;
