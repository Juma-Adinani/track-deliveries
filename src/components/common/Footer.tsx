import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

                {/* Left Side - Links */}
                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8">
                    <a href="#" className="hover:text-blue-400 transition duration-300">About Us</a>
                    <a href="#" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
                    <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
                </div>

                {/* Right Side - Social Icons */}
                <div className="mt-6 md:mt-0 flex space-x-6">
                    <a href="#" className="text-white hover:text-blue-400 transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636a9 9 0 11-12.728 0M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.341A8 8 0 1115 3.72M15 10v2h-2v2h2v2h2v-2h2v-2h-2v-2h-2z" />
                        </svg>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657a6 6 0 11-8.485-8.485 6 6 0 018.485 8.485z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
