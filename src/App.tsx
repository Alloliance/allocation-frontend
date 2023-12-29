import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { flows as ballerineFlows } from "@ballerine/web-sdk";
import ballerineConfig from "./config.ballerine";
import { Button } from "./components/button";
import { PageContainer } from "./components/PageContainer";

enum Page {
  Information,
  Web3App,
}

function App() {
  const [page, setPage] = useState(Page.Information);

  const onToggleApp = () => {
    setPage(page === Page.Information ? Page.Web3App : Page.Information);
  };

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
    <div className="flex w-full overscroll-x-none font-mono">
      <PageContainer
        classes={
          page === Page.Information ? "translate-x-0" : "-translate-x-full"
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
            <Button onClick={onToggleApp}>Get started</Button>
          </div>
          <div className=" x-8 md:px-16 max-w-md">
            <h4 className="text-pink-400 text-shadow-neon mb-4 text-xl">
              Discover the Power of Our Web3 App
            </h4>
            <p className="text-white mb-4 ">
              Our revolutionary web3 app simplifies your online experience.
            </p>
            <Button onClick={onToggleApp}>Get started</Button>
          </div>
          <div className=" x-8 md:px-16 max-w-md">
            <h4 className="text-pink-400 text-shadow-neon mb-4 text-xl">
              Discover the Power of Our Web3 App
            </h4>
            <p className="text-white mb-4 ">
              Our revolutionary web3 app simplifies your online experience.
            </p>
            <Button onClick={onToggleApp}>Get started</Button>
          </div>
        </div>
      </PageContainer>
      <PageContainer
        classes={page === Page.Web3App ? "translate-x-0" : "translate-x-full"}
      >
        <Button onClick={onToggleApp}>BACK</Button>
        <div id="my-kyc-flow" />
      </PageContainer>
    </div>
  );
}

export default App;
