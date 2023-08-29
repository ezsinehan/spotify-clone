import Link from "@/node_modules/next/link";
import { twMerge } from "@/node_modules/tailwind-merge/dist/lib/tw-merge";
import React from "react";
import { IconType } from "react-icons"

interface SiderbarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}


const SidebarItem: React.FC<SiderbarItemProps> = ({
  icon: Icon,
  label,
  active,
  href
}) => {
  return (
    <Link
      href={href}
      className={twMerge(`
        flex
        flex-row
        h-auto
        items-center
        w-full
        gap-x-4
        text-md
        font-medium
        cursor-pointer
        hover:text-white
        transition
        text-neutral-400
        py-1
      `,
        active && "text-white"
      )}
    >
      <Icon size={26}/>
      <p className="truncate w-full">{label}</p>
    </Link>
   );
}
 
export default SidebarItem;