import axios from "axios";

export const getTeachers = async () => {
  try {
    const response = await axios.get(
      " https://7643681ae699dffc.mokky.dev/teachers"
    );
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};

export interface Teachers {
  img: string;
  name: string;
  jobtitle: string;
}
