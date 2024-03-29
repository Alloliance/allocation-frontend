import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
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
  previousPage: Page;
  onGoBackToInformationPage: () => void;
  onGoToVerifyPage: () => void;

  email: string;
  setEmail: Dispatch<SetStateAction<string>>;

  profile: string;
  setProfile: Dispatch<SetStateAction<string>>;
};

export const ProfilePage = ({
  activePage,
  previousPage,
  onGoBackToInformationPage,
  onGoToVerifyPage,
  setEmail,
  email,
  setProfile,
  profile,
}: Props) => {
  const [verififcationStatus, setVerififcationStatus] = useState(
    VERIFICATION_STATUS.NOT_VERIFIED
  );
  const [startAnimation, setStartAnimation] = useState(false);
  const [showClass, setShowClass] = useState(
    activePage === (Page.Profile || Page.Verify)
      ? "translate-x-full"
      : "translate-x-0"
  );
  const animationRef = useRef<HTMLElement | null>(null);

  const account = useAccount();
  const { openAccountModal } = useAccountModal();

  useEffect(() => {
    const getStatus = async () => {
      if (account.address) {
        try {
          const res = await axios.post(
            "https://alloliance-server.onrender.com/v1/user/status",
            JSON.stringify({
              wallet_address: account.address,
            }),
            { headers: { "Content-Type": "application/json" } }
          );
          setVerififcationStatus(convertVerificationStatus(res.data));
        } catch (err) {
          console.error("error in axios", err);
        }
      }
    };
    getStatus();
  }, []);

  useEffect(() => {
    console.log("loaded profile page - start animation");
    console.log("loaded on class:", showClass);
    setStartAnimation(true);
  }, []);

  useEffect(() => {
    if (startAnimation) {
      console.log(
        "Inside Profile page: activePage, previousPage has been updated"
      );
      console.log("activePage:", activePage);
      console.log("previousPage:", previousPage);
      console.log("from class:", showClass);
      // Active page and animation has started/component has loaded = change so that it shows
      if (activePage === (Page.Profile || Page.Verify)) {
        setShowClass("translate-x-0");
      }
      if (previousPage === Page.Profile) {
        setShowClass("translate-x-full");
      }
      console.log("to class:", showClass);
    }
  }, [activePage, previousPage, startAnimation]);

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
    <PageContainer classes={showClass} ref={animationRef}>
      <div className="flex text-white my-4 justify-between ">
        <Button
          onClick={onGoBackToInformationPage}
          classes="flex items-center gap-3 px-3 sm:px-8 sm:py-2 py-1"
        >
          <ArrowLeft size="small" />
          <span>Go back</span>
        </Button>
        {openAccountModal ? (
          <Button onClick={openAccountModal} classes="flex items-center ">
            Wallet account
          </Button>
        ) : null}
      </div>
      <div className="flex flex-col mx-auto w-full lg:w-[1000px] ">
        <h1 className="text-6xl text-right font-lato text-pink-400 text-shadow-neon mx-6 sm:mx-20 relative top-5">
          PROFILE
        </h1>
        <div className="text-pink-50 mx-4">
          <div className="bg-black-50 rounded-lg text-white pt-8 sm:pb-6 pb-10 px-8 flex flex-col-reverse gap-2  md:flex-row md:gap-24">
            <div className="w-full min-w-52 flex-row">
              <h4 className="text-4xl">Anders Andersson</h4>
              <div className="grid grid-cols-5 mt-8 gap-2 ">
                <GridRow
                  leftColumn="Email:"
                  rightColumn={
                    <input
                      type="email"
                      value={email}
                      placeholder="anders@andersson.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  }
                />
                <GridRow
                  leftColumn="Connected with:"
                  rightColumn={account.connector?.name ?? "Not found"}
                />
                <GridRow
                  leftColumn="Profile Id:"
                  rightColumn={
                    <input
                      type="text"
                      value={profile}
                      placeholder="0x3078e6f83e3f3e6f3e6f36e63f30e63f36e5366336633666323037343635373"
                      onChange={(e) => setProfile(e.target.value)}
                    />
                  }
                />
              </div>
              <div className="mt-8 justify-self-end">
                <p>1. Connect your wallet</p>
                <p>2. Enter your email address</p>
                <p>3. Enter your Allo profile ID</p>
                <p>4. Start your KYC application</p>
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
