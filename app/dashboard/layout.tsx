"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BiSolidCalendarCheck } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdHome, MdMenu, MdClose } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { label: "Dashboard", href: "/dashboard", icon: <MdHome /> },
    {
      label: "Todos",
      href: "/dashboard/todos",
      icon: <BiSolidCalendarCheck />,
    },
    {
      label: "Account Information",
      href: "/dashboard/account",
      icon: <FaUser />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* ======================== SIDEBAR ======================== */}
      <aside
        className={classNames(
          "bg-[#0D224A] shadow-lg fixed top-0 h-full z-50 w-80 transition-transform duration-300",
          "md:translate-x-0", // desktop visible
          sidebarOpen ? "translate-x-0" : "-translate-x-full" // mobile toggle
        )}
      >
        {/* Close button (mobile only) */}
        <div className="md:hidden flex justify-end pr-4 pt-4">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white text-3xl"
          >
            <MdClose />
          </button>
        </div>

        <div className="py-10">
          <div className="flex justify-center items-center">
            <Image
              src={"/profile.svg"}
              alt="User Image"
              width={50}
              height={50}
              className="size-24"
            />
          </div>
          <div>
            <h1 className="text-white text-2xl font-semibold text-center my-2">
              User Name
            </h1>
            <p className="text-white text-sm text-center">User Email</p>
          </div>
        </div>

        <nav className="py-2 space-y-2">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setSidebarOpen(false)} // auto close on mobile
              className={classNames(
                "px-4 py-3 text-sm font-medium transition flex items-center gap-2",
                pathname === item.href
                  ? "bg-linear-to-r from-[#7d90b4] to-[#D9D9D900] text-white"
                  : "text-[#8CA3CD] hover:text-white hover:bg-linear-to-r from-[#7d90b4] to-[#D9D9D900]"
              )}
            >
              <span className="text-2xl">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ======================= MAIN CONTENT ======================= */}
      <main className="flex-1 md:ml-80 bg-[#EEF7FF]">

        {/* Top Navbar */}
        <div className="flex justify-between items-center bg-white p-5 shadow-sm">

          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-3xl text-[#0D224A]"
          >
            <MdMenu />
          </button>

          {/* Logo */}
          <div>
            <Image
              src={"/logo.svg"}
              width={50}
              height={50}
              alt="Logo"
              className="w-28"
            />
          </div>

          <div className="flex gap-5 items-center">
            <div className="bg-primary p-2 flex justify-center items-center rounded-md text-white">
              <IoIosNotifications className="text-2xl" />
            </div>
            <div className="bg-primary p-2 flex justify-center items-center rounded-md text-white">
              <SlCalender className="text-2xl" />
            </div>
            <div className="hidden sm:block">
              <p>Friday</p>
              <span>9/12/2025</span>
            </div>
          </div>
        </div>

        {children}
      </main>
    </div>
  );
}
