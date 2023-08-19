import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="padding-x absolute z-10  w-full py-8">
      <nav className="max-container relative flex items-center justify-between">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((item) => {
            return (
              <li key={item.label}>
                <a
                  className=" font-montserrat text-lg leading-normal text-slate-gray"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="relative hidden cursor-pointer max-lg:block">
          <img
            src={hamburger}
            width={25}
            height={25}
            alt=""
            onClick={() => {
              setOpen(!open);
            }}
          />
          {open && (
            <ul className="absolute right-0 top-20 z-50 flex min-w-[300px]  flex-col items-center justify-center gap-y-4 bg-coral-red px-24 py-20 text-center xl:hidden ">
              {navLinks.map((item) => {
                return (
                  <li key={item.label}>
                    <a
                      className=" font-montserrat text-lg leading-normal text-white"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
