/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function Header() {
    const companies = "142,765";
    return (
        <>
            <div 
                className="relative w-full h-[400px] bg-cover bg-center" 
                style={{ backgroundImage: "url('Rectangle 2.png')" }}
            >
                {/* Overlay for reducing brightness */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                
                {/* Content */}
                <div className="absolute top-[260px] left-[150px] flex justify-center items-center ">
                    <div>
                        <h1 className="text-3xl font-semibold text-white">Computer Engineering</h1>
                        <p className="text-white">{companies} Computer Engineers follow this</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
