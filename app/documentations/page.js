import { useGetDocumentation } from "@/lib/useGetDocumentation";
import parse from "html-react-parser";

export default async function Documentation() {
  const documentations = await useGetDocumentation();

  return (
    <>
      {documentations?.length > 0 ? (
        <div className="flex justify-center">
          <div className="scale-x-95 lg:scale-x-100 w-[98%] lg:w-[60%]">
            <div className="mt-[70px] space-y-5">
              {documentations?.map((item) => (
                <div
                  key={item?.id}
                  className=" bg-white rounded-md px-5 py-4 lg:px-10 lg:py-5 text-justify"
                >
                  <h2 className="text-2xl my-2 gradient-text">{item.title}</h2>
                  <div className="text-lg text-gray-700">
                    {parse(`${item.description}`)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="scale-x-95 lg:scale-x-100 w-[98%] lg:w-[60%]">
            <div className="mt-[70px] space-y-5">
              <div className=" bg-white rounded-md px-5 py-4 lg:px-10 lg:py-5 text-justify">
                <h2 className="text-2xl my-2 gradient-text">
                  No documentation found
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
