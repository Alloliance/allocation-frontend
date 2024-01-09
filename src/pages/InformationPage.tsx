import { Page } from "../App";
import { Button } from "../components/buttons/Button";
import { NeonButton } from "../components/buttons/NeonButton";
import { PageContainer } from "../components/PageContainer";
import { ArrowRight } from "../components/icons/ArrowRight";
import { InformationBox } from "../components/InformationBox";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

type Props = {
  activePage: Page;
  onGoToProfile: () => void;
};

export const InformationPage = ({ activePage, onGoToProfile }: Props) => {
  const account = useAccount();
  return (
    <PageContainer
      classes={
        activePage === Page.Information ? "translate-x-0" : "-translate-x-full"
      }
    >
      <header className="flex flex-col">
        <div className="flex justify-end text-white my-4">
          {account.isConnected ? (
            <Button onClick={onGoToProfile} classes="flex items-center gap-2">
              <span>Get Started</span> <ArrowRight size="small" />
            </Button>
          ) : (
            <ConnectButton.Custom>
              {({ openConnectModal }) => {
                return (
                  <Button
                    onClick={openConnectModal}
                    classes="flex items-center gap-2"
                  >
                    Connect Wallet
                  </Button>
                );
              }}
            </ConnectButton.Custom>
          )}
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
