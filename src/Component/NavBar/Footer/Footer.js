import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-gray-200  py-8 font-white pt-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
            <div className='flex flex-col'>
                <img src='https://1000logos.net/wp-content/uploads/2022/08/Ola-Cabs-Emblem.png' className='h-20'/>
                <div className='flex justify-between pt-5'>
                    <a href=''><FaInstagram className='size-[30px]'/></a>
                    <a href=''><IoLogoYoutube className='size-[30px]'/></a>
                    <a href=''><IoLogoTwitter className='size-[30px]'/></a>
                </div>
            </div>
          <div className="w-1/4 p-4">
            <h3 className="text-lg font-semibold mb-4">About tTaxi</h3>
            <ul className="text-sm flex flex-col space-y-4">
               
              <li >About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact Us</li>
              
            </ul>
          </div>
          <div className="w-1/4 p-4">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="text-sm pb-4 flex flex-col space-y-4 ">
              <li>Ola Ride</li>
              <li>Ola Rentals</li>
              <li>Ola Outstation</li>
              <li>Ola Corporate</li>
            </ul>
          </div>
          <div className="w-1/4 p-4">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="text-sm flex flex-col space-y-4">
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Ola Cabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

