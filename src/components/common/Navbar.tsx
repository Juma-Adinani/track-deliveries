import React from 'react';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

function Navbar() {
    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="font-bold text-green-700">
                    Track deliveries
                </Link>

                {/* Navigation Links */}
                {/* <div className="space-x-8 hidden md:flex">
                    <Link href="/trips/trip-history" className="text-gray-600 hover:text-green-700 transition duration-300">
                        Trip History
                    </Link>
                </div> */}

                <div className="hidden md:block">
                    <Button
                        variant="contained"
                        color="success"
                        className="capitalize bg-green-700 hover:bg-green-700 rounded-full"
                    >
                        Download App
                    </Button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon className="text-gray-600" />
                    </IconButton>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
