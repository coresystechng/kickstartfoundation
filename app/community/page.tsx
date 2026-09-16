import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <div className="relative mx-auto w-full max-w-4xl min-h-screen pt-10">
                <img
                    src="community.jpg"
                    alt="Event cover"
                    className="relative z-20 max-h-100 w-full object-cover brightness-80 dark:brightness-60 will-change-transform"
                />
                <div className="xs:p-4 md:py-4">
                    <div className="flex items-center gap-2 pe-2 mt-4">
                        <div className='bg-white p-0.5 rounded'>
                            <Image
                                src="/community.gif"
                                width={50}
                                height={50}
                                alt="Community Engagement"
                                unoptimized // Keep this to ensure the GIF animates
                            />
                        </div>
                        <h1 className="font-black text-4xl">Community Engagement</h1>
                    </div>
                    <p className='text-emerald-600 dark:text-emerald-300 py-4'>Building stronger young people through stronger communities.</p>
                    <div>
                        <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
                            Young people thrive when they feel supported, connected and valued. Through community events, outreach initiatives and partnerships, KICKSTEP brings families, mentors, organisations and supporters together to create environments where young people have opportunities to learn, participate and grow. <br />
                        </p>

                        <div className="pt-4 text-lg font-medium text-gray-900 dark:text-gray-200">
                            <span className="font-semibold text-2xl text-gray-900 dark:text-white">Focus: <br /></span>
                            <ol className="pt-2 pb-8">
                                <li>
                                    • Community events and outreach
                                </li>
                                <li>
                                    • Youth participation and inclusion
                                </li>
                                <li>
                                    • Partnerships with local organisations
                                </li>
                                <li>
                                    • Stronger relationships between young people and their communities
                                </li>
                                <li>
                                    • Creating accessible opportunities for growth
                                </li>
                            </ol>
                        </div>
                        <div className='flex items-center justify-between mb-10'>
                            <Link
                                href="/education"
                            >
                                <div className='bg-emerald-600 text-white p-2 hover:scale-[1.02] active:scale-[0.96] transition-all duration-300 will-change-transform flex items-center gap-1'>
                                    <ArrowLeft size={15} />
                                    Education
                                </div>
                            </Link>
                            <Link
                                href="/"
                            >
                                <div className='bg-emerald-600 text-white p-2 hover:scale-[1.02] active:scale-[0.96] transition-all duration-300 will-change-transform flex items-center gap-1'>
                                    Home
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