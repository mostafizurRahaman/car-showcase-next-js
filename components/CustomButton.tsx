"use client";

import { customButtonProps } from "@/types";
import Image from "next/image";
const CustomButton = ({
   title,
   btnType,
   containerStyles,
   handleClick,
}: customButtonProps) => {
   return (
      <button
         disabled={true}
         type={btnType || "button"}
         className={`custom-btn ${containerStyles}`}
         onClick={() => handleClick}
      >
         <span className={`flex-1`}> {title}</span>
      </button>
   );
};

export default CustomButton;
