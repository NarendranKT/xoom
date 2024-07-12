"use client";
import {meetingTypeList} from "@/constants";
import Image from "next/image";
import React from "react";

const MeetingTypeList = () => {
   return (
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
         {meetingTypeList.map((list, index) => (
            <div
               className={`bg-${list.color}-1 px-4 py-6 flex flex-col justify-between w-full rounded-[14px] cursor-pointer xl:max-w-[270px] min-h-[260px]`}
               key={index}
               onClick={() => {}}
            >
               <div className="glassmorphism rounded-[10px] size-12 flex-center">
                  <Image src={list.icon} alt={list.label} height={27} width={27} className="text-white" />
               </div>
               <div className="flex flex-col gap-2">
                  <h1 className=" font-bold text-2xl text-white">{list.label}</h1>
                  <p className=" text-lg font-normal text-sky-2">{list.description}</p>
               </div>
            </div>
         ))}
      </section>
   );
};

export default MeetingTypeList;
