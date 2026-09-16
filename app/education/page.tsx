import Image from 'next/image';

export default function Page() {
    return (
        <>
            <div className="relative mx-auto w-full max-w-4xl min-h-screen pt-10">
                <img
                    src="education.jpg"
                    alt="Event cover"
                    className="relative z-20 max-h-100 w-full object-cover brightness-80 dark:brightness-60 will-change-transform"
                />
                <div className="pt-8">
                    <div className="flex items-center gap-2 px-2 mb-4 dark:bg-gray-200">
                        <Image
                            src="/education.gif"
                            width={55}
                            height={55}
                            alt="Education"
                            unoptimized // Keep this to ensure the GIF animates
                        />
                        <h1 className="font-black text-4xl text-emerald-600">Education</h1>
                    </div>
                    <p className='text-neutral-800 dark:text-neutral-300'>Creating opportunities for learning and future growth.</p>
                    <div className='bg-emerald-600 h-0.5 w-96 rounded' />
                    <div>
                    <p className="pt-4 text-lg font-medium text-gray-900 dark:text-gray-200">
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
                    </div>
                </div>
            </div>
        </>
    )
}