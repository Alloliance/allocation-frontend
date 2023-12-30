import React, { useEffect, useState } from "react";
import "./App.css";
import { InformationPage } from "./components/InformationPage";
import { ProfilePage } from "./components/ProfilePage";
import { VerifyPage } from "./components/VerifyPage";

export enum Page {
  Information,
  Profile,
  Verify,
}

function App() {
  const [page, setPage] = useState(Page.Information);

  return (
    <div className="flex w-full overscroll-x-none overscroll-y-none font-mono">
      <InformationPage
        activePage={page}
        onGoToProfile={() => setPage(Page.Profile)}
      />
      <ProfilePage
        activePage={page}
        onGoBackToInformationPage={() => setPage(Page.Information)}
        onGoToVerifyPage={() => setPage(Page.Verify)}
      />
      <VerifyPage
        activePage={page}
        onGoBackToProfilePage={() => setPage(Page.Profile)}
      />
    </div>
  );
}

export default App;
