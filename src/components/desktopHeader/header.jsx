import { Links } from "../links";

export const DesktopHeader = () => (
  <div className="hidden lg:block">
    <nav>
    <Links 
        wrapper="w-full flex justify-center items-center gap-8 bg-[#0B0C10] h-20 shadow-md mx-auto"
        logo ="ml-5 text-2xl text-[#66FCF1] hover:text-[#45A29E] transition-colors duration-300"
        menuItemsDiv="flex gap-8 ml-auto mr-10"
        linkClass="text-2xl text-[#66FCF1] hover:text-[#45A29E] transition-colors duration-300"
      />
    </nav>
  </div>
);

