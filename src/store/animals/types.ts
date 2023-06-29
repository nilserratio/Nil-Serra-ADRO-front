import { AnimalDataStructure } from "../../types";

export interface AnimalsStateStructure {
  animals: AnimalDataStructure[];
  animalById?: AnimalDataStructure;
  limit: number;
  totalAnimals?: number;
}
