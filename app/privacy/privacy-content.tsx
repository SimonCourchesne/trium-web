"use client";

import type { LucideIcon } from "lucide-react";
import {
    Activity,
    Bot,
    Database,
    Download,
    FileDown,
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
        download: {
            title: string;
            body: string;
            cta: string;
            filename: string;
            url: string;
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
            download: {
                title: "Download a PDF copy",
                body: "Save a branded PDF version of this privacy policy for registration, legal review, or offline reference.",
                cta: "Download Privacy Policy PDF",
                filename: "teo-privacy-policy-en.pdf",
                url: "/privacy-policy-en.pdf",
            },
        },
    },
    fr: {
        badge: "Politique de confidentialité de Teo",
        title: "Des termes clairs sur la manière dont Teo traite vos données d'entraînement, de santé et de services connectés.",
        subtitle:
            "Cette politique s'applique à l'application mobile Teo, aux intégrations de services connectés et à ce site web. Elle reflète l'état actuel du produit et de la feuille de route des intégrations au 3 avril 2026.",
        effectiveDateLabel: "Date d’effet",
        effectiveDateValue: "14 février 2026",
        updatedDateLabel: "Dernière mise à jour",
        updatedDateValue: "3 avril 2026",
        quickLinks: [
            { href: "#information-we-collect", label: "Données collectées" },
            { href: "#how-we-use-data", label: "Utilisation des données" },
            { href: "#integrations-and-sharing", label: "Intégrations" },
            { href: "#your-rights", label: "Vos droits" },
            { href: "#contact-us", label: "Contact" },
        ],
        commitments: [
            {
                title: "Aucune vente de données",
                description:
                    "Nous ne vendons pas vos données personnelles ni vos données de santé à des annonceurs, courtiers ou autres tiers.",
                icon: ICONS.noSale,
            },
            {
                title: "Intégrations fondées sur le consentement",
                description:
                    "La synchronisation avec des services connectés a lieu seulement lorsque vous autorisez Teo à accéder à un fournisseur ou à lui envoyer des données.",
                icon: ICONS.integrations,
            },
            {
                title: "Droits d'accès et de suppression",
                description:
                    "La politique de confidentialité décrit les droits que Teo vise à prendre en charge, notamment l'accès, la correction, la portabilité et la suppression.",
                icon: ICONS.rights,
            },
        ],
        sections: {
            introduction: {
                title: "1. Introduction",
                paragraphs: [
                    "Bienvenue chez Teo (« nous », « notre » ou « nos »). Nous nous engageons à protéger votre vie privée et à protéger vos renseignements personnels, de santé et de condition physique lorsque vous utilisez l'application mobile Teo, notre site web et les services connectés que vous choisissez d'autoriser.",
                    "En utilisant Teo, vous consentez aux pratiques de données décrites dans cette politique. Si vous n'acceptez pas cette politique de confidentialité, veuillez ne pas utiliser l'application ou le site web.",
                ],
            },
            information: {
                title: "2. Données que nous collectons",
                intro:
                    "Nous collectons les données nécessaires pour fournir une expérience de coaching IA personnalisée, exploiter le produit et prendre en charge les intégrations autorisées.",
                cards: [
                    {
                        title: "Renseignements personnels",
                        description:
                            "Des données d'identité comme votre nom, votre adresse courriel, votre date de naissance, votre photo de profil, votre taille, votre poids, votre genre et votre âge lorsque cela est nécessaire pour personnaliser le coaching et les calculs de charge d'entraînement.",
                        icon: ICONS.profile,
                    },
                    {
                        title: "Données de santé et de condition physique",
                        description:
                            "Entraînements, type de sport, distances, durées, dénivelé, fréquence cardiaque, fréquence cardiaque au repos, VFC, puissance, vitesse, cadence, traces GPS et données de sommeil ou de récupération lorsqu'elles sont synchronisées.",
                        icon: ICONS.health,
                    },
                    {
                        title: "Données techniques et d'appareil",
                        description:
                            "Modèle d'appareil, version du système d'exploitation, identifiants, adresse IP, utilisation des fonctionnalités et données de plantage ou de fiabilité nécessaires au fonctionnement et à l'amélioration du produit.",
                        icon: ICONS.device,
                    },
                ],
            },
            usage: {
                title: "3. Comment nous utilisons vos données",
                intro:
                    "Nous utilisons vos données uniquement pour fournir et améliorer les fonctionnalités de coaching de Teo et les flux des services connectés. Nous ne vendons pas vos données personnelles ni vos données de santé.",
                cards: [
                    {
                        title: "Génération de plans",
                        description:
                            "L'historique d'entraînement, les biométries et les objectifs sont traités pour générer des horaires personnalisés et des entraînements structurés.",
                        icon: ICONS.plan,
                    },
                    {
                        title: "Coaching adaptatif",
                        description:
                            "Les entraînements complétés et les signaux de récupération sont utilisés pour ajuster la charge, l'intensité et les recommandations futures.",
                        icon: ICONS.adaptation,
                    },
                    {
                        title: "Coach Chat",
                        description:
                            "Le contexte de vos entraînements récents et les informations de profil aident Teo à répondre à vos questions et à fournir des conseils pertinents.",
                        icon: ICONS.chat,
                    },
                    {
                        title: "Synchronisation des intégrations",
                        description:
                            "Les connexions à des fournisseurs autorisés servent à publier des entraînements planifiés, importer des activités complétées et rapprocher l'entraînement prévu de l'entraînement réalisé.",
                        icon: ICONS.sync,
                    },
                ],
            },
            integrations: {
                title: "4. Intégrations tierces et partage de données",
                intro:
                    "Nous partageons des informations uniquement avec des sous-traitants de confiance, les fournisseurs que vous choisissez de connecter ou lorsque la loi l'exige. Les cartes ci-dessous décrivent les fournisseurs de services actuels de Teo et les intégrations directes ou conditionnelles planifiées qui importent pour l'examen produit et vie privée.",
                note:
                    "Les intégrations directes seront déployées progressivement à mesure que Teo dépassera les flux de livraison intermédiaires.",
                cards: [
                    {
                        title: "Supabase",
                        status: "Fournisseur de service actif",
                        description:
                            "Supabase fournit l'hébergement sécurisé de la base de données infonuagique, l'authentification et le stockage principal des comptes, entraînements et données de synchronisation de Teo.",
                        icon: ICONS.database,
                    },
                    {
                        title: "Google Gemini",
                        status: "Fournisseur de service actif",
                        description:
                            "Google Gemini alimente la génération de plans et le contenu de coaching. Les données envoyées pour ces fonctionnalités sont réduites au minimum et anonymisées lorsque possible, puis traitées selon les engagements de confidentialité entreprise de Google.",
                        icon: ICONS.plan,
                    },
                    {
                        title: "Intervals.icu",
                        status: "Planifié / en déploiement",
                        description:
                            "Si vous connectez Intervals.icu, Teo pourra publier des entraînements planifiés dans votre calendrier Intervals et, dans des phases ultérieures, lire des données limitées de calendrier ou d'activité propres à Intervals pour rapprocher l'entraînement prévu de l'entraînement réalisé. Intervals.icu sert de courtier de livraison à court terme pendant que des intégrations directes plus propres continuent d'être déployées.",
                        icon: ICONS.route,
                        featured: true,
                    },
                    {
                        title: "API Strava",
                        status: "Intégration directe planifiée",
                        description:
                            "Strava est prévu comme source directe d'import d'activités complétées et de synchronisation pilotée par webhooks. Les données obtenues via Strava servent à analyser votre progression dans Teo et ne sont pas utilisées pour entraîner des modèles IA globaux.",
                        icon: ICONS.adaptation,
                    },
                    {
                        title: "Garmin Connect",
                        status: "Intégration directe planifiée",
                        description:
                            "Garmin est la voie directe à long terme pour la livraison d'entraînements et la synchronisation d'activités. Si l'intégration est approuvée et activée, Teo respectera les restrictions de Garmin en matière de cache, de permissions et de rétention.",
                        icon: ICONS.integrations,
                    },
                    {
                        title: "Apple HealthKit et Google Health Connect",
                        status: "Planifié / conditionnel",
                        description:
                            "Lorsqu'ils seront activés, nous demanderons seulement les types de données nécessaires à l'analyse de l'entraînement, comme les entraînements, la fréquence cardiaque et le sommeil. Ces données ne sont jamais utilisées pour la publicité, le marketing ou l'exploration généralisée basée sur l'usage.",
                        icon: ICONS.health,
                    },
                    {
                        title: "MyWhoosh",
                        status: "Intégration bêta planifiée",
                        description:
                            "MyWhoosh est une voie directe planifiée pour la livraison d'entraînements cyclistes aux athlètes pris en charge. Elle ne sera activée que lorsque l'intégration sera assez stable pour permettre un téléversement et une planification fiables.",
                        icon: ICONS.route,
                    },
                ],
                footer:
                    "Si vous autorisez Intervals.icu ou de futures intégrations de fournisseurs, Teo n'utilisera que les portées et les données nécessaires à la fonctionnalité activée. Si vous connectez aussi des services en aval dans une autre plateforme, ces services restent régis par les permissions et politiques de confidentialité propres à cette plateforme, sauf si vous autorisez séparément une intégration directe Teo avec ce fournisseur.",
            },
            security: {
                title: "5. Sécurité des données",
                intro:
                    "Nous mettons en place des mesures techniques et organisationnelles destinées à protéger vos données et à limiter l'accès à ce qui est nécessaire pour exploiter le service.",
                cards: [
                    {
                        title: "Chiffrement",
                        description:
                            "Les données sont chiffrées en transit avec TLS et protégées au repos dans notre base de données et notre infrastructure.",
                        icon: ICONS.lock,
                    },
                    {
                        title: "Row Level Security",
                        description:
                            "Les politiques de base de données sont conçues pour que les utilisateurs ne puissent accéder qu'à leurs propres enregistrements, sauf lorsqu'un chemin de service privilégié est nécessaire.",
                        icon: ICONS.database,
                    },
                    {
                        title: "Contrôle d'accès",
                        description:
                            "L'accès interne est limité au personnel autorisé et aux flux valides des fournisseurs de service.",
                        icon: ICONS.server,
                    },
                ],
            },
            rights: {
                title: "6. Vos droits",
                intro:
                    "Peu importe votre lieu de résidence, Teo vise à prendre en charge les droits d'accès, de suppression, de portabilité et de correction d'une manière compatible avec les lois applicables en matière de vie privée, y compris les principes du RGPD et du CCPA.",
                cards: [
                    {
                        title: "Droit d'accès",
                        description:
                            "Vous pouvez demander une copie des données personnelles que nous détenons à votre sujet.",
                        icon: ICONS.database,
                    },
                    {
                        title: "Droit à la suppression",
                        description:
                            "Vous pouvez demander la suppression de votre compte et des données Teo associées, y compris via le flux de suppression de compte dans l'application lorsqu'il est disponible.",
                        icon: ICONS.trash,
                    },
                    {
                        title: "Droit à la portabilité",
                        description:
                            "Vous pouvez demander l'exportation de votre historique d'entraînement et des données de compte connexes dans des formats standards lorsque c'est possible.",
                        icon: ICONS.download,
                    },
                    {
                        title: "Droit de rectification",
                        description:
                            "Vous pouvez corriger les informations de profil inexactes et demander la correction de données incomplètes ou inexactes.",
                        icon: ICONS.sync,
                    },
                ],
                footer:
                    "Vous pouvez aussi révoquer l'accès à des fournisseurs optionnels en déconnectant les intégrations lorsqu'elles sont offertes et en mettant à jour les permissions chez le fournisseur concerné.",
            },
            retention: {
                title: "7. Rétention et suppression des données",
                items: [
                    "Nous conservons vos données personnelles et de santé seulement tant que votre compte reste actif ou aussi longtemps que nécessaire pour fournir le service.",
                    "Lorsque vous supprimez votre compte ou soumettez une demande de suppression validée, votre compte et les données Teo associées sont supprimés de façon définitive de nos serveurs dans un délai de 30 jours.",
                    "Des sauvegardes chiffrées peuvent conserver des données pendant une période pouvant aller jusqu'à 90 jours avant d'être écrasées.",
                    "Si Teo envoie des données à un fournisseur que vous autorisez, comme Intervals.icu ou de futures intégrations directes, les pratiques de rétention et de suppression de ce fournisseur peuvent aussi s'appliquer à la copie conservée sur ses systèmes.",
                ],
            },
            children: {
                title: "8. Confidentialité des enfants",
                body:
                    "Teo n'est pas conçu pour les enfants de moins de 13 ans. Nous ne recueillons pas sciemment de renseignements personnels auprès d'enfants de moins de 13 ans et, si nous apprenons que nous avons recueilli de tels renseignements, nous prendrons des mesures pour les supprimer rapidement.",
            },
            changes: {
                title: "9. Modifications de cette politique",
                body:
                    "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Lorsque nous le faisons, nous publions la version mise à jour sur cette page et nous revoyons la date de dernière mise à jour indiquée ci-dessus.",
            },
            contact: {
                title: "10. Nous joindre",
                body:
                    "Si vous avez des questions au sujet de cette politique de confidentialité, communiquez avec nous à l'adresse ci-dessous. Les flux produits liés aux droits, à la suppression et à la rétention doivent être implémentés dans l'application et le backend lorsqu'ils s'appliquent.",
                emailLabel: "Contact général",
                email: "hello@teocoaching.ca",
            },
            download: {
                title: "Télécharger une copie PDF",
                body: "Enregistrez une version PDF de marque de cette politique de confidentialité pour l'inscription, la révision juridique ou la consultation hors ligne.",
                cta: "Télécharger la politique en PDF",
                filename: "teo-politique-confidentialite-fr.pdf",
                url: "/privacy-policy-fr.pdf",
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

                    <section className="mt-8 glass-card p-8">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-2xl">
                                <h2 className="text-2xl font-bold text-ink">{policy.sections.download.title}</h2>
                                <p className="mt-4 text-slate-600">{policy.sections.download.body}</p>
                            </div>

                            <a
                                href={policy.sections.download.url}
                                download={policy.sections.download.filename}
                                className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                            >
                                <FileDown className="h-4 w-4" />
                                {policy.sections.download.cta}
                            </a>
                        </div>
                    </section>
                </Container>
            </main>

            <Footer />
        </div>
    );
}
