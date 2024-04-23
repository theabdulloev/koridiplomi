import { Vacancies } from "@/libs/models";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const data = await Vacancies.find();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
