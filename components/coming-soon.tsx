import React from 'react';
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";

const words = ' We are currently working hard on an ^awesome new website design. ^Stay ^tuned ^for ^the ^big ^reveal!';

function ComingSoon() {
    return (
        <>
            <div className={'border rounded-lg md:rounded-2xl h-full p-4 pb-52'}>
                <TextGenerateEffect words={words} />
            </div>

            <div
                className={'absolute bg-black text-white text-base md:text-lg py-4 w-[120%] max-sm:bottom-20 bottom-32 -left-5 max-sm:rotate-12 rotate-6'}>
                <InfiniteMovingCards items={['coming soon. stay tuned', 'coming soon. stay tuned', 'coming soon. stay tuned']} speed={'normal'} pauseOnHover={false} direction={'right'} className={''}/>
            </div>
            <div
                className={'absolute bg-black text-white text-base md:text-lg py-4 w-[120%] max-sm:bottom-20 bottom-28 -left-5 -rotate-12'}>
                <InfiniteMovingCards items={['Web Development', 'Mobile Development', 'UI/UX', 'Top-notch software engineers']} speed={'normal'} pauseOnHover={false} direction={'right'} className={''}/>

            </div>
        </>
    );
}

export default ComingSoon;