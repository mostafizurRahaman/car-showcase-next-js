import { MouseEventHandler } from "react";

export interface customButtonProps {
   title: string;
   btnType?: "button" | "submit" | "reset";
   containerStyles?: string;
   handleClick?: MouseEventHandler<HTMLButtonElement>;
}
