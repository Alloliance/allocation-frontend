import { Page } from "../App";
import { Button } from "./Button";
import { PageContainer } from "./PageContainer";
import { flows as ballerineFlows } from "@ballerine/web-sdk";
import ballerineConfig from "../config.ballerine";
import { useEffect } from "react";

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
    <PageContainer
      classes={
        activePage === Page.Verify ? "translate-y-0" : "translate-y-full"
      }
    >
      <Button onClick={onGoBackToProfilePage}>BACK</Button>
      <div id="my-kyc-flow" />
    </PageContainer>
  );
};
