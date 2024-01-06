import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {},
  primary: {
    100: '#E5FCF1',
    200: '#7E30E1',
    300: '#10DE82',
    400: '#0EBE6F',
    500: '#49108B',
    600: '#0A864F',
    700: '#086F42',
    800: '#075C37',
    900: '#064C2E',
  },
};

export const apptheme = extendTheme({ colors });