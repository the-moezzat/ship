import React from 'react';
import Image from "next/image";

function Page() {
    return (
        <main className={'max-w-[1480px] mx-auto p-4'}>
            <header className={'flex items-center justify-center'}>
                <Image src={'/logo.svg'} alt={'logo'} width={120} height={100} />
            </header>
        </main>
    );
}

export default Page;