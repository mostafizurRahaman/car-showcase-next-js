import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constrants";
const Footer = () => {
   return (
      <footer className="flex flex-col text-black-100 border-t mt-5 border-gray-500">
         <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
            <div className="flex flex-col gap-6">
               <Image
                  src="/logo.svg"
                  alt="car hub logo"
                  width={118}
                  height={18}
                  className="object-contain"
               />
               <p className="text-base text-gray-700">
                  Carhub 2023 <br /> all rights reserved &copy;
               </p>
            </div>
            <div className="footer__links">
               {footerLinks.map((link) => (
                  <div key={link.title} className="footer__link">
                     <h3 className="font-bold"> {link.title}</h3>
                     {link.links.map((item) => (
                        <Link
                           className="text-gray-700"
                           href={item.url}
                           key={item.title}
                        >
                           {item.title}
                        </Link>
                     ))}
                  </div>
               ))}
            </div>
         </div>
         <div className="flex flex-wrap items-center justify-between border-gray-700 border-t mt-10 sm:px-16 px-6 py-10">
            <p>
               curhub 2023 <br />
               all rights reserved by &copy;
            </p>
            <div className="footer__copyrights-link">
               <Link href="/" className="text-gray-700">
                  privacy policy
               </Link>
               <Link href="/" className="text-gray-700">
                  term and service
               </Link>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
