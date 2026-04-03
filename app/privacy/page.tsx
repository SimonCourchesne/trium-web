import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
    Activity,
    Bot,
    Clock3,
    Database,
    Download,
    FileText,
    HeartPulse,
    Lock,
    Mail,
    RefreshCcw,
    Route,
    Server,
    ShieldCheck,
    Smartphone,
    Trash2,
    UserRound,
    Waypoints,
} from "lucide-react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
    title: "Privacy Policy | Teo",
    description:
        "Learn how Teo collects, uses, protects, and shares personal, health, and connected-service data.",
};

type Item = {
    title: string;
    description: string;
    icon: LucideIcon;
};

type Integration = Item & {
    status: string;
    featured?: boolean;
};

const quickLinks = [
    { href: "#information-we-collect", label: "Information We Collect" },
    { href: "#how-we-use-data", label: "How We Use Data" },
    { href: "#integrations-and-sharing", label: "Integrations" },
    { href: "#your-rights", label: "Your Rights" },
    { href: "#contact-us", label: "Contact" },
];

const commitments: Item[] = [
    {
        title: "No Data Sales",
        description:
            "We do not sell your personal data or health data to advertisers, brokers, or other third parties.",
        icon: ShieldCheck,
    },
    {
        title: "Consent-Based Integrations",
        description:
            "Connected-service sync happens only when you authorize Teo to access or send data to a provider.",
        icon: Waypoints,
    },
    {
        title: "Deletion and Access Rights",
        description:
            "You can request access, correction, portability, or deletion of your Teo data by email or through in-app account deletion.",
        icon: FileText,
    },
];

const informationGroups: Item[] = [
    {
        title: "Personal Information",
        description:
            "Identity data such as your name, email address, date of birth, profile photo, height, weight, gender, and age when required to personalize coaching and training-load calculations.",
        icon: UserRound,
    },
    {
        title: "Health and Fitness Data",
        description:
            "Workouts, sport type, distances, durations, elevation, heart rate, resting heart rate, HRV, power, speed, cadence, GPS traces, and sleep or recovery metrics when synced.",
        icon: HeartPulse,
    },
    {
        title: "Device and Technical Data",
        description:
            "Device model, operating system version, identifiers, IP address, feature usage, and crash or reliability data needed to operate and improve the product.",
        icon: Smartphone,
    },
];

const useCases: Item[] = [
    {
        title: "Plan Generation",
        description:
            "Training history, biometrics, and goals are processed to generate personalized schedules and structured workouts.",
        icon: Bot,
    },
    {
        title: "Adaptive Coaching",
        description:
            "Completed workouts and recovery signals are used to adjust future training load, intensity, and recommendations.",
        icon: Activity,
    },
    {
        title: "Coach Chat",
        description:
            "Recent workout context and profile information help Teo answer questions and provide coaching guidance that is relevant to you.",
        icon: FileText,
    },
    {
        title: "Integration Sync",
        description:
            "Authorized provider connections are used to publish planned workouts, import completed activity data, and reconcile planned versus completed training.",
        icon: RefreshCcw,
    },
];

