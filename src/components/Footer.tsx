import Container from "./Container";
import Socials from "./Socials";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <Container
        className="py-[32px] bg-night/80 flex flex-col lg:flex-row justify-between"
        id="contact"
      >
        <div className="text-jonquil lg:w-1/3 w-full text-center lg:text-left my-8">
          <h2 className="text-[32px] font-light mb-[20px]">Contact us</h2>
          <p className="leading-relaxed">
            The Lake District Book Festival
            <br />
            Kelleth Old Hall
            <br />
            Penrith
            <br />
            CA10 3UG
          </p>
          <p className="mt-4">festivalproducer@lakedistrictbookfestival.co.uk</p>
        </div>
        <div className="flex flex-col justify-between gap-[6px] items-center text-white lg:w-1/3 w-full lg:h-[300px] my-8 lg:mb-0">
          <Socials />
          <div className="text-center">
            <p className="font-light text-silver">
              ©️ 2024 The Lake District Book Festival.
            </p>
            <p>
              Made with ❤️ by{" "}
              <a
                href="https://github.com/Shakey343"
                target="_blank"
                className="font-medium hover:text-jonquil transition-all"
              >
                Jake Pople
              </a>
            </p>
          </div>
        </div>
        <div className="text-jonquil lg:w-1/3 w-full flex flex-col items-center lg:items-end order-first lg:order-none my-8">
          <Subscribe />
        </div>
      </Container>
  )
}
export default Footer;
