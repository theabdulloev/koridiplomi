import { env } from "process";
import { Vacancies } from "./models";
import mongoose from "mongoose";
// mongodb+srv://abdulloev:0CSxryh0nWJEhipW@tojikonbookcl.jsrcsga.mongodb.net/?retryWrites=true&w=majority
async function main() {
  try {
    await mongoose.connect('mongodb+srv://abdulloev:0CSxryhOnWJEhipW@tojikonbookcl.jsrcsga.mongodb.net/?retryWrites=true&w=majority');
    console.log("mongodb connected");
    // const testCol = mongoose.db().collection()
    // await client.db().createCollection('B')
    // await Vacancies.createCollection()
  } catch (error) {
    console.log(error);
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

export async function GetData() {
  try {
    main().catch((err) => console.log(err));
    const data: any = await Vacancies.find();
    return data;
  } catch (error) {
    console.log(error);
  }
  return undefined;
}
