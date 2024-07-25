


import Link from "next/link";
import React from "react";

import {  PiPhoneLight, PiMailboxLight } from "react-icons/pi";


const SocialsFooter = () => {
    return (
        <div className="flex gap-2 mr-4 items-center max-md:hidden">
            <div>
                < PiPhoneLight className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col text-white">
                <small className="text-xs font-normal">Dúvidas</small>
                <span className="text-xs font-semibold"> (62) 3946-2100</span>
            </div>
            <div className="pl-2">
                <Link href="/contact"><PiMailboxLight className="w-4 h-4 text-white hover:opacity-50" /></Link>
                
            </div>
            <div>
                <Link href="/contact"><small className="text-[10px] text-white hover:opacity-50">CONTATO</small></Link>
            </div>
        </div>
    )
}

export default SocialsFooter