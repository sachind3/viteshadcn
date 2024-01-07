import Footer from "@/components/shared/layout/Footer";
import Header from "@/components/shared/layout/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const BaseLayout = () => {
  return (
    <div className="gradient-bg h-full">
      <Header />
      <main className="flex py-4 items-start">
        <Sidebar />
        <section className="flex-grow">
          <div className="px-4">
            <Outlet />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default BaseLayout;
