import Container from "./Container";

const FoundingMessage = () => {
  return (
    <Container
      className="relative z-10 flex flex-col items-center py-[80px] bg-night text-white text-center"
      id="founding"
    >
      <hr className="w-24 border-t-2 border-jonquil mb-10" />
      <p className="max-w-3xl text-xl md:text-2xl font-light leading-relaxed">
        The Lake District Book Festival burst onto the northern arts scene in June 2026. As an annual celebration of the written and spoken word, the Festival brings local, regional and national writers to exchange thoughts and ideas in the sublime setting of Cumbria’s Cartmel Racecourse.
      </p>
    </Container>
  );
};

export default FoundingMessage;
