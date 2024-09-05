import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './MyCarousel.css'; 

function MyCarousel() {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none p-2 cursor-pointer z-10 w-12 h-12 flex justify-center items-center"
                    >
                        &#10094;
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none p-2 cursor-pointer z-10 w-12 h-12 flex justify-center items-center"
                    >
                        &#10095;
                    </button>
                )
            }
        >



            <div className="min-w-full h-[500px] bg-[#f3ead9] flex flex-row  justify-between item-center py-10 px-2-">
                <div className='relative w-[26%] '>
                    <img
                        src="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/Stamps/Self%20Inking%C2%A0-%2064x44%20mm/IN_Self-Inking-Stamps-64x44mm_Overview"
                        alt="Left Image "
                        className="w-full h-[200px] object-cover rounded-lg  mb-[-20px] -mt-[10px] ml-20 pb-20 "
                    />
                </div>

                <div className="text-center flex-1 max-w-[676px] pt-40">
                    <h1 className="font-bold text-5xl mb-4 h-15">Another Tittle</h1>
                    <p className="text-lg mb-6">Another Subtitle</p>
                    <button className="bg-black text-white px-6 py-3 rounded-full">
                        Shop Now
                    </button>
                </div>

                <div className='relative w-[25%]'>
                    <img
                        src="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/marketing%20Materials/Keny%20File%20Ring%20Binder%20File/IN_Keny-File-Ring-Binder-File_Overview"
                        alt="Right Image"
                        className="w-full h-[20px] object-cover rounded-lg -mt-[11px] ml-[-200px] mb-[30px] pb-20"
                    />
                </div>

            </div>





            <div className="min-w-full h-[500px] bg-[#f3ead9] flex flex-row  justify-between item-center py-10 px-20-">
                <div className='relative w-[26%] '>
                    <img
                        src="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/visiting-cards/vc/IN_PremiumPlusVisitingcards_Product_Page_tile"
                        alt="Left Image "
                        className="w-full h-[200px] object-cover rounded-lg  mb-[-20px] -mt-[10px] ml-20 pb-20"
                    />
                </div>

                <div className="text-center flex-1 max-w-[676px] pt-40">
                    <h1 className="font-bold text-5xl mb-4 h-15">Third Title</h1>
                    <p className="text-lg mb-6">Third Subtitle</p>
                    <button className="bg-black text-white px-6 py-3 rounded-full">
                        Shop Now
                    </button>
                </div>
                <div className='relative w-[25%]'>
                    <img
                        src="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_700/India%20LOB/visiting-cards/Velvet%20Touch%20Visiting%20Cards/IN_Velvet-Touch-Visiting-Cards_Overview"
                        alt="Right Image"
                        className="w-full h-[20px] object-cover rounded-lg -mt-[11px] ml-[-200px] mb-[30px] pb-20"
                    />
                </div>

            </div>






            <div className="min-w-full h-[500px] bg-[#f3ead9] flex flex-row  justify-between item-center py-10 px-2-">
                <div className='relative w-[26%] '>
                    <img
                        src="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_960/India%20LOB/NVHP/New%20Home%20Page/Production/18th%20July%202024/IN_VC_ZIA-fashion_Marquee_01_Left"
                        alt="Left Image "
                        className="w-full h-[200px] object-cover rounded-lg  mb-[-20px] -mt-[10px] ml-20 pb-20"
                    />
                </div>

                <div className="text-center flex-1 max-w-[676px] pt-40">
                    <h1 className="font-bold text-5xl mb-5 ">My Name is Pride</h1>
                    <p className="text-2xl mb-5">100 Visiting Card at Rs 200</p>
                    <button className="bg-black text-white px-8 py-4 rounded-full">
                        Shop Now
                    </button>
                </div>

                <div className='relative w-[25%]'>
                    <img
                        src="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_960/India%20LOB/NVHP/New%20Home%20Page/Production/18th%20July%202024/IN_VC_ZIA-fashion_Marquee_02_Right"
                        alt="Right Image"
                        className="w-full h-[20px] object-cover rounded-lg -mt-[11px] ml-[-200px] mb-[30px] pb-20"
                    />
                </div>

            </div>
        </Carousel>
    );
}

export default MyCarousel;
