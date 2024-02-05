import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faList, faStore, faHeart  } from '@fortawesome/free-solid-svg-icons';
import {useGetAllRestaurants} from "@/queries/omyfoodDatas";

export default async function ohmyfoodHome() {
    const allRestaurant = useGetAllRestaurants()

    return (
        <div>
            <section className="min-h-[250px] flex flex-col items-center mx-48">
                <h2 className={"py-[50px] text-black text-2xl"}>
                    Réservez le menu qui vont convient
                </h2>
                <p className={"py-[30px] text-lg"}>
                    Découvrez des restaurants d'exception séléctionnés par nos soins.
                </p>
                <Link href={"#restaurants"}>
                    <p className={"no-underline text-white box-border rounded-full p-15 shadow-md bg-gray-700"}>
                        Explorer nos restaurant
                    </p>
                </Link>
            </section>
            <main>
                <section className="mt-[20px] mb-[30px] p-[20px]">
                    <h2 className={"mb-[20px]"}>
                        Fonctionnement
                    </h2>
                    <ol className={"flex "}>
                        <li className={"min-w-[300px] relative bg-gray-200 rounded-15 shadow-md p-20 flex items-center justify-center text-center"}>
                            <FontAwesomeIcon icon={faMobileAlt} className={"text-gray-700 ml-15"}/>
                            Choisissez un restaurant</li>
                        <li className={"min-w-[300px] relative bg-gray-200 rounded-15 shadow-md p-20 flex items-center justify-center text-center"}>
                            <FontAwesomeIcon icon={faList} className={"text-gray-700 ml-15"}/>
                            Composez votre menu</li>
                        <li  className={"min-w-[300px] relative bg-gray-200 rounded-15 shadow-md p-20 flex items-center justify-center text-center"}>
                            <FontAwesomeIcon icon={faStore} className={"text-gray-700 ml-15"}/>
                            Dégustez au restaurant</li>
                    </ol>
                </section>
                <section className="bg-gray-200 ">
                    <h2 id="restaurants" className={"pl-[7px] "}>
                        Restaurants
                    </h2>
                    <div className={"flex "}>
                        {allRestaurant.map((restaurant, index) => {
                            return (
                                <div className={""}>
                                    <Link href={restaurant.href} key={index}>
                                        <Image
                                            src={restaurant.image}
                                            alt={restaurant.alt}
                                            width={445}
                                            height={200}
                                            className={"object-cover rounded-tl-15 rounded-bl-15"}
                                        />
                                        <div className={""}>
                                            <div className={""}>
                                                <h3 className={""}>
                                                    {restaurant.name}
                                                </h3>
                                                <p className={""}>
                                                    {restaurant.place}
                                                </p>
                                            </div>
                                            <div className={""}>
                                                <FontAwesomeIcon icon={faHeart}  className={"heart"}/>
                                                <FontAwesomeIcon icon={faHeart} className={"heart2"}/>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </main>
        </div>
    )
}