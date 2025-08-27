import { Facebook, Instagram, Twitter } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-[#002d61] text-white p-12">
      <div className="flex justify-between w-7/9">
        <div className="flex flex-col gap-4 mt-2flex-col">
          <p className="text-xl font-medium">Filters</p>
          <div className="flex flex-col gap-4">
            <p>All &nbsp; &nbsp; Electonics</p>
          </div>
        </div>

        <div className="flex items-start gap-4 mt-2 flex-col">
          <p className="text-xl font-medium">Follow us:</p>
          <div className="flex flex-col gap-4">
            <p>About us</p>
            <p>Contact</p>
          </div>
        </div>

        <div className="flex gap-4 mt-2 flex-col">
          <p className="text-xl font-medium">Follow Us</p>
          <div className="flex flex-row gap-4">
            <span className="material-icons flex flex-row w-10 bg-[#0857a8] p-2 rounded-full">
              <Facebook />
            </span>
            <span className="material-icons flex flex-row w-10 bg-[#0857a8] p-2 rounded-full">
              <Twitter />
            </span>
            <span className="material-icons flex flex-row w-10 bg-[#0857a8] p-2 rounded-full">
              <Instagram />
            </span>
          </div>
        </div>
      </div>
      <p>© 2025 India</p>
    </footer>
  );
}
