import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <div className="relative mx-auto w-full max-w-4xl min-h-screen pt-10">
                <img
                    src="mentorship.jpg"
                    alt="Event cover"
                    className="relative z-20 max-h-100 w-full object-cover brightness-80 dark:brightness-60 will-change-transform"
                />
                <div className="pt-8">
                    <div className="flex items-center gap-2 px-2 mb-4 dark:bg-gray-200">
                        <Image
                            src="/mentorship.gif"
                            width={55}
                            height={55}
                            alt="Mentorship"
                            unoptimized // Keep this to ensure the GIF animates
                            />
                        <h1 className="font-black text-4xl text-emerald-600">Mentorship</h1>
                    </div>
                    <p className='text-neutral-800 dark:text-neutral-300'>Connecting young people with people who believe in their potential.</p>
                    <div className='bg-emerald-600 h-0.5 w-[480] rounded' />
                    <div>
                        <p className="pt-4 text-lg font-medium text-gray-900 dark:text-gray-200">
                            Positive guidance can change the direction of a young person's life. KICKSTEP connects young people with accomplished athletes, professionals and community leaders who can share experiences, provide encouragement and help participants make better decisions about their future. <br />
                        </p>

                        <div className="pt-4 text-lg text-gray-900 dark:text-gray-200">   
                            <span className="font-semibold text-2xl text-gray-900 dark:text-white">Focus: <br /></span>
                            <ol className="pt-2 pb-8">
                                <li>
                                    • Positive role models
                                </li>
                                <li>
                                    • Personal and character development
                                </li>
                                <li>
                                    • Career and life guidance
                                </li>
                                <li>
                                    • Confidence and goal-setting
                                </li>
                                <li>
                                    • Building meaningful relationships and support networks
                                </li>
                            </ol>
                        </div>
                        <div className='flex items-center justify-between mb-10'>
                            <Link
                                href="/football"
                            >
                                <div className='bg-emerald-600 text-white p-2 hover:scale-[1.02] active:scale-[0.96] transition-all duration-300 will-change-transform flex items-center gap-1'>
                                    <ArrowLeft size={15} />
                                    Football
                                </div>
                            </Link>
                            <Link
                                href="/education"
                            >
                                <div className='bg-emerald-600 text-white p-2 hover:scale-[1.02] active:scale-[0.96] transition-all duration-300 will-change-transform flex items-center gap-1'>
                                    Education
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