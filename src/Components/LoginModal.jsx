/* eslint-disable react/prop-types */
const LoginModal = ({ show, handleClose }) => {
	if (!show) {
		return null;
	}

	return (
		<div className="absolute top-0 left-0 z-50 w-screen h-screen bg-black/40 flex items-center justify-center">
			<div className="w-screen md:w-2/3 lg:w-1/2 h-fit md:rounded-lg max-md:rounded-t-lg bg-white flex flex-col p-4 p-md-0 md:p-0 overflow-hidden relative">
				<div
					className="absolute top-full right-full ml-6 mb-6 bg-white rounded-full h-4 w-4"
					onClick={handleClose}>
					x
				</div>
				<div className="w-full bg-green-300 text-green-600 text-center py-2">
					Lets learn, share & inspire each other with our passion for
					computer engineering. Sign up now 🚀
				</div>
				<div className="grid md:grid-cols-2 grid-cols-1 w-full gap-6 p-4">
					<div className="flex flex-col gap-4 w-full">
						<h2 className="text-2xl font-bold text-black">
							Create Account
						</h2>
						<div className="grid grid-cols-2 grid-rows-4 w-full">
							<input
								type="text"
								name="fname"
								id="fname"
								placeholder="First Name"
								className="w-full col-span-1 row-span-1 bg-white px-4 py-2 border border-gray-700 rounded-tl-md"
							/>
							<input
								type="text"
								name="lname"
								id="lname"
								placeholder="Last Name"
								className="w-full col-span-1 row-span-1 bg-white px-4 py-2 border border-gray-700 rounded-tr-md"
							/>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Email"
								className="w-full col-span-2 row-span-1 bg-white px-4 py-2 border border-gray-700"
							/>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Password"
								className="w-full col-span-2 row-span-1 bg-white px-4 py-2 border border-gray-700"
							/>
							<input
								type="password"
								name="cpassword"
								id="cpassword"
								placeholder="Confirm"
								className="w-full col-span-2 row-span-1 bg-white px-4 py-2 border border-gray-700 rounded-b-md"
							/>
						</div>
						<button className="bg-blue-500 text-white py-2 rounded-full">
							Create Account
						</button>
						<div className="flex flex-col gap-2">
							<button className="bg-white text-black font-medium py-2 flex items-center justify-center gap-2 border-2 border-gray-400">
								<img
									src="/fb.png"
									alt="fb"
									className="w-4 h-4"
								/>
								Sign up with Facebook
							</button>
							<button className="bg-white text-black font-medium py-2 flex items-center gap-2 border-2 justify-center border-gray-400">
								<img
									src="/google.png"
									alt="google"
									className="w-4 h-4"
								/>
								Sign up with Google
							</button>
						</div>
					</div>
					<div className="md:flex hidden flex-col h-full justify-between items-end">
						<span className="text-black font-medium">
							Already have an account?{" "}
							<span className="text-blue-500 cursor-pointer">
								Sign in
							</span>
						</span>
						<img
							src="/atg_illustration.png"
							alt="illstr"
							className="h-full"
						/>
						<span className="text-black">
							By signing up, you agree to our Terms & conditions,
							Privacy policy
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginModal;
