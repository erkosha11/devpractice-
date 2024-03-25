import axios from "axios";

export const getReview = async () => {
  try {
    const response = await axios.get(
      " https://7643681ae699dffc.mokky.dev/review"
    );
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};

export interface Review {
  img: string;
  name: string;
  description: string;
}
