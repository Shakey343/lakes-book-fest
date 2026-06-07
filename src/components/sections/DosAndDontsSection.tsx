import Button from "../Button";
import Container from "../Container";

const DosAndDontsSection = () => {
  return (
    <Container className="py-[100px] sm:pt-20 pb-32 bg-light-grey text-center">
      {/* Heading */}
      <div className="max-w-4xl mx-auto mb-24">
        <h2 className="text-[44px] font-thin leading-none mb-8">
          Festival Information
        </h2>

        <div className="w-20 h-[1px] bg-jonquil mx-auto mb-8" />

        <p className="text-sm md:text-lg">
          Everything you need to know before arriving at The Lake District Book
          Festival.
        </p>
      </div>

      {/* Accessibility */}
      <section className="max-w-3xl mx-auto mb-20">
        <h3 className="font-adelphi text-3xl mb-6">Accessibility</h3>

        <p className="text-sm md:text-lg leading-relaxed">
          All festival venues are wheelchair accessible.
        </p>

        <p className="text-sm md:text-lg leading-relaxed mt-4">
          If you have any specific requirements, please contact us before the
          festival and we will be happy to help.
        </p>

        <a
          href="mailto:festivalproducer@lakedistrictbookfestival.co.uk"
          className="inline-block mt-6 text-jonquil hover:text-jonquil/80"
        >
          festivalproducer@lakedistrictbookfestival.co.uk
        </a>
      </section>

      {/* Dogs */}
      <section className="max-w-3xl mx-auto mb-20">
        <h3 className="font-adelphi text-3xl mb-6">Dogs</h3>

        <p className="text-sm md:text-lg leading-relaxed">
          Dogs are welcome on the festival site but, with the exception of
          service dogs, are not permitted inside talks or events.
        </p>

        <p className="text-sm md:text-lg mt-4">
          Please clean up after your dog.
        </p>
      </section>

      {/* Parking */}
      <section className="max-w-4xl mx-auto mb-20">
        <h3 className="font-adelphi text-3xl mb-6">Parking</h3>

        <p className="text-sm md:text-lg leading-relaxed">
          Festival parking is available at Cartmel Racecourse.
        </p>

        <p className="text-sm md:text-lg mt-4">
          £5 per vehicle, per day.
        </p>

        <p className="text-sm md:text-lg mt-4">
          We strongly recommend booking in advance.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
          <Button
            className="bg-jonquil text-night hover:bg-light-grey hover:text-night hover:ring-night"
            initialWord="Friday Parking"
            hoverWord="Friday Parking"
            href="https://events.lakedistrictbookfestival.co.uk/events/thelakedistrictbookfestival/2242194"
          />

          <Button
            className="bg-jonquil text-night hover:bg-light-grey hover:text-night hover:ring-night"
            initialWord="Saturday Parking"
            hoverWord="Saturday Parking"
            href="https://events.lakedistrictbookfestival.co.uk/events/thelakedistrictbookfestival/2242202"
          />

          <Button
            className="bg-jonquil text-night hover:bg-light-grey hover:text-night hover:ring-night"
            initialWord="Sunday Parking"
            hoverWord="Sunday Parking"
            href="https://events.lakedistrictbookfestival.co.uk/events/thelakedistrictbookfestival/2242203"
          />
        </div>
      </section>

      {/* Tickets */}
      <section className="max-w-3xl mx-auto mb-20">
        <h3 className="font-adelphi text-3xl mb-6">Tickets</h3>

        <p className="text-sm md:text-lg leading-relaxed">
          Tickets are sold individually for each event.
        </p>

        <p className="text-sm md:text-lg mt-4">
          We recommend booking online in advance wherever possible.
        </p>

        <p className="text-sm md:text-lg mt-4">
          Availability on the day cannot be guaranteed.
        </p>
      </section>

      {/* Travel */}
      <section className="max-w-4xl mx-auto">
        <h3 className="font-adelphi text-3xl mb-10">Travel</h3>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="font-adelphi text-xl mb-4 text-jonquil">
              By Taxi
            </h4>

            <p className="text-sm md:text-lg leading-relaxed">
              There are plenty of taxis available at Oxenholme station.
            </p>

            <p className="text-sm md:text-lg mt-4">
              Information for local taxi services around Cark and Cartmel will
              also be available during the festival.
            </p>
          </div>

          <div>
            <h4 className="font-adelphi text-xl mb-4 text-jonquil">
              By Car
            </h4>

            <p className="text-sm md:text-lg leading-relaxed">
              Please avoid driving through Cartmel village where possible.
            </p>

            <p className="text-sm md:text-lg mt-4">
              The easiest route is via the A590 and Cartmel Racecourse.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default DosAndDontsSection;
