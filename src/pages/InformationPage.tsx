import { Page } from "../App";
import { Button } from "../components/buttons/Button";
import { NeonButton } from "../components/buttons/NeonButton";
import { PageContainer } from "../components/PageContainer";
import { ArrowRight } from "../components/icons/ArrowRight";
import { InformationBox } from "../components/InformationBox";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Loading } from "../components/icons/Loading";

type Props = {
  activePage: Page;
  onGoToProfile: () => void;
};

export const InformationPage = ({ activePage, onGoToProfile }: Props) => {
  const account = useAccount();

  // add state that keeps track of connecting,
  // add useEffect that triggers when account.isconnected is changed.
  // When state is connecting but it changes to isConnected - trigger move to profile page

  const customConnectWalletButton = ({
    account,
    chain,
    openConnectModal,
    authenticationStatus,
    mounted,
  }: any) => {
    console.log("customConnectWalletButton");
    console.log("account", account);
    console.log("chain", chain);
    console.log("authenticationStatus", authenticationStatus);
    console.log("mounted", mounted);
    const loading = authenticationStatus === "loading";
    if (loading) {
      console.log("LOADING");
      return (
        <Button onClick={openConnectModal} classes="flex items-center gap-2">
          <Loading />
          <span>Connecting..</span>
        </Button>
      );
    }

    const ready = mounted && !loading;
    const connected =
      ready &&
      account &&
      chain &&
      (!authenticationStatus || authenticationStatus === "authenticated");

    if (connected) {
      console.log("DONE!");
      onGoToProfile();
    }

    return (
      <Button onClick={openConnectModal} classes="flex items-center gap-2">
        Connect Wallet
      </Button>
    );
  };

  const getStartButton = () => {
    if (account.isConnecting)
      return (
        <Button onClick={() => {}} classes="flex items-center gap-2">
          <Loading />
          <span>Connecting..</span>
        </Button>
      );

    if (account.isConnected)
      return (
        <Button onClick={onGoToProfile} classes="flex items-center gap-2">
          <span>To your profile</span> <ArrowRight size="small" />
        </Button>
      );

    return (
      <ConnectButton.Custom>{customConnectWalletButton}</ConnectButton.Custom>
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
