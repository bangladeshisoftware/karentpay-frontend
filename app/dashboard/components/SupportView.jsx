import Image from "next/image";
import { IoIosSend } from "react-icons/io";

function SupportView({ supportReplyMessage, setSupportReplyMessage, item }) {


    const handleSupportReplyMessage = () => {
        console.log("object");
    }
    console.log(supportReplyMessage);
    console.log(item);
    /* console.log(item);
    console.log(process.env.NEXT_PUBLIC_DATA_API); */
    return (
        <>
            {
                supportReplyMessage === item.track_id && <div
                    id="popup-modal"
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black/30 bg-opacity-50"
                >
                    <div className="relative p-4 w-full max-w-5xl max-h-full">
                        <div className="relative bg-white rounded-[4px] shadow dark:bg-gray-700">

                            {/* Modal content */}
                            <div className="p-4 pr-10 md:p-5 ">
                                <div className="flex gap-3">
                                    <h2 className="w-8 h-8 rounded-full flex items-center justify-center border text-lg font-bold">{item.user?.name.slice(0, 1)}</h2>
                                    {/* <Image width={700} height={700} src={import.meta.env.NEXT_PUBLIC_DATA_API} alt={item.user?.name} className="w-10 h-10"/> */}
                                    <div>
                                        <h2>{item.user?.name}</h2>
                                        <h2>Subject : {item.subject}</h2>
                                        <h2>Message : {item.message}</h2>
                                    </div>
                                </div>
                                {/*  <button
                                    onClick={() => handleSupportReplyMessage(supportReplyMessage)}
                                    type="button"
                                    className="text-white bg-gradient-to-r from-[#395BEF] to-[#5C28D5] focus:outline-none font-medium rounded-[4px] text-size  inline-flex items-center px-5 py-2.5 text-center"
                                >
                                    Send <IoIosSend />
                                </button>
                                <button
                                    onClick={() => setSupportReplyMessage("")}
                                    type="button"
                                    className="py-2.5 px-5 ms-3 text-size  font-medium focus:outline-none  rounded-[4px] border border-gray-200 bg-gray-100 hover:bg-gray-500 hover:text-white dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"

                                >
                                    No, cancel
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default SupportView;