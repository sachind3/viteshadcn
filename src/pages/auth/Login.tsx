import LoginComp from "@/components/shared/auth/LoginComp";
import CLIENTLOGO from "./../../assets/img/logo/logo-client.png";

const Login = () => {
  return (
    <>
      <img
        src={CLIENTLOGO}
        alt="client"
        width={204}
        height={47}
        className="mb-4"
      />
      <LoginComp title="Welcome to Marsh Benefits!" />
    </>
  );
};
export default Login;
