import { Page } from "../App";
import { Button } from "./Button";
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
      <h1 className="text-white text-xl">profile</h1>
      <Button onClick={onGoBackToInformationPage}>BACK</Button>
      <Button onClick={onGoToVerifyPage}>VERIFY</Button>
    </PageContainer>
  );
};
