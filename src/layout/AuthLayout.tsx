import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="grid grid-cols-2 h-full ">
      <div className="bg-cover bg-center bg-[url('assets/img/bg-login.png')]"></div>
      <div className="gradient-bg flex items-center justify-center flex-col">
        <Outlet />
      </div>
    </section>
  );
};
export default AuthLayout;
