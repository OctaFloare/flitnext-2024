'use client'

import { ReactQueryProvider } from "./reactQueryProvider";
import { SettingsContext } from "./settingsContext";

export const Providers = ({ children, settings }) => {

  return (
    <SettingsContext.Provider value={{ settings }}>
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    </SettingsContext.Provider>
  );
};
