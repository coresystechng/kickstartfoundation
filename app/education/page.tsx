import Image from 'next/image';

export default function Page() {
    return (
        <>
            <div className="relative mx-auto w-full max-w-4xl min-h-screen pt-0">
                <img
                    src="education.jpg"
                    alt="Event cover"
                    className="relative z-20 max-h-100 w-full object-cover brightness-80 dark:brightness-60 will-change-transform"
                />
                <div className="pt-10">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/education.gif"
                            width={60}
                            height={60}
                            alt="Education"
                            unoptimized // Keep this to ensure the GIF animates
                        />
                        <h1 className="font-black text-5xl">Education</h1>
                    </div>
                    <div>
                    <p className="pt-4 text-lg">
                        Creating opportunities for learning and future growth. <br />

                        KICKSTEP recognises that long-term success extends beyond sporting ability. Through educational initiatives, learning opportunities and exposure to useful resources, the Foundation encourages young people to value education, develop their potential and prepare for opportunities beyond football.<br />
                    </p>

                    <div className="pt-4 text-lg">
                        <span className="font-bold text-3xl text-gray-900 dark:text-gray-300">Focus: <br /></span>
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