const integrations: Integration[] = [
    {
        title: "Supabase",
        status: "Active service provider",
        description:
            "Supabase provides secure cloud database hosting, authentication, and core data storage for Teo account, workout, and sync records.",
        icon: Database,
    },
    {
        title: "Google Gemini",
        status: "Active service provider",
        description:
            "Google Gemini powers plan-generation and coaching content. Data sent for these features is minimized and anonymized where possible and handled subject to Google's enterprise privacy commitments.",
        icon: Bot,
    },
    {
        title: "Intervals.icu",
        status: "Planned / rolling out",
        description:
            "If you connect Intervals.icu, Teo may publish planned workouts to your Intervals calendar and, in later phases, read limited Intervals-native calendar or activity data to reconcile planned versus completed training. Intervals.icu is intended as a near-term workout-delivery broker while cleaner direct provider integrations continue to roll out.",
        icon: Route,
        featured: true,
    },
    {
        title: "Strava API",
        status: "Planned direct integration",
        description:
            "Strava is planned as a direct completed-activity ingest path and webhook-driven sync source. Data obtained from Strava is used to analyze your fitness progress inside Teo and is not used to train global AI models.",
        icon: Activity,
    },
    {
        title: "Garmin Connect",
        status: "Planned direct integration",
        description:
            "Garmin is the long-term direct workout-delivery and activity-sync path. If approved and enabled, Teo will follow Garmin's restrictions on caching, permissions, and retention.",
        icon: Waypoints,
    },
    {
        title: "Apple HealthKit and Google Health Connect",
        status: "Planned / conditional",
        description:
            "When enabled, we request only the data types necessary for training analysis, such as workouts, heart rate, and sleep. This data is never used for advertising, marketing, or generalized use-based data mining.",
        icon: HeartPulse,
    },
    {
        title: "MyWhoosh",
        status: "Planned beta integration",
        description:
            "MyWhoosh is a planned direct bike-workout delivery path for supported athletes. It will be enabled only when the integration is stable enough to support reliable upload and scheduling.",
        icon: Route,
    },
];

const rights: Item[] = [
    {
        title: "Right to Access",
        description:
            "You can request a copy of the personal data we hold about you.",
        icon: Database,
    },
    {
        title: "Right to Deletion",
        description:
            "You can request deletion of your account and associated Teo data, including through the Delete Account flow in the app when available.",
        icon: Trash2,
    },
    {
        title: "Right to Portability",
        description:
            "You can request export of your workout history and related account data in standard formats where available.",
        icon: Download,
    },
    {
        title: "Right to Rectification",
        description:
            "You can correct inaccurate profile information and ask us to fix data that is incomplete or inaccurate.",
        icon: RefreshCcw,
    },
];

const retentionItems = [
    "We retain your personal and health data only while your account remains active or as otherwise needed to provide the service.",
    "When you delete your account or submit a validated deletion request, your account and associated Teo data are permanently deleted from our servers within 30 days.",
    "Encrypted backups may retain data for up to 90 days before they are overwritten.",
    "If Teo sends data to a provider you authorize, such as Intervals.icu or future direct integrations, that provider's own retention and deletion practices may also apply to the copy stored on its systems.",
];

