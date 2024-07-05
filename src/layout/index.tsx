import { Button } from "@fluentui/react-components";
import type { FC } from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="absolute p-2 md:left-0">
        <div className="flex gap-3 md:flex-col select-none">
          <Link to="/">
            <Button>Login</Button>
          </Link>
          <Link to="/brokers">
            <Button>Brokers</Button>
          </Link>
          <Link to="/qr">
            <Button>QR</Button>
          </Link>
        </div>
      </div>

      <main className="flex flex-col gap-3">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
