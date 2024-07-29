export default function DynamicPage({ params }) {
  return (
    <div className="container">
      <div className="px-3 mt-[70px] bg-white text-justify ">
        <div className="py-3">My page: {params.page}</div>
      </div>
    </div>
  );
}
