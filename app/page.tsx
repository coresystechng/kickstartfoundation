import { Button } from "@/components/ui/button"
import {
Card,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card"

export default function Page() {
    return (
        <div className="flex min-h-screen justify-center p-12">
            <div className="text-center">
                <p>Our Programmes</p>
                <h1 className="font-black text-4xl pt-3 pb-6">Make A Difference</h1>
                <div className="grid md:grid-cols-2 flex-col min-w-3xl gap-6">
                    <Card className="relative mx-auto w-full max-w-sm pt-0 hover:scale-[1.02] transition-all duration-300">
                        <div className="absolute inset-0 z-30 aspect-video" />
                        <img
                            src="/football.jpg"
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-60 will-change-transform"
                        />
                        <CardHeader>
                            <CardTitle>Football</CardTitle>
                            <CardDescription>
                                Camps, skills, 
                                discipline and 
                                teamwork 
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="relative mx-auto w-full max-w-sm pt-0 hover:scale-[1.02] transition-all duration-300">
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
                    </Card>
                    <Card className="relative mx-auto w-full max-w-sm pt-0 hover:scale-[1.02] transition-all duration-300">
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
                    </Card>
                    <Card className="relative mx-auto w-full max-w-sm pt-0 hover:scale-[1.02] transition-all duration-300">
                        <div className="absolute inset-0 z-30 aspect-video" />
                        <img
                            src="community.jpg"
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-60 will-change-transform"
                        />
                        <CardHeader>
                            <CardTitle>Community</CardTitle>
                            <CardDescription>
                            Events, relationships, belonging and local impact
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
                <div className="font-mono text-xs text-muted-foreground pt-12">
                (Press <kbd>d</kbd> to toggle dark mode)
                </div>
            </div>
        </div>
    )
}
