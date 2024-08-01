import React from 'react';
import PageHeader from '../header/page-header';

interface IContentLayoutProps {
    children: React.ReactNode,
    pageMeta: {
        title: string,
        description: string
    }
}

const ContentLayout = ({
    children,
    pageMeta
}: IContentLayoutProps) => {
    const { title, description } = pageMeta;
    return (
        <section className="container items-center ">
            <PageHeader title={title} description={description} />
            <div className="grid grid-cols-12">
                <aside className="h-screen self-start sticky top-0 col-span-3 border-x">
                </aside>
                <main className="col-span-9 border-x">
                    {children}
                </main>
            </div>
        </section>
    )
}

export default ContentLayout;
