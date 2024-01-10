import { useState } from "react";
import { Page } from "../App";
import { Button } from "../components/buttons/Button";
import { GridRow } from "../components/GridRow";
import { ArrowLeft } from "../components/icons/ArrowLeft";
import { Checkmark } from "../components/icons/Checkmark";
import { Loading } from "../components/icons/Loading";
import { PageContainer } from "../components/PageContainer";

import { useAccount } from "wagmi";
import { useAccountModal } from "@rainbow-me/rainbowkit";
import axios from "axios";

export enum VERIFICATION_STATUS {
  VERIFIED,
  WAITING,
  NOT_VERIFIED,
}

const convertVerificationStatus = (status: string) => {
  switch (status) {
    case "SUCCESSFUL":
      return VERIFICATION_STATUS.VERIFIED;
    case "SUBMITTED":
      return VERIFICATION_STATUS.WAITING;
    default:
      return VERIFICATION_STATUS.NOT_VERIFIED;
  }
};

type Props = {
  activePage: Page;
  onGoBackToInformationPage: () => void;
  onGoToVerifyPage: () => void;
};

export const ProfilePage = ({
  activePage,
  onGoBackToInformationPage,
  onGoToVerifyPage,
}: Props) => {
  const [verififcationStatus, setVerififcationStatus] = useState(
    VERIFICATION_STATUS.NOT_VERIFIED
  );
  const account = useAccount();
  const { openAccountModal } = useAccountModal();

  /*if (account.address) {
    axios
      .post("https://2e00-200-61-165-188.ngrok-free.app/v1/user/status", {
        wallet_address: account.address,
      })
      .then(({ data }) => {
        console.log(data);
        setVerififcationStatus(convertVerificationStatus(data));
      });
  }*/

  const getTranslateClass = () => {
    if (activePage === Page.Profile) return "translate-x-0";
    if (activePage === Page.Verify) return "translate-x-0";
    return "translate-x-full";
  };

  const getVerifiedStatus = () => {
    if (verififcationStatus === VERIFICATION_STATUS.WAITING)
      return (
        <>
          <Loading /> <span>verifying..</span>
        </>
      );
    if (verififcationStatus === VERIFICATION_STATUS.VERIFIED)
      return (
        <>
          <Checkmark /> <span>verified</span>
        </>
      );
    if (verififcationStatus === VERIFICATION_STATUS.NOT_VERIFIED)
      return <span>not verified</span>;
  };

  // Dummy code
  const onClickChangeVerififcationStatus = () => {
    if (verififcationStatus === VERIFICATION_STATUS.WAITING)
      return setVerififcationStatus(VERIFICATION_STATUS.VERIFIED);
    if (verififcationStatus === VERIFICATION_STATUS.VERIFIED)
      return setVerififcationStatus(VERIFICATION_STATUS.NOT_VERIFIED);
    if (verififcationStatus === VERIFICATION_STATUS.NOT_VERIFIED)
      return setVerififcationStatus(VERIFICATION_STATUS.WAITING);
  };

  return (
    <PageContainer classes={getTranslateClass()} showSecondBlob>
      <div className="flex text-white my-4 justify-between">
        <Button
          onClick={onGoBackToInformationPage}
          classes="flex items-center gap-3"
        >
          <ArrowLeft size="small" />
          <span>Go back</span>
        </Button>
        {openAccountModal ? (
          <Button onClick={openAccountModal} classes="flex items-center gap-3">
            Wallet account
          </Button>
        ) : null}
      </div>
      <div className="flex flex-col mx-auto w-full lg:w-[1000px] ">
        <h1 className="text-6xl text-right font-lato text-pink-400 text-shadow-neon mx-6 sm:mx-20 relative top-5">
          PROFILE
        </h1>
        <div className="text-pink-50 mx-4">
          <div className="bg-black-50 rounded-lg text-white pt-8 pb-6 px-8 flex flex-col-reverse gap-2  md:flex-row md:gap-24">
            <div className="w-full min-w-52 flex-row">
              <h4 className="text-4xl">Anders Andersson</h4>
              <div className="grid grid-cols-5 mt-8 gap-2 ">
                <GridRow leftColumn="Address:" rightColumn="123-456-789" />
                <GridRow
                  leftColumn="Email:"
                  rightColumn="anders@andersson.com"
                />
                <GridRow
                  leftColumn="Phone number:"
                  rightColumn="1-955-930-5769 3247"
                />
                <GridRow
                  leftColumn="Connected with:"
                  rightColumn={account.connector?.name ?? "Not found"}
                />
              </div>
              <div className="mt-8 justify-self-end">
                <p>
                  bunch on profile information, and more, and more, and more,
                  and MORE, aaaand MOOOORE!
                </p>
                <p>And now it has ended.</p>
              </div>
            </div>
            <div className="md:m-10 md:my-auto mb-0 flex flex-col md:items-center sm:items-end  items-center md:relative md:bottom-6">
              <img
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="object-cover w-52 h-52 max-w-none border-6 border-purple-900"
              />
              <div
                className="flex gap-2 mt-2 mr-3 sm:self-end"
                onClick={onClickChangeVerififcationStatus}
              >
                {getVerifiedStatus()}
              </div>
            </div>
          </div>

          {verififcationStatus === VERIFICATION_STATUS.NOT_VERIFIED ? (
            <div className="text-xl flex justify-end relative bottom-6">
              <Button onClick={onGoToVerifyPage} size="large">
                VERIFY
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </PageContainer>
  );
};
