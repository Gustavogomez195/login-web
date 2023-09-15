import React from "react";
import ReactDOM from "react-dom/client";
import App from "./SignUp/App.jsx";

import { ChakraProvider } from "@chakra-ui/react";
import { SigIn } from "./SignIn/SignIn.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="SignIn" element={<SigIn />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
