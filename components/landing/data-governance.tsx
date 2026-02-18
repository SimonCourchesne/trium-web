import { Container } from "@/components/ui/container";
import { ShieldCheck, Lock, Database } from "lucide-react";

const features = [
    {
        title: "Enterprise-grade Encryption",
        description: "Your health data is encrypted at rest and in transit.",
        icon: Lock,
    },
    {
        title: "You Own Your Data",
        description: "Export your workout history anytime. We never sell to third parties.",
        icon: Database,
    },
    {
        title: "Strict Governance",
        description: "Built on secure infrastructure with Row Level Security (RLS).",
        icon: ShieldCheck,
    },
];

export function DataGovernance() {
    return (
        <section className="bg-slate-950/50 py-24 border-y border-white/5">
            <Container>
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                        Your Data, <span className="text-mint">Secure & Private.</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-400">
                        We treat your personal health data with the highest level of security.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-mint/20 hover:bg-white/10"
                        >
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint/10 text-mint">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-white">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
