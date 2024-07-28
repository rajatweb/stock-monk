import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'

const RightPanel = () => {
    return (
        <div className="max-h-[50vh] resize-y overflow-y-auto bg-white ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-700">
            <table className="min-w-full divide-y divide-zinc-300 dark:divide-white/10">
                <thead className="sticky top-0 bg-zinc-50 dark:bg-zinc-800">
                    <tr className="divide-x divide-zinc-200 dark:divide-white/10">
                        <th scope="col" className="min-w-[5ch]">
                            CE
                        </th>
                        <th scope="col" className="min-w-[5ch]">
                            Strike
                        </th>
                        <th scope="col" className="min-w-[5ch]">
                            PE
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 overflow-y-auto bg-white text-zinc-900 dark:divide-white/10 dark:bg-zinc-900 dark:text-zinc-100">
                    {/* <tr><td colSpan={4}>No data to display.</td></tr> */}
                    <tr className="divide-x divide-zinc-200 dark:divide-white/10">
                        <td
                            className={cn(
                                'group',
                                '-px-4 font-medium text-center',
                                true
                                    ? 'bg-yellow-50/50 text-yellow-800 dark:bg-stone-700/10 dark:text-yellow-400'
                                    : 'text-zinc-900 dark:bg-zinc-800/10 dark:text-zinc-100'
                            )}
                        >

                            <div className='flex justify-center items-center space-x-2'>
                                <div className='space-x-2'>
                                    <Button size="sm" variant="outline">B</Button>
                                    <span>200 CE</span>
                                    <Button size="sm" variant="destructive">S</Button>
                                </div>
                            </div>
                        </td>
                        <td
                            className={cn(
                                'bg-blue-50/60 text-blue-800 dark:bg-blue-900/5 dark:text-blue-500 text-center',
                                true
                                    ? 'cursor-pointer hover:bg-blue-100 hover:dark:bg-blue-900/50'
                                    : 'pointer-events-none'
                            )}
                        >
                            0
                        </td>
                        <td
                            className={cn(
                                'group',
                                '-px-4 font-medium text-center',
                                true
                                    ? 'bg-emerald-50/60 text-emerald-800 dark:bg-emerald-900/5 dark:text-emerald-500'
                                    : 'text-zinc-900 dark:bg-zinc-800/10 dark:text-zinc-100'
                            )}
                        >
                            <div className='flex justify-center items-center space-x-2'>
                                
                                <div className='space-x-2'>
                                    <Button size="sm" variant="outline">B</Button>
                                    <span>200 PE</span>
                                    <Button size="sm" variant="destructive">S</Button>
                                </div>
                            </div>
                        </td>

                    </tr>
                    {/* <tr className="divide-x divide-zinc-200 dark:divide-white/10">
                        <td
                            className={cn(
                                'group',
                                '-px-4 font-medium text-center',
                                true
                                    ? 'bg-yellow-50/50 text-yellow-800 dark:bg-stone-700/10 dark:text-yellow-400'
                                    : 'text-zinc-900 dark:bg-zinc-800/10 dark:text-zinc-100'
                            )}
                        >

                            <div className='flex justify-center items-center space-x-2'>
                                <span>200 CE</span>
                                <div className='space-x-1'>
                                    <Button size="sm" className='p-2'>B</Button>
                                    <Button size="sm" className='p-2' variant="destructive">S</Button>
                                </div>
                            </div>
                        </td>
                        <td
                            className={cn(
                                'bg-blue-50/60 text-blue-800 dark:bg-blue-900/5 dark:text-blue-500 text-center',
                                true
                                    ? 'cursor-pointer hover:bg-blue-100 hover:dark:bg-blue-900/50'
                                    : 'pointer-events-none'
                            )}
                        >
                            0
                        </td>
                        <td
                            className={cn(
                                'group',
                                '-px-4 font-medium text-center',
                                true
                                    ? 'bg-emerald-50/60 text-emerald-800 dark:bg-emerald-900/5 dark:text-emerald-500'
                                    : 'text-zinc-900 dark:bg-zinc-800/10 dark:text-zinc-100'
                            )}
                        >
                            <div className='flex justify-center items-center space-x-2'>
                                <span>200 PE</span>
                                <div className='space-x-1'>
                                    <Button size="sm" className='p-2'>B</Button>
                                    <Button size="sm" className='p-2' variant="destructive">S</Button>
                                </div>
                            </div>
                        </td>

                    </tr> */}
                </tbody>
            </table>
        </div>

    )
}

export default RightPanel




{/* <div className="mx-auto mt-8 max-h-[50vh] max-w-5xl resize-y overflow-y-auto rounded-lg bg-white ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-700">
    <table className="min-w-full divide-y divide-zinc-300 dark:divide-white/10">
        <thead className="sticky top-0 bg-zinc-50 dark:bg-zinc-800">
            <tr className="divide-x divide-zinc-200 dark:divide-white/10">
                <th scope="col" className="pl-8 text-left">
                    Options
                </th>
                <th scope="col">Buyer Price</th>
                <th scope="col">Return Value</th>
            </tr>
        </thead>
        <tbody
            className="divide-y divide-zinc-200 overflow-y-auto bg-white text-zinc-900 dark:divide-white/10 dark:bg-zinc-900 dark:text-zinc-100"
        >

            <tr>
                <td colSpan={3}>No data to display.</td>
            </tr>
        </tbody>
    </table>
</div> */}