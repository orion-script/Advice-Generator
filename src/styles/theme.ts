export type Theme = {
    colors: Readonly<{
      "Light-Cyan": string;
      "Neon-Green": string;
      "Grayish-Blue": string;
      "Dark-Grayish-Blue": string;
      "Dark-Blue": string;
    }>;
    typography: Readonly<{
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      xxxxl: string;
    }>;
    Breakpoint: Readonly<{
      Mobile: string;
      Desktop: string;
    }>;
  };
  
  export const theme: Readonly<Theme> = {
    colors: {
      "Light-Cyan": "hsl(193,38%,86%)",
      "Neon-Green": "hsl(150,100%,66%)",
      "Grayish-Blue": "hsl(217, 19%, 38%)",
      "Dark-Grayish-Blue": "hsl(217, 19%, 24%)",
      "Dark-Blue": "hsl(218, 23%, 16%)",
    },
    typography: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      xxl: "24px",
      xxxl: "28px",
      xxxxl: "30px",
    },
    Breakpoint: {
      Mobile: "375px",
      Desktop: "1440px",
    },
  };