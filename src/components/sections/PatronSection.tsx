import Container from "../Container";

const patronsList = [
  "Leo and Claudine Amery",
  "Margherita Castellani",
  "Francesco Ceccato",
  "Christina Chaplin",
  "Ivor Christie",
  "Mark Davies",
  "Eric de Bellaigue",
  "Nike de Bellaigue",
  "Sheila de Bellaigue",
  "Deborah & Gez Done",
  "Arabella Duffield",
  "Julia & Gareth Earl",
  "Max & Caroline Egremont",
  "Richard & Judith Greer",
  "Helen Holland & Nick Ratcliffe",
  "Philip Howard",
  "Adrian Hohler",
  "Levantine Heritage Foundation",
  "Esme Lowe",
  "Charles & Juno Lowther",
  "Jim & Vanessa Lowther",
  "Fiona Murphy",
  "Adam Naylor",
  "Suzanne Press",
  "Nick Ratcliffe",
  "Matt & Maryse Reed",
  "John Martin Robinson",
  "Aeneas Reay",
  "Alex & Sam Scott",
  "David Verey",
  "Rupert Watson",
  "Mark Williams",
];

const PatronSection = () => {
  return (
    <Container className="pt-[80px] pb-[120px] bg-map-grey">
      <h2 className="text-[44px] font-light text-center sm:text-left pb-10">
        Festival Patrons
      </h2>
      <div className="flex flex-wrap justify-evenly gap-[40px]">
        <p className="flex flex-wrap gap-2">
          {patronsList.map((patron, i) => (
            <span className="text-night">
              {patron}
              {i !== patronsList.length - 1 && ","}
            </span>
          ))}
          <span>and others who wish to remain anonymous</span>
        </p>
      </div>
    </Container>
  );
};

export default PatronSection;
