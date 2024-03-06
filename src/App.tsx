import { useEffect, useState } from "react";

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
  const [currentPage, setCurrentPage] = useState(Page.Information);
  const [previousPage, setPreviousPage] = useState(Page.Information);
  const [profileInputValue, setProfileInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [animationDone, setAnimationDone] = useState(true);

  useEffect(() => {
    console.log("page changed to", currentPage, "from", previousPage);
    //setStartAnimation(true);
    setAnimationDone(false);
    if (currentPage !== previousPage) {
      setTimeout(() => {
        console.log("animation done!");
        setAnimationDone(true);
      }, 700);
    }
  }, [currentPage]);

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <div className="flex w-full overscroll-x-none font-mono">
          {currentPage === Page.Information ||
          (previousPage === Page.Information && !animationDone) ? (
            <InformationPage
              activePage={currentPage}
              previousPage={previousPage}
              onGoToProfile={() => {
                setCurrentPage(Page.Profile);
                setPreviousPage(Page.Information);
              }}
            />
          ) : null}
          {currentPage === Page.Profile ||
          (previousPage === Page.Profile && !animationDone) ? (
            <ProfilePage
              activePage={currentPage}
              onGoBackToInformationPage={() => {
                setCurrentPage(Page.Information);
                setPreviousPage(Page.Profile);
              }}
              onGoToVerifyPage={() => setCurrentPage(Page.Verify)}
              setEmail={setEmailInputValue}
              email={emailInputValue}
              setProfile={setProfileInputValue}
              profile={profileInputValue}
            />
          ) : null}
          {currentPage === Page.Verify ? (
            <VerifyPage
              activePage={currentPage}
              onGoBackToProfilePage={() => setCurrentPage(Page.Profile)}
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
