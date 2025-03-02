import React, { createContext, ReactNode, useContext, useState } from "react";

interface MenuContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isAnimating: boolean;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpenState] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const setIsMenuOpen = (open: boolean) => {
    if (open) {
      setIsMenuOpenState(true);

      setTimeout(() => setIsAnimating(true), 0);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsMenuOpenState(false), 300);
    }
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen, isAnimating }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }

  return context;
};
