import {
  LOGIN_ROUTE,
  QUEUE_START_ROUTE,
  VENDOR_SEARCH_ROUTE,
} from "../constants/routes";
import { useAppSelector } from "./reduxHooks";

export const useGetHomeRoute = () => {
  const { authResponse } = useAppSelector((state) => state.auth);

  return authResponse !== null && authResponse.role === 2
    ? VENDOR_SEARCH_ROUTE
    : authResponse !== null && authResponse.role === 1
    ? QUEUE_START_ROUTE
    : LOGIN_ROUTE;
};
