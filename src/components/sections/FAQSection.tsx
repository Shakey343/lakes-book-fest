import Button from "../Button";
import Container from "../Container";

const FAQSection = () => {
  return (
    <Container className="relative bg-stone-50 py-24 lg:py-32">
      {/* Decorative Accent */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-amber-700/5 blur-3xl pointer-events-none" />

      {/* Hero */}
      <section className="relative mb-24 max-w-5xl">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-amber-700">
          Festival Guide
        </p>

        <h1 className="mb-8 text-5xl font-extralight leading-none tracking-tight text-neutral-900 md:text-7xl">
          Welcome to The Lake District Book Festival
        </h1>

        <div className="mb-10 h-px w-24 bg-amber-700" />

        <div className="max-w-4xl space-y-6 text-lg leading-relaxed text-neutral-700">
          <p>
            If you are a newcomer to literary festivals, herewith a few tips.
            You are welcome to come and go as you please. You can attend one
            talk or several. You can come on one day or on all three. You can
            come just for the food. You can come just to buy a book. Your
            programme is your own.
          </p>

          <p>
            For the seasoned festival-goer, a few pointers - there are talks
            this weekend and there are also debates. Some of these you will not
            find anywhere else - the format or content being unique both to the
            Lake District and to the Lake District Book Festival.
          </p>

          <p>
            Whether you are a newcomer to literary festivals or a seasoned
            festival-goer, we very much hope that this weekend will leave you
            stimulated, challenged, enlightened and enthused for the spoken and
            the written word.
          </p>
        </div>
      </section>

      {/* How Festival Works */}
      <section className="mb-10 border border-neutral-200 bg-white p-8 shadow-sm lg:p-12">
        <h2 className="mb-4 text-3xl font-extralight text-neutral-900 lg:text-5xl">
          How Does The Festival Work?
        </h2>

        <div className="mb-8 h-[2px] w-16 bg-amber-700" />

        <ul className="space-y-4 text-neutral-700">
          {[
            "Events are booked individually.",
            "All talks last 60 minutes.",
            "Visitors make their own schedule.",
            "In most talks, authors will take audience questions.",
            "Most events include book signings afterwards.",
          ].map((item) => (
            <li key={item} className="flex gap-4">
              <span className="text-amber-700">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Booking Section */}
      <section className="mb-10 bg-neutral-900 p-8 lg:p-12">
        <h2 className="mb-4 text-3xl font-extralight lg:text-5xl">
          How to Book Tickets
        </h2>

        <div className="mb-8 h-[2px] w-16 bg-amber-600" />

        <ul className="space-y-4 text-neutral-300">
          <li>Tickets can only be booked online.</li>
          <li>Browse the programme to find events.</li>
          <li>Choose events and avoid overlaps.</li>
          <li>Add tickets to your basket.</li>
          <li>Proceed to checkout.</li>
          <li>Make payment.</li>
          <li>Receive your e-ticket.</li>
          <li>Show your ticket on arrival.</li>
        </ul>
        <div className="my-8 w-full flex justify-start">
          <Button
            className="text-sm bg-jonquil text-night hover:text-night hover:bg-white hover:ring-night"
            href="https://events.lakedistrictbookfestival.co.uk/"
            hoverWord="Browse Events"
            initialWord="Browse Events"
          />
        </div>
      </section>

      {/* On The Day */}
      <section className="mb-10 border border-neutral-200 bg-white p-8 shadow-sm lg:p-12">
        <h2 className="mb-4 text-3xl font-extralight text-neutral-900 lg:text-5xl">
          What Happens on the Day?
        </h2>

        <div className="mb-8 h-[2px] w-16 bg-amber-700" />

        <ul className="space-y-4 text-neutral-700">
          {[
            "Arrive 15-20 minutes early.",
            "Find your venue.",
            "Present your ticket.",
            "Take your seat.",
            "Enjoy the discussion.",
            "Ask a question if you have one.",
            "Stay afterwards for book signing if relevant.",
          ].map((item) => (
            <li key={item} className="flex gap-4">
              <span className="text-amber-700">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQs */}
      <section className="border border-neutral-200 bg-white p-8 shadow-sm lg:p-12">
        <h2 className="mb-4 text-3xl font-extralight text-neutral-900 lg:text-5xl">
          Frequently Asked Questions
        </h2>

        <div className="mb-10 h-[2px] w-16 bg-amber-700" />

        <div className="divide-y divide-neutral-200">
          {[
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
          ].map((faq) => (
            <div key={faq.q} className="py-6">
              <h3 className="mb-2 text-lg font-medium text-neutral-900">
                {faq.q}
              </h3>

              <p className="leading-relaxed text-neutral-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default FAQSection;
