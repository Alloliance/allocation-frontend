import { Page } from "../App";
import { Button } from "../components/buttons/Button";
import { NeonButton } from "../components/buttons/NeonButton";
import { PageContainer } from "../components/PageContainer";
import { ArrowRight } from "../components/icons/ArrowRight";
import { InformationQuadrant } from "../components/InformationQuadrant";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Loading } from "../components/icons/Loading";
import { useEffect, useState } from "react";
import { InformationRectangle } from "../components/InformationRectangle";
import { Footer } from "../components/Footer";

type Props = {
  activePage: Page;
  previousPage: Page;
  onGoToProfile: () => void;
};

export const InformationPage = ({
  activePage,
  previousPage,
  onGoToProfile,
}: Props) => {
  const account = useAccount();
  const [walletConnectionStarted, setWalletConnectctionStarted] =
    useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [showClass, setShowClass] = useState(
    previousPage === Page.Information ? "translate-x-0" : "-translate-x-full"
  );

  const getStartButton = (isNeonBtn = false) => {
    if (account.isConnecting) {
      if (!walletConnectionStarted) setWalletConnectctionStarted(true);
      return (
        <Button classes="flex items-center gap-2 px-8 py-2">
          <Loading />
          <span>Connecting..</span>
        </Button>
      );
    }

    if (account.isConnected) {
      if (walletConnectionStarted) {
        onGoToProfile();
        setWalletConnectctionStarted(false);
      }
      return (
        <Button
          onClick={onGoToProfile}
          classes="flex items-center gap-2 px-8 py-2"
        >
          <span>To your profile</span> <ArrowRight size="small" />
        </Button>
      );
    }

    return (
      <ConnectButton.Custom>
        {({ openConnectModal }) => (
          <Button
            onClick={openConnectModal}
            classes="flex items-center gap-2 px-8 py-2"
          >
            Connect Wallet
          </Button>
        )}
      </ConnectButton.Custom>
    );
  };

  useEffect(() => {
    console.log("loaded information page - start animation");
    setStartAnimation(true);
  }, []);

  useEffect(() => {
    if (activePage !== previousPage) {
      if (startAnimation) {
        console.log(
          "Inside Information page: activePage, previousPage has been updated"
        );
        // Active page and animation has started/component has loaded = change so that it shows
        if (activePage === Page.Information) {
          setShowClass("translate-x-0");
        }
        if (previousPage === Page.Information) {
          setShowClass("-translate-x-full");
        }
      }
    }
  }, [activePage, previousPage, startAnimation]);

  return (
    <PageContainer classes={showClass} secondBlobEndOfPage>
      <header className="flex flex-col">
        <div className="flex justify-end text-white my-4">
          {getStartButton()}
        </div>
        <div className="flex flex-col items-center mt-28 mb-28 sm:mb-38 animate-hover text-center my-5">
          <h1 className="text-6xl font-lato text-pink-400 text-shadow-neon  mb-12 sm:text-7xl">
            ALLOLIANCE
          </h1>
          <h2 className="text-white text-2xl">
            Unlocking Web3 Grants Compliance
          </h2>
        </div>
      </header>
      <div className="flex flex-col">
        <div className="flex justify-center text-center flex-wrap sm:gap-10 ">
          <InformationQuadrant
            title="Web3 compliance protocol"
            subTitle="Explore the future of grant-seeking with our web3 protocol, ensuring seamless and secure grant applications."
          />
          <InformationQuadrant
            title="Allo Protocol Magic"
            subTitle="Experience Allo Protocol transforming the KYC journey for users, ensuring a smooth and secure submission process."
          />
          <InformationQuadrant
            title="Elevate Your Experience"
            subTitle="Enjoy a streamlined KYC journey with easy document and selfie submission, paving the path for swift grant approval."
          />
        </div>
        <div className="flex justify-center text-white mt-12 mb-20">
          <ConnectButton.Custom>
            {({ openConnectModal }) => (
              <Button
                onClick={openConnectModal}
                classes="flex items-center gap-2"
                size="large"
                disabled={account.isConnected}
              >
                {account.isConnected ? "Already Connected" : "Connect Wallet"}
              </Button>
            )}
          </ConnectButton.Custom>
        </div>
        <div className="flex flex-col mx-3 sm:mx-20 gap-12">
          <InformationRectangle
            imageSrc="https://www.svgrepo.com/show/1320/rocket.svg"
            title="Roadmap to KYC Success: Approvals and Beyond"
            subTitle="Explore the roadmap features that make Alloliance a dynamic KYC platform, from third-party integrations to swift approvals, enhancing the grant-seeking process."
          />
          <InformationRectangle
            imageSrc="https://www.svgrepo.com/show/107865/building.svg"
            title="Allo Profile Metadata Standard: Shaping the Future of Profiles"
            subTitle="Delve into the Allo Profile Metadata Standard, a groundbreaking initiative that standardizes metadata, allowing organizations to issue credentials, achievements, and KYC details seamlessly."
          />
          <InformationRectangle
            imageSrc="https://www.svgrepo.com/show/776/dna.svg"
            title="Connect the Dots: Allo Profile Metadata in Action"
            subTitle="Learn how Allo Profile Metadata brings profiles to life, offering a standardized way to query, categorize, and reason about the rich array of metadata stored in Allo profiles."
          />
          <div className="my-4 flex flex-col items-center">
            <h1 className="text-2xl font-lato text-pink-400 text-shadow-neon text-center">
              ALLOLIANCE
            </h1>
            <div
              className="bg-pink-800 w-96 h-8 relative bottom-8"
              style={{ filter: "blur(50px)" }}
            ></div>
          </div>
          <InformationRectangle
            imageSrc="https://www.svgrepo.com/show/2878/certificate.svg"
            title="AlloProfileMetadataIssuerRegistry.sol: A Foundation of Trust"
            subTitle="Explore the core of Alloliance's metadata infrastructure with AlloProfileMetadataIssuerRegistry.sol, ensuring a secure and verifiable way to manage metadata for Allo profiles."
          />
          <InformationRectangle
            imageSrc="https://www.svgrepo.com/show/1321/planet.svg"
            title="Ready for the Future: Alloliance on Arbitrum Sepolia"
            subTitle="Embrace the future with Alloliance, already making waves on Arbitrum Sepolia with a deployed contract at 0x9BAD40cD7c4d8Fb9b66778B1eAc02B14552E8b41."
          />
        </div>
        <Footer />
      </div>
    </PageContainer>
  );
};
