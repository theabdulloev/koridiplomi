import mongoose from "mongoose";
const { Schema } = mongoose;

const vacanciesSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    vip: Boolean,
    fullName: String,
    description: String,
    watch: Number,
    salary: Number,
    contacts: String,
    email: String,
    location: String,
  },
  { timestamps: true }
);
export const Vacancies =
  mongoose.models.Vacancies || mongoose.model("Vacancies", vacanciesSchema);
