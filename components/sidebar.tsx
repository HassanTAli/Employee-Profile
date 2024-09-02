"use client";

import Image from "next/image";
import React from "react";
import NavItem from "./ui/NavItem";

const Sidebar = () => {
  const navigation = [
    {
      label: "Dashboard",
      href: "/Dashboard",
      icon: "akar-icons:dashboard",
      isNested: false,
    },
    {
      label: "Employees",
      href: "/Employee/profile",
      icon: "clarity:employee-group-line",
      isNested: true,
      subItemProps: [
        {
          label: "Profile",
          href: "/Employee/profile",
          icon: "ooui:user-avatar-outline",
        },
        {
          label: "Attendance",
          href: "/Employee/Attendance",
          icon: "mdi:calendar-check-outline",
        },
        {
          label: "Tasks",
          href: "/Employee/Tasks",
          icon: "mingcute:task-2-fill",
        },
      ],
    },
    {
      label: "Payroll",
      href: "/Payroll",
      icon: "circum:dollar",
      isNested: false,
    },
    {
      label: "Holidays",
      href: "/Holidays/Days",
      icon: "bi:file-check",
      isNested: true,
      subItemProps: [
        {
          label: "Days",
          href: "/Holidays/Days",
          icon: "material-symbols-light:clear-day",
        },
      ],
    },
    {
      label: "Advanced Payment",
      href: "/AdvancedPayment",
      icon: "f7:wallet-fill",
      isNested: false,
    },
  ];

  return (
    <div className="w-11/12 mx-auto h-[90%] shadow-sidebar rounded-[40px] border-sidebar-border border">
      <div className="w-10/12 mx-auto flex items-center justify-center">
        <Image width={247} height={158} src={"/images/logo.png"} alt="Logo" />
      </div>
      <ul className="flex flex-col gap-3">
        {navigation?.map((item, idx) => (
          <NavItem
            label={item.label}
            icon={item.icon}
            href={item.href}
            isNested={item.isNested}
            key={idx}
            subItemProps={item.isNested ? item.subItemProps : undefined}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
