import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <div className="relative mx-auto w-full max-w-4xl min-h-screen pt-10">
                <img
                    src="education.jpg"
                    alt="Event cover"
                    className="relative z-20 max-h-100 w-full object-cover brightness-80 dark:brightness-60 will-change-transform"
                />
                <div className="p-4 md:py-4 md:px-0">
                    <div className="flex items-center gap-2 pe-2 mt-4">
                        <div className='bg-white p-0.5 rounded'>
                            <Image
                                src="/education.gif"
                                width={50}
                                height={50}
                                alt="Education"
                                unoptimized // Keep this to ensure the GIF animates
                            />
                        </div>
                        <h1 className="font-black text-4xl">Education</h1>
                    </div>
                    <p className='text-emerald-600 dark:text-emerald-300 py-4'>Creating opportunities for learning and future growth.</p>
                    <div>
                        <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
                            KICKSTEP recognises that long-term success extends beyond sporting ability. Through educational initiatives, learning opportunities and exposure to useful resources, the Foundation encourages young people to value education, develop their potential and prepare for opportunities beyond football.<br />
                        </p>

                        <div className="pt-4 text-lg font-medium text-gray-900 dark:text-gray-200">
                            <span className="font-semibold text-2xl text-gray-900 dark:text-white">Focus: <br /></span>
                            <ol className="pt-2 pb-8">
                                <li>
                                    • Encouraging academic development
                                </li>
                                <li>
                                    • Connecting young people with educational opportunities
                                </li>
                                <li>
                                    • Promoting lifelong learning
                                </li>
                                <li>
                                    • Building skills for future success
                                </li>
                                <li>
                                    • Helping young people recognise possibilities beyond sport
                                </li>
                            </ol>
                        </div>
                        <div className='flex items-center justify-between mb-10'>
                            <Link
                                href="/mentorship"
                            >
                                <div className='bg-emerald-600 text-white p-2 hover:scale-[1.02] active:scale-[0.96] transition-all duration-300 will-change-transform flex items-center gap-1'>
                                    <ArrowLeft size={15} />
                                    Mentorship
                                </div>
                            </Link>
                            <Link
                                href="/community"
                            >
                                <div className='bg-emerald-600 text-white p-2 hover:scale-[1.02] active:scale-[0.96] transition-all duration-300 will-change-transform flex items-center gap-1'>
                                    Community
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