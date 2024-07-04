import { Spinner } from "@fluentui/react-components";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import {
  DynamicLoginPage,
  DynamicBrokersPage,
  DynamicQRPage,
} from "./components";
import Layout from "@/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Spinner />}>
            <DynamicLoginPage />
          </Suspense>
        ),
      },
      {
        path: "/brokers",
        element: (
          <Suspense fallback={<Spinner />}>
            <DynamicBrokersPage />
          </Suspense>
        ),
      },
      {
        path: "/qr",
        element: (
          <Suspense fallback={<Spinner />}>
            <DynamicQRPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
