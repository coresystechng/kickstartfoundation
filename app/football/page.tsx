import { Button } from "@/components/ui/button"
import Image from 'next/image';

export default function Page() {
    return (
        <>
            <div className="relative mx-auto w-full max-w-4xl min-h-screen pt-0">
                <img
                    src="football.jpg"
                    alt="Event cover"
                    className="relative z-20 max-h-100 w-full object-cover brightness-80 dark:brightness-60 will-change-transform"
                />
                <div className="pt-10">
                    <div className="flex items-center gap-2">
                        <h1 className="font-black text-5xl">Football</h1>
                        <Image
                            src="/ball.gif"
                            width={80}
                            height={80}
                            alt="Football"
                            unoptimized // Keep this to ensure the GIF animates
                        />
                    </div>
                    <div>
                    <p className="pt-4 text-lg">
                        Using the game to build more than athletes. <br />

                        Football provides a powerful platform for developing discipline, confidence, teamwork, resilience and leadership. Through camps, training activities and sporting experiences, KICKSTEP creates an environment where young people can grow both on and off the field. <br />
                    </p>

                    <div className="pt-4 text-lg">
                        <span className="font-bold text-3xl text-gray-900 dark:text-gray-300">Focus: <br /></span>
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