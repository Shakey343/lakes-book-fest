import cartmelImg from "../../assets/cartmel_priory.png";
import Container from "../Container";

const CartmelSection = () => {
  return (
    <Container
      className={`py-[100px] lg:py-[40px] min-h-[580px] relative overflow-hidden bg-cartmel lg:bg-none bg-cover bg-right lg:bg-white`}
      id="cartmel"
    >
      <div className="flex flex-col gap-[40px] relative z-10 bg-white lg:bg-none w-fit p-8 lg:p-0 lg:pr-4">
        <h2 className="text-[44px] font-light">About Cartmel</h2>
        <p className="quote text-[36px]">A thimble full of diamonds</p>
        <ul className="lg:py-[60px] list-disc list-inside marker:text-fire-red">
          <li>Cartmel Priory (est. 1189)</li>
          <li>A host of pubs, cafés and artisanal food shops</li>
          <li>L'Enclume (Michelin 3-star restaurant, Head Chef Simon Rogan)</li>
          <li>Cartmel Sticky Toffee Pudding</li>
        </ul>
      </div>
      <img
        src={cartmelImg}
        alt=""
        className="hidden lg:block absolute right-[80px] -top-[51px] h-[800px] object-cover"
      />
    </Container>
  );
};

export default CartmelSection;
