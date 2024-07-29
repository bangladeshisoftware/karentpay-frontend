import DynamicPage from "../_components/DynamicPage/DynamicPage";

export default function Page({ params }) {
  return (
    <div className="container flex justify-center">
      <div className="lg:w-3/4 w-full  mt-[70px]">
        <DynamicPage page={params.page} />
      </div>
    </div>
  );
}
