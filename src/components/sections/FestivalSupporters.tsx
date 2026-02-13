import Container from "../Container";

const FestivalSupporters = () => {
  return (
    <Container className="mt-[80px] py-[80px] pb-[120px] bg-map-grey relative flex flex-col gap-[60px] text-center sm:text-left">
      <h2 className="text-white font-light text-[44px] w-full sm:w-1/2 md:w-full">
        The Lake District Book Festival<br/> acknowledges with profound gratitude the
        support of the following:
      </h2>
      <div className="flex flex-col gap-[40px]">
        <div>
          <h3 className="text-white font-light text-[24px] w-full sm:w-1/2 md:w-full pb-4">
            Sponsors:
          </h3>
          <p>
            <a
              href="https://www.politicaltours.com/"
              className="hover:opacity-80"
            >
              Political Tours
            </a>
            ,{" "}
            <a
              href="https://the.akdn/en/how-we-work/our-agencies/aga-khan-foundation"
              className="hover:opacity-80"
            >
              The Aga Khan Foundation
            </a>{" "}
            <span className="text-fire-red">(logos to come)</span>
          </p>
        </div>
        <div>
          <h3 className="text-white font-light text-[24px] w-full sm:w-1/2 md:w-full pb-4">
            Grant-Funders:
          </h3>
          <p>The David Snowdon Trust, The Hadfield Trust</p>
        </div>
        <div>
          <h3 className="text-white font-light text-[24px] w-full sm:w-1/2 md:w-full pb-4">
            Festival Patrons:
          </h3>
          <p>
            Leo Amery, Margherita Castellani, Francesco Ceccato, Christina
            Chaplin, Ivor Christie, Mark Davies, Eric de Bellaigue, Nika de
            Bellaigue, Sheila de Bellaigue, Deborah & Gez Done, Arabella
            Duffield, Julia & Gareth Earl, Max & Caroline Egremont, Richard &
            Judith Greer, Helen Holland & Nick Ratcliffe, Philip Howard, Adrian
            Hohler, Levantine Heritage Foundation, Esme Lowe, Charles & Juno
            Lowther, Jim & Vanessa Lowther, Fiona Murphy, Adam Naylor, Suzanne
            Press, Nick Ratcliffe, Matt & Maryse Reed, John Martin Robinson,
            Aeneas Reay, Alex & Sam Scott, David Verey, Rupert Watson, Mark Williams and one or
            two others who wish to remain anonymous
          </p>
        </div>
      </div>
    </Container>
  );
};

export default FestivalSupporters;
