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
    imgUrl: "",
    imgUrlAlt: ""
  },
  {
    name: "The Racecourse, Cartmel",
    about: "Owned by Holker Group & the Cavendish family",
    role: "The Location",
    imgUrl: "",
    imgUrlAlt: ""
  },
  {
    name: "Charlotte Fairbairn",
    about: "Novelist & Creative Director, Lowther Castle",
    role: "Festival Producer",
    imgUrl: "",
    imgUrlAlt: ""
  },
];

const WhoCards = () => {
  return team.map((member) => (
    <div>
      <h3>{member.name}</h3>
      <p>{member.about}</p>
      <img src={member.imgUrl} alt={member.imgUrlAlt} />
      <h4>{member.role}</h4>
    </div>
  ));
};

export default WhoCards;
