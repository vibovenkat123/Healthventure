export type AdventureItem = {
  id: number;
  text: string;
  failed?: boolean;
  options?: AdventureOption[];
};
export type AdventureOption = {
  next: number;
  text: string;
};

export const adventureGame: AdventureItem[] = [
  {
    id: 0,
    text: "Bob has been coughing a lot in school today. What should he do?",
    options: [
      {
        next: 1,
        text: "Wait till the end of the day, then go home",
      },
      {
        next: 2,
        text: "Go home after lunch",
      },
    ],
  },
  {
    id: 1,
    text: "Uh oh! bob spread his cough to the entire class and everyone got sick :(",
    failed: true,
  },
  {
    id: 2,
    text: "Bob is home and needs a cure. what should bob drink?",
    options: [
      {
        next: 3,
        text: "Ice water",
      },
      {
        next: 4,
        text: "Cough syrup",
      },
      {
        next: 3,
        text: "Tea",
      },
    ],
  },
  {
    id: 3,
    failed: true,
    text: "Uh oh! those may be healthy drinks, but not enough to cure bob. ",
  },
  {
    id: 4,
    text: "Bob takes the medicine. when should bob go back to school?",
    options: [
      {
        next: 5,
        text: "The next day",
      },
      {
        next: 6,
        text: "After a couple days",
      },
    ],
  },
  {
    id: 5,
    failed: true,
    text: "Uh oh! doctors reccomend to wait extra days before coming back to school",
  },
  {
    id: 6,
    text: "Bob is well and has waited a couple days. How should he return to school tommorow?",
    options: [
      {
        next: 8,
        text: "Come to school wearing a mask",
      },
      {
        next: 7,
        text: "Come to school normally",
      },
    ],
  },
  {
    id: 7,
    failed: true,
    text: "Uh oh! doctors reccomend to wear a mask in public if you have a cough",
  },
  {
    id: 8,
    text: "Bob wants to pick a good lunch for his first day back.",
    options: [
      {
        next: 9,
        text: "Ice cream and fries",
      },
      {
        next: 10,
        text: "Soup and salad",
      },
      {
        next: 9,
        text: "Iced tea and chicken",
      },
    ],
  },
  {
    id: 9,
    failed: true,
    text: "Uh oh! Those lunches have colder items which can be bad for your throat",
  },
  {
    id: 10,
    text: "Yay! you succeeded :)",
    options: [],
  },
];
