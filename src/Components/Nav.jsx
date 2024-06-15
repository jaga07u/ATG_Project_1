/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

function Nav() {
    return (
        <>
            <nav className="w-full h-[70px] bg-white flex justify-around items-center">
                <div className="w-[162px] h-[50px] flex justify-center items-center">
                    <img src="whole.png" alt="" />
                </div>
                <div className="w-[380px] h-[50px] bg-gray-100 flex justify-center items-center gap-4 rounded-full border-none">
                    <CiSearch style={{marginLeft:"30px",fontSize:"24px"}} />  
                    <input 
                        type="text" 
                        className="w-[350px] h-[50px] rounded-full outline-none bg-transparent text-black placeholder:text-black" 
                        placeholder='Search for your favorite groups in ATG'
                    />
                </div>
                <div className="w-[200px] h-[50px] flex justify-center items-center ">
                    <p className="font-medium">Create account. <span className="text-blue-500 font-bold">It's free!</span><IoMdArrowDropdown style={{display:"inline"}} /></p>
                </div>
            </nav>
        </>
    );
}

export default Nav;
