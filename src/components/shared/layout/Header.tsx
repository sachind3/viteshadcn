import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BellIcon, HeadphonesIcon, SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import CLIENTLOGO from "./../../../assets/img/logo/logo-client.png";
import { Input } from "@/components/ui/input";
const Header = () => {
  return (
    <header className="py-4 shadow sticky top-0 left-0 z-10 bg-white">
      <div className="px-6 flex items-center justify-between">
        <Link to="/" className="block">
          <img src={CLIENTLOGO} alt="client" width={204} height={47} />
        </Link>
        <div className="flex gap-4 items-center text-theme-blue-500">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search"
              className="bg-gray-100 w-80 h-10"
            />
            <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" />
          </div>
          <BellIcon />
          <HeadphonesIcon />
          <DropdownMenu dir="ltr">
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="text-xl font-bold ">Company Name</div>
        </div>
      </div>
    </header>
  );
};
export default Header;
