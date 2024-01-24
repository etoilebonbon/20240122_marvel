import React from 'react'
import { FaTumblr } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Tumblr() {
  return (
    <Link to = "https://www.tumblr.com/">
        <div className="w-6 h-6 duration-500 text-gray-500 hover:text-gray-700"><FaTumblr /></div>
    </Link>
  )
}
