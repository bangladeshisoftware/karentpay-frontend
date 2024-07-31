import NavBar from "@/app/_components/Header/NavBar";
import TopBar from "@/app/_components/Header/TopBar";
import { useGetColor } from "@/lib/useGetColor";

const Header = async () => {
  const gradientColors = await useGetColor();
  return (
    <header>
      <TopBar />
      <NavBar gradientColors={gradientColors} />
    </header>
  );
};
export default Header;
