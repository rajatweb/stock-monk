"use client";

import React, { useState } from 'react';
import OptionChain from '@/components/organisms/optionChain';
import { SearchScript, WatchList } from '@/components/organisms/scripts';
import ContentLayout from '@/components/atoms/content/content-layout';

const Dashboard = () => {
    const [scripts, setScripts] = useState<string[]>([]);
    const handleOnScriptAdded = (item: string) => {
        setScripts((prevState: string[]) => [...prevState, item]);
    }

    return (
        <ContentLayout pageMeta={{
            title: "Dashboard",
            description: "Manage your Orders"
        }}>
            <OptionChain />
        </ContentLayout>
    )
}

export default Dashboard
