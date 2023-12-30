import { Page } from "../App";
import { ArrowLeft } from "./icons/ArrowLeft";
import { Button } from "./Button";
import { NeonButton } from "./NeonButton";
import { PageContainer } from "./PageContainer";
import { ArrowRight } from "./icons/ArrowRight";

type Props = {
  activePage: Page;
  onGoToProfile: () => void;
};
export const InformationPage = ({ activePage, onGoToProfile }: Props) => {
  return (
    <PageContainer
      classes={
        activePage === Page.Information ? "translate-x-0" : "-translate-x-full"
      }
    >
      <header className="flex flex-col">
        <div className="flex justify-end text-white my-4">
          <Button onClick={onGoToProfile} classes="flex items-center gap-4">
            <span>Get Started</span> <ArrowRight size="small" />
          </Button>
        </div>
        <div className="flex justify-center mt-28 mb-44">
          <h1 className="text-7xl font-lato text-pink-400 text-shadow-neon">
            ALLOLIANCE
          </h1>
        </div>
      </header>
      <div className="flex justify-center text-center">
        <div className=" px-8 md:px-16 max-w-md">
          <h4 className="text-pink-400 text-shadow-neon mb-4 text-xl">
            Discover the Power of Our Web3 App
          </h4>
          <p className="text-white mb-4 ">
            Our revolutionary web3 app simplifies your online experience.
          </p>
          <NeonButton onClick={onGoToProfile}>Get started</NeonButton>
        </div>
        <div className=" x-8 md:px-16 max-w-md">
          <h4 className="text-pink-400 text-shadow-neon mb-4 text-xl">
            Discover the Power of Our Web3 App
          </h4>
          <p className="text-white mb-4 ">
            Our revolutionary web3 app simplifies your online experience.
          </p>
          <NeonButton onClick={onGoToProfile}>Get started</NeonButton>
        </div>
        <div className=" x-8 md:px-16 max-w-md">
          <h4 className="text-pink-400 text-shadow-neon mb-4 text-xl">
            Discover the Power of Our Web3 App
          </h4>
          <p className="text-white mb-4 ">
            Our revolutionary web3 app simplifies your online experience.
          </p>
          <NeonButton onClick={onGoToProfile}>Get started</NeonButton>
        </div>
      </div>
    </PageContainer>
  );
};
