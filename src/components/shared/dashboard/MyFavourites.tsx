import { CardTitle } from "@/components/ui/Headings";
import { HeartIcon } from "lucide-react";

const MyFavourites = () => {
  return (
    <div className="p-4 bg-white rounded grid grid-cols-3 gap-4 mt-4">
      <CardTitle className="flex gap-2 items-center">
        <HeartIcon /> My Favourites
      </CardTitle>
    </div>
  );
};
export default MyFavourites;
