import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default  function OhmyfoodHeader() {

    return (
        <div className="">
            <div className={"h-[50px] text-black flex text-center no-underline bg-white shadow-inner md:shadow-md lg:shadow-lg xl:shadow-xl shadow-color"}>
                <Link href={""} className={""}>
                    <h1 className={""}>
                        ohmyfood
                    </h1>
                </Link>
            </div>
            <div className={"flex text-center w-full h-[50px] font-normal justify-center items-center"}>
                <div className={"text-lg"}>
                    {/*<FontAwesomeIcon icon={faLocationDot} className="text-blue-500 text-lg" />*/}
                </div>
                <p className={" text-lg  "}>
                    Paris, Belleville
                </p>
            </div>
        </div>
    )
}