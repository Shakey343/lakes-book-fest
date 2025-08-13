import CharlotteImg from "../assets/charlotte.jpg";
import ChristopherImg from "../assets/christopher.jpg";
import RacecourseImg from "../assets/racecourse.jpg";

type Team = {
  name: string;
  about: string;
  role: string;
  imgUrl: string;
  imgUrlAlt: string;
  webUrl: string;
}[];

const team: Team = [
  {
    name: "Christopher de Bellaigue",
    about: "Award-winning author & journalist",
    role: "Festival Director",
    imgUrl: ChristopherImg,
    imgUrlAlt: "Profile image Christopher de Bellaigue Smiling",
    webUrl: "https://www.christopherdebellaigue.com/",
  },
  {
    name: "The Racecourse, Cartmel",
    about: "Owned by Holker Group & the Cavendish family",
    role: "Festival Venue",
    imgUrl: RacecourseImg,
    imgUrlAlt: "Image of horse jumping",
    webUrl: "https://cartmel-racecourse.co.uk/",
  },
  {
    name: "Charlotte Fairbairn",
    about: "Novelist & Creative Director, Lowther Castle",
    role: "Festival Producer",
    imgUrl: CharlotteImg,
    imgUrlAlt: "Profile image of Charlotte Fairbairn with her dog - Piglet",
    webUrl: "https://www.charlottefairbairn.co.uk/",
  },
];

const WhoCards = () => {
  return team.map((member, i) => (
    <a
      key={i}
      className="flex items-center flex-col gap-[30px] py-6 w-[360px] min-h-[432px] group"
      href={member.webUrl}
      target="_blank"
    >
      <h3 className="text-night text-3xl text-center">{member.name}</h3>
      <img
        className="w-[300px] h-[300px] rounded-full object-cover border-2 border-jonquil group-hover:border-8 transition-all"
        src={member.imgUrl}
        alt={member.imgUrlAlt}
      />
      <h4 className="text-night text-[22px] group-hover:text-[24px] transition-all font-adelphi">
        {member.role}
      </h4>
    </a>
  ));
};

export default WhoCards;
