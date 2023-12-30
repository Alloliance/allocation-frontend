import { Page } from "../App";
import { Button } from "../components/buttons/Button";
import { ArrowLeft } from "../components/icons/ArrowLeft";
import { PageContainer } from "../components/PageContainer";

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
    if (activePage === Page.Verify) return "translate-x-0";
    return "translate-x-full";
  };
  return (
    <PageContainer classes={getTranslateClass()}>
      <ArrowLeft size="large" onClick={onGoBackToInformationPage} />
      <div className="flex justify-center h-full">
        <div className="text-pink-50 w-4/5">
          <h1 className="text-6xl font-lato text-pink-400 text-shadow-neon pl-8 relative top-4">
            PROFILE
          </h1>
          <div className="border-8 border-purple-700 rounded text-black h-64  p-4 bg-gradient-to-r from-violet-100 to-violet-200 ">
            bunch on profile information
          </div>
          <div className="flex justify-end relative bottom-6">
            <Button onClick={onGoToVerifyPage}>VERIFY</Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
