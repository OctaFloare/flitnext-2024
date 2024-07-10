import { ReactQueryProvider } from "./reactQueryProvider";

export const Providers = ({ children }) => (
  <ReactQueryProvider>{children}</ReactQueryProvider>
);
