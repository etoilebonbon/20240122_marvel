import React from 'react'
import { TiSocialInstagram } from "react-icons/ti";
import { Link } from 'react-router-dom';


export default function Insta() {
  return (
    <Link to = "https://www.instagram.com/">
        <div className="w-6 h-6 duration-500 text-gray-500 hover:text-gray-700"><TiSocialInstagram /></div>
    </Link>
  )
}
