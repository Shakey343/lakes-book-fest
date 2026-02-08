import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  // faXTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    link: "mailto:festivalproducer@lakedistrictbookfestival.co.uk",
    icon: faEnvelope,
  },
  {
    link: "https://www.instagram.com/lakedistrictbookfestival/",
    icon: faInstagram,
  },
  {
    link: "https://www.facebook.com/profile.php?id=61565796031388",
    icon: faFacebookF,
  },
  // {
  //   link: "https://x.com/LakeBook22264",
  //   icon: faXTwitter,
  // },
];

const Socials = () => {
  return (
    <div className="flex justify-evenly min-w-[300px]">
      {links.map((link, i) => (
        <a href={link.link} target="_blank" key={i}>
          <FontAwesomeIcon
            icon={link.icon}
            size="2xl"
            className="my-3 text-white hover:text-jonquil"
          />
        </a>
      ))}
    </div>
  );
};

export default Socials;
