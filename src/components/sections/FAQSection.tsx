import Container from "../Container";

const FAQSection = () => {
  return (
    <Container className="py-[100px] sm:pt-20 pb-32 h-fit bg-white relative">
      <div className="mb-20">
        {/* Looking at the way successful festivals present information, the most
        helpful thing is often a dedicated page called something like: “First
        Time at the Festival?” or “How the Festival Works” or “Planning Your
        Visit” That page should answer the questions people are slightly
        embarrassed to ask. */}
        <h2 className="text-[44px] font-thin mb-[60px] leading-none">
          Welcome to The Lake District Book Festival
        </h2>
        <p className="text-lg">
          If you are a newcomer to literary festivals, herewith a few tips. You
          are welcome to come and go as you please. You can attend one talk or
          several. You can come on one day or on all three. You can come just
          for the food. You can come just to buy a book. Your programme is your
          own.
        </p>
        <br/>
        <p className="text-lg">
          For the seasoned festival-goer, a few pointers - there are talks this
          weekend and there are also debates. Some of these you will not find
          anywhere else - the format or the content being unique both to the
          Lake District and to the Lake District Book Festival.
        </p>
        <br/>
        <p className="text-lg">
          Whether you are a newcomer to literary festivals or a seasoned
          festival-goer, we very much hope that this weekend will leave you
          stimulated, challenged, enlightened and enthused for the spoken and
          the written word.
        </p>
      </div>
      <div className="mb-20">
        <h2 className="text-[44px] font-thin mb-[60px] leading-none">
          How Does The Festival Work?
        </h2>
        <ul className="list-disc list-inside">
          <li>Events are booked individually.</li>
          <li>All talks last 60 minutes.</li>
          <li>Visitors make their own schedule.</li>
          <li>In most talks, authors will take audience questions.</li>
          <li>Most events include book signings afterwards.</li>
        </ul>
      </div>
      <div className="mb-20">
        <h2 className="text-[44px] font-thin mb-[60px] leading-none">
          How to Book Tickets
        </h2>
        <ul className="list-disc list-inside">
          <li>Tickets can only be booked online.</li>
          <li>Browse the programme to find events [ADD TICKET BUTTON HERE].</li>
          <li>Choose events (making sure they don't overlap).</li>
          <li>Add tickets to basket.</li>
          <li>When finished go to checkout.</li>
          <li>Make payment.</li>
          <li>Receive e-ticket.</li>
          <li>Show ticket on arrival as print-out or on your smart phone.</li>
        </ul>
      </div>
      <div className="mb-20">
        <h2 className="text-[44px] font-thin mb-[60px] leading-none">
          What Happens on the Day?
        </h2>
        <ul className="list-disc list-inside">
          <li>Arrive 15-20 minutes early.</li>
          <li>Find your venue.</li>
          <li>Present your ticket.</li>
          <li>Take your seat.</li>
          <li>Enjoy the discussion.</li>
          <li>Ask a question if you have one.</li>
          <li>Stay afterwards for book signing (if relevant).</li>
        </ul>
      </div>
      <div className="mb-20">
        <h2 className="text-[44px] font-thin mb-[60px] leading-none">FAQs</h2>
        <ul>
          <li>
            <strong>Do I need a ticket for every event?</strong> Yes, tickets
            are bought per event. If you would like to buy a ticket on the day,
            either purchase one on your phone through the website, or go to the
            welcome desk.
          </li>
          <li>
            <strong>Can I buy tickets on the day?</strong> Yes, but it's
            strongly recommended that you buy your tickets in advance.
          </li>
          <li>
            <strong>Can children attend?</strong> Yes, but it may be boring for
            them.
          </li>
          <li>
            <strong>Can I photograph events?</strong> Yes, you may but no
            selfies during book signings please.
          </li>
          <li>
            <strong>What happens if an event sells out?</strong> Events are set
            to an allocated capacity. There will always alternative talks to go
            to on the day.
          </li>
          <li>
            <strong>Are books available to buy?</strong> Of course - either at
            the event's book signing or at the Festival Bookshop.
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default FAQSection;
