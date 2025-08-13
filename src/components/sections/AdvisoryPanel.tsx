import AlImg from "../../assets/al_verey.jpg";
import AlexImg from "../../assets/Alex_Scott.jpg"
import AdamImg from "../../assets/Adam_Sutherland.jpeg"
import BryanImg from "../../assets/Bryan_Gray.jpg"
import CharlieImg from "../../assets/Charlie_Gere.jpg";
import FionaImg from "../../assets/Fiona_Candlin.jpg";
import LucyImg from "../../assets/Lucy_McLaren.png";
import MarciaImg from "../../assets/Marcia_Fotheringham.jpeg";
import MargaretImg from "../../assets/Margaret_MacMillan_photo_Ander_McIntyre.jpg";
import MikeImg from "../../assets/Mike_Gibbons.jpg"
import PeterImg from "../../assets/peter-modified-small.jpg";
import cn from "../../utils/cn";
import Container from "../Container";


type Team = {
  name: string;
  about: string;
  imgUrl: string;
  imgUrlAlt: string;
}[];

const team: Team = [
  {
    name: "Adam Sutherland",
    about: "Adam Sutherland has lived in the Lake District for 25 years and has been Director of Grizedale Arts for as long. This remarkable organisation has an international reach in arts, craft and difficult thinking and has a long track record of inventive polemic, caustic aesthetics and celebrated misunderstandings.",
    imgUrl: AdamImg,
    imgUrlAlt: "Profile image of Adam Sutherland holding an umbrella and wearing a straw hat.",
  },
  {
    name: "Al Verey",
    about: "Al Verey is the owner and manager of Verey Books, the Ullswater Bookshop for Curious Minds (and the Lake District Book Festival bookshop). The shop in Pooley Bridge stocks everything from Richard Osman to William Wordsworth. Pre-shop, Al was an English Teacher and before that, a guide at the Wordsworth Trust. He lives with his wife and two boys in the Lake District.",
    imgUrl: AlImg,
    imgUrlAlt: "Profile image of Al Verey with book in his hand in front of a lake.",
  },
  {
    name: "Alex Scott",
    about: "Alex Scott's early career was in finance and corporate communications in London before he joined his family's business, based in Kendal. He is a Trustee of the Francis C Scott Charitable Trust, Cumbria Community Foundation and the Grosvenor Estate.  In July 2023, he was appointed Lord-Lieutenant of Cumbria. Alex lives in Windermere on the family's organic farm with his wife Sam. They have three adult children.",
    imgUrl: AlexImg,
    imgUrlAlt: "Profile image of Charlie Gere frowning looking down to the left.",
  },
  {
    name: "Bryan Gray",
    about: "Bryan Gray's notable positions include Pro-Chancellor of Lancaster University, Chairman of the Northwest Regional Development Agency, Chairman of Peel Media Group (responsible for MediaCityUK) and director of Westmorland Ltd, Preston North End Football Club and the Liverpool Culture Company among many others.",
    imgUrl: BryanImg,
    imgUrlAlt: "Profile image of Bryan Gray with a suit on and smiling.",
  },
  {
    name: "Charlie Gere",
    about: "It may seem controversial to adopt to The Lake District Book Festival advisory panel a man who has written a book called I Hate the Lake District. On the other hand, few people think more deeply or widely about the north than Charlie Gere. He is Professor of Media Theory and History at the Lancaster Institute for the Contemporary Arts (Lancaster University).",
    imgUrl: CharlieImg,
    imgUrlAlt: "Profile image of Charlie Gere frowning looking down to the left.",
  },
  {
    name: "Fiona Candlin",
    about: "Fiona Candlin was born in Liverpool, grew up in Lancashire, and then spent decades in London before coming back to the North West. She is Professor of Museology at Birkbeck College, director of the Mapping Museums Lab and writes on art and museums. She joins the panel as somebody passionate about the power and influence of education.",
    imgUrl: FionaImg,
    imgUrlAlt: "Image of Fiona Candlin giving a lecture.",
  },
  {
    name: "Lucy McLaren",
    about: "Lucy is head of the Holker Group, which encompasses several businesses including state quarries, rental properties, a large caravan park and Cartmel Racecourse. She studied Art at the City & Guilds School in London and has had several solo exhibitions in London and New York. She is married to Tor McLaren, a strategic advisor and senior counsel with a background in international business.",
    imgUrl: LucyImg,
    imgUrlAlt: "Profile image of Lucy McLaren in front of doric columns.",
  },
  {
    name: "Marcia Fotheringham",
    about: "Marcia was born in London and raised in New York. She has worked in many aspects of the health service including clinical psychology and family therapy. In 1997 Marcia moved to Cumbria. Along with her husband, she owned dental practices in Alston and worked as a psychologist for NHS Cumbria. Among her many public roles, she has been High Sheriff of Cumbria.",
    imgUrl: MarciaImg,
    imgUrlAlt: "Profile image of Marcia smiling.",
  },
  {
    name: "Margaret MacMillan",
    about: "Margaret MacMillan is emeritus professor of History at the University of Toronto and emeritus professor of International History at Oxford University.  She was Provost of Trinity College, Toronto and then Warden of St Antony's College, Oxford.  She is currently a trustee of the Imperial War Museum.  In 2018 she was the BBC Reith Lecturer, and her latest book is War: How Conflict Shaped Us (2020).",
    imgUrl: MargaretImg,
    imgUrlAlt: "Profile image of Maragret MacMillan with a pearl necklace on.",
  },
  {
    name: "Mike Gibbons",
    about: "Mike has been a leader in education for over forty years: a headteacher of large secondary schools in UK and Europe; a senior civil servant responsible for innovation in schools; CEO of a group of academies and a senior adviser to academies across the country; founder governor of the National College for School Leadership and an international speaker on leadership, innovation and reform in schools. He is passionate about the vital role of literature and the arts in education.",
    imgUrl: MikeImg,
    imgUrlAlt: "Profile image of Mike Gibbons sitting in an armchair.",
  },
  {
    name: "Peter Straus",
    about: "Managing Director of Rogers, Coleridge & White, Peter Straus has been in the book world for over thirty years and has worked at Hodder & Stoughton, Hamish Hamilton and Macmillan. He is passionate about good writing and great literature and works with many bestselling and prize-winning writers from around the world. He was awarded a CBE for his services to literature in 2016.",
    imgUrl: PeterImg,
    imgUrlAlt: "Profile image of Peter Straus smiling.",
  },
];

const AdvisoryCards = () => {
  return team.map((member, i) => (
    <div
      key={i}
      className="flex items-center flex-col gap-[30px] py-6 px-10 md:px-0 md:w-[200px] min-h-[432px]"
    >
      <h3 className="text-night text-2xl text-center">{member.name}</h3>
      <img
        className={cn(
          "w-[200px] h-[200px] rounded-full object-cover border-4 border-jonquil",
          member.name === "Lucy McLaren" ? "object-[-8px,-34px]" : ""
        )}
        src={member.imgUrl}
        alt={member.imgUrlAlt}
      />
      <h4 className="text-night text-[16px] group-hover:text-[24px] transition-all font-adelphi">
        {member.about}
      </h4>
    </div>
  ));
};

const AdvisoryPanel = () => {
  return (
    <Container className="pt-[80px] pb-[120px] bg-map-grey" id="otherWho">
      <h2 className="text-[44px] font-light text-center sm:text-left pb-10">
        Advisory Panel
      </h2>
      <div className="flex flex-wrap justify-evenly gap-[100px] lg:mr-10">
        <AdvisoryCards />
      </div>
    </Container>
  )
}

export default AdvisoryPanel;
