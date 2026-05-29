import Container from "../Container";

const DosAndDontsSection = () => {
  return (
    <Container className="py-[100px] sm:pt-20 pb-32 h-fit bg-white relative text-xl text-center">
      <div className="mb-8">
        <h2 className="text-[44px] font-thin mb-[60px] leading-none">
          Festival Do's and Don'ts
        </h2>
        <h3 className="text-2xl font-bold font-adelphi mb-4">ACCESSIBILITY</h3>
        <p className="text-sm md:text-lg">
          All venues are wheelchair accessible If you have any specific needs,
          please email us in advance
          festivalproducer@lakedistrictbookfestival.co.uk We will be happy to
          help on the day
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-bold font-adelphi mb-4">DOGS</h3>
        <p className="text-sm md:text-lg">
          Dogs are allowed on site but NOT into talks, please (except service
          dogs) Please clean up after your dog
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-bold font-adelphi mb-4">PARKING</h3>
        <p className="text-sm md:text-lg">
          Parking will be available at the racecourse. It will be £5 per car per
          day Parking tickets can be booked online via the website We advise you
          to pre-book
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-bold font-adelphi mb-4">TICKETS</h3>
        <p className="text-sm md:text-lg">
          Tickets are sold individually for each talk Please try and book your
          tickets online and in advance. We cannot guarantee places on the day
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-bold font-adelphi mb-4">TRAVEL</h3>
        <h4 className="text-xl font-adelphi">BY TAXI</h4>
        <p className="text-sm md:text-lg mb-10">
          There are plenty of taxis at Oxenholme. We will make sure there are numbers for taxis at Cark &
          Cartmel.
        </p>
        <h4 className="text-xl font-adelphi">BY CAR</h4>
        <p className="text-sm md:text-lg mb-10">
          Please avoid going through Cartmel village. Best to approach from the
          A590
        </p>
      </div>
    </Container>
  );
};

export default DosAndDontsSection;
