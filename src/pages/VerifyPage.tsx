import { Page } from "../App";
import { flows as ballerineFlows } from "@ballerine/web-sdk";
import ballerineConfig from "../config.ballerine";
import { useEffect } from "react";
import { ArrowUp } from "../components/icons/BackArrowUp";
import { PageContainer } from "../components/PageContainer";

type Props = {
  activePage: Page;
  onGoBackToProfilePage: () => void;
};
export const VerifyPage = ({ activePage, onGoBackToProfilePage }: Props) => {
  const doSomethingFn = (data: any) => {
    console.log("User finished ballerine flow!", data);
  };

  const startBallerineFlow = async () => {
    await ballerineFlows.init(ballerineConfig).then(() => {
      console.log("flow is ready!");
    });
    ballerineFlows.mount({
      flowName: "my-kyc-flow",
      useModal: false,
      elementId: "my-kyc-flow",
    });
    // 3. Mount selected flow on an element
    // ballerineFlows.mount("my-kyc-flow", "flow-host-element", {});
    // 4. Listen to finish event (see events)
    // ballerineFlows.on("finish", doSomethingFn);
  };

  useEffect(() => {
    startBallerineFlow();
  }, []);

  return (
    <div
      className={`border border-black bg-black-transparent w-screen absolute transition-opacity duration-700 h-full  ${
        activePage === Page.Verify ? "opacity-100 block" : "opacity-0 hidden"
      }`}
    >
      <ArrowUp onClick={onGoBackToProfilePage} size="large" />
      <div id="my-kyc-flow" />
    </div>
  );
};
/**
 * 
      
 */
