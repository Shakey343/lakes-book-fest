import bookImg from "../../assets/school_book.png";
import Container from "../Container";

const SchoolsPage = () => {
  return (
    <>
      <Container
        className="mt-[80px] py-[80px] pb-[120px] bg-map-grey flex flex-col md:flex-row md:items-start gap-[40px] lg:gap-[60px] text-center sm:text-left text-night"
        id="schools"
      >
        <div className="flex flex-col gap-[60px] flex-1 min-w-0">
          <div className="flex flex-col gap-[12px]">
            <h2 className="text-night font-light text-[44px] uppercase">
              Cumbria Young Readers
            </h2>
            <p className="text-contact-night italic text-[24px]">
              The next chapter...
            </p>
          </div>
          <div className="md:text-[18px] lg:text-[22px] leading-loose tracking-wide flex flex-col gap-[32px]">
            <p>
              An intrinsic part of the festival is the provision of a schools
              programme that will share the benefits of the festival with young
              writers, artists and opinion-formers of the future.
            </p>
            <ul className="list-disc pl-[24px] flex flex-col gap-[16px] text-left">
              <li>
                <span className="text-night font-semibold">
                  Partner schools:
                </span>{" "}
                Cartmel CofE, Ulverston Victoria, Dallam School & St Bernard's,
                Barrow
              </li>
              <li>
                <span className="text-night font-semibold">Author visits:</span>{" "}
                talks in partner schools by grown-up and successful authors such
                as Anthony McGowan (autumn 2026) & Lee Child (spring 2027)
              </li>
              <li>
                <span className="text-night font-semibold">Author talks:</span>{" "}
                authors' lives, their practice, their inspirations.
              </li>
              <li>
                <span className="text-night font-semibold">Volunteering:</span>{" "}
                opportunity for students to take part in the delivery of the
                Festival itself. In 2026, 98 student volunteers enrolled as
                stewards, guides & runners.
              </li>
              <li>
                <span className="text-night font-semibold">
                  Cumbria Young Readers' Mission:
                </span>{" "}
                to transport 14-18 year old students beyond the school walls and
                give a sense of the tremendous possibility of the written and
                spoken word - and its critical importance to a functioning
                society.
              </li>
            </ul>
          </div>
        </div>
        <img
          src={bookImg}
          alt=""
          className="hidden md:block shrink-0 self-start h-[300px] lg:h-[480px] w-auto"
        />
      </Container>
    </>
  );
};

export default SchoolsPage;
