import DynamicPage from "../_components/DynamicPage/DynamicPage";

export default function Page({ params }) {
  return (
    <div className="container">
      <div className="px-3 mt-[70px] bg-white text-justify ">
        <DynamicPage page={params.page} />
      </div>
    </div>
  );
}
