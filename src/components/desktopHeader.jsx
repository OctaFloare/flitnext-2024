import { DesktopNavbar } from "./desktopNavbar";
import { Links } from "./links";

export const DesktopHeader = () => <div className="hidden lg:block ">
  <DesktopNavbar links={Links}/>
</div>