import { useGetColor } from "@/lib/useGetColor";
import FooterComonent from "./FooterComponent";

const Footer = async () => {
  const gradientColors = await useGetColor();
  return (
    <>
      <FooterComonent gradientColors={gradientColors} />
    </>
  );
};
export default Footer;
