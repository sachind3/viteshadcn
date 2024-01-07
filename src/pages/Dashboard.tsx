import Intro from "@/components/shared/dashboard/Intro";
import MyBenefits from "@/components/shared/dashboard/MyBenefits";
import MyFavourites from "@/components/shared/dashboard/MyFavourites";
import { Heading4 } from "@/components/ui/Headings";

const Dashboard = () => {
  return (
    <>
      <Heading4>Welcome Ravi!</Heading4>
      <Intro />
      <MyFavourites />
      <MyBenefits />
    </>
  );
};
export default Dashboard;
