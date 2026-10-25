import Button from "../Button";
import cn from "../../utils/cn";

const FRIEND_URL =
  "https://events.lakedistrictbookfestival.co.uk/checkout/new-session/store/71646/chk/202e?ref=store-widget&show_search_filter=true&show_date_filter=true&show_sort=true&show_event_filter=false";
const EMAIL = "mailto:festivalproducer@lakedistrictbookfestival.co.uk";
const DECK = "/downloadable_patron_and_sponsorship_information.pdf";

type Tier = {
  id: string;
  name: string;
  badge: string;
  badgeSub: string;
  description: string;
  href: string;
  target?: string;
  buttonWord: string;
  buttonHover: string;
  circleClass: string;
  textClass: string;
  badgeClass: string;
  buttonClass: string;
};

const tiers: Tier[] = [
  {
    id: "friend",
    name: "Friend",
    badge: "£40",
    badgeSub: "per person, p.a.",
    description:
      "Advance priority booking guaranteeing access to all your chosen talks, the Friends' newsletter with news, insights and special offers, and an annual Friends' reception.",
    href: FRIEND_URL,
    target: "_blank",
    buttonWord: "Buy membership",
    buttonHover: "Join online",
    circleClass: "bg-light-grey border-jonquil",
    textClass: "text-night",
    badgeClass: "bg-jonquil text-night",
    buttonClass: "bg-jonquil text-night hover:bg-night",
  },
  {
    id: "patron",
    name: "Patron",
    badge: "£750",
    badgeSub: "per person, p.a.",
    description:
      "Priority booking and parking, complimentary tickets, and an annual gala event in London or Cumbria. Get in touch to hear everything a Patron receives.",
    href: EMAIL,
    buttonWord: "Email to find out more",
    buttonHover: "Email us",
    circleClass: "bg-night border-jonquil",
    textClass: "text-silver",
    badgeClass: "bg-jonquil text-night",
    buttonClass: "bg-night text-silver hover:bg-grey hover:text-night",
  },
  {
    id: "sponsor",
    name: "Sponsor",
    badge: "Bespoke",
    badgeSub: "tailored to you",
    description:
      "From in-kind contributions and corporate hosting to taking ownership of the Hospitality Tent. Download the deck for guidance on the options.",
    href: DECK,
    target: "_blank",
    buttonWord: "Download the deck",
    buttonHover: "Open the PDF",
    circleClass: "bg-light-grey border-fire-red",
    textClass: "text-night",
    badgeClass: "bg-fire-red text-silver",
    buttonClass: "bg-fire-red text-silver hover:bg-night",
  },
];

const SupportSection = () => {
  return (
    <div
      className="bg-grey flex flex-col items-center gap-[80px] px-6 md:px-[80px] py-[120px] md:py-[160px]"
      id="support"
    >
      <h2 className="text-[56px] md:text-[88px] font-light text-silver text-center">
        Support <span className="text-fire-red font-bold">us</span>
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start w-full gap-[80px] lg:gap-10">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="flex flex-col items-center gap-8 max-w-[340px] w-full"
          >
            <a
              className={cn(
                "flex flex-col items-center justify-center gap-[8px] h-[300px] w-[300px] md:h-[340px] md:w-[340px] rounded-full border-2 hover:border-8 transition-all relative group",
                tier.circleClass,
                tier.textClass
              )}
              href={tier.href}
              target={tier.target}
              rel={tier.target === "_blank" ? "noopener noreferrer" : undefined}
              aria-label={`${tier.buttonWord}: become a ${tier.name}`}
            >
              <p className="text-[22px] group-hover:text-[20px] transition-all">
                Become a
              </p>
              <p className="font-semibold text-[48px] group-hover:text-[50px] transition-all text-center">
                {tier.name}
              </p>
              <div
                className={cn(
                  "flex flex-col items-center justify-center absolute rounded-full -top-6 -right-4 md:-right-10 h-[120px] w-[120px] md:h-[130px] md:w-[130px] shadow-md",
                  tier.badgeClass
                )}
              >
                <p className="text-center text-[24px] md:text-[28px] font-semibold leading-none">
                  {tier.badge}
                </p>
                <p className="text-center text-[12px] md:text-[13px] mt-1 px-3 leading-tight">
                  {tier.badgeSub}
                </p>
              </div>
            </a>
            <p className="text-center text-night text-[18px] leading-snug">
              {tier.description}
            </p>
            <Button
              className={cn("w-fit", tier.buttonClass)}
              href={tier.href}
              target={tier.target}
              initialWord={tier.buttonWord}
              hoverWord={tier.buttonHover}
            />
          </div>
        ))}
      </div>
      <Button
        className="w-fit bg-jonquil text-night hover:bg-grey"
        href={EMAIL}
        initialWord="Questions?"
        hoverWord="Email us"
      />
    </div>
  );
};

export default SupportSection;
