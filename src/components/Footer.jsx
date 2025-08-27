import { Facebook, Instagram, Twitter } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="p-4 bg-[#000000] text-center text-white">
      <p>© 2025 MyShop. All rights reserved.</p>
      <div
        className="flex justify-center gap-4 mt-2 items-center flex flex-col
"
      >
        <p className="text-[#777777]">Follow us:</p>
        <div className="flex flex-row gap-4">
          <span className="material-icons text-[#ff0000] flex flex-row">
            <Facebook />
            &nbsp; facebook
          </span>
          <span className="material-icons text-[#ff0000] flex flex-row">
            <Twitter />
            &nbsp; twitter
          </span>
          <span className="material-icons text-[#ff0000] flex flex-row">
            <Instagram />
            &nbsp; instagram
          </span>
        </div>
      </div>
    </footer>
  );
}
