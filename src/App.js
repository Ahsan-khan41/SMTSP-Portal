import React from "react";
import { SnackbarProvider } from "notistack";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <AppRoutes />
    </SnackbarProvider>
  );
}

export default App;
