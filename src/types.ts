import { AnimalsStateStructure } from "./store/animals/types";

export interface UserCredentials {
  username: string;
  password: string;
}

export interface AnimalDataStructure {
  id?: string;
  name: string;
  species: string;
  races: string;
  gender: string;
  size: string;
  yearOfBirth: string;
  imageUrl: string;
  description: string;
  user?: string;
}

export interface AnimalsResponseStructure extends AnimalsStateStructure {
  totalAnimals: number;
}
