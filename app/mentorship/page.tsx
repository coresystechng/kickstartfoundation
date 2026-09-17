import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <>
      <div className="relative mx-auto min-h-screen w-full max-w-4xl pt-10">
        <img
          src="mentorship.jpg"
          alt="Event cover"
          className="relative z-20 max-h-100 w-full object-cover brightness-80 will-change-transform dark:brightness-60"
        />
        <div className="p-4 md:px-0 md:py-4">
          <div className="mt-4 flex items-center gap-2 pe-2">
            <div className="rounded bg-white p-0.5">
              <Image
                src="/mentorship.gif"
                width={50}
                height={50}
                alt="Mentorship"
                unoptimized // Keep this to ensure the GIF animates
              />
            </div>
            <h1 className="text-4xl font-black">Mentorship</h1>
          </div>
          <p className="py-4 text-emerald-600 dark:text-emerald-300">
            Connecting young people with people who believe in their potential.
          </p>
          <div>
            <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
              Positive guidance can change the direction of a young person's
              life. KICKSTEP connects young people with accomplished athletes,
              professionals and community leaders who can share experiences,
              provide encouragement and help participants make better decisions
              about their future. <br />
            </p>

            <div className="pt-4 text-lg text-gray-900 dark:text-gray-200">
              <span className="text-2xl font-semibold text-gray-900 dark:text-white">
                Focus: <br />
              </span>
              <ol className="pt-2 pb-8">
                <li>• Positive role models</li>
                <li>• Personal and character development</li>
                <li>• Career and life guidance</li>
                <li>• Confidence and goal-setting</li>
                <li>
                  • Building meaningful relationships and support networks
                </li>
              </ol>
            </div>
            <div className="mb-10 flex items-center justify-between">
              <Link href="/football">
                <div className="flex items-center gap-1 bg-emerald-600 p-2 text-white transition-all duration-300 will-change-transform hover:scale-[1.02] active:scale-[0.96]">
                  <ChevronLeft size={15} />
                  Football
                </div>
              </Link>
              <Link href="/education">
                <div className="flex items-center gap-1 bg-emerald-600 p-2 text-white transition-all duration-300 will-change-transform hover:scale-[1.02] active:scale-[0.96]">
                  Education
                  <ChevronRight size={15} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
