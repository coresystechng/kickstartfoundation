import { Button } from "@/components/ui/button"
import Link from 'next/link';
import {
Card,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card"

export default function Page() {
    return (
        <div className="flex min-h-screen justify-center p-6 pt-10 md:p-10 mx-auto max-w-6xl">
            <div className="text-center">
                <p>Our Programmes</p>
                <h1 className="font-black text-gray-800 dark:text-gray-200 text-4xl pt-3 pb-6">Make A Difference</h1>
                <div className="grid sm:grid-cols-2 flex-col md:min-w-xl lg:min-w-3xl gap-6">
                    <Card className="relative mx-auto w-full hover:bg-emerald-50 dark:bg-[#171717] max-w-sm pt-0 hover:scale-[1.02] transition-all duration-300">
                        <div className="absolute inset-0 z-30 aspect-video" />
                        <img
                            src="/football.jpg"
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-60 will-change-transform"
                        />
                        <CardHeader>
                            <CardTitle>Football Camps</CardTitle>
                            <CardDescription>
                                Camps, specialized skills, rigorous discipline, and seamless teamwork
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Link 
                                href="/football"
                                className="w-full"
                            >
                                <Button className="w-full">
                                    Read More
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card className="relative mx-auto w-full hover:bg-emerald-50 dark:bg-[#171717] max-w-sm pt-0 hover:scale-[1.02] transition-all duration-300">
                        <div className="absolute inset-0 z-30 aspect-video" />
                        <img
                            src="mentorship.jpg"
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-60 will-change-transform"
                        />
                        <CardHeader>
                            <CardTitle>Mentorship</CardTitle>
                            <CardDescription>
                            Guidance, leadership, accountability and exposure
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Link 
                                href="/mentorship"
                                className="w-full"
                            >
                                <Button className="w-full">
                                    Read More
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card className="relative mx-auto w-full hover:bg-emerald-50 dark:bg-[#171717] max-w-sm pt-0 hover:scale-[1.02] transition-all duration-300">
                        <div className="absolute inset-0 z-30 aspect-video" />
                        <img
                            src="education.jpg"
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-60 will-change-transform"
                        />
                        <CardHeader>
                            <CardTitle>Education</CardTitle>
                            <CardDescription>
                            Learning opportunities, development and future readiness
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Link 
                                href="/education"
                                className="w-full"
                            >
                                <Button className="w-full">
                                    Read More
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card className="relative mx-auto w-full hover:bg-emerald-50 dark:bg-[#171717] max-w-sm pt-0 hover:scale-[1.02] transition-all duration-300">
                        <div className="absolute inset-0 z-30 aspect-video" />
                        <img
                            src="community.jpg"
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-60 will-change-transform"
                        />
                        <CardHeader>
                            <CardTitle>Community Engagement</CardTitle>
                            <CardDescription>
                            Events, relationships, belonging and local impact
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Link 
                                href="/community"
                                className="w-full"
                            >
                                <Button className="w-full">
                                    Read More
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
                <div className="font-mono text-xs text-muted-foreground pt-12">
                (Press <kbd>d</kbd> to toggle dark mode)
                </div>
            </div>
        </div>
    )
}
