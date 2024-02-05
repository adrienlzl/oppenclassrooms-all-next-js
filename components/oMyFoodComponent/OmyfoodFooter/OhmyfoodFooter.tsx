import React from "react";
import Link from "next/link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUtensils, faHandsHelping} from '@fortawesome/free-solid-svg-icons';


export default async function OhmyfoodFooter() {

    return (
        <div className={"bg-gray-900 p-[20px] mb-[30px]"}>
            <Link href={""} className={""}>
                <h1 className={""}>
                    ohmyfood
                </h1>
            </Link>
            <ul className={""}>
                <li className={""}>
                    <Link href="">
                        <FontAwesomeIcon icon={faUtensils} className="footer_icon"/>
                        <p className={""}>
                            Proposer un restaurant
                        </p>
                    </Link>
                </li>
                <li className={""}>
                    <Link href="/devenir-partenaire">
                        <FontAwesomeIcon icon={faHandsHelping} className="footer_icon"/>
                        <p className={""}>
                            Devenir partenaire
                        </p>
                    </Link>
                </li>
                <li className={""}>
                    <Link href="/mentions-legales">
                        <p className={""}>
                            Mentions légales
                        </p>
                    </Link>
                </li>
                <li className={""}>
                    <Link href="/contact">
                        <p className={""}>
                            Contact
                        </p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}