"use client"

import { useRouter } from "next/navigation";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({
  image,
  name,
  href
}) => {
  const router = useRouter();

  const onClick = () => {
    // add authentication prior push
    router.push(href);
  }
  return ( 
    <button 
      className="
        relative
        group
        flex
        items-center
        rounded-nd
        overflow-hidde
        gap-x-4
        bg-neutral-100/10
        hover:bg-neutral-100/20
        transition
        pr-4
      "
    >
      <div className="
        
      ">

      </div>
    </button>
   );
}
 
export default ListItem;