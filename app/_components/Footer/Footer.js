import { useGetColor } from "@/lib/useGetColor";
import FooterComonent from "./FooterComponent";

const Footer = async () => {
  const gradientColors = await useGetColor("front/setting/color-setting");
  return (
    <>
      <FooterComonent gradientColors={gradientColors} />
    </>
  );
};
export default Footer;
