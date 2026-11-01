// Photos are hidden for now; kept commented out in case they are needed later.
// import AlImg from "../../assets/al_verey.jpg";
// import AlexImg from "../../assets/Alex_Scott.jpg"
// import AdamImg from "../../assets/Adam_Sutherland.jpeg"
// import BryanImg from "../../assets/Bryan_Gray.jpg"
// import CharlieImg from "../../assets/Charlie_Gere.jpg";
// import FionaImg from "../../assets/Fiona_Candlin.jpg";
// import LucyImg from "../../assets/Lucy_McLaren.png";
// import MarciaImg from "../../assets/Marcia_Fotheringham.jpeg";
// import MargaretImg from "../../assets/Margaret_MacMillan_photo_Ander_McIntyre.jpg";
// import MikeImg from "../../assets/Mike_Gibbons.jpg"
// import PeterImg from "../../assets/peter-modified-small.jpg";
// import cn from "../../utils/cn";
import { ReactNode } from "react";
import AlexBoardImg from "../../assets/Alex_Scott_board.jpg";
import CharlieBoardImg from "../../assets/Charlie_Pattinson_board.png";
import cn from "../../utils/cn";
import Container from "../Container";

type Person = {
  name: string;
  about: string;
  url: string;
  // imgUrl: string;
  // imgUrlAlt: string;
};

type BoardMember = {
  name: string;
  role: string;
  about: string;
  imgUrl: string;
  imgUrlAlt: string;
  imgClassName?: string;
};

// TODO: two further board members not yet confirmed.
const board: BoardMember[] = [
  {
    name: "Alexander Scott",
    role: "HM Lord-Lieutenant of Cumbria",
    about:
      "Alex is a businessman, philanthropist and landowner. He co-founded Family Business UK and served as a Director on its international counterpart. He serves as a Trustee of the Grosvenor Estate, Cumbria Community Foundation and advises family businesses. He has served for over 40 years as a Trustee of the Francis Scott Trust, the largest independent funder of charities for young people in Cumbria and N. Lancs. He lives in Cumbria with his wife Sam and they have 3 adult children.",
    imgUrl: AlexBoardImg,
    imgUrlAlt:
      "Portrait of Alexander Scott smiling in a blue jacket in a garden.",
    imgClassName: "object-[50%_22%]",
  },
  {
    name: "Charlie Pattinson",
    role: "TV Drama Producer & Founder, New Pictures",
    about:
      "Charlie Pattinson is a TV Drama Producer, Executive Producer and Founder / Non-Executive Chair of New Pictures. Before this, he co-founded Company Pictures, one of the UK’s largest Independent TV and Film Drama production companies. Charlie’s Producer and Exec Producer credits include Skins, Shameless, Our Friends in the North, The Missing, Wild at Heart, Elizabeth 1 and Catherine the Great with Helen Mirren - among many others. Charlie’s TV work has won 26 Baftas, 5 Golden Globes, 15 Emmy awards and over 30 RTS awards.",
    imgUrl: CharlieBoardImg,
    imgUrlAlt: "Black and white portrait of Charlie Pattinson smiling.",
    imgClassName: "object-center",
  },
];

