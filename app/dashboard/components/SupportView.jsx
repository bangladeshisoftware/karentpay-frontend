import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { toast } from "react-toastify";

function SupportView({ supportReplyMessage, setSupportReplyMessage, item }) {
    const [render, setRender] = useState(false);

    const [replayMessage, setReplayMessage] = useState("");

    const [chooseFile, setChooseFile] = useState(null)
    const handleChooseFileChange = (event) => {
        const file = event.target.files[0];
        setChooseFile(file);
    };

    const token = Cookies.get("auth_token");
    console.log(supportReplyMessage);
    // handel added reply post
    const handleSupportReplyMessage = (item) => {
        const formData = new FormData();
        formData.append('ticket_id', item.track_id);
        formData.append('user_id', item.user_id);
        formData.append('message', replayMessage);
        if (chooseFile) {

            formData.append('attachment_image', chooseFile);
        }
        axios
            .post(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/add_reply/${item.id}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then((response) => {
                if (response.status === 201) {
                    setRender(true);
                    toast.success("✒️ Replay Message Added success");
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error("📵 Failed to add replay message");
            });

    }

    // handle get reply 

    const [replyMessage, setReplyMessage] = useState([]);

    useEffect(() => {
        fetchData();
    }, [render]);

    useEffect(() => {
        setRender(false);
    }, []);
    console.log(supportReplyMessage);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/tickets/${supportReplyMessage}/replies`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.status === 200) {
                setReplyMessage(response.data);
            }
        } catch (error) { }
    };

    fetchData()
    console.log(replyMessage);
    return (
        <>
            {
                supportReplyMessage === item.track_id && <div
                    id="popup-modal"
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black/30 bg-opacity-50"
                >
                    <div className="relative md:p-4 w-full max-w-3xl  overflow-y-scroll max-h-[90vh] bg-white  rounded-[4px] shadow">
                        <div className="relative  dark:bg-gray-700">

                            {/* Modal content */}
                            <div className="p-4 pr-10 md:p-5 ">
                                <div className="flex gap-3">
                                    <div className="w-8 lg:w-[5%] h-8 border  overflow-hidden rounded-full flex items-center justify-center">

                                        <h2 className="text-lg font-bold">{item.user?.name.slice(0, 1)}</h2>
                                    </div>
                                    <div className="w-[95%]">
                                        <h2>{item.user?.name}</h2>
                                        <h2>Subject : {item.subject}</h2>
                                        <h2 className="mb-5">Message : {item.message}</h2>
                                        {
                                            item.image && <Image width={700} height={600} src={process.env.NEXT_PUBLIC_BASE_URL + '/public/' + item.image} alt={item.name} />
                                        }
                                    </div>
                                </div>
                                {
                                    replyMessage?.map((item, index) => <div key={index} className="flex gap-3 mt-3 bg-slate-50 p-3 rounded-[4px]">

                                        <div className="w-8 lg:w-[5%] h-8 border  overflow-hidden rounded-full flex items-center justify-center">
                                            {
                                                item.user.avatar ? <Image width={700} height={600} src={item.user.avatar} alt={item.name} /> :
                                                    <h2 className="text-lg font-bold">{item.user?.name.slice(0, 1)}</h2>
                                            }
                                        </div>
                                        <div className="w[95%]">
                                            <h2>{item.user?.name}</h2>
                                            <h2>{item.message}</h2>
                                            {
                                                item.attachment_image && <Image width={700} height={600} src={item.attachment_image} alt={item.user.name} />
                                            }
                                        </div>
                                    </div>)
                                }

                                <div className="mt-3">
                                    <label
                                        htmlFor="message"
                                        className="block my-1"
                                    >
                                        Replay Message
                                    </label>
                                    <textarea
                                        onChange={(e) => setReplayMessage(e.target.value)}
                                        id="message"
                                        rows="8"
                                        name="description"
                                        className={`block p-2.5 w-full text-size text-gray-900  rounded-[4px] border   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${replayMessage
                                            ? "focus:ring-green-500 focus:border-green-500"
                                            : "border-gray-300"
                                            }`}
                                        placeholder="Write your message..."
                                    ></textarea>
                                </div>
                                <h2 className="block my-1 mt-3">
                                    Choose File (O)
                                </h2>
                                <input
                                    onChange={handleChooseFileChange}
                                    className="block w-full text-size text-gray-900 border border-gray-300 rounded-[4px] cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
                                    id="file_input"
                                    type="file"
                                />
                                <div className="mt-5">
                                    <button
                                        onClick={() => handleSupportReplyMessage(item)}
                                        type="button"
                                        className="text-white bg-gradient-to-r from-[#395BEF] to-[#5C28D5] focus:outline-none font-medium rounded-[4px] text-size  inline-flex items-center px-5 py-2.5 text-center"
                                    >
                                        Send <IoIosSend />
                                    </button>
                                    <button
                                        onClick={() => setSupportReplyMessage("")}
                                        type="button"
                                        className="py-2.5 px-5 ms-3 text-size  font-medium focus:outline-none  rounded-[4px] border bg-[#F9FAFB] hover:bg-[#dfe2e6]"

                                    >
                                        No, cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default SupportView;