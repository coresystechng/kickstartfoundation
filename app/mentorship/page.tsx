import { Button } from "@/components/ui/button"
import Image from 'next/image';

export default function Page() {
    return (
        <>
            <div className="relative mx-auto w-full max-w-4xl min-h-screen pt-0">
                <img
                    src="mentorship.jpg"
                    alt="Event cover"
                    className="relative z-20 max-h-100 w-full object-cover brightness-80 dark:brightness-60 will-change-transform"
                />
                <div className="pt-10">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/mentorship.gif"
                            width={60}
                            height={60}
                            alt="Mentorship"
                            unoptimized // Keep this to ensure the GIF animates
                        />
                        <h1 className="font-black text-5xl">Mentorship</h1>
                    </div>
                    <div>
                    <p className="pt-4 text-lg">
                        Connecting young people with people who believe in their potential. <br />

                        Positive guidance can change the direction of a young person's life. KICKSTEP connects young people with accomplished athletes, professionals and community leaders who can share experiences, provide encouragement and help participants make better decisions about their future. <br />
                    </p>

                    <div className="pt-4 text-lg">
                        <span className="font-bold text-3xl text-gray-900 dark:text-gray-300">Focus: <br /></span>
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
                    </div>
                </div>
            </div>
        </>
    )
}