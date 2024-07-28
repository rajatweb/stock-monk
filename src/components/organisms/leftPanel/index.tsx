import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'

interface LeftPanelProps {
    scripts: string[]
}

const LeftPanel = ({
    scripts
}: LeftPanelProps) => {
    return (
        <ScrollArea className="h-[500px]">
            <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
                {scripts.map((script, idx) => (
                    <a key={idx} className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white justify-start" href="#">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-archive mr-2 h-4 w-4"><rect width="20" height="5" x="2" y="3" rx="1"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path><path d="M10 12h4"></path></svg> */}
                        {script}
                    </a>
                ))}
            </nav>
        </ScrollArea>
    )
}

export default LeftPanel