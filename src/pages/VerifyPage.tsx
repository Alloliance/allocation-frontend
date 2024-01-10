import { Page } from "../App";
import { flows as ballerineFlows } from "@ballerine/web-sdk";
import ballerineConfig from "../config.ballerine";
import { useEffect, useState } from "react";
import { Close } from "../components/icons/Close";
import { useAccount } from "wagmi";

type Props = {
  activePage: Page;
  onGoBackToProfilePage: () => void;
};
export const VerifyPage = ({ activePage, onGoBackToProfilePage }: Props) => {
  const [animationFinished, setAnimationFinished] = useState(false);
  const account = useAccount();
  console.log(account);

  const startBallerineFlow = async () => {
    if (account.address) {
      await ballerineFlows
        .init({
          ...ballerineConfig,
          endUserInfo: {
            id: account.address?.toString(),
          },
        })
        .then(() => {
          console.log("flow is ready!");
        });
      ballerineFlows.mount({
        flowName: "my-kyc-flow",
        useModal: false,
        elementId: "my-kyc-flow",
      });
    }
    console.error(
      "Could not inisiate Ballerine flow because users wallet address is missing."
    );
  };

  useEffect(() => {
    startBallerineFlow();
  }, []);

  useEffect(() => {
    if (activePage !== Page.Verify) {
      setTimeout(() => setAnimationFinished(true), 1000);
    } else {
      setAnimationFinished(false);
    }
  }, [activePage]);

  return (
    <div
      className={`bg-black-90 w-screen absolute transition-opacity duration-1000 h-full  ${
        activePage === Page.Verify ? "opacity-100 z-0" : "opacity-0 "
      } ${animationFinished ? "-z-10" : ""}`}
    >
      <div className="flex justify-e text-white my-4">
        <button
          className={`mx-4 h-10 w-10 rounded-full bg-gradient-to-r from-pink-700 to-pink-500 hoverfrom-pink-600 hover:to-pink-400`}
          onClick={onGoBackToProfilePage}
        >
          <div className="absolute top-6 left-6">
            <Close />
          </div>
        </button>
      </div>
      <div id="my-kyc-flow" />
    </div>
  );
};

/**
 * <ArrowUp onClick={onGoBackToProfilePage} size="large" />
      <div id="my-kyc-flow" />
 */
