import React from 'react';
import Image from "next/image";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";

const words = 'We are currently working hard on an awesome new website design. Stay tuned for the big reveal!';

function Page() {
    return (
        <>
            <header className={'flex items-center justify-center p-4'}>
                <Image src={'/logo.svg'} alt={'logo'} width={120} height={100}/>
            </header>
            <main className={'max-w-[1480px] mx-auto p-4 grid grid-cols-2 grid-rows-2 min-h-dvh gap-4'}>
                <div className={'noise  row-span-2 rounded-3xl p-4'}>
                    <div className={'border rounded-2xl h-full p-4'}>
                        <h1 className={'text-5xl text-white leading-tight'}>
                            We are currently working hard on an <b>awesome</b>  new website design. <b>Stay tuned for the big reveal!</b>

                        </h1>
                        {/*<TextGenerateEffect words={words} className={'text-white text-3xl'} />*/}
                    </div>

                    <div className={'absolute bg-black text-white text-lg py-4 w-[150%] bottom-20 -left-5 rotate-6 text-nowrap'}>coming soon. stay tuned coming soon. stay tuned coming soon. stay tuned coming soon. stay tuned coming soon. stay tuned coming soon. stay tuned coming soon. stay tuned</div>
                    <div className={'absolute bg-black text-white text-lg py-4 w-[150%] bottom-32 -left-5 -rotate-12 text-nowrap'}>coming soon. stay tuned coming soon. stay tuned coming soon. stay tuned coming soon. stay tuned coming soon. stay tuned</div>
                </div>
                <div className={'bg-orange-500 rounded-xl'}></div>
                <div className={'bg-pink-500 rounded-xl'}></div>
            </main>
        </>
    );
}

export default Page;