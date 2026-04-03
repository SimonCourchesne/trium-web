import type { Metadata } from "next";

import { PrivacyContent } from "@/app/privacy/privacy-content";

export const metadata: Metadata = {
    title: "Privacy Policy | Teo",
    description:
        "Learn how Teo collects, uses, protects, and shares personal, health, and connected-service data.",
};

export default function PrivacyPage() {
    return <PrivacyContent />;
}
