import { ObjectId } from "mongodb";

export interface HeroSection {
  _id?: ObjectId;
  title: string;
  subTitle: string;
  description: string;
}

export interface AboutMeSection {
  _id?: ObjectId;
  title: string;
  text: string;
}
