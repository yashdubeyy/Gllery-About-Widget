"use client";
import { useState } from 'react';

const Navitems = () => {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <>
            {/* NavBar and Its Items  */}
            <div className="flex justify-center mt-3 sm:mt-5 px-3 sm:px-0">
                <div className="relative w-full max-w-[450px] h-[45px] sm:h-[49px] p-2 sm:p-[10px] bg-[#131313] rounded-[20px] flex flex-col justify-center items-center [box-shadow:0px_4.96px_12.4px_2.48px_#00000040_inset]">
                    <ul className="grid grid-cols-3 gap-3 sm:gap-6 text-center text-white text-sm sm:text-base w-full relative">
                        <li 
                            onClick={() => setActiveTab('about')}
                            className={`col-span-1 cursor-pointer transition-colors duration-300 ease-linear h-[30px] sm:h-[35px] flex items-center justify-center rounded-[15px] relative z-10 ${activeTab === 'about' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}
                        >
                            About Me
                        </li>
                        <li 
                            onClick={() => setActiveTab('experiences')}
                            className={`col-span-1 cursor-pointer transition-colors duration-300 ease-linear h-[30px] sm:h-[35px] flex items-center justify-center rounded-[15px] relative z-10 ${activeTab === 'experiences' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}
                        >
                            Experiences
                        </li>
                        <li 
                            onClick={() => setActiveTab('recommended')}
                            className={`col-span-1 cursor-pointer transition-colors duration-300 ease-linear h-[30px] sm:h-[35px] flex items-center justify-center rounded-[15px] relative z-10 ${activeTab === 'recommended' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}
                        >
                            Recommended
                        </li>
                        {/* Animated background */}
                        <div
                            className={`absolute h-[30px] sm:h-[35px] w-[33%] bg-[#28292f] rounded-[15px] transition-all duration-300 ease-linear shadow-[0px_2px_8px_0px_rgba(0,0,0,0.3)]`}
                            style={{
                                left: `${activeTab === 'about' ? '0' : activeTab === 'experiences' ? '33.33%' : '66.66%'}`
                            }}
                        />
                    </ul>
                </div>
            </div>

            {/* Text Container */}
            <div className="mt-2 p-4 sm:p-[35px] h-[180px] sm:h-[200px] overflow-y-auto [scrollbar-gutter:stable]">
                <p className="text-base leading-relaxed">
                    <span className="text-[#7e7f81]">
                        Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                        I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt temporibus alias, fugit consequatur praesentium nesciunt veniam saepe. Ipsa sed reprehenderit repudiandae, voluptates recusandae ullam esse nesciunt quisquam exercitationem quae libero a id sequi ea mollitia et est corporis incidunt cum sit ut atque. Quibusdam soluta, corrupti optio inventore accusamus itaque cumque harum quis est dicta repellendus temporibus. Qui doloremque repellat possimus perspiciatis? Nulla, aut hic iusto ad consectetur laborum ex dolores. Ducimus asperiores nam, modi eum pariatur incidunt ipsam labore et dolorem odit tempora perferendis magni illo, saepe sint numquam quo doloremque cum natus reprehenderit. Quas totam commodi libero nisi.
                    </span>
                </p>
            </div>
        </>
    );
}

export default Navitems;