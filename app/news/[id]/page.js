import NewsDetails from "@/app/_components/NewsDetails/NewsDetails";

export default function NewsPageDetails({ params }) {
  return (
    <section className="container mx-auto mt-20 flex items-start justify-center">
      <NewsDetails id={params.id} />
    </section>
  );
}
