import App from "@/App";
import PageNotFound from "@/components/Shared/PageNotFound";
import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => <App />,
  notFoundComponent: PageNotFound,
});


