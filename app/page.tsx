import React from 'react';
import Image from "next/image";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import { LampContainer } from '@/components/ui/lamb';
import { motion } from 'framer-motion';
import Link from "next/link";
import ComingSoon from "@/components/coming-soon";
import Connect from "@/components/connect";
import About from "@/components/about";
function Page() {
    return (
        <>
            <header className={'flex items-center justify-center pt-4'}>
                <Image src={'/logo.svg'} alt={'logo'} width={120} height={100}/>
            </header>
            <main className={'max-w-[1480px] mx-auto p-2 sm:p-4 grid grid-cols-2 grid-rows-2 height-full gap-2 sm:gap-4 max-md:grid-cols-1 max-md:grid-rows-1 max-md:h-full'}>
                <div className={'noise md:row-span-2 rounded-xl sm:rounded-2xl md:rounded-3xl md:p-4 p-2 '}>
                    <ComingSoon/>
                </div>
                <div className={'rounded-xl sm:rounded-2xl md:rounded-3xl gradient-noise p-2 md:p-4'}>
                    <About/>
                </div>
                <div className={'rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden '}>
                    <Connect/>
                </div>
            </main>
        </>
    );
}

export default Page;