import { lazy } from "react";

export const DynamicLoginPage = lazy(() => import("../features/Login/index"));
export const DynamicBrokersPage = lazy(() => import("../features/Brokers/index"));
export const DynamicQRPage = lazy(() => import("../features/QR/index"));