const team: Person[] = [
  {
    name: "Adam Sutherland",
    about: "Grizedale Arts",
    // about: "Director, Grizedale Arts",
    // about: "Adam Sutherland has lived in the Lake District for 25 years and has been Director of Grizedale Arts for as long. This remarkable organisation has an international reach in arts, craft and difficult thinking and has a long track record of inventive polemic, caustic aesthetics and celebrated misunderstandings.",
    url: "https://www.grizedale.org/",
    // imgUrl: AdamImg,
    // imgUrlAlt: "Profile image of Adam Sutherland holding an umbrella and wearing a straw hat.",
  },
  // Not in the current advisory panel text; kept in case needed later.
  // {
  //   name: "Al Verey",
  //   about: "Verey Books, Festival Bookshop",
  //   // about: "Al Verey is the owner and manager of Verey Books, the Ullswater Bookshop for Curious Minds (and the Lake District Book Festival bookshop). The shop in Pooley Bridge stocks everything from Richard Osman to William Wordsworth. Pre-shop, Al was an English Teacher and before that, a guide at the Wordsworth Trust. He lives with his wife and two boys in the Lake District.",
  //   url: "https://vereybooks.co.uk/",
  //   imgUrl: AlImg,
  //   imgUrlAlt: "Profile image of Al Verey with book in his hand in front of a lake.",
  // },
  // {
  //   name: "Alex Scott",
  //   about: "Lord Lieutenant of Cumbria",
  //   // about: "Alex Scott's early career was in finance and corporate communications in London before he joined his family's business, based in Kendal. He is a Trustee of the Francis C Scott Charitable Trust, Cumbria Community Foundation and the Grosvenor Estate.  In July 2023, he was appointed Lord-Lieutenant of Cumbria. Alex lives in Windermere on the family's organic farm with his wife Sam. They have three adult children.",
  //   url: "https://cumbria-lieutenant.org.uk/lord-lieutenant-mr-alexander-scott",
  //   imgUrl: AlexImg,
  //   imgUrlAlt: "Profile image of Charlie Gere frowning looking down to the left.",
  // },
  {
    name: "Bryan Gray",
    about: "Former head Northwest Development Agency",
    // about: "Former Chairman, North West Development Agency",
    // about: "Bryan Gray's notable positions include Pro-Chancellor of Lancaster University, Chairman of the Northwest Regional Development Agency, Chairman of Peel Media Group (responsible for MediaCityUK) and director of Westmorland Ltd, Preston North End Football Club and the Liverpool Culture Company among many others.",
    url: "https://lowthercastle.org/wp-content/uploads/2019/07/LCGT-Bryan-Gray-biography.pdf",
    // imgUrl: BryanImg,
    // imgUrlAlt: "Profile image of Bryan Gray with a suit on and smiling.",
  },
  {
    name: "Charlie Gere",
    about: "Professor Digital Media, University of Lancaster",
    // about: "Professor, School of Arts, Lancaster University",
    // about: "It may seem controversial to adopt to The Lake District Book Festival advisory panel a man who has written a book called I Hate the Lake District. On the other hand, few people think more deeply or widely about the north than Charlie Gere. He is Professor of Media Theory and History at the Lancaster Institute for the Contemporary Arts (Lancaster University).",
    url: "https://www.lancaster.ac.uk/arts/people/charlie-gere",
    // imgUrl: CharlieImg,
    // imgUrlAlt: "Profile image of Charlie Gere frowning looking down to the left.",
  },
  {
    name: "Fiona Candlin",
    about: "Professor Museology, Birkbeck College",
    // about: "Professor, Museology - Birkbeck College, London",
    // about: "Fiona Candlin was born in Liverpool, grew up in Lancashire, and then spent decades in London before coming back to the North West. She is Professor of Museology at Birkbeck College, director of the Mapping Museums Lab and writes on art and museums. She joins the panel as somebody passionate about the power and influence of education.",
    url: "https://www.bbk.ac.uk/our-staff/profile/8005280/fiona-candlin",
    // imgUrl: FionaImg,
    // imgUrlAlt: "Image of Fiona Candlin giving a lecture.",
  },
  {
    name: "Lucy McLaren",
    about: "Director, Holker Estates",
    // about: "Director, Holker Group (owner of Cartmel Racecourse)",
    // about: "Lucy is head of the Holker Group, which encompasses several businesses including state quarries, rental properties, a large caravan park and Cartmel Racecourse. She studied Art at the City & Guilds School in London and has had several solo exhibitions in London and New York. She is married to Tor McLaren, a strategic advisor and senior counsel with a background in international business.",
    url: "https://holkergroup.co.uk/about/",
    // imgUrl: LucyImg,
    // imgUrlAlt: "Profile image of Lucy McLaren in front of doric columns.",
  },
  {
    name: "Marcia Fotheringham",
    about: "Former High Sheriff, Cumbria",
    // about: "Arts Patron, Cumbria",
    // about: "Marcia was born in London and raised in New York. She has worked in many aspects of the health service including clinical psychology and family therapy. In 1997 Marcia moved to Cumbria. Along with her husband, she owned dental practices in Alston and worked as a psychologist for NHS Cumbria. Among her many public roles, she has been High Sheriff of Cumbria.",
    url: "https://www.cumbriafoundation.org/marcia-reid-fotheringham-jp-dl/",
    // imgUrl: MarciaImg,
    // imgUrlAlt: "Profile image of Marcia smiling.",
  },
  {
    name: "Margaret MacMillan",
    about: "Professor of History, Universities of Oxford & Toronto",
    // about: "Emeritus Professor of History, Oxford & Toronto",
    // about: "Margaret MacMillan is emeritus professor of History at the University of Toronto and emeritus professor of International History at Oxford University.  She was Provost of Trinity College, Toronto and then Warden of St Antony's College, Oxford.  She is currently a trustee of the Imperial War Museum.  In 2018 she was the BBC Reith Lecturer, and her latest book is War: How Conflict Shaped Us (2020).",
    url: "http://www.margaretmacmillan.com/",
    // imgUrl: MargaretImg,
    // imgUrlAlt: "Profile image of Maragret MacMillan with a pearl necklace on.",
  },
  {
    name: "Mike Gibbons",
    about: "Educationalist",
    // about: "Former Head Teacher & Education Reformer, Cartmel",
    // about: "Mike has been a leader in education for over forty years: a headteacher of large secondary schools in UK and Europe; a senior civil servant responsible for innovation in schools; CEO of a group of academies and a senior adviser to academies across the country; founder governor of the National College for School Leadership and an international speaker on leadership, innovation and reform in schools. He is passionate about the vital role of literature and the arts in education.",
    url: "https://www.wise-qatar.org/biography/mike-gibbons/",
    // imgUrl: MikeImg,
    // imgUrlAlt: "Profile image of Mike Gibbons sitting in an armchair.",
  },
  {
    name: "Peter Straus",
    about: "Managing Director, RCW Literary Agency",
    // about: "Director, Rogers, Coleridge & White Literary Agency",
    // about: "Managing Director of Rogers, Coleridge & White, Peter Straus has been in the book world for over thirty years and has worked at Hodder & Stoughton, Hamish Hamilton and Macmillan. He is passionate about good writing and great literature and works with many bestselling and prize-winning writers from around the world. He was awarded a CBE for his services to literature in 2016.",
    url: "https://www.rcwlitagency.com/agents/peter-straus/",
    // imgUrl: PeterImg,
    // imgUrlAlt: "Profile image of Peter Straus smiling.",
  },
];

