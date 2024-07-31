import axios from "axios";

export const useGetColor = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/front/setting/color-setting`
    );

    return response?.data?.settings;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
