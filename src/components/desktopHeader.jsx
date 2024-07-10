import { DesktopNavbar } from "./desktopNavbar";
import { Links } from "./links";

export const DesktopHeader = () => <div 
  className="hidden lg:block backdrop-blur-lg"
  style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))'}}
  >
  <DesktopNavbar links={Links} />
</div>