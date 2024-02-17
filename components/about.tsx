import React from 'react';
import {Facebook, Instagram, Linkedin, Twitter} from "lucide-react";

function About() {
    return (
        <div className={'flex flex-col h-full'}>
        <div className={'px-3 py-1.5 border rounded-full w-fit opacity-75 text-sm'}>
            About the team
        </div>
            <h2 className={'text-3xl tracking-wide mt-4 leading-tight opacity-90'}>
                our team consists of true professionals, dedicated to delivering exceptional results
            </h2>
            <div className={'mt-auto opacity-75 flex flex-col gap-3'}>
                <h3>Follow us</h3>
                <div className={'flex gap-2'}>
                    <a href={'https://twitter.com/shipventuresio'} className={'w-8 h-8 flex items-center justify-center rounded-full border transition-all hover:bg-white hover:text-black'} ><Twitter size={14} /></a>
                    <a href={'https://www.linkedin.com/company/shipventuresio'} className={'w-8 h-8 flex items-center justify-center rounded-full border'} ><Linkedin size={14} /></a>
                    <a href={'#'} className={'w-8 h-8 flex items-center justify-center rounded-full border'}><Instagram size={14}   /></a>
                    <a href={'#'} className={'w-8 h-8 flex items-center justify-center rounded-full border'}><Facebook size={14}   /></a>
                </div>
            </div>
        </div>
    );
}

export default About;