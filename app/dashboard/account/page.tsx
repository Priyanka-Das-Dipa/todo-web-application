"use client";
import Image from "next/image";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";

export default function AccountInfo() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImagePreview(imageURL);
    }
  };
  return (
    <>
      <div className="w-full p-6 md:p-10 bg-[#F2F6FF] min-h-screen">
        <h2 className="text-2xl font-semibold text-primary mb-6 border-b-2 border-blue-200 inline-block pb-1">
          Account Information
        </h2>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          {/* Upload Photo Section */}
          <div className="flex items-center gap-6 mb-8 p-4 rounded-md border border-[#A1A3ABA1]">
            <div className="relative size-24">
              <Image
                src={imagePreview || "/image.svg"}
                alt="Profile"
                width={100}
                height={100}
                className="size-24 rounded-full object-cover bg-gray-300"
              />

              <label className="absolute bottom-1 right-1 bg-primary p-2 rounded-full cursor-pointer">
                <FiCamera className="text-white text-lg" />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>

            <button className="px-5 py-2 bg-primary text-white font-medium rounded-md hover:bg-blue-700 transition">
              Upload New Photo
            </button>
          </div>

          {/* Form Section */}
          <div className=" border border-[#A1A3ABA1] p-8 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium">First Name</label>
                <input
                  type="text"
                  className="mt-1 w-full px-3 py-2 border border-[#A1A3ABA1] rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder=""
                />
              </div>

              <div>
                <label className="text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  className="mt-1 w-full px-3 py-2 border border-[#A1A3ABA1] rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="relative">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full px-3 py-2 border border-[#A1A3ABA1] rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Address</label>
                <input
                  type="text"
                  className="mt-1 w-full px-3 py-2 border border-[#A1A3ABA1] rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Contact Number</label>
                <input
                  type="text"
                  className="mt-1 w-full px-3 py-2 border border-[#A1A3ABA1] rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="relative">
                <label className="text-sm font-medium">Birthday</label>
                <input
                  type="date"
                  className="mt-1 w-full px-3 py-2 border border-[#A1A3ABA1] rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                />

                <FaCalendarAlt className="absolute top-10 right-3 text-gray-500" />
              </div>
            </div>
            {/* Buttons */}
            <div className="flex items-center justify-center gap-4 mt-10 max-w-md mx-auto">
              <button className="w-full md:px-8 py-3 bg-primary text-white rounded-md md:font-medium hover:bg-blue-700 transition md:text-base text-[12px]">
                Save Changes
              </button>

              <button className="w-full px-8 py-3 bg-gray-400 text-white rounded-md font-medium hover:bg-gray-500 transition md:text-base text-[12px]">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
