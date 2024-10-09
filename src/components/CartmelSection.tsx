import cartmelImg from "../assets/cartmel_priory.png";

const CartmelSection = () => {
  return (
    <div
      className="px-[80px] py-[40px] h-[580px] relative overflow-hidden"
      id="cartmel"
    >
      <div className="flex flex-col gap-[40px]">
        <h2 className="text-[44px] font-light">About Cartmel</h2>
        <p className="quote">A thimble full of diamonds</p>
        <ul className="py-[60px] list-disc list-inside marker:text-fire-red">
          <li>Cartmel Priory (est. 1189)</li>
          <li>A host of pubs, cafés and artisanal food shops</li>
          <li>L'Enclume (Michelin 3-star restaurant, Head Chef Simon Rogan)</li>
          <li>Cartmel Sticky Toffee Pudding</li>
        </ul>
      </div>
      <img
        src={cartmelImg}
        alt=""
        className="absolute right-[80px] -top-[51px] h-[800px] object-cover"
      />
    </div>
  );
};

export default CartmelSection;
