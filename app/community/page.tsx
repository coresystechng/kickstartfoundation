import { Button } from "@/components/ui/button"
import Image from 'next/image';

export default function Page() {
    return (
        <>
            <div className="relative mx-auto w-full max-w-4xl min-h-screen pt-0">
                <img
                    src="community.jpg"
                    alt="Event cover"
                    className="relative z-20 max-h-100 w-full object-cover brightness-80 dark:brightness-60 will-change-transform"
                />
                <div className="pt-10">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/community.gif"
                            width={60}
                            height={60}
                            alt="Community Engagement"
                            unoptimized // Keep this to ensure the GIF animates
                        />
                        <h1 className="font-black text-5xl">Community Engagement</h1>
                    </div>
                    <div>
                    <p className="pt-4 text-lg">
                        Building stronger young people through stronger communities. <br />

                        Young people thrive when they feel supported, connected and valued. Through community events, outreach initiatives and partnerships, KICKSTEP brings families, mentors, organisations and supporters together to create environments where young people have opportunities to learn, participate and grow. <br />
                    </p>

                    <div className="pt-4 text-lg">
                        <span className="font-bold text-3xl text-gray-900 dark:text-gray-300">Focus: <br /></span>
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