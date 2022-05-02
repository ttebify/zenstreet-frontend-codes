import React, { createContext, useState } from "react";
import { merge } from "lodash";
import { layoutSettings } from "../components/layouts/settings";

interface SettingsContextType {
    settings: typeof layoutSettings;
    updateSettings: (update: {}) => void,
}
const SettingsContext = createContext<SettingsContextType>({
  settings: layoutSettings,
  updateSettings: () => {},
});

interface SettingsProviderProps {
  settings?: typeof layoutSettings;
  children: React.ReactNode;
}
export const SettingsProvider = ({ settings, children }: SettingsProviderProps) => {
  const [currentSettings, setCurrentSettings] = useState(
    settings || layoutSettings
  );

  const handleUpdateSettings = (update = {}) => {
    const marged = merge({}, currentSettings, update);
    setCurrentSettings(marged);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        updateSettings: handleUpdateSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
