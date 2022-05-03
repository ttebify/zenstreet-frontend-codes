import React from "react";
import { PageProps } from "gatsby";
import { IconContext } from "react-icons";
import { AuthProvider } from "../../contexts/AuthContext";
import { SettingsProvider } from "../../contexts/SettingsContext";
import { ToastListener, ToastsProvider } from "../../contexts/ToastContext";
import PrimaryNav from "./Navbars/PrimaryNav";
import PrimaryFooter from "./PrimaryFooter";
import ModalProvider from "../Modal/ModalContext";
import Section from "./Section";

/**
 * This component is used to share state accross all sections of the site without unmounting on page
 * navigation.
 */
export default function Layout({ children, location }: PageProps) {
  const isExcluded = /^\/app\/?.*/.test(location.pathname);

  return (
    <SettingsProvider>
      <ModalProvider>
        <ToastsProvider>
          <ToastListener />
          <IconContext.Provider value={{ className: "w-6 h-6" }}>
            <AuthProvider>
              {isExcluded ? (
                children
              ) : (
                <React.Fragment>
                  <Section
                    className="!pt-0 pb-0 !max-w-screen-xl"
                    containerClass="shadow-sm bg-white"
                  >
                    <PrimaryNav />
                  </Section>
                  {children}
                  <PrimaryFooter />
                </React.Fragment>
              )}
            </AuthProvider>
          </IconContext.Provider>
        </ToastsProvider>
      </ModalProvider>
    </SettingsProvider>
  );
}