function PolicyCard({
    title,
    description,
    icon: Icon,
    tone = "default",
}: Item & { tone?: "default" | "featured" }) {
    const isFeatured = tone === "featured";

    return (
        <article
            className={[
                "rounded-3xl border p-6 shadow-sm",
                isFeatured
                    ? "border-primary/20 bg-orange-50/80"
                    : "border-white/50 bg-white/70",
            ].join(" ")}
        >
            <div
                className={[
                    "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl",
                    isFeatured ? "bg-primary/15 text-primary" : "bg-slate-100 text-slate-700",
                ].join(" ")}
            >
                <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-ink">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
        </article>
    );
}

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            <main className="pb-20 pt-28">
                <Container>
                    <section className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 px-6 py-10 shadow-xl shadow-black/5 sm:px-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.14),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.08),_transparent_35%)]" />
                        <div className="relative mx-auto max-w-4xl">
                            <div className="inline-flex items-center rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                                Privacy Policy for Teo
                            </div>
                            <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                                Clear terms for how Teo handles your training, health, and connected-service data.
                            </h1>
                            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                                This policy applies to the Teo mobile app, connected service integrations,
                                and this website. It reflects the current product and integration roadmap as
                                of April 2, 2026.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
                                <div className="rounded-full border border-white/60 bg-white/80 px-4 py-2">
                                    Effective Date: February 14, 2026
                                </div>
                                <div className="rounded-full border border-white/60 bg-white/80 px-4 py-2">
                                    Last Updated: April 2, 2026
                                </div>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {quickLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-primary/30 hover:text-primary"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="mt-8 grid gap-4 lg:grid-cols-3">
                        {commitments.map((item) => (
                            <PolicyCard key={item.title} {...item} />
                        ))}
                    </section>

                    <section id="introduction" className="mt-8 glass-card p-8">
                        <h2 className="text-2xl font-bold text-ink">1. Introduction</h2>
                        <div className="mt-4 space-y-4 text-slate-600">
                            <p>
                                Welcome to Teo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to
                                protecting your privacy and safeguarding your personal health and fitness
                                information when you use the Teo mobile app, our website, and any connected
                                services you choose to authorize.
                            </p>
                            <p>
                                By using Teo, you consent to the data practices described in this policy. If
                                you do not agree with this Privacy Policy, please do not use the app or
                                website.
                            </p>
                        </div>
                    </section>

                    <section id="information-we-collect" className="mt-8 glass-card p-8">
                        <h2 className="text-2xl font-bold text-ink">2. Information We Collect</h2>
                        <p className="mt-4 max-w-3xl text-slate-600">
                            We collect information needed to deliver a personalized AI coaching experience,
                            operate the product, and support authorized integrations.
                        </p>
                        <div className="mt-6 grid gap-4 lg:grid-cols-3">
                            {informationGroups.map((item) => (
                                <PolicyCard key={item.title} {...item} />
                            ))}
                        </div>
                    </section>

                    <section id="how-we-use-data" className="mt-8 glass-card p-8">
                        <h2 className="text-2xl font-bold text-ink">3. How We Use Your Information</h2>
                        <p className="mt-4 max-w-3xl text-slate-600">
                            We use your data solely to provide and improve Teo&apos;s coaching features and
                            connected-service workflows. We do not sell your personal data or health data.
                        </p>
                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            {useCases.map((item) => (
                                <PolicyCard key={item.title} {...item} />
                            ))}
                        </div>
                    </section>

                    <section id="integrations-and-sharing" className="mt-8 glass-card p-8">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-ink">
                                    4. Third-Party Integrations and Data Sharing
                                </h2>
                                <p className="mt-4 max-w-3xl text-slate-600">
                                    We share information only with trusted processors, providers you choose
                                    to connect, or when required by law. The cards below describe the
                                    current Teo service providers and the planned direct or conditional
                                    integrations that matter for product and privacy review.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-primary/15 bg-primary/10 px-4 py-3 text-sm text-primary">
                                Direct integrations will roll out incrementally as Teo moves beyond brokered
                                delivery flows.
                            </div>
                        </div>

                        <div className="mt-6 grid gap-4 lg:grid-cols-2">
                            {integrations.map(({ status, featured, ...item }) => (
                                <article
                                    key={item.title}
                                    className={[
                                        "rounded-3xl border p-6 shadow-sm",
                                        featured
                                            ? "border-primary/20 bg-orange-50/85"
                                            : "border-white/50 bg-white/70",
                                    ].join(" ")}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div
                                            className={[
                                                "inline-flex h-11 w-11 items-center justify-center rounded-2xl",
                                                featured
                                                    ? "bg-primary/15 text-primary"
                                                    : "bg-slate-100 text-slate-700",
                                            ].join(" ")}
                                        >
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <span className="rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                                            {status}
                                        </span>
                                    </div>
                                    <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        {item.description}
                                    </p>
                                </article>
                            ))}
                        </div>

                        <div className="mt-6 rounded-3xl border border-white/50 bg-slate-900 px-6 py-5 text-sm leading-6 text-slate-200">
                            If you authorize Intervals.icu or future provider integrations, Teo will use
                            only the scopes and data needed for the enabled feature. If you also connect
                            downstream services inside another platform, those services remain governed by
                            that platform&apos;s own permissions and privacy policies unless you separately
                            authorize a direct Teo integration with that provider.
                        </div>
                    </section>

                    <section id="data-security" className="mt-8 glass-card p-8">
                        <h2 className="text-2xl font-bold text-ink">5. Data Security</h2>
                        <p className="mt-4 max-w-3xl text-slate-600">
                            We implement technical and organizational safeguards designed to protect your
                            data and limit access to what is necessary to operate the service.
                        </p>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            <PolicyCard
                                title="Encryption"
                                description="Data is encrypted in transit with TLS and protected at rest within our database and infrastructure."
                                icon={Lock}
                            />
                            <PolicyCard
                                title="Row Level Security"
                                description="Database policies are designed so users can access only their own records unless a privileged service path is required."
                                icon={Database}
                            />
                            <PolicyCard
                                title="Access Control"
                                description="Internal access is restricted to authorized personnel and validated service-provider workflows."
                                icon={Server}
                            />
                        </div>
                    </section>

                    <section id="your-rights" className="mt-8 glass-card p-8">
                        <h2 className="text-2xl font-bold text-ink">6. Your Rights</h2>
                        <p className="mt-4 max-w-3xl text-slate-600">
                            Regardless of your location, Teo aims to support access, deletion, portability,
                            and correction rights consistent with applicable privacy laws, including GDPR and
                            CCPA concepts.
                        </p>
                        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                            {rights.map((item) => (
                                <PolicyCard key={item.title} {...item} />
                            ))}
                        </div>
                        <div className="mt-6 rounded-3xl border border-white/50 bg-white/70 px-6 py-5 text-sm leading-6 text-slate-600">
                            You can also revoke optional provider access by disconnecting integrations where
                            available and by updating permissions with the relevant provider.
                        </div>
                    </section>

                    <section id="retention-and-deletion" className="mt-8 glass-card p-8">
                        <h2 className="text-2xl font-bold text-ink">7. Data Retention and Deletion</h2>
                        <ul className="mt-6 space-y-4">
                            {retentionItems.map((item) => (
                                <li
                                    key={item}
                                    className="rounded-3xl border border-white/50 bg-white/70 px-6 py-5 text-sm leading-6 text-slate-600"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="mt-8 grid gap-4 lg:grid-cols-2">
                        <article className="glass-card p-8">
                            <h2 className="text-2xl font-bold text-ink">8. Children&apos;s Privacy</h2>
                            <p className="mt-4 text-slate-600">
                                Teo is not intended for children under 13. We do not knowingly collect
                                personal information from children under 13, and if we become aware that we
                                have collected such information, we will take steps to delete it promptly.
                            </p>
                        </article>

                        <article className="glass-card p-8">
                            <h2 className="text-2xl font-bold text-ink">9. Changes to This Policy</h2>
                            <p className="mt-4 text-slate-600">
                                We may update this Privacy Policy from time to time. When we do, we will post
                                the updated version on this page and revise the Last Updated date shown
                                above.
                            </p>
                        </article>
                    </section>

                    <section id="contact-us" className="mt-8 glass-card p-8">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-2xl">
                                <h2 className="text-2xl font-bold text-ink">10. Contact Us</h2>
                                <p className="mt-4 text-slate-600">
                                    If you have questions about this Privacy Policy or want to exercise your
                                    privacy rights, contact us using the address below or use the in-app
                                    account deletion flow where available.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-primary/20 bg-orange-50/85 px-6 py-5 text-sm shadow-sm">
                                <div className="flex items-center gap-3 font-semibold text-ink">
                                    <Mail className="h-5 w-5 text-primary" />
                                    privacy@teocoaching.ca
                                </div>
                                <div className="mt-3 flex items-center gap-3 text-slate-600">
                                    <Clock3 className="h-4 w-4 text-slate-400" />
                                    Privacy and deletion requests are reviewed through this inbox.
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </main>

            <Footer />
        </div>
    );
}
