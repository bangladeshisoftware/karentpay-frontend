import NavBar from "@/app/_components/Header/NavBar";
import TopBar from "@/app/_components/Header/TopBar";
import { useGetColor } from "@/lib/useGetColor";

const Header = async () => {
  const gradientColors = await useGetColor("front/setting/color-setting");
  const topbarGradientColors = await useGetColor(
    "front/setting/header-setting"
  );

  return (
    <header>
      <TopBar topbarGradientColors={topbarGradientColors} />
      <NavBar gradientColors={gradientColors} />
    </header>
  );
};
export default Header;
