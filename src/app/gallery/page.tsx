import { Flex } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import HireMeForm from "./HireMeForm"; // Import the new client component

export async function generateMetadata() {
    const title = "Hire Me - Contact Mukunda";
    const description = "Get in touch with Mukunda for collaborations, projects, or inquiries.";
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
            url: `https://${baseURL}/hire-me`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function HireMePage() {
    return (
        <Flex fillWidth alignItems="center" justifyContent="center" direction="column" padding="8">
            {/* Render the client-side form */}
            <HireMeForm />
        </Flex>
    );
}
