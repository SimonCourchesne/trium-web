import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/landing/hero";
import { SocialProof } from "@/components/landing/social-proof";
import { FeatureShowcase } from "@/components/landing/feature-showcase";
import { PlanCreationShowcase } from "@/components/landing/plan-creation-showcase";
import { AppShowcase } from "@/components/landing/app-showcase";
import { Mission } from "@/components/landing/mission";
import { FAQ } from "@/components/landing/faq";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Header />
            <Hero />
            <SocialProof />
            <FeatureShowcase />
            <PlanCreationShowcase />
            <AppShowcase />
            <Mission />
            <FAQ />
            <Footer />
        </main>
    );
}
