import Image from "next/image";
import { CustomButton } from ".";

const Navbar = () => {
   return (
      <header className="absolute z-10 w-full">
         <nav className="max-w-[1440px] mx-auto flex items-center justify-between py-4 sm:px-16 px-6">
            <div className="flex items-center justify-center">
               <Image
                  src="/logo.svg"
                  alt="car hub logo"
                  width={118}
                  height={18}
                  className="object-contain"
               />
            </div>
            <CustomButton
               btnType="button"
               title="sign in"
               containerStyles={
                  "text-primary-blue  rounded-full bg-white min-w-[130px] capitalize "
               }
            />
         </nav>
      </header>
   );
};

export default Navbar;
