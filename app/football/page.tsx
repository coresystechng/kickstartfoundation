import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <>
      <div className="relative mx-auto min-h-screen w-full max-w-4xl pt-10">
        <img
          src="football.jpg"
          alt="Event cover"
          className="relative z-20 max-h-100 w-full object-cover brightness-80 will-change-transform dark:brightness-60"
        />
        <div className="p-4 md:px-0 md:py-4">
          <div className="mt-4 flex items-center gap-2 pe-2">
            <div className="rounded bg-white p-0.5">
              <Image
                src="/ball.gif"
                width={50}
                height={50}
                alt="Football"
                unoptimized // Keep this to ensure the GIF animates
              />
            </div>
            <h1 className="text-4xl font-black">Football</h1>
          </div>
          <p className="py-4 text-emerald-600 dark:text-emerald-300">
            Using the game to build more than athletes.
          </p>
          <div>
            <p className="text-lg font-medium text-gray-900 dark:text-gray-200">
              Football provides a powerful platform for developing discipline,
              confidence, teamwork, resilience and leadership. Through camps,
              training activities and sporting experiences, KICKSTEP creates an
              environment where young people can grow both on and off the field.{" "}
              <br />
            </p>

            <div className="pt-4 text-lg font-medium text-gray-900 dark:text-gray-200">
              <span className="text-2xl font-semibold text-gray-900 dark:text-white">
                Focus: <br />
              </span>
              <ol className="pt-2 pb-8">
                <li>• Confidence and self-belief</li>
                <li>• Discipline and accountability</li>
                <li>• Teamwork and leadership</li>
                <li>• Resilience and healthy competition</li>
                <li>• Access to positive sporting experiences</li>
              </ol>
            </div>
            <div className="mb-10 flex items-center justify-between">
              <Link href="/">
                <div className="flex items-center gap-1 bg-emerald-600 p-2 text-white transition-all duration-300 will-change-transform hover:scale-[1.02] active:scale-[0.96]">
                  <ChevronLeft size={15} />
                  Home
                </div>
              </Link>
              <Link href="/mentorship">
                <div className="flex items-center gap-1 bg-emerald-600 p-2 text-white transition-all duration-300 will-change-transform hover:scale-[1.02] active:scale-[0.96]">
                  Mentorship
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
