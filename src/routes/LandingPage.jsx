import "../../src/App.css";
import MainBanner from "../components/landingPage/MainBanner";
import MainCollectionsBoard from "../components/landingPage/MainCollectionsBoard";
import MainCompanyLogo from "../components/landingPage/MainCompanyLogo";

function LandingPage() {
  return (
    <div className="layoutPage">
      <div
        className="mainContentArea"
        class="flex flex-col justify-center w-auto h-auto gap-[3rem]"
      >
        <MainBanner />
        <MainCollectionsBoard />
        {/* <MainCompanyLogo /> */}
      </div>
    </div>
  );
}

export default LandingPage;
