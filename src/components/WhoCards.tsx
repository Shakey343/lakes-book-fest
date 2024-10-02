import CharlotteImg from "../assets/charlotte.jpg";
import ChristopherImg from "../assets/christopher.jpg";
import RacecourseImg from "../assets/racecourse.jpg";

type Team = {
  name: string;
  about: string;
  role: string;
  imgUrl: string;
  imgUrlAlt: string;
}[];

const team: Team = [
  {
    name: "Christopher de Bellaigue",
    about: "Award-winning author & journalist",
    role: "Festival Director",
    imgUrl: ChristopherImg,
    imgUrlAlt: "Profile image Christopher de Bellaigue Smiling"
  },
  {
    name: "The Racecourse, Cartmel",
    about: "Owned by Holker Group & the Cavendish family",
    role: "The Location",
    imgUrl: RacecourseImg,
    imgUrlAlt: "Image of horse jumping"
  },
  {
    name: "Charlotte Fairbairn",
    about: "Novelist & Creative Director, Lowther Castle",
    role: "Festival Producer",
    imgUrl: CharlotteImg,
    imgUrlAlt: "Profile image of Charlotte Fairbairn with her dog - Piglet"
  },
];

const WhoCards = () => {
  return team.map((member, i) => (
    <div key={i} className="flex items-center flex-col gap-[30px]">
      <h3 className="text-white text-3xl">{member.name}</h3>
      <img className="w-[300px] h-[300px] rounded-full object-cover border-2 border-jonquil" src={member.imgUrl} alt={member.imgUrlAlt} />
      <h4 className="text-night text-[22px] text-black-olive">{member.role}</h4>
    </div>
  ));
};

export default WhoCards;
