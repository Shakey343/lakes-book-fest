// import Button from "../Button";
import { ReactNode } from "react";
import Container from "../Container";
import GuideMap from "../GuideMap";
import PlacesSection from "./PlacesSection";

// Section anchors (#plan, #day, #info, #getting-here, #around, #faqs) are
// linked from the "Festival Guide" dropdown in NavbarMenu.tsx.

const locationGroups = [
  {
    title: "Closest Train Stations",
    items: [
      "Cark-in-Cartmel · 5 minutes drive",
      "Oxenholme · 30 minutes drive",
      "Lancaster · 40 minutes drive",
    ],
  },
  {
    title: "By Car",
    items: [
      "M6 J36 · 15 miles",
      "Manchester · 85 miles",
      "Newcastle · 120 miles",
      "Edinburgh · 160 miles",
      "London · 280 miles",
    ],
  },
  {
    title: "By Train",
    items: ["London-Cark · 3h45-4h15"],
  },
];

const howItWorks = [
  "Events are booked individually.",
  "All talks last 60 minutes.",
  "Visitors make their own schedule.",
  "In most talks, authors will take audience questions.",
  "Most events include book signings afterwards.",
];

const bookingSteps = [
  "Tickets can only be booked online.",
  "Browse the programme to find events.",
  "Choose events and avoid overlaps.",
  "Add tickets to your basket.",
  "Proceed to checkout.",
  "Make payment.",
  "Receive your e-ticket.",
  "Show your ticket on arrival.",
];

const daySteps = [
  "Arrive 15-20 minutes early.",
  "Find your venue.",
  "Present your ticket.",
  "Take your seat.",
  "Enjoy the discussion.",
  "Ask a question if you have one.",
  "Stay afterwards for book signing if relevant.",
];

const faqs = [
  {
    q: "Do I need a ticket for every event?",
    a: "Yes. Tickets are bought individually for each event. If you would like to buy one on the day, you can buy it through the website or visit the welcome desk.",
  },
  {
    q: "Can I buy tickets on the day?",
    a: "Yes, subject to availability, although advance booking is strongly recommended.",
  },
  {
    q: "Can children attend?",
    a: "Yes, but this year it may be boring for them.",
  },
  {
    q: "Can I photograph events?",
    a: "Yes, but please be considerate and avoid selfies during book signings.",
  },
  {
    q: "What happens if an event sells out?",
    a: "Events operate with fixed capacities. There will always be alternative talks and activities available.",
  },
  {
    q: "Are books available to buy?",
    a: "Absolutely. Books can be bought during signings and from the Festival Bookshop.",
  },
];

const GoldRule = ({ className = "" }: { className?: string }) => (
  <div className={`h-[2px] w-16 bg-jonquil ${className}`} />
);

