'use client'

import React from 'react';
import {motion} from "framer-motion";
import Link from "next/link";
import {LampContainer} from "@/components/ui/lamb";

function Connect() {
    return (
        <>
            <LampContainer>
                <motion.h2
                    initial={{ opacity: 0.5, y: 170 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="bg-gradient-to-br from-slate-100 to-slate-300 py-4 bg-clip-text text-center  text-4xl font-semibold tracking-tight text-transparent md:text-5xl lg:text-6xl"
                >
                    Let&apos;s Talk


                    <Link href={'mailto:hello@shipventures.io'} className={'text-3xl md:text-4xl lg:text-5xl font-normal block mt-4  underline'}>
                        hello@shipventures.io
                    </Link>
                </motion.h2>
            </LampContainer>
        </>
    );
}

export default Connect;