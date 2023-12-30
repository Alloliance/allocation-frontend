import { Page } from "../App";
import { BackArrow } from "./BackArrow";
import { PageContainer } from "./PageContainer";

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
  const getTranslateClass = () => {
    if (activePage === Page.Profile) return "translate-x-0";
    if (activePage === Page.Verify) return "-translate-y-full";
    return "translate-x-full";
  };
  return (
    <PageContainer classes={getTranslateClass()}>
      <BackArrow onClick={onGoBackToInformationPage} />
      <div className="flex justify-center h-full">
        <div className="text-pink-50 w-4/5">
          <h1 className="text-6xl font-lato text-pink-400 text-shadow-neon pl-8 relative top-4">
            PROFILE
          </h1>
          <div className="border-8 border-purple-700 rounded text-black h-64 bg-white p-4">
            bunch on profile information
          </div>
          <div className="flex justify-end relative bottom-6">
            <button
              className="text-2xl mx-6 bg-pink-500 px-16 py-2 rounded-full bg-gradient-to-r from-pink-700 to-pink-500"
              onClick={onGoToVerifyPage}
            >
              VERIFY
            </button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
