import Image from 'next/image';

export default function Page() {
    return (
        <>
            <div className="relative mx-auto w-full max-w-4xl min-h-screen pt-10">
                <img
                    src="community.jpg"
                    alt="Event cover"
                    className="relative z-20 max-h-100 w-full object-cover brightness-80 dark:brightness-60 will-change-transform"
                />
                <div className="pt-8">
                    <div className="flex items-center gap-2 px-2 mb-4 dark:bg-gray-200">
                        <Image
                            src="/community.gif"
                            width={55}
                            height={55}
                            alt="Community Engagement"
                            unoptimized // Keep this to ensure the GIF animates
                        />
                        <h1 className="font-black text-4xl text-emerald-600">Community Engagement</h1>
                    </div>
                    <p className='text-neutral-800 dark:text-neutral-300'>Building stronger young people through stronger communities.</p>
                    <div className='bg-emerald-600 h-0.5 w-[450] rounded' />
                    <div>
                    <p className="pt-4 text-lg font-medium text-gray-900 dark:text-gray-200">
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
                    </div>
                </div>
            </div>
        </>
    )
}