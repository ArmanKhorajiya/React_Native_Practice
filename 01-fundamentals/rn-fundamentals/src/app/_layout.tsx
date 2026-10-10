
import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";
import { createContext, useContext, useState } from "react";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import AppTabs from "@/components/app-tabs";

SplashScreen.preventAutoHideAsync();

type Product = {
  id: number;
  name: string;
};

type CartContextType = {
  products: Product[];
  quantities: Record<number, number>;
  increment: (id: number) => void;
  decrement: (id: number) => void;
};

const products: Product[] = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Smartphone" },
  { id: 3, name: "Headphones" },
  { id: 4, name: "Keyboard" },
  { id: 5, name: "Mouse" },
  { id: 6, name: "Monitor" },
  { id: 7, name: "Smartwatch" },
  { id: 8, name: "Tablet" },
  { id: 9, name: "Speaker" },
  { id: 10, name: "Charger" },
];

const CartContext = createContext<CartContextType | null>(null);

export function useCart(): CartContextType {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used inside TabLayout");
  }

  return context;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [quantities, setQuantities] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
  });

  const increment = (id: number) => {
    setQuantities((previous) => {
      if (previous[id] >= 10) {
        return previous;
      }

      return {
        ...previous,
        [id]: previous[id] + 1,
      };
    });
  };

  const decrement = (id: number) => {
    setQuantities((previous) => {
      if (previous[id] <= 0) {
        return previous;
      }

      return {
        ...previous,
        [id]: previous[id] - 1,
      };
    });
  };

  return (
    <ThemeProvider
      value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <AnimatedSplashOverlay />

      <CartContext.Provider
        value={{
          products,
          quantities,
          increment,
          decrement,
        }}
      >
        <AppTabs />
      </CartContext.Provider>
    </ThemeProvider>
  );
}
