import Image from 'next/image';

export default function Page() {
    return (
        <>
            <div className="relative mx-auto w-full max-w-4xl min-h-screen pt-10">
                <img
                    src="football.jpg"
                    alt="Event cover"
                    className="relative z-20 max-h-100 w-full object-cover brightness-80 dark:brightness-60 will-change-transform"
                />
                <div className="pt-8">
                    <div className="flex items-center gap-2 px-2 py-2 mb-4 bg-gray-200">
                        <Image
                            src="/ball.gif"
                            width={55}
                            height={55}
                            alt="Football"
                            unoptimized // Keep this to ensure the GIF animates
                        />
                        <h1 className="font-black text-4xl dark:text-gray-900">Football</h1>
                    </div>
                    <p className='text-neutral-400'>Using the game to build more than athletes.</p>
                    <div className='bg-emerald-200 h-0.5 w-80 rounded' />
                    <div>
                    <p className="pt-4 text-lg text-neutral-600 dark:text-neutral-300">
                        Football provides a powerful platform for developing discipline, confidence, teamwork, resilience and leadership. Through camps, training activities and sporting experiences, KICKSTEP creates an environment where young people can grow both on and off the field. <br />
                    </p>

                    <div className="pt-4 text-lg text-neutral-600 dark:text-neutral-300">
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
                    </div>
                </div>
            </div>
        </>
    )
}