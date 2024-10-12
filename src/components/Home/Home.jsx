import React, { useState } from 'react'
import HeroImg from '../../assets/HeroImg.png'
import arrow from '../../assets/arrow.png'
import student from '../../assets/student.png'
import finance from '../../assets/finance.png'
import institute from '../../assets/institue.png'
import sag from '../../assets/sag.png'
import overview from '../../assets/overview.png'
import { OVERVIEW_TEXT } from '../../constants'
import { statisticsData } from '../../constants'
import { menuItems } from '../../constants'
import { Link } from 'react-router-dom'

const Home = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div>
            <div className='flex relative'>
                <img src={HeroImg} alt="" className=' w-full h-{397px}' />
                <p className=' absolute mt-24 ml-20 text-white font-semibold text-6xl'>PMSSS</p>
                <p className=' absolute mt-48 ml-20 text-white font-semibold text-{18px} font-rubik'>PRADHAN MANTRI SPECIAL SCHOLARSHIP SCHEME FOR J&K AND LADAKH</p>
                <button className="flex absolute justify-center items-center px-7 py-2 mt-64 ml-20 text-sm leading-7 text-center text-white bg-sky-500 rounded-lg max-md:mb-2.5 transition-all duration-300 hover:scale-105">
                    <span className="self-stretch my-auto flex justify-around items-center">Know More
                        <img src={arrow} alt="" className=' w-3 h-2 scale-110 ml-2 mt-1' />
                    </span>
                </button>
            </div>
            <div className=' h-56 w-full bg-blue3 flex justify-around items-center'>
                <Link to={'student/login'}>
                    <div className=' w-56 h-32 my-auto bg-hblue2 rounded-xl flex flex-col items-center justify-center text-white font-rubik'>
                    <img src={student} alt="" className=' w-24 h-16 mt-3' />
                    <span className=' font-rubik mt-2 text-xl font-normal'>Student</span>
                </div>
                </Link>
                <div className=' w-56 h-32 my-auto bg-hblue2 rounded-xl flex flex-col items-center justify-center text-white font-rubik'>
                    <img src={sag} alt="" className=' w-24 h-16' />
                    <span className=' font-rubik mt-2 text-xl font-normal'>SAG Officer</span>
                </div>
                <div className=' w-56 h-32 my-auto bg-hblue2 rounded-xl flex flex-col items-center justify-center text-white font-rubik'>
                    <img src={finance} alt="" className=' w-10 h-16' />
                    <span className=' font-rubik mt-2 text-xl font-normal'>Finance</span>
                </div>
                <div className=' w-56 h-32 my-auto bg-hblue2 rounded-xl flex flex-col items-center justify-center text-white font-rubik'>
                    <img src={institute} alt="" className=' w-20 h-20' />
                    <span className=' font-rubik mt-2 text-xl font-normal'>Institution</span>
                </div>
            </div>
            <div className=' h-[777px] bg-hblue2 flex shrink-0 flex-col'>
                <div className=' text-center mt-[78px]'>
                    <span className=' font-rubik text-white text-5xl font-semibold tracking-[6px]'>OVERVIEW</span>
                </div>
                <div className=' flex '>
                    <div className=' w-[786px] h-[430px] ml-[100px] mt-[100px]'>
                        <p className=' text-white text-justify bg-[#1C5194] p-6 rounded-lg'>{OVERVIEW_TEXT}</p>
                        <hr class="w-[786px] border-t-2 border-white mt-[53px]"></hr>

                        <div className=' flex justify-around mt-[53px]  text-white font-rubik'>
                            {statisticsData.map((item, index) => (
                                <div key={index} className=' '>
                                    <div className="flex flex-col bg-[#1C5194] p-3 rounded-lg">
                                        <div className=' text-center text-[40px]'>
                                            {item.value}
                                        </div>
                                        <div className=' text-center w-[163px] flex-wrap  '>
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <img src={overview} alt="" className=' w-[378px] h-[450px] mt-[100px] ml-10' />
                    <div>
                    </div>
                </div>
            </div>
            <div className=' bg-blue3 h-auto'>
                <div className=' ml-[208px] py-[96px] flex gap-6'>
                    <div className=" w-48 bg-white border-x border-[#EDF7FE]">
                        <ul className="">
                            {menuItems.map((item, index) => (
                                <li key={item.id}>
                                    <button
                                        className={`w-full text-center py-2 ${activeIndex === index
                                            ? ' bg-hblue1 text-white'
                                            : 'bg-white text-black hover:bg-blue-500 hover:text-white'
                                            }`}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        {item.title}
                                    </button>

                                </li>
                            ))}

                        </ul>

                    </div>
                    <div className="flex bg-gray-100 p-4 w-4/5 items-center justify-center">
                        {activeIndex !== null ? (
                            <div className="p-6 bg-white shadow-md rounded-md w-11/12">
                                <h2 className="text-2xl font-bold">{menuItems[activeIndex].title}</h2>
                                <p className="mt-4">{menuItems[activeIndex].content}</p>
                            </div>
                        ) : (
                            <div className="text-gray-500 text-center">
                                <p>Select an option from the menu to view the content</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>


        </div>


    )
}

export default Home