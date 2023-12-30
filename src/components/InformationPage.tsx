import { PropsWithChildren } from "react";
import { Page } from "../App";
import { Button } from "./Button";
import { PageContainer } from "./PageContainer";

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
      <header className="my-44 ml-44 text-7xl font-lato	 text-pink-400 text-shadow-neon ">
        ALLOLIANCE
      </header>
      <div className="flex justify-center text-center">
        <div className=" px-8 md:px-16 max-w-md">
          <h4 className="text-pink-400 text-shadow-neon mb-4 text-xl">
            Discover the Power of Our Web3 App
          </h4>
          <p className="text-white mb-4 ">
            Our revolutionary web3 app simplifies your online experience.
          </p>
          <Button onClick={onGoToProfile}>Get started</Button>
        </div>
        <div className=" x-8 md:px-16 max-w-md">
          <h4 className="text-pink-400 text-shadow-neon mb-4 text-xl">
            Discover the Power of Our Web3 App
          </h4>
          <p className="text-white mb-4 ">
            Our revolutionary web3 app simplifies your online experience.
          </p>
          <Button onClick={onGoToProfile}>Get started</Button>
        </div>
        <div className=" x-8 md:px-16 max-w-md">
          <h4 className="text-pink-400 text-shadow-neon mb-4 text-xl">
            Discover the Power of Our Web3 App
          </h4>
          <p className="text-white mb-4 ">
            Our revolutionary web3 app simplifies your online experience.
          </p>
          <Button onClick={onGoToProfile}>Get started</Button>
        </div>
      </div>
    </PageContainer>
  );
};
