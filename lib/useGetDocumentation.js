import axios from "axios";

export const useGetDocumentation = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/get_documentation`
    );

    return response?.data?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