const PersonList = ({ people }: { people: Person[] }) => {
  if (people.length === 0) {
    return <p className="text-contact-night font-light">To be announced.</p>;
  }

  return (
    <ul className="divide-y divide-dark-grey/40">
      {people.map((person) => (
        <li key={person.name}>
          <a
            href={person.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jonquil"
          >
            <h4 className="text-night text-2xl font-georgia">
              <span className="font-georgia font-normal underline decoration-jonquil decoration-2 underline-offset-4 group-hover:bg-jonquil/30 group-focus-visible:bg-jonquil/30 transition-colors">
                {person.name}
              </span>
            </h4>
            <p className="text-contact-night text-lg font-adelphi">
              {person.about}
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
};

const BoardList = ({ members }: { members: BoardMember[] }) => (
  <ul className="flex flex-col gap-10">
    {members.map((member) => (
      <li
        key={member.name}
        className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6"
      >
        <div>
          <div className="text-center sm:text-left">
            <h4 className="text-night text-2xl font-georgia">{member.name}</h4>
            <p className="text-contact-night text-lg font-adelphi">
              {member.role}
            </p>
          </div>
          <p className="text-contact-night font-light leading-relaxed">
            {member.about}
          </p>
        </div>
        <img
          className={cn(
            "order-first sm:order-last shrink-0 w-[180px] h-[180px] aspect-square rounded-full my-auto object-cover bg-night border-2 border-jonquil",
            member.imgClassName,
          )}
          src={member.imgUrl}
          alt={member.imgUrlAlt}
        />
      </li>
    ))}
  </ul>
);

const PanelBox = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div className="card bg-silver">
    <h3 className="text-night text-3xl font-adelphi font-light text-center sm:text-left">
      {title}
    </h3>
    <hr className="w-24 border-t-2 border-jonquil mt-4 mb-4 mx-auto sm:mx-0" />
    {children}
  </div>
);

const AdvisoryPanel = () => {
  return (
    <Container
      className="pt-[80px] pb-[120px] bg-light-grey relative z-10"
      id="otherWho"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <PanelBox title="Board">
          <BoardList members={board} />
        </PanelBox>
        <PanelBox title="Advisory Panel">
          <PersonList people={team} />
        </PanelBox>
      </div>
    </Container>
  );
};

export default AdvisoryPanel;
