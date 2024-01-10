import { Page } from "../App";
import { Button } from "../components/buttons/Button";
import { NeonButton } from "../components/buttons/NeonButton";
import { PageContainer } from "../components/PageContainer";
import { ArrowRight } from "../components/icons/ArrowRight";
import { InformationBox } from "../components/InformationBox";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Loading } from "../components/icons/Loading";
import { useEffect, useState } from "react";
import { start } from "repl";

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

  /*useEffect(() => {
    console.log("useEffect: startedWalletConnect", startedWalletConnect);
    console.log("useEffect: account.isConnected", account.isConnected);
    if (account.isConnected) {
      console.log("is now connected!");
      setStartedWalletConnect(false);
      onGoToProfile();
    }
  }, [account.isConnected]);*/

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
        <div className="flex justify-center mt-28 mb-28 sm:mb-44 ">
          <h1 className="text-6xl font-lato text-pink-400 text-shadow-neon animate-hover sm:text-7xl">
            ALLOLIANCE
          </h1>
        </div>
      </header>
      <div className="flex justify-center text-center flex-wrap gap-10">
        <InformationBox
          title="Discover the Power of Our Web3 App"
          subTitle="Our revolutionary web3 app simplifies your online experience."
          button={<NeonButton onClick={onGoToProfile}>Get started</NeonButton>}
        />
        <InformationBox
          title="Discover the Power of Our Web3 App"
          subTitle="Our revolutionary web3 app simplifies your online experience."
          button={<NeonButton onClick={onGoToProfile}>Get started</NeonButton>}
        />
        <InformationBox
          title="Discover the Power of Our Web3 App"
          subTitle="Our revolutionary web3 app simplifies your online experience."
          button={<NeonButton onClick={onGoToProfile}>Get started</NeonButton>}
        />
      </div>
    </PageContainer>
  );
};
