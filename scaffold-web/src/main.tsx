import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "@/routeTree.gen.ts";
import { theme } from "@/styles/theme";
import { AuthProvider } from "react-oidc-context";
import { OidcConfig } from "@/utils/config";

// Create a new router instance
const router = createRouter({ routeTree });

const queryClient = new QueryClient();

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AuthProvider {...OidcConfig}>
            <RouterProvider router={router} />
          </AuthProvider>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  );
}
