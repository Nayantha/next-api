import {Metadata} from "next";
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import Link from "next/link";

export const metadata: Metadata = {
    title: "API | Home",
    description: "REST API with next.js"
}
export default function Home() {
    return (
        <div className={"relative h-screen flex items-center justify-center overflow-x-hidden"}>
            <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
                <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
                    <LargeHeading size={"large"} className={"three-d text-black dark:text-light-gold"}>
                        Easily Determine <br/> text similarity
                    </LargeHeading>
                    <Paragraph className={"max-w-xl lg:text-left"}>
                        Easily Determine similarity between two strings.{' '}
                        <Link href={"/login"}
                              className={"underline-offset-2 underline text-black dark:text-light-gold"}>
                            API Key
                        </Link>
                        .
                    </Paragraph>
                </div>
            </div>
        </div>
    )
}
