import { Page } from "../App";
import { Button } from "../components/buttons/Button";
import { NeonButton } from "../components/buttons/NeonButton";
import { PageContainer } from "../components/PageContainer";
import { ArrowRight } from "../components/icons/ArrowRight";
import { InformationQuadrant } from "../components/InformationQuadrant";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Loading } from "../components/icons/Loading";
import { useState } from "react";
import { InformationRectangle } from "../components/InformationRectangle";

type Props = {
  activePage: Page;
  onGoToProfile: () => void;
};

export const InformationPage = ({ activePage, onGoToProfile }: Props) => {
  const account = useAccount();
  const [walletConnectctionStarted, setWalletConnectctionStarted] =
    useState(false);

  const getStartButton = () => {
    if (account.isConnecting) {
      if (!walletConnectctionStarted) setWalletConnectctionStarted(true);
      return (
        <Button classes="flex items-center gap-2">
          <Loading />
          <span>Connecting..</span>
        </Button>
      );
    }

    if (account.isConnected) {
      if (walletConnectctionStarted) {
        onGoToProfile();
        setWalletConnectctionStarted(false);
      }
      return (
        <Button onClick={onGoToProfile} classes="flex items-center gap-2">
          <span>To your profile</span> <ArrowRight size="small" />
        </Button>
      );
    }

    return (
      <ConnectButton.Custom>
        {({ openConnectModal }) => (
          <Button onClick={openConnectModal} classes="flex items-center gap-2">
            Connect Wallet
          </Button>
        )}
      </ConnectButton.Custom>
    );
  };

  return (
    <PageContainer
      classes={
        activePage === Page.Information ? "translate-x-0" : "-translate-x-full"
      }
    >
      <header className="flex flex-col">
        <div className="flex justify-end text-white my-4">
          {getStartButton()}
        </div>
        <div className="flex flex-col items-center mt-28 mb-28 sm:mb-38 animate-hover">
          <h1 className="text-6xl font-lato text-pink-400 text-shadow-neon  mb-12 sm:text-7xl">
            ALLOLIANCE
          </h1>
          <h2 className="text-white text-2xl">
            Veriify yourself on the blockchain
          </h2>
        </div>
      </header>
      <div className="flex flex-col gap-20">
        <div className="flex justify-center text-center flex-wrap gap-10">
          <InformationQuadrant
            title="Connect a wallet"
            subTitle="Our revolutionary web3 app simplifies your online experience."
            button={
              <NeonButton onClick={onGoToProfile}>Get started</NeonButton>
            }
          />
          <InformationQuadrant
            title="Upload verification"
            subTitle="Our revolutionary web3 app simplifies your online experience."
            button={
              <NeonButton onClick={onGoToProfile}>Get started</NeonButton>
            }
          />
          <InformationQuadrant
            title="Discover all the apps"
            subTitle="Our revolutionary web3 app simplifies your online experience."
            button={
              <NeonButton onClick={onGoToProfile}>Get started</NeonButton>
            }
          />
        </div>
        <div className="flex flex-col">
          <InformationRectangle
            title="Our revolutionary web3 app simplifies your online experience."
            subTitle="Our revolutionary web3 app simplifies your online experience."
          />
          <InformationRectangle
            title="Our revolutionary web3 app simplifies your online experience."
            subTitle="Our revolutionary web3 app simplifies your online experience."
          />
          <InformationRectangle
            title="Our revolutionary web3 app simplifies your online experience."
            subTitle="Our revolutionary web3 app simplifies your online experience."
          />
        </div>
      </div>
    </PageContainer>
  );
};
