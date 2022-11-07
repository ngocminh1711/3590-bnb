
import Header from "../../header/Header";

import {useEffect, useRef, useState} from "react";
import { useSelector} from "react-redux";

import './DetailHouse.css'
import Footer from "../../footer/Footer";



function DetailHouse() {
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0)
    const carousel = useRef(null);
    const house = useSelector((state) => state.getHouse.house)

    console.log(house)

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };
    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction) => {
        if (direction === 'prev') {
            return currentIndex <= 0;
        }

        if (direction === 'next' && carousel.current !== null) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };



    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, []);

    return (
        <>
            <Header/>

            <div className="bg-white">
                <div className="mx-auto max-w-10xl py-14 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
                   <div className="grid grid-cols-2">

                           <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{house.name}</h1>
                           <div className="grid grid-cols-3">
                               <span></span>
                               <span className="w-full h-full text-black mt-2 ml-10 text-center">Status</span>
                               <div className="rounded-lg border">
                                   <button className="w-full h-full outline-8">Preview listing</button>
                               </div>
                           </div>
                           <span></span>
                            <div className="py-12 grid grid-cols-1 ">
                                <div>
                                    <p className="text-gray-900 text-2xl title-font inline">Image</p>
                                    <button className="pr-10 underline decoration-solid inline float-right">Edit ></button>
                                    <div className="py-4">
                                        <div className="carousel my-2">
                                            <div className="relative overflow-hidden">
                                                <div className="flex justify-between absolute top left w-full h-full">
                                                    <button
                                                        onClick={movePrev}
                                                        className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                                                        disabled={isDisabled('prev')}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-12 w-20 -ml-5"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M15 19l-7-7 7-7"
                                                            />
                                                        </svg>
                                                        <span className="sr-only">Prev</span>
                                                    </button>
                                                    <button
                                                        onClick={moveNext}
                                                        className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                                                        disabled={isDisabled('next')}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-12 w-20 -ml-5"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth={2}
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M9 5l7 7-7 7"
                                                            />
                                                        </svg>
                                                        <span className="sr-only">Next</span>
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                        <div
                                            ref={carousel}
                                            className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                                        >{house.image_view && house.image_view.map((item,index) => (
                                            <div
                                                key={index}
                                                className="carousel-item text-center relative w-300 h-150 snap-start"
                                            >
                                                <img className=" rounded-lg border" style={{
                                                    width: 500 , height: 150
                                                }} src={item} alt=""/>
                                            </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>
                       <span></span>
                       <div>
                           <h1 className="text-gray-900 text-2xl title-font font-medium mb-1 inline ">Listing Basic</h1>
                           <button className="pr-10 underline decoration-solid inline float-right">Edit</button>
                           <div className="py-4">
                               <h2 className="text-slate-500 text-1xl title-font font-medium">Listing title</h2>
                               <p className="text-slate-400">{ house?.name}</p>
                           </div>

                       </div>
                       <span></span>
                       <div className="py-4">

                           <h2 className="text-slate-500 text-1xl title-font font-medium mb-1 inline">Listing description</h2>
                           <button className="pr-10 underline decoration-solid inline float-right inline">Edit</button>
                           <p className="text-slate-400">{house?.description}</p>
                       </div>
                       <span></span>
                       <div className="py-4">

                           <h2 className="text-slate-500 text-1xl title-font font-medium mb-1 inline">Listing description</h2>
                           <button className="pr-10 underline decoration-solid inline float-right inline">Edit</button>
                           <p className="text-slate-400">{house?.address}</p>
                       </div>
                       <span></span>
                       <div className="py-4">
                           <h2 className="text-slate-500 text-1xl title-font font-medium mb-1 inline">Property and rooms</h2>

                               <button className="pr-10 underline decoration-solid inline float-right inline">Edit</button>

                           <p className="text-slate-400">{house?.typeRoom.name}</p>
                           <p className="text-slate-400">Bedroom: {house?.numberOfBedrooms}</p>
                           <p className="text-slate-400">Bathroom: {house?.numberOfBathrooms}</p>


                       </div>

                   </div>
                </div>
            </div>
        <Footer/>
        </>
)
}

export default DetailHouse;