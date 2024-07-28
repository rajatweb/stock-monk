"use client";

import React, { useState } from 'react';


import { SearchScript } from '@/components/organisms/search/searchScript';
import LeftPanel from '@/components/organisms/leftPanel';
import RightPanel from '@/components/organisms/rightPanel';

const Dashboard = () => {
    const [scripts, setScripts] = useState<string[]>([]);
    const handleScriptAdd = (item: string) => {
        setScripts((prevState: string[]) => [...prevState, item]);
    }

    return (
        <section className="container items-center ">
            <SearchScript onScriptAdd={handleScriptAdd} />
            <div className="grid grid-cols-12">
                <aside className="h-screen self-start sticky top-0 col-span-3 border-x">
                    <LeftPanel scripts={scripts} />
                </aside>
                <main className="col-span-9 border-x">
                    <RightPanel />
                </main>
            </div>
        </section>
    )
}

export default Dashboard
