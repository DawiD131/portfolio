import Flashcards from "./assets/flashcard.png";
import Auto from "./assets/auto.png";
import Nasa from "./assets/nasa.png";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const projects = [
  {
    name: "Flashcards",
    img: Flashcards,
    description:
      "This is an app to learn new things by making cards and adding main word and description.",
    technologies: [
      { icon: faJs, class: "icon-js", name: "Java Script" },
      { icon: faReact, class: "icon-react", name: "React" },
      { icon: faNode, class: "icon-node", name: "Node JS" },
    ],
    features: [
      "Word list where we can find list of words which are in specific lesson.",
      "User authorization will be added in the future.",
    ],
    demoLink: "https://dawid131.github.io/Flashcards/",
    githubLink:
      "See this project on Github: https://github.com/DawiD131/Flashcards",
  },
  {
    name: "Autoservice site",
    img: Auto,
    technologies: [
      { icon: faJs, class: "icon-js", name: "Java Script" },
      { icon: faReact, class: "icon-react", name: "React" },
      { icon: faNode, class: "icon-node", name: "Node JS" },
    ],
    description: "Website for auto service. My first commercial project",
    features: ["User can add posts and create a price list"],
    demoLink: " https://autoserwismiodowa.netlify.app/",
    githubLink: "https://github.com/DawiD131/Auto_service_site",
  },
  {
    name: "Nasa image gallery",
    img: Nasa,
    description:
      "This is an application for explore photos taken from Mars rovers.",
    features: [
      "User can choose which rover he wants to view photos from. -More features will be added soon",
    ],
    demoLink: "demo is not available",
    githubLink: "https://github.com/DawiD131/nasa_rovers_image_gallery",
    technologies: [
      { icon: faJs, class: "icon-js", name: "Java Script" },
      { icon: faReact, class: "icon-react", name: "React" },
      { icon: faNode, class: "icon-node", name: "Node JS" },
    ],
  },
];

export default projects;
