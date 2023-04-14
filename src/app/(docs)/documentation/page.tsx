import {FC} from 'react'
import {Metadata} from "next";
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import DocumentationTabs from "@/components/DocumentationTabs";

export const metadata: Metadata = {
    title: "API | Documentation",
    description: "Documentation of the REST API with next.js"
}
const page: FC = ({}) => {
    return <div className={"container max-w-7xl mx-auto mt-12"}>
        <div className="flex flex-col items-center gap-6">
            <LargeHeading size={"large"}>
                Making a request
            </LargeHeading>
            <Paragraph>api/v1/similarity</Paragraph>
            <DocumentationTabs/>
        </div>
    </div>
}
export default page