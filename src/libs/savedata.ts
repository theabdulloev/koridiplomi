"use server";
import { Vacancies } from "./models";

export async function SaveData(data: any) {
  try {
    const newdata = new Vacancies({
      userName: "theabdulloev",
      vip: true,
      fullName: "Ismoiljon Abdulloev",
      description: data.desc,
      watch: 2323,
      salary: data.salary,
      contacts: "97 809 23 23",
      email: "ismoiljon.abdulloev.ibt@gmail.com",
      location: data.region.currentKey,
      verification: true,
    });
    return await newdata.save();
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Succses", new Date());
  }
}
