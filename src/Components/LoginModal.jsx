const LoginModal = ({ show, handleClose }) => {

    if (!show) {
        return null;
    }

    return (
        <div className="absolute top-0 left-0 z-50 w-screen h-screen bg-black/40">
            <div className="w-screen md:w-2/3 lg:w-1/2 h-fit rounded-t-lg bg-white flex flex-col p-4 md:p-0 overflow-hidden">
                <div className="w-full bg-green-300 text-green-600 text-center py-2">
                    Lets learn, share & inspire each other with our passion for computer engineering. Sign up now 🚀
                </div>
                <div className="grid grid-cols-2 w-full gap-6">
                    <div className="flex flex-col gap-4 w-full">
                        <h2 className="text-center text-2xl font-bold text-black">
                            Create Account
                        </h2>
                        <div className="grid grid-cols-2 grid-rows-4 w-full">
                            <input type="text" name="fname" id="fname" className="w-full col-span-1 row-span-1 bg-white px-4 py-2" />
                            <input type="text" name="lname" id="lname" className="w-full col-span-1 row-span-1 bg-white px-4 py-2" />
                            <input type="email" name="email" id="email" className="w-full col-span-2 row-span-1 bg-white px-4 py-2" />
                            <input type="password" name="password" id="password" className="w-full col-span-2 row-span-1 bg-white px-4 py-2" />
                            <input type="password" name="cpassword" id="cpassword" className="w-full col-span-2 row-span-1 bg-white px-4 py-2" />
                        </div>
                        <button className="bg-blue-500 text-white py-2 rounded-full">
                            Create Account
                        </button>
                        <button className="bg-white text-black font-medium py-2 flex items-center gap-2 border-2 border-gray-400">
                            Sign up with Facebook
                        </button>
                        <button className="bg-white text-black font-medium py-2 flex items-center gap-2 border-2 border-gray-400">
                            Sign up with Google
                        </button>
                    </div>
                    <div className="flex flex-col h-full justify-between">
                        <span className="text-black font-medium">
                            Already have an account? <span className="text-blue-500 cursor-pointer">Sign in</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;