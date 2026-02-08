interface Vendor {
  id: number;
  name: string;
  description: string;
  image: string;
}

const VendorCard = ({ vendor }: { vendor: Vendor }) => {
  return (
    <a
      key={vendor.id}
      className="flex items-center flex-col gap-4 w-48 min-h-[250px] group"
      href={vendor.description}
      target="_blank"
    >
      <img
        className="w-full min-h-[221px] object-contain border-2 border-jonquil bg-dark-grey group-hover:border-8 transition-all"
        src={vendor.image}
        alt={vendor.name}
      />
      <div className="w-full px-4 pb-4">
        <h4 className="text-night text-[20px] font-adelphi">{vendor.name}</h4>
      </div>
    </a>
  );
};

export default VendorCard;
