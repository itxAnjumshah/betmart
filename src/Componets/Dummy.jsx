import avatar1 from "../Assets/avatars/avatar1.png";
import avatar2 from "../Assets/avatars/avatar2.png";
import avatar3 from "../Assets/avatars/avatar3.png";
import avatar4 from "../Assets/avatars/avatar4.png";
import avatar5 from "../Assets/avatars/avatar5.png";
import avatar6 from "../Assets/avatars/avatar6.png";

export const cardData = [
  {
    id: 1,
    title: "Which party wins Presidency + Popular Vote?",
    avatar: avatar1,
    options: [
      { text: "Democrats win both", percentage: "48%", yes: true },
      { text: "R Presidency, D Popular Vote", percentage: "28%", yes: true },
      { text: "Other", percentage: "<4%", yes: true },
    ],
    volume: "$19.6m Vol.",
    comments: 902,
  },
  {
    id: 2,
    title: "Who will HBO doc identify as Satoshi?",
    avatar: avatar2,
    options: [
      { text: "Democrates win both", percentage: "48%", yes: true },
      { text: "R Presidency, D Popular Vote", percentage: "28%", yes: false },
      { text: "Other", percentage: "<4%", yes: true },
    ],
    volume: "$19.6m Vol.",
    comments: 645,
  },
  {
    id: 3,
    title: "Next James Bond actor?",
    avatar: avatar3,
    options: [
      { text: "Democrates win both", percentage: "48%", yes: true },
      { text: "R Presidency, D Popular Vote", percentage: "28%", yes: false },
      { text: "Other", percentage: "<4%", yes: true },
    ],
    volume: "$7.0m Vol.",
    comments: 450,
  },
  {
    id: 4,
    title: "What price will Bitcoin hit in October?",
    avatar: avatar4,
    options: [
      { text: "Chances of event taking place", percentage: "45%", yes: true },
    ],
    volume: "$7.6m Vol.",
    comments: 312,
  },
  {
    id: 5,
    title: "WNBA: Sun vs. Lynx Game 3",
    avatar: avatar5,
    options: [
      { text: "Democrates win both", percentage: "48%", yes: true },
      { text: "R Presidency, D Popular Vote", percentage: "28%", yes: false },
      { text: "Other", percentage: "<4%", yes: true },
    ],
    volume: "$10.3m Vol.",
    comments: 90,
  },
  {
    id: 6,
    title: "Which party wins Presidency + Popular Vote?",
    avatar: avatar6,
    options: [
      { text: "Democrats win both", percentage: "48%", yes: true },
      { text: "R Presidency, D Popular Vote", percentage: "28%", yes: false },
      { text: "Other", percentage: "<4%", yes: true },
    ],
    volume: "$7.6m Vol.",
    comments: 902,
  },
];
