import React, { useEffect, useState } from "react";
import "./App.css";
import { InformationPage } from "./pages/InformationPage";
import { ProfilePage } from "./pages/ProfilePage";
import { VerifyPage } from "./pages/VerifyPage";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chains, wagmiConfig } from "./config";

export enum Page {
  Information,
  Profile,
  Verify,
}

function App() {
  const [page, setPage] = useState(Page.Information);

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <div className="flex w-full overscroll-x-none font-mono">
          <InformationPage
            activePage={page}
            onGoToProfile={() => setPage(Page.Profile)}
          />
          <ProfilePage
            activePage={page}
            onGoBackToInformationPage={() => setPage(Page.Information)}
            onGoToVerifyPage={() => setPage(Page.Verify)}
          />
          {page === Page.Verify ? (
            <VerifyPage
              activePage={page}
              onGoBackToProfilePage={() => setPage(Page.Profile)}
            />
          ) : null}
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
