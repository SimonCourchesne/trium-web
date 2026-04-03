"use client";

import type { LucideIcon } from "lucide-react";
import {
    Activity,
    Bot,
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

import { useLanguage } from "@/components/language-provider";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Container } from "@/components/ui/container";

type PolicyCardContent = {
    title: string;
    description: string;
    icon: LucideIcon;
};

type IntegrationCardContent = PolicyCardContent & {
    status: string;
    featured?: boolean;
};

type PolicyContent = {
    badge: string;
    title: string;
    subtitle: string;
    effectiveDateLabel: string;
    effectiveDateValue: string;
    updatedDateLabel: string;
    updatedDateValue: string;
    quickLinks: { href: string; label: string }[];
    commitments: PolicyCardContent[];
    sections: {
        introduction: {
            title: string;
            paragraphs: string[];
        };
        information: {
            title: string;
            intro: string;
            cards: PolicyCardContent[];
        };
        usage: {
            title: string;
            intro: string;
            cards: PolicyCardContent[];
        };
        integrations: {
            title: string;
            intro: string;
            note: string;
            cards: IntegrationCardContent[];
            footer: string;
        };
        security: {
            title: string;
            intro: string;
            cards: PolicyCardContent[];
        };
        rights: {
            title: string;
            intro: string;
            cards: PolicyCardContent[];
            footer: string;
        };
        retention: {
            title: string;
            items: string[];
        };
        children: {
            title: string;
            body: string;
        };
        changes: {
            title: string;
            body: string;
        };
        contact: {
            title: string;
            body: string;
            emailLabel: string;
            email: string;
        };
    };
};

const ICONS = {
    noSale: ShieldCheck,
    integrations: Waypoints,
    rights: FileText,
    profile: UserRound,
    health: HeartPulse,
    device: Smartphone,
    plan: Bot,
    adaptation: Activity,
    chat: FileText,
    sync: RefreshCcw,
    database: Database,
    route: Route,
    lock: Lock,
    server: Server,
    trash: Trash2,
    download: Download,
    mail: Mail,
} as const;

