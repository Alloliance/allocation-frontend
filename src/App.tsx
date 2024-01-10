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
  const [profileInputValue, setProfileInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");

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
			setEmail={setEmailInputValue}
			email={emailInputValue}
			setProfile={setProfileInputValue}
			profile={profileInputValue}
          />
          {page === Page.Verify ? (
            <VerifyPage
              activePage={page}
              onGoBackToProfilePage={() => setPage(Page.Profile)}
			  email={emailInputValue}
			  profile={profileInputValue}
            />
          ) : null}
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
