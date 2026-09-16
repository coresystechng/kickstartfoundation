import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <div className="relative mx-auto w-full max-w-4xl min-h-screen pt-10">
                <img
                    src="football.jpg"
                    alt="Event cover"
                    className="relative z-20 max-h-100 w-full object-cover brightness-80 dark:brightness-60 will-change-transform"
                />
                <div className="p-4">
                    <div className="flex items-center gap-2 px-2 mb-4 dark:bg-gray-200">
                        <Image
                            src="/ball.gif"
                            width={55}
                            height={55}
                            alt="Football"
                            unoptimized // Keep this to ensure the GIF animates
                        />
                        <h1 className="font-black text-4xl text-emerald-600">Football</h1>
                    </div>
                    <p className='text-neutral-800 dark:text-neutral-300'>Using the game to build more than athletes.</p>
                    <div className='bg-emerald-600 h-0.5 w-80 rounded' />
                    <div>
                        <p className="pt-4 text-lg font-medium text-gray-900 dark:text-gray-200">
                            Football provides a powerful platform for developing discipline, confidence, teamwork, resilience and leadership. Through camps, training activities and sporting experiences, KICKSTEP creates an environment where young people can grow both on and off the field. <br />
                        </p>

                        <div className="pt-4 text-lg font-medium text-gray-900 dark:text-gray-200">
                            <span className="font-semibold text-2xl text-gray-900 dark:text-white">Focus: <br /></span>
                            <ol className="pt-2 pb-8">
                                <li>
                                    • Confidence and self-belief
                                </li>
                                <li>
                                    • Discipline and accountability
                                </li>
                                <li>
                                    • Teamwork and leadership
                                </li>
                                <li>
                                    • Resilience and healthy competition
                                </li>
                                <li>
                                    • Access to positive sporting experiences
                                </li>
                            </ol>
                        </div>
                        <div className='flex items-center justify-between mb-10'>
                            <Link
                                href="/"
                            >
                                <div className='bg-emerald-600 text-white p-2 hover:scale-[1.02] active:scale-[0.96] transition-all duration-300 will-change-transform flex items-center gap-1'>
                                    <ArrowLeft size={15} />
                                    Home
                                </div>
                            </Link>
                            <Link
                                href="/mentorship"
                            >
                                <div className='bg-emerald-600 text-white p-2 hover:scale-[1.02] active:scale-[0.96] transition-all duration-300 will-change-transform flex items-center gap-1'>
                                    Mentorship
                                    <ArrowRight size={15} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}