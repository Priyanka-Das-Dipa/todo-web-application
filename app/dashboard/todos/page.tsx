"use client";
import AddTaskModal from "@/app/src/AddTaskModal";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { LuArrowUpDown } from "react-icons/lu";

export default function TodosPage() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [openModal, setOpenModal] = useState(false);

  // close when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  return (
    <>
      <div className="p-8">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold text-primary mb-6 border-b-4 border-primary inline-block pb-1">
            Todos
          </h2>
          <button
            className="bg-primary px-5 py-0 rounded-md text-white flex items-center gap-2"
            onClick={() => setOpenModal(true)}
          >
            <FaPlus /> New Task
          </button>
        </div>
        <div className="flex items-center gap-2 w-full py-4">
          {/* search input */}
          <div className="relative w-[90%]">
            <input
              type="text"
              placeholder="Search your task here..."
              className="
          w-full px-4 py-2 
          rounded-lg border border-slate-300 
          bg-white focus:ring-1 focus:ring-blue-300 
          outline-none placeholder:text-slate-400
        "
            />

            {/* Search Icon positioned bottom-right */}
            <FiSearch className="absolute bottom-3 right-3 text-slate-500 text-xl pointer-events-none" />
          </div>

          {/* filter button */}
          <button
            onClick={() => setOpen(!open)}
            className="
          px-3 py-2 rounded-lg bg-primary text-white 
          hover:bg-primary transition flex items-center gap-2
        "
          >
            Filter <LuArrowUpDown />
          </button>

          {/* dropdown modal */}
          {open && (
            <div
              ref={modalRef}
              className="
            absolute right-0 top-16 
            w-48 bg-white p-4 rounded-xl shadow-lg border border-slate-200
            animate-fadeIn
          "
            >
              <h4 className="text-sm font-medium text-slate-700 mb-3 border-b-2 border-[#00000040]">
                Date
              </h4>

              <div className="flex flex-col gap-2 text-sm text-slate-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  Deadline Today
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  Expires in 5 days
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  Expires in 10 days
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  Expires in 30 days
                </label>
              </div>
            </div>
          )}
        </div>

        {/* cards */}
        <div className="w-full">
          <Image
            src={"/no-projects.svg"}
            alt="no-projects"
            width={500}
            height={500}
            className="w-full "
          />
        </div>
      </div>

      {/* Modal */}
      <AddTaskModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
