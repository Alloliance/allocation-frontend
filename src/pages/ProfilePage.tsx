import { Page } from "../App";
import { Button } from "../components/buttons/Button";
import { ArrowLeft } from "../components/icons/ArrowLeft";
import { ArrowRight } from "../components/icons/ArrowRight";
import { Checkmark } from "../components/icons/Checkmark";
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
      <div className="flex text-white my-4">
        <Button
          onClick={onGoBackToInformationPage}
          classes="flex items-center gap-3"
        >
          <ArrowLeft size="small" />
          <span>Go back</span>
        </Button>
      </div>
      <div className="flex justify-center h-full">
        <div className="text-pink-50 w-4/5">
          <h1 className="text-6xl text-right font-lato text-pink-400 text-shadow-neon relative top-4 right-14">
            PROFILE
          </h1>
          <div className="bg-black-transparent rounded-lg text-white h-96 pt-8 pb-4 px-8 flex gap-2">
            <div className="w-full min-w-52 flex-column">
              <div className="flex gap-2 items-start">
                <h4 className="text-4xl">Agnes Fransson</h4>

                <Checkmark />
              </div>
              <div className="grid grid-cols-4 mt-8 gap-2 ">
                <div>Address:</div>
                <div className="col-span-3">
                  <div className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                    123-456-789
                  </div>
                </div>
                <div>Other:</div>
                <div className="col-span-3">
                  <div className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                    Banana-pineapple-grapefruit
                  </div>
                </div>
              </div>
              <div className="mt-8 justify-self-end">
                <p>
                  bunch on profile information, and more, and more, and more,
                  and MORE, aaaand MOOOORE!
                </p>
                <p>And now it has ended.</p>
              </div>
            </div>
            <div className=" w-92 m-10 my-auto ">
              <img
                src="https://lh3.googleusercontent.com/pw/ABLVV86Xfrcf9pgUT0ZPaasqppLxqoV_PEc2aWxFLiHXysLiARwcjMfeAu8TTMFcUxBEbREbXQ7rX-z9HGQO4C2EGCsWfK7Te8zTW0yQq8D-dpuxVmKRR3xzVV_0SBlnx-TNF1nrHoqIKuX-26JilWBbcSRT57BazCBoYvEUOMLo-4m0nkv8b_B2C99EaxAc3lf8n9khY3iodQl-IvTvqEJN1dOa8Jhw4cSGjcvsNs2nW_-e5BI9Q9X2L4PS80QrEyVnI8k6fOMljUcW2ixm7IfAfWbiW1Z1BDaoq0BEx6qoIbUiRTPAkpqpeDRwcfXLHNU-raOhvahTOqLrwKosEpFu9KXqcQ7-uyF7EqN5fIi6HaoG5wUPOpcucV2oX5t5h729P_sDKPlwOUhYKHkHbCeRzCMxrrY-d2dTyTC1IbbIGK736unO0WdBjp2SFdEXe1bKou3Tw4Mrp_o-M8Zenwj61dFevyTnsp73kMGSC9IrYkytSbZ1x19idWWQh069iAYlW-o40ssAmBeNpg1rtrmu6ARwSFGI8jrO_dPlAiUIvV6FemUjvp0ytgOJnHdt-yVx11GC3QV0D8gHiaxaKpbg1zXkjk8DZ-P8sY2oo9vnRQhUqWyDHkKHnvt3vi5JFOqmbFO1TglvYKWpcB86BDg4TVvlY-9IXUlI-YptjnkTfCekQtb-nGsHZZ1mPn_mguyc8Hxdc_ijllCaDy6WQcdEB4-hHH3gqrij__9N2VJDemf3s5wGGNIukrmTrySoievZ0O7KrAcT5dPq44Gmdc09v1PQ519tCm_XiWKKwK4nEw4X-YW30ar3-Vx660KhTWzKfgM626fK1dhdTclVZPxKPaoVb7C90VpTiF7kTL4Jrb9AKm-picjsXbCs9SvLvuswDmSF1vDhPdcA5ODVcoiH9Uo05ShifeXXtl1qkFJ5=w2288-h1716-s-no-gm?authuser=0"
                className="object-cover w-52 h-52 max-w-none border-6 border-purple-900"
              />
              <div className="flex gap-2 mt-2 justify-end">
                <Checkmark />
                verified
              </div>
            </div>
          </div>
          <div className="flex justify-end relative bottom-6">
            <Button onClick={onGoToVerifyPage}>VERIFY</Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
//                src="https://lh3.googleusercontent.com/pw/ABLVV85QzcXqci6cs60zb2TStmzqQKrD-C86VBGJ017Kbe92R36yMhJAYKMGWtfEhLxOcqoO1FuQngqXQhofsxqTjaTslCKrDzukKUU4hz-KdDBflDeLg8yRbFCoD_u0iqH1svGZB3UJV45dTFIr24Mvir3UbI0mtPUWs0nc84L1WHLnEmpxmTyJOsWOkrMNt63PnTICiFJp191y0UESBSxVL64wE0jC1PvKlLylS0hJKqpfcCkITJWA8YKoqqd1awx09X90fKW782RxaS27S6M_4qVrYsIWugI0FXzenNjd-i3oJ0UVUYn9M4_PUxIsLvoRYJTMtEMzgEM5uLhp_lZfdDuuQN6X78onskg3Td1rbZIGfBWi4jadzX38rD5LBYif26PmkOMRrhwfWUgEHfX-8c2uQ8jMCx9gjCdwlN0rkL1Fa8oBJ62hDqbUtH9ILdqbS_g4T45jFzIflRmqZD05rtFcf0m_lD5b0806UqEzoVBAY59V8knMb6aoOx1rHglu2nrTwWUK8KXA7rJkzH6oLbhrceOV6G_lNde36MQpPQuH8gK5hDOviYRbbSl88_-f254hcZ_gphaSUr-lOu8IHTIdRnE_anpYqcXpMZ4GzEGmx3xLO8QifCYcqqBr5sBlNa9PlJtadeFTORKYEN7PExtFDvuqXmaPMgRpupoNTiQ29kOexcZrFDU97HH9polVMK37Q4bRXhxvPMj-yooVyfyFIKo0D8jOLF9bsjSWQlMUrlsTdfXOOsgpyZ_UZ5B_qMictEHCx5DP7W04HVCkrxsWKIX50ogHmM4cot4Toy_nUhJF_Sn3Nm5biJBYlFLpGxGePtx1iLSY-4EduqO6dZXRrPMYWa4MJW-Bpe6gNdzTUq0D_u8wmZie1SLKePccv80_vFIJYGJRZeUlGk9ixC5i_IRVQMV_soc3fdkO=w1288-h1716-s-no-gm?authuser=0"