const Card = ({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) => (
  <div className={`card ${className}`}>
    <h3 className="font-adelphi text-2xl lg:text-3xl text-night">{title}</h3>
    <GoldRule className="mt-3 mb-6" />
    {children}
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-4 text-contact-night">
    {items.map((item) => (
      <li key={item} className="flex gap-4">
        <span className="text-jonquil">—</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const NumberedList = ({ items }: { items: string[] }) => (
  <ol className="space-y-4 text-contact-night">
    {items.map((item, i) => (
      <li key={item} className="flex items-start gap-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-jonquil font-adelphi text-sm text-night">
          {i + 1}
        </span>
        <span className="pt-1">{item}</span>
      </li>
    ))}
  </ol>
);

const FestivalGuideSection = () => {
  return (
    <>
      {/* Guide header: welcome text over the map (map-grey matches the map edges) */}
      <Container className="relative overflow-hidden bg-map-grey pt-24 pb-10 text-night lg:min-h-[800px] lg:py-28">
        <div className="relative z-10 max-w-xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-night/70">
            Festival Guide
          </p>

          <h1 className="mb-8 text-4xl font-light leading-tight md:text-6xl">
            Welcome to The Lake District Book Festival
          </h1>

          <GoldRule className="mb-10 w-24" />

          <div className="space-y-6 text-lg font-light leading-relaxed">
            <p>
              If you are a newcomer to literary festivals, herewith a few tips.
              You are welcome to come and go as you please. You can attend one
              talk or several. You can come on one day or on all three. You can
              come just for the food. You can come just to buy a book. Your
              programme is your own.
            </p>

            <p>
              For the seasoned festival-goer, a few pointers - there are talks
              this weekend and there are also debates. Some of these you will
              not find anywhere else - the format or content being unique both
              to the Lake District and to the Lake District Book Festival.
            </p>

            <p>
              Whether you are a newcomer to literary festivals or a seasoned
              festival-goer, we very much hope that this weekend will leave you
              stimulated, challenged, enlightened and enthused for the spoken
              and the written word.
            </p>
          </div>
        </div>

        {/* Below lg: keeps the Container's left gap, bleeds to the right screen edge and
            down over the section's bottom padding (pb-10) so it meets the next section. */}
        <GuideMap className="-mb-10 -mr-4 mt-10 w-[calc(100%+1rem)] sm:-mr-8 sm:w-[calc(100%+2rem)] lg:absolute lg:inset-y-0 lg:right-0 lg:mb-0 lg:mr-0 lg:mt-0 lg:h-full lg:w-auto" />
      </Container>

      <Container className="bg-silver py-20 lg:py-28">
        {/* Plan your visit */}
        <section id="plan" className="scroll-mt-24 mb-20">
          <h2 className="mb-10 text-center text-[44px] font-light leading-none sm:text-left">
            Plan your visit
          </h2>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <Card title="How Does The Festival Work?">
              <BulletList items={howItWorks} />
            </Card>

            <Card title="How to Book Tickets">
              <NumberedList items={bookingSteps} />
              {/* <div className="my-8 w-full flex justify-start">
          <Button
            className="text-sm bg-jonquil text-night hover:text-night hover:bg-white hover:ring-night"
            href="https://events.lakedistrictbookfestival.co.uk/"
            hoverWord="Browse Events"
            initialWord="Browse Events"
          />
        </div> */}
            </Card>
          </div>
        </section>

        {/* On the day */}
        <section id="day" className="scroll-mt-24 mb-20">
          <h2 className="mb-10 text-center text-[44px] font-light leading-none sm:text-left">
            On the day
          </h2>

          <Card title="What Happens on the Day?">
            <NumberedList items={daySteps} />
          </Card>
        </section>

        {/* Know before you go */}
        <section id="info" className="scroll-mt-24 mb-20">
          <h2 className="mb-2 text-center text-[44px] font-light leading-none sm:text-left">
            Festival Information
          </h2>
          <p className="mb-10 text-center text-sm sm:text-left md:text-lg">
            Everything you need to know before arriving at The Lake District
            Book Festival.
          </p>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            {/* Accessibility */}
            <Card title="Accessibility">
              <div className="space-y-4 leading-relaxed text-contact-night">
                <p>All festival venues are wheelchair accessible.</p>

                <p>
                  If you have any specific requirements, please contact us
                  before the festival and we will be happy to help.
                </p>

                <a
                  href="mailto:festivalproducer@lakedistrictbookfestival.co.uk"
                  className="inline-block break-all font-medium text-night underline decoration-jonquil decoration-2 underline-offset-4 hover:bg-jonquil/30"
                >
                  festivalproducer@lakedistrictbookfestival.co.uk
                </a>
              </div>
            </Card>

            {/* Dogs */}
            <Card title="Dogs">
              <div className="space-y-4 leading-relaxed text-contact-night">
                <p>
                  Dogs are welcome on the festival site but, with the exception
                  of service dogs, are not permitted inside talks or events.
                </p>

                <p>Please clean up after your dog.</p>
              </div>
            </Card>

            {/* Parking */}
            <Card title="Parking">
              <div className="space-y-4 leading-relaxed text-contact-night">
                <p>Festival parking is available at Cartmel Racecourse.</p>
              </div>
              {/*
        <p className="text-sm md:text-lg mt-4">£5 per vehicle, per day.</p>

        <p className="text-sm md:text-lg mt-4">
          We strongly recommend booking in advance.
        </p>

        <p className="text-sm md:text-lg mt-4">
          The festival car park is open from:
          <br />
          <strong>Friday 12th June</strong>: 10.30am - 6.00pm
          <br />
          <strong>Saturday 13th June</strong>: 9.30am - 6.00pm
          <br />
          <strong>Sunday 14th June</strong>: 9.30am - 6.00pm
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
        </div> */}
            </Card>

            {/* Tickets */}
            <Card title="Tickets">
              <div className="space-y-4 leading-relaxed text-contact-night">
                <p>Tickets are sold individually for each event.</p>

                <p>We recommend booking online in advance wherever possible.</p>

                <p>Availability on the day cannot be guaranteed.</p>
              </div>
            </Card>

            {/* Travel */}
            <Card title="Travel" className="md:col-span-2">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                <div>
                  <h4 className="mb-4 font-adelphi text-xl text-night">
                    <span className="font-adelphi font-normal underline decoration-jonquil decoration-2 underline-offset-4">
                      By Taxi
                    </span>
                  </h4>

                  <div className="space-y-4 leading-relaxed text-contact-night">
                    <p>There are plenty of taxis available at Oxenholme station.</p>

                    <p>
                      Information for local taxi services around Cark and
                      Cartmel will also be available during the festival.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 font-adelphi text-xl text-night">
                    <span className="font-adelphi font-normal underline decoration-jonquil decoration-2 underline-offset-4">
                      By Car
                    </span>
                  </h4>

                  <div className="space-y-4 leading-relaxed text-contact-night">
                    <p>
                      Please avoid driving through Cartmel village where
                      possible.
                    </p>

                    <p>The easiest route is via the A590 and Cartmel Racecourse.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Getting here (was LocationSection: Location & Links) */}
        <section id="getting-here" className="scroll-mt-24 mb-20">
          <h2 className="mb-10 text-center text-[44px] font-light leading-none sm:text-left">
            Getting here
          </h2>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
            {locationGroups.map((group) => (
              <Card key={group.title} title={group.title}>
                <ul className="space-y-3 leading-relaxed text-contact-night">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Around Cartmel (was PlacesSection) */}
        <PlacesSection />

        {/* FAQs */}
        <section id="faqs" className="scroll-mt-24">
          <h2 className="mb-10 text-center text-[44px] font-light leading-none sm:text-left">
            Frequently Asked Questions
          </h2>

          <div className="card divide-y divide-dark-grey/40 !py-2">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jonquil [&::-webkit-details-marker]:hidden">
                  <h4 className="font-georgia text-lg text-night md:text-xl">
                    {faq.q}
                  </h4>
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-adelphi text-3xl leading-none text-jonquil transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="pb-4 leading-relaxed text-contact-night">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
};

export default FestivalGuideSection;
