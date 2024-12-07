import { createTheme } from "@mui/material/styles";

// Define the custom theme
const theme = createTheme({
  typography: {
    fontFamily: "Outfit", // Apply Outfit font globally
    h3: {
      fontWeight: 700, // Semibold
      fontSize: "80px", // For the title
    },
    body1: {
      fontWeight: 250, // Regular
      fontSize: "20px", // Subtitle or description
    },
    button: {
      fontWeight: 500, // Semibold
      fontSize: "20px", // Button text
    },
    h6: {
      fontWeight: "bold", // Bold for the navbar logo
      fontSize: "20px", // Navbar logo size
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          margin: 3,
          borderRadius: "20px", // Rounded corners for buttons
          textTransform: "none", // Disable uppercase for buttons
        },
      },
    },
  },
});

export default theme;
