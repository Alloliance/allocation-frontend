import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { flows as ballerineFlows } from "@ballerine/web-sdk";
import ballerineConfig from "./config.ballerine";

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
    <div className="flex w-full overscroll-x-none">
      <div
        className={`w-screen absolute transition-all duration-700 h-full ${
          page === Page.Information ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={onToggleApp}
          className="text-white border rounded border-pink-400 shadow-neon py-2 px-6 bg-pink-700 bg-opacity-15 hover:bg-opacity-25"
        >
          Get started
        </button>
      </div>
      <div
        className={`p-2 w-screen absolute transition-all duration-700 h-full ${
          page === Page.Web3App ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onToggleApp}
          className="text-white border rounded border-pink-400 shadow-neon py-2 px-6 bg-pink-700 bg-opacity-15 hover:bg-opacity-25"
        >
          Back
        </button>
        <div id="my-kyc-flow" />
      </div>
    </div>
  );
}

export default App;
