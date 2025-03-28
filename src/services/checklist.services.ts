import { Checklist } from "../models/checklist.model";
import { MemberChecklist } from "../models/member-checklist";

export interface Data {
  status?: string | undefined;
  questions?: Question[] | undefined;
}

export interface Question {
  _id: string;
  title: string;
  clerkId: string
  items: Item[] | undefined;
  createdAt: Date;
  updatedAt: Date;
}

export interface Item {
  number: number;
  text: string;
  score: number[] | null;
}

export const ChecklistGetService = async () => {
  const data = await Checklist.find();

  if (!data) {
    throw new Error("Checklist not found");
  }

  return data;
};

export const ChecklistPostService = async (checklist: Data) => {
  const data = checklist.questions?.map((question) => {
    // Usamos .map() para iterar sobre los items y hacer algo con ellos
    const itemDetails = question.items?.map((item) => {
      // Aquí puedes hacer algo con cada item, por ejemplo, devolver el 'number' y 'text'
      return {
        number: item.number,
        text: item.text,
        score: Number(item.score),
      };
    });

    return {
        clerkId: question.clerkId,
        title: question.title,
        items: itemDetails
    }
  });

  return MemberChecklist.create(data)
};
