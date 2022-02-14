import React from "react";
import { Route, Routes } from "react-router-dom";
import AppNavBar from "../components/navbar/index";
import FirstMock from "../pages/mock-1";
import SecondMock from "../pages/mock-2";
import PublicPage from "../pages/public-page";

function ProtectedPage() {
  return (
    <>
      <AppNavBar /> <h3>Protected</h3>
    </>
  );
}

export default function AppNavigation(props) {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<PublicPage />} />
          <Route path="/mock-1" element={<FirstMock />} />
          <Route path="/mock-2" element={<SecondMock />} />
          <Route path="/mock-3" element={<ProtectedPage />} />
        </Route>
      </Routes>
    </>
  );
}