const content: Record<"en" | "fr", PolicyContent> = {
    en: {
        badge: "Privacy Policy for Teo",
        title: "Clear terms for how Teo handles your training, health, and connected-service data.",
        subtitle:
            "This policy applies to the Teo mobile app, connected service integrations, and this website. It reflects the current product and integration roadmap as of April 3, 2026.",
        effectiveDateLabel: "Effective Date",
        effectiveDateValue: "February 14, 2026",
        updatedDateLabel: "Last Updated",
        updatedDateValue: "April 3, 2026",
        quickLinks: [
            { href: "#information-we-collect", label: "Information We Collect" },
            { href: "#how-we-use-data", label: "How We Use Data" },
            { href: "#integrations-and-sharing", label: "Integrations" },
            { href: "#your-rights", label: "Your Rights" },
            { href: "#contact-us", label: "Contact" },
        ],
        commitments: [
            {
                title: "No Data Sales",
                description:
                    "We do not sell your personal data or health data to advertisers, brokers, or other third parties.",
                icon: ICONS.noSale,
            },
            {
                title: "Consent-Based Integrations",
                description:
                    "Connected-service sync happens only when you authorize Teo to access or send data to a provider.",
                icon: ICONS.integrations,
            },
            {
                title: "Deletion and Access Rights",
                description:
                    "The privacy policy describes rights Teo intends to support, including access, correction, portability, and deletion.",
                icon: ICONS.rights,
            },
        ],
        sections: {
            introduction: {
                title: "1. Introduction",
                paragraphs: [
                    "Welcome to Teo (\"we,\" \"our,\" or \"us\"). We are committed to protecting your privacy and safeguarding your personal health and fitness information when you use the Teo mobile app, our website, and any connected services you choose to authorize.",
                    "By using Teo, you consent to the data practices described in this policy. If you do not agree with this Privacy Policy, please do not use the app or website.",
                ],
            },
            information: {
                title: "2. Information We Collect",
                intro:
                    "We collect information needed to deliver a personalized AI coaching experience, operate the product, and support authorized integrations.",
                cards: [
                    {
                        title: "Personal Information",
                        description:
                            "Identity data such as your name, email address, date of birth, profile photo, height, weight, gender, and age when required to personalize coaching and training-load calculations.",
                        icon: ICONS.profile,
                    },
                    {
                        title: "Health and Fitness Data",
                        description:
                            "Workouts, sport type, distances, durations, elevation, heart rate, resting heart rate, HRV, power, speed, cadence, GPS traces, and sleep or recovery metrics when synced.",
                        icon: ICONS.health,
                    },
                    {
                        title: "Device and Technical Data",
                        description:
                            "Device model, operating system version, identifiers, IP address, feature usage, and crash or reliability data needed to operate and improve the product.",
                        icon: ICONS.device,
                    },
                ],
            },
            usage: {
                title: "3. How We Use Your Information",
                intro:
                    "We use your data solely to provide and improve Teo's coaching features and connected-service workflows. We do not sell your personal data or health data.",
                cards: [
                    {
                        title: "Plan Generation",
                        description:
                            "Training history, biometrics, and goals are processed to generate personalized schedules and structured workouts.",
                        icon: ICONS.plan,
                    },
                    {
                        title: "Adaptive Coaching",
                        description:
                            "Completed workouts and recovery signals are used to adjust future training load, intensity, and recommendations.",
                        icon: ICONS.adaptation,
                    },
                    {
                        title: "Coach Chat",
                        description:
                            "Recent workout context and profile information help Teo answer questions and provide coaching guidance that is relevant to you.",
                        icon: ICONS.chat,
                    },
                    {
                        title: "Integration Sync",
                        description:
                            "Authorized provider connections are used to publish planned workouts, import completed activity data, and reconcile planned versus completed training.",
                        icon: ICONS.sync,
                    },
                ],
            },
            integrations: {
                title: "4. Third-Party Integrations and Data Sharing",
                intro:
                    "We share information only with trusted processors, providers you choose to connect, or when required by law. The cards below describe the current Teo service providers and the planned direct or conditional integrations that matter for product and privacy review.",
                note:
                    "Direct integrations will roll out incrementally as Teo moves beyond brokered delivery flows.",
                cards: [
                    {
                        title: "Supabase",
                        status: "Active service provider",
                        description:
                            "Supabase provides secure cloud database hosting, authentication, and core data storage for Teo account, workout, and sync records.",
                        icon: ICONS.database,
                    },
                    {
                        title: "Google Gemini",
                        status: "Active service provider",
                        description:
                            "Google Gemini powers plan-generation and coaching content. Data sent for these features is minimized and anonymized where possible and handled subject to Google's enterprise privacy commitments.",
                        icon: ICONS.plan,
                    },
                    {
                        title: "Intervals.icu",
                        status: "Planned / rolling out",
                        description:
                            "If you connect Intervals.icu, Teo may publish planned workouts to your Intervals calendar and, in later phases, read limited Intervals-native calendar or activity data to reconcile planned versus completed training. Intervals.icu is intended as a near-term workout-delivery broker while cleaner direct provider integrations continue to roll out.",
                        icon: ICONS.route,
                        featured: true,
                    },
                    {
                        title: "Strava API",
                        status: "Planned direct integration",
                        description:
                            "Strava is planned as a direct completed-activity ingest path and webhook-driven sync source. Data obtained from Strava is used to analyze your fitness progress inside Teo and is not used to train global AI models.",
                        icon: ICONS.adaptation,
                    },
                    {
                        title: "Garmin Connect",
                        status: "Planned direct integration",
                        description:
                            "Garmin is the long-term direct workout-delivery and activity-sync path. If approved and enabled, Teo will follow Garmin's restrictions on caching, permissions, and retention.",
                        icon: ICONS.integrations,
                    },
                    {
                        title: "Apple HealthKit and Google Health Connect",
                        status: "Planned / conditional",
                        description:
                            "When enabled, we request only the data types necessary for training analysis, such as workouts, heart rate, and sleep. This data is never used for advertising, marketing, or generalized use-based data mining.",
                        icon: ICONS.health,
                    },
                    {
                        title: "MyWhoosh",
                        status: "Planned beta integration",
                        description:
                            "MyWhoosh is a planned direct bike-workout delivery path for supported athletes. It will be enabled only when the integration is stable enough to support reliable upload and scheduling.",
                        icon: ICONS.route,
                    },
                ],
                footer:
                    "If you authorize Intervals.icu or future provider integrations, Teo will use only the scopes and data needed for the enabled feature. If you also connect downstream services inside another platform, those services remain governed by that platform's own permissions and privacy policies unless you separately authorize a direct Teo integration with that provider.",
            },
            security: {
                title: "5. Data Security",
                intro:
                    "We implement technical and organizational safeguards designed to protect your data and limit access to what is necessary to operate the service.",
                cards: [
                    {
                        title: "Encryption",
                        description:
                            "Data is encrypted in transit with TLS and protected at rest within our database and infrastructure.",
                        icon: ICONS.lock,
                    },
                    {
                        title: "Row Level Security",
                        description:
                            "Database policies are designed so users can access only their own records unless a privileged service path is required.",
                        icon: ICONS.database,
                    },
                    {
                        title: "Access Control",
                        description:
                            "Internal access is restricted to authorized personnel and validated service-provider workflows.",
                        icon: ICONS.server,
                    },
                ],
            },
            rights: {
                title: "6. Your Rights",
                intro:
                    "Regardless of your location, Teo aims to support access, deletion, portability, and correction rights consistent with applicable privacy laws, including GDPR and CCPA concepts.",
                cards: [
                    {
                        title: "Right to Access",
                        description: "You can request a copy of the personal data we hold about you.",
                        icon: ICONS.database,
                    },
                    {
                        title: "Right to Deletion",
                        description:
                            "You can request deletion of your account and associated Teo data, including through the Delete Account flow in the app when available.",
                        icon: ICONS.trash,
                    },
                    {
                        title: "Right to Portability",
                        description:
                            "You can request export of your workout history and related account data in standard formats where available.",
                        icon: ICONS.download,
                    },
                    {
                        title: "Right to Rectification",
                        description:
                            "You can correct inaccurate profile information and ask us to fix data that is incomplete or inaccurate.",
                        icon: ICONS.sync,
                    },
                ],
                footer:
                    "You can also revoke optional provider access by disconnecting integrations where available and by updating permissions with the relevant provider.",
            },
            retention: {
                title: "7. Data Retention and Deletion",
                items: [
                    "We retain your personal and health data only while your account remains active or as otherwise needed to provide the service.",
                    "When you delete your account or submit a validated deletion request, your account and associated Teo data are permanently deleted from our servers within 30 days.",
                    "Encrypted backups may retain data for up to 90 days before they are overwritten.",
                    "If Teo sends data to a provider you authorize, such as Intervals.icu or future direct integrations, that provider's own retention and deletion practices may also apply to the copy stored on its systems.",
                ],
            },
            children: {
                title: "8. Children's Privacy",
                body:
                    "Teo is not intended for children under 13. We do not knowingly collect personal information from children under 13, and if we become aware that we have collected such information, we will take steps to delete it promptly.",
            },
            changes: {
                title: "9. Changes to This Policy",
                body:
                    "We may update this Privacy Policy from time to time. When we do, we will post the updated version on this page and revise the Last Updated date shown above.",
            },
            contact: {
                title: "10. Contact Us",
                body:
                    "If you have questions about this Privacy Policy, contact us using the address below. Product rights and deletion flows should be implemented in the app and backend where applicable.",
                emailLabel: "General contact",
                email: "hello@teocoaching.ca",
            },
        },
    },
    fr: {
        badge: "Politique de confidentialite de Teo",
        title: "Des termes clairs sur la maniere dont Teo traite vos donnees d'entrainement, de sante et de services connectes.",
        subtitle:
            "Cette politique s'applique a l'application mobile Teo, aux integrations de services connectes et a ce site web. Elle reflete l'etat actuel du produit et de la feuille de route des integrations au 3 avril 2026.",
        effectiveDateLabel: "Date d'effet",
        effectiveDateValue: "14 fevrier 2026",
        updatedDateLabel: "Derniere mise a jour",
        updatedDateValue: "3 avril 2026",
        quickLinks: [
            { href: "#information-we-collect", label: "Donnees collectees" },
            { href: "#how-we-use-data", label: "Utilisation des donnees" },
            { href: "#integrations-and-sharing", label: "Integrations" },
            { href: "#your-rights", label: "Vos droits" },
            { href: "#contact-us", label: "Contact" },
        ],
        commitments: [
            {
                title: "Aucune vente de donnees",
                description:
                    "Nous ne vendons pas vos donnees personnelles ni vos donnees de sante a des annonceurs, courtiers ou autres tiers.",
                icon: ICONS.noSale,
            },
            {
                title: "Integrations fondees sur le consentement",
                description:
                    "La synchronisation avec des services connectes a lieu seulement lorsque vous autorisez Teo a acceder a un fournisseur ou a lui envoyer des donnees.",
                icon: ICONS.integrations,
            },
            {
                title: "Droits d'acces et de suppression",
                description:
                    "La politique de confidentialite decrit les droits que Teo vise a prendre en charge, notamment l'acces, la correction, la portabilite et la suppression.",
                icon: ICONS.rights,
            },
        ],
        sections: {
            introduction: {
                title: "1. Introduction",
                paragraphs: [
                    "Bienvenue chez Teo (\"nous\", \"notre\" ou \"nos\"). Nous nous engageons a proteger votre vie privee et a proteger vos renseignements personnels, de sante et de condition physique lorsque vous utilisez l'application mobile Teo, notre site web et les services connectes que vous choisissez d'autoriser.",
                    "En utilisant Teo, vous consentez aux pratiques de donnees decrites dans cette politique. Si vous n'acceptez pas cette politique de confidentialite, veuillez ne pas utiliser l'application ou le site web.",
                ],
            },
            information: {
                title: "2. Donnees que nous collectons",
                intro:
                    "Nous collectons les donnees necessaires pour fournir une experience de coaching IA personnalisee, exploiter le produit et prendre en charge les integrations autorisees.",
                cards: [
                    {
                        title: "Renseignements personnels",
                        description:
                            "Des donnees d'identite comme votre nom, votre adresse courriel, votre date de naissance, votre photo de profil, votre taille, votre poids, votre genre et votre age lorsque cela est necessaire pour personnaliser le coaching et les calculs de charge d'entrainement.",
                        icon: ICONS.profile,
                    },
                    {
                        title: "Donnees de sante et de condition physique",
                        description:
                            "Entrainements, type de sport, distances, durees, denivele, frequence cardiaque, frequence cardiaque au repos, VFC, puissance, vitesse, cadence, traces GPS et donnees de sommeil ou de recuperation lorsqu'elles sont synchronisees.",
                        icon: ICONS.health,
                    },
                    {
                        title: "Donnees techniques et d'appareil",
                        description:
                            "Modele d'appareil, version du systeme d'exploitation, identifiants, adresse IP, utilisation des fonctionnalites et donnees de plantage ou de fiabilite necessaires au fonctionnement et a l'amelioration du produit.",
                        icon: ICONS.device,
                    },
                ],
            },
            usage: {
                title: "3. Comment nous utilisons vos donnees",
                intro:
                    "Nous utilisons vos donnees uniquement pour fournir et ameliorer les fonctionnalites de coaching de Teo et les flux des services connectes. Nous ne vendons pas vos donnees personnelles ni vos donnees de sante.",
                cards: [
                    {
                        title: "Generation de plans",
                        description:
                            "L'historique d'entrainement, les biometries et les objectifs sont traites pour generer des horaires personnalises et des entrainements structures.",
                        icon: ICONS.plan,
                    },
                    {
                        title: "Coaching adaptatif",
                        description:
                            "Les entrainements completes et les signaux de recuperation sont utilises pour ajuster la charge, l'intensite et les recommandations futures.",
                        icon: ICONS.adaptation,
                    },
                    {
                        title: "Coach Chat",
                        description:
                            "Le contexte de vos entrainements recents et les informations de profil aident Teo a repondre a vos questions et a fournir des conseils pertinents.",
                        icon: ICONS.chat,
                    },
                    {
                        title: "Synchronisation des integrations",
                        description:
                            "Les connexions a des fournisseurs autorises servent a publier des entrainements planifies, importer des activites completes et rapprocher l'entrainement prevu de l'entrainement realise.",
                        icon: ICONS.sync,
                    },
                ],
            },
            integrations: {
                title: "4. Integrations tierces et partage de donnees",
                intro:
                    "Nous partageons des informations uniquement avec des sous-traitants de confiance, les fournisseurs que vous choisissez de connecter ou lorsque la loi l'exige. Les cartes ci-dessous decrivent les fournisseurs de services actuels de Teo et les integrations directes ou conditionnelles planifiees qui importent pour l'examen produit et vie privee.",
                note:
                    "Les integrations directes seront deployees progressivement a mesure que Teo depassera les flux de livraison intermediaires.",
                cards: [
                    {
                        title: "Supabase",
                        status: "Fournisseur de service actif",
                        description:
                            "Supabase fournit l'hebergement securise de la base de donnees infonuagique, l'authentification et le stockage principal des comptes, entrainements et donnees de synchronisation de Teo.",
                        icon: ICONS.database,
                    },
                    {
                        title: "Google Gemini",
                        status: "Fournisseur de service actif",
                        description:
                            "Google Gemini alimente la generation de plans et le contenu de coaching. Les donnees envoyees pour ces fonctionnalites sont reduites au minimum et anonymisees lorsque possible, puis traitees selon les engagements de confidentialite entreprise de Google.",
                        icon: ICONS.plan,
                    },
                    {
                        title: "Intervals.icu",
                        status: "Planifie / en deploiement",
                        description:
                            "Si vous connectez Intervals.icu, Teo pourra publier des entrainements planifies dans votre calendrier Intervals et, dans des phases ulterieures, lire des donnees limitees de calendrier ou d'activite propres a Intervals pour rapprocher l'entrainement prevu de l'entrainement realise. Intervals.icu sert de courtier de livraison a court terme pendant que des integrations directes plus propres continuent d'etre deployees.",
                        icon: ICONS.route,
                        featured: true,
                    },
                    {
                        title: "API Strava",
                        status: "Integration directe planifiee",
                        description:
                            "Strava est prevu comme source directe d'import d'activites completes et de synchronisation pilotee par webhooks. Les donnees obtenues via Strava servent a analyser votre progression dans Teo et ne sont pas utilisees pour entrainer des modeles IA globaux.",
                        icon: ICONS.adaptation,
                    },
                    {
                        title: "Garmin Connect",
                        status: "Integration directe planifiee",
                        description:
                            "Garmin est la voie directe a long terme pour la livraison d'entrainements et la synchronisation d'activites. Si l'integration est approuvee et activee, Teo respectera les restrictions de Garmin en matiere de cache, de permissions et de retention.",
                        icon: ICONS.integrations,
                    },
                    {
                        title: "Apple HealthKit et Google Health Connect",
                        status: "Planifie / conditionnel",
                        description:
                            "Lorsqu'ils seront actives, nous demanderons seulement les types de donnees necessaires a l'analyse de l'entrainement, comme les entrainements, la frequence cardiaque et le sommeil. Ces donnees ne sont jamais utilisees pour la publicite, le marketing ou l'exploration generalisee basee sur l'usage.",
                        icon: ICONS.health,
                    },
                    {
                        title: "MyWhoosh",
                        status: "Integration beta planifiee",
                        description:
                            "MyWhoosh est une voie directe planifiee pour la livraison d'entrainements cyclistes aux athletes pris en charge. Elle ne sera activee que lorsque l'integration sera assez stable pour permettre un televersement et une planification fiables.",
                        icon: ICONS.route,
                    },
                ],
                footer:
                    "Si vous autorisez Intervals.icu ou de futures integrations de fournisseurs, Teo n'utilisera que les portees et les donnees necessaires a la fonctionnalite activee. Si vous connectez aussi des services en aval dans une autre plateforme, ces services restent regis par les permissions et politiques de confidentialite propres a cette plateforme, sauf si vous autorisez separement une integration directe Teo avec ce fournisseur.",
            },
            security: {
                title: "5. Securite des donnees",
                intro:
                    "Nous mettons en place des mesures techniques et organisationnelles destinees a proteger vos donnees et a limiter l'acces a ce qui est necessaire pour exploiter le service.",
                cards: [
                    {
                        title: "Chiffrement",
                        description:
                            "Les donnees sont chiffre es en transit avec TLS et protegees au repos dans notre base de donnees et notre infrastructure.",
                        icon: ICONS.lock,
                    },
                    {
                        title: "Row Level Security",
                        description:
                            "Les politiques de base de donnees sont concues pour que les utilisateurs ne puissent acceder qu'a leurs propres enregistrements, sauf lorsqu'un chemin de service privilegie est necessaire.",
                        icon: ICONS.database,
                    },
                    {
                        title: "Controle d'acces",
                        description:
                            "L'acces interne est limite au personnel autorise et aux flux valides des fournisseurs de service.",
                        icon: ICONS.server,
                    },
                ],
            },
            rights: {
                title: "6. Vos droits",
                intro:
                    "Peu importe votre lieu de residence, Teo vise a prendre en charge les droits d'acces, de suppression, de portabilite et de correction d'une maniere compatible avec les lois applicables en matiere de vie privee, y compris les principes du RGPD et du CCPA.",
                cards: [
                    {
                        title: "Droit d'acces",
                        description:
                            "Vous pouvez demander une copie des donnees personnelles que nous detenons a votre sujet.",
                        icon: ICONS.database,
                    },
                    {
                        title: "Droit a la suppression",
                        description:
                            "Vous pouvez demander la suppression de votre compte et des donnees Teo associees, y compris via le flux de suppression de compte dans l'application lorsqu'il est disponible.",
                        icon: ICONS.trash,
                    },
                    {
                        title: "Droit a la portabilite",
                        description:
                            "Vous pouvez demander l'exportation de votre historique d'entrainement et des donnees de compte connexes dans des formats standards lorsque c'est possible.",
                        icon: ICONS.download,
                    },
                    {
                        title: "Droit de rectification",
                        description:
                            "Vous pouvez corriger les informations de profil inexactes et demander la correction de donnees incompletes ou inexactes.",
                        icon: ICONS.sync,
                    },
                ],
                footer:
                    "Vous pouvez aussi revoquer l'acces a des fournisseurs optionnels en deconnectant les integrations lorsqu'elles sont offertes et en mettant a jour les permissions chez le fournisseur concerne.",
            },
            retention: {
                title: "7. Retention et suppression des donnees",
                items: [
                    "Nous conservons vos donnees personnelles et de sante seulement tant que votre compte reste actif ou aussi longtemps que necessaire pour fournir le service.",
                    "Lorsque vous supprimez votre compte ou soumettez une demande de suppression validee, votre compte et les donnees Teo associees sont supprimes de facon definitive de nos serveurs dans un delai de 30 jours.",
                    "Des sauvegardes chiffre es peuvent conserver des donnees pendant une periode pouvant aller jusqu'a 90 jours avant d'etre ecrasees.",
                    "Si Teo envoie des donnees a un fournisseur que vous autorisez, comme Intervals.icu ou de futures integrations directes, les pratiques de retention et de suppression de ce fournisseur peuvent aussi s'appliquer a la copie conservee sur ses systemes.",
                ],
            },
            children: {
                title: "8. Confidentialite des enfants",
                body:
                    "Teo n'est pas concu pour les enfants de moins de 13 ans. Nous ne recueillons pas sciemment de renseignements personnels aupres d'enfants de moins de 13 ans et, si nous apprenons que nous avons recueilli de tels renseignements, nous prendrons des mesures pour les supprimer rapidement.",
            },
            changes: {
                title: "9. Modifications de cette politique",
                body:
                    "Nous pouvons mettre a jour cette politique de confidentialite de temps a autre. Lorsque nous le faisons, nous publions la version mise a jour sur cette page et nous revoyons la date de derniere mise a jour indiquee ci-dessus.",
            },
            contact: {
                title: "10. Nous joindre",
                body:
                    "Si vous avez des questions au sujet de cette politique de confidentialite, communiquez avec nous a l'adresse ci-dessous. Les flux produits lies aux droits, a la suppression et a la retention doivent etre implementes dans l'application et le backend lorsqu'ils s'appliquent.",
                emailLabel: "Contact general",
                email: "hello@teocoaching.ca",
            },
        },
    },
};

