import Button from "./Button";
import downloadImg from "../assets/download.png";

const SupportSection = () => {
  return (
    <div
      className="bg-grey flex flex-col items-center gap-[100px] px-[80px] py-[160px]"
      id="support"
    >
      <h2 className="text-[88px] font-light text-silver">
        Support <span className="text-fire-red font-bold">us</span>
      </h2>
      <div className="flex flex-col gap-[80px] w-full">
        <div className="flex flex-col lg:flex-row justify-between w-full items-center lg:px-[140px] xl:px-[176px] gap-6">
          <a
            className="flex flex-col items-center justify-center gap-[8px] h-[360px] w-[360px] rounded-full bg-light-grey border-2 border-jonquil group hover:border-8 transition-all relative"
            href="/downloadable_patron_and_sponsorship_information.pdf"
            download
          >
            <p className="text-[24px] group-hover:text-[22px] transition-all">
              Become a
            </p>
            <p className="font-semibold text-[48px] group-hover:text-[50px] transition-all text-center">
              founding patron
            </p>
            <img
              className="hidden group-hover:block absolute bottom-2 w-[80px]"
              src={downloadImg}
              alt=""
            />
            <div className="flex flex-col items-center justify-center gap-[10px] absolute rounded-full -left-[150px] -top-[100px] bg-jonquil h-[240px] w-[240px]">
              <p className="text-center text-[32px] font-semibold">
                3-year subscription
              </p>
              <p className="text-center">£1500 p.a. per couple</p>
            </div>
          </a>
          <a
            className="flex flex-col items-center justify-center gap-[8px] h-[360px] w-[360px] rounded-full bg-light-grey border-2 border-night group hover:border-8 transition-all relative"
            href="/downloadable_patron_and_sponsorship_information.pdf"
            download
          >
            <p className="text-[24px] group-hover:text-[22px] transition-all">
              Become a
            </p>
            <p className="font-semibold text-[48px] group-hover:text-[50px] transition-all text-center">
              business sponsor
            </p>
            <img
              className="hidden group-hover:block absolute bottom-2 w-[80px]"
              src={downloadImg}
              alt=""
            />
          </a>
        </div>
        <div className="flex flex-col justify-center gap-[30px] w-full">
          <div className="flex justify-evenly px-[80px] w-full">
            <div className="flex flex-col items-center justify-center gap-[10px]">
              <h3 className="font-bold text-[40px] tracking-tight text-black-olive">
                PRIORITY
              </h3>
              <p className="text-silver text-[32px] font-light">booking</p>
            </div>
            <div className="h-[84px] border border-silver"></div>
            <div className="flex flex-col items-center justify-center gap-[10px]">
              <h3 className="font-bold text-[40px] tracking-tight text-black-olive">
                FREE
              </h3>
              <p className="text-silver text-[32px] font-light">tickets</p>
            </div>
            <div className="h-[84px] border border-silver"></div>
            <div className="flex flex-col items-center justify-center gap-[10px]">
              <h3 className="font-bold text-[40px] tracking-tight text-black-olive">
                PRIORITY
              </h3>
              <p className="text-silver text-[32px] font-light">parking</p>
            </div>
          </div>
          <div className="flex justify-evenly px-[260px] w-full">
            <div className="flex flex-col items-center justify-center gap-[10px]">
              <h3 className="font-bold text-[40px] tracking-tight text-black-olive">
                GREEN ROOM
              </h3>
              <p className="text-silver text-[32px] font-light">entry</p>
            </div>
            <div className="h-[84px] border border-silver"></div>
            <div className="flex flex-col items-center justify-center gap-[10px]">
              <h3 className="font-bold text-[40px] tracking-tight text-black-olive">
                CORPORATE
              </h3>
              <p className="text-silver text-[32px] font-light">hospitality</p>
            </div>
          </div>
        </div>
      </div>
      <Button
        className="w-fit bg-jonquil text-night hover:bg-grey"
        href="mailto:festivalproducer@lakedistrictbookfestival.co.uk"
        initialWord="Questions?"
        hoverWord="Email us"
      />
    </div>
  );
};

export default SupportSection;
