import { Login } from "../pages/common/Login";
import { useAuth } from "../hook/useAuth";

export function AdminLayout({ children }) {
  const { auth } = useAuth();

  if (!auth) return <Login />;

  return <div>{children}</div>;
}