function PolicyCard({
    title,
    description,
    icon: Icon,
    tone = "default",
}: PolicyCardContent & { tone?: "default" | "featured" }) {
    const isFeatured = tone === "featured";

    return (
        <article
            className={[
                "rounded-3xl border p-6 shadow-sm",
                isFeatured ? "border-primary/20 bg-orange-50/80" : "border-white/50 bg-white/70",
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

export function PrivacyContent() {
    const { language } = useLanguage();
    const policy = content[language];

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />

            <main className="pb-20 pt-28">
                <Container>
                    <section className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 px-6 py-10 shadow-xl shadow-black/5 sm:px-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.14),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.08),_transparent_35%)]" />
                        <div className="relative mx-auto max-w-4xl">
                            <div className="inline-flex items-center rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                                {policy.badge}
                            </div>
                            <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                                {policy.title}
                            </h1>
                            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                                {policy.subtitle}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
                                <div className="rounded-full border border-white/60 bg-white/80 px-4 py-2">
                                    {policy.effectiveDateLabel}: {policy.effectiveDateValue}
                                </div>
                                <div className="rounded-full border border-white/60 bg-white/80 px-4 py-2">
                                    {policy.updatedDateLabel}: {policy.updatedDateValue}
                                </div>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {policy.quickLinks.map((link) => (
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
                        {policy.commitments.map((item) => (
                            <PolicyCard key={item.title} {...item} />
                        ))}
                    </section>

                    <section id="introduction" className="mt-8 glass-card p-8">
                        <h2 className="text-2xl font-bold text-ink">{policy.sections.introduction.title}</h2>
                        <div className="mt-4 space-y-4 text-slate-600">
                            {policy.sections.introduction.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </section>

                    <section id="information-we-collect" className="mt-8 glass-card p-8">
                        <h2 className="text-2xl font-bold text-ink">{policy.sections.information.title}</h2>
                        <p className="mt-4 max-w-3xl text-slate-600">{policy.sections.information.intro}</p>
                        <div className="mt-6 grid gap-4 lg:grid-cols-3">
                            {policy.sections.information.cards.map((item) => (
                                <PolicyCard key={item.title} {...item} />
                            ))}
                        </div>
                    </section>

                    <section id="how-we-use-data" className="mt-8 glass-card p-8">
                        <h2 className="text-2xl font-bold text-ink">{policy.sections.usage.title}</h2>
                        <p className="mt-4 max-w-3xl text-slate-600">{policy.sections.usage.intro}</p>
                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            {policy.sections.usage.cards.map((item) => (
                                <PolicyCard key={item.title} {...item} />
                            ))}
                        </div>
                    </section>

                    <section id="integrations-and-sharing" className="mt-8 glass-card p-8">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-ink">{policy.sections.integrations.title}</h2>
                                <p className="mt-4 max-w-3xl text-slate-600">{policy.sections.integrations.intro}</p>
                            </div>
                            <div className="rounded-2xl border border-primary/15 bg-primary/10 px-4 py-3 text-sm text-primary">
                                {policy.sections.integrations.note}
                            </div>
                        </div>

                        <div className="mt-6 grid gap-4 lg:grid-cols-2">
                            {policy.sections.integrations.cards.map(({ status, featured, ...item }) => (
                                <article
                                    key={item.title}
                                    className={[
                                        "rounded-3xl border p-6 shadow-sm",
                                        featured ? "border-primary/20 bg-orange-50/85" : "border-white/50 bg-white/70",
                                    ].join(" ")}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div
                                            className={[
                                                "inline-flex h-11 w-11 items-center justify-center rounded-2xl",
                                                featured ? "bg-primary/15 text-primary" : "bg-slate-100 text-slate-700",
                                            ].join(" ")}
                                        >
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <span className="rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                                            {status}
                                        </span>
                                    </div>
                                    <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                                </article>
                            ))}
                        </div>

                        <div className="mt-6 rounded-3xl border border-white/50 bg-slate-900 px-6 py-5 text-sm leading-6 text-slate-200">
                            {policy.sections.integrations.footer}
                        </div>
                    </section>

                    <section id="data-security" className="mt-8 glass-card p-8">
                        <h2 className="text-2xl font-bold text-ink">{policy.sections.security.title}</h2>
                        <p className="mt-4 max-w-3xl text-slate-600">{policy.sections.security.intro}</p>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            {policy.sections.security.cards.map((item) => (
                                <PolicyCard key={item.title} {...item} />
                            ))}
                        </div>
                    </section>

                    <section id="your-rights" className="mt-8 glass-card p-8">
                        <h2 className="text-2xl font-bold text-ink">{policy.sections.rights.title}</h2>
                        <p className="mt-4 max-w-3xl text-slate-600">{policy.sections.rights.intro}</p>
                        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                            {policy.sections.rights.cards.map((item) => (
                                <PolicyCard key={item.title} {...item} />
                            ))}
                        </div>
                        <div className="mt-6 rounded-3xl border border-white/50 bg-white/70 px-6 py-5 text-sm leading-6 text-slate-600">
                            {policy.sections.rights.footer}
                        </div>
                    </section>

                    <section id="retention-and-deletion" className="mt-8 glass-card p-8">
                        <h2 className="text-2xl font-bold text-ink">{policy.sections.retention.title}</h2>
                        <ul className="mt-6 space-y-4">
                            {policy.sections.retention.items.map((item) => (
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
                            <h2 className="text-2xl font-bold text-ink">{policy.sections.children.title}</h2>
                            <p className="mt-4 text-slate-600">{policy.sections.children.body}</p>
                        </article>

                        <article className="glass-card p-8">
                            <h2 className="text-2xl font-bold text-ink">{policy.sections.changes.title}</h2>
                            <p className="mt-4 text-slate-600">{policy.sections.changes.body}</p>
                        </article>
                    </section>

                    <section id="contact-us" className="mt-8 glass-card p-8">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-2xl">
                                <h2 className="text-2xl font-bold text-ink">{policy.sections.contact.title}</h2>
                                <p className="mt-4 text-slate-600">{policy.sections.contact.body}</p>
                            </div>

                            <div className="rounded-3xl border border-primary/20 bg-orange-50/85 px-6 py-5 text-sm shadow-sm">
                                <div className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                                    {policy.sections.contact.emailLabel}
                                </div>
                                <div className="mt-3 flex items-center gap-3 font-semibold text-ink">
                                    <Mail className="h-5 w-5 text-primary" />
                                    {policy.sections.contact.email}
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
