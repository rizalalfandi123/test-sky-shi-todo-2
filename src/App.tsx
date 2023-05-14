import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import { queryClient } from "@/utils";
import { AppRoutes } from "@/routes";
import AlertDelete from "@/components/alert-delete";
import Notification from "@/components/notification";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
        <AlertDelete />
        <Notification/>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
