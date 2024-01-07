import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/auth/Login";
import AuthLayout from "./layout/AuthLayout";
import BaseLayout from "./layout/BaseLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route element={<Login />} path="login" />
      </Route>
      <Route element={<BaseLayout />}>
        <Route element={<Dashboard />} index />
      </Route>
    </Routes>
  );
};
export default App;
