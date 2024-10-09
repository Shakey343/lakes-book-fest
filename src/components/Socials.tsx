import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";

const links = [
  {
    link: "https://www.facebook.com/profile.php?id=61565796031388",
    icon: faFacebookF,
  },
  {
    link: "https://www.instagram.com/lakedistrictbookfestival/",
    icon: faInstagram,
  },
  {
    link: "https://x.com/LakeBook22264",
    icon: faXTwitter,
  },
];

const Socials = () => {
  return (
    <div className="w-full w-[600px] flex justify-evenly px-16">
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
