import { cn } from "@/lib/utils";
import Image from "next/image";

interface THomeCard {
   className: string,
   icon: string,
   label: string,
   description: string,
   handleClick: ()=> void
}

const HomeCard = ({className, icon, label, description, handleClick} : THomeCard) => {
  return (
    <div
      className={cn(`px-4 py-6 flex flex-col justify-between w-full rounded-[14px] cursor-pointer xl:max-w-[270px] min-h-[260px]`, className)}
      key={label}
      onClick={handleClick}
    >
      <div className="glassmorphism rounded-[10px] size-12 flex-center">
        <Image
          src={icon}
          alt={label}
          height={27}
          width={27}
          className="text-white stroke-white"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className=" font-bold text-2xl text-white">{label}</h1>
        <p className=" text-lg font-normal text-sky-2">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
