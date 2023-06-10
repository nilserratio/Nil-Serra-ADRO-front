import { AnimalDataStructure } from "../../types";

export const animalsMock: AnimalDataStructure[] = [
  {
    id: "001",
    name: "Bella",
    species: "dog",
    races: "labrador",
    gender: "Female",
    size: "Medium Size",
    yearOfBirth: "2019",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1114238887548698687/1114238942473105468/ASHH5bDmsp6wnK6mEfZdcU.jpg",
    description:
      "Bella is a friendly Labrador Retriever, born in 2019. She is a loving and playful dog who enjoys spending time with people. Bella is great with children and loves going for long walks. She is looking for an active family who can provide her with plenty of exercise and attention. Bella is a loyal companion who will bring joy to any home.",
    user: "646fa090b926156009746913",
  },
  {
    id: "002",
    name: "Max",
    species: "dog",
    races: "golden-retriever, poodle",
    gender: "Male",
    size: "Medium Size",
    yearOfBirth: "2017",
    imageUrl:
      "https://cdn.discordapp.com/attachments/1114238887548698687/1114240048683044966/michael-g-cldhwCv2Lw4-unsplash.jpg",
    description:
      "Max is a handsome mixed breed dog, born in 2017. He is a friendly and energetic companion who loves to play fetch and go for runs. Max gets along well with other dogs and enjoys socializing at the dog park. He is looking for an active family who can provide him with plenty of exercise and mental stimulation. Max will bring lots of happiness and fun to his new home.",
    user: "646fa090b926156009746913",
  },
];

export const animalFormLabels = [
  "Species",
  "Gender",
  "Size",
  "Year of Birth",
  "Name",
  "Races",
  "Image URL",
  "Description",
];
