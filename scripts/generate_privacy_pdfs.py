from __future__ import annotations

from pathlib import Path
from textwrap import wrap

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
PUBLIC_DIR = ROOT / "public"
LOGO_PATH = PUBLIC_DIR / "teo-icon.png"

PAGE_W = 1654
PAGE_H = 2339
MARGIN_X = 118
MARGIN_Y = 112
CONTENT_W = PAGE_W - MARGIN_X * 2

COLORS = {
    "paper": "#FFFDFB",
    "ink": "#0F172A",
    "slate": "#475569",
    "muted": "#64748B",
    "orange": "#F97316",
    "orange_soft": "#FFF1E7",
    "line": "#E2E8F0",
    "card": "#FFFFFF",
    "dark": "#111827",
}

FONT_REGULAR = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(FONT_BOLD if bold else FONT_REGULAR, size)


POLICIES = {
    "en": {
        "output": PUBLIC_DIR / "privacy-policy-en.pdf",
        "eyebrow": "TEO PRIVACY POLICY",
        "title": "Privacy Policy",
        "subtitle": "Adaptive AI coaching for endurance athletes",
        "effective_label": "Effective Date",
        "effective_value": "February 14, 2026",
        "updated_label": "Last Updated",
        "updated_value": "April 3, 2026",
        "contact_label": "Contact",
        "contact_value": "hello@teocoaching.ca",
        "summary": [
            ("No data sales", "Teo does not sell personal data or health data."),
            ("Consent required", "Optional integrations and provider sync rely on explicit authorization."),
            ("Official PDF copy", "This is a branded static copy of the privacy policy published on teocoaching.ca."),
        ],
        "sections": [
            (
                "1. Introduction",
                [
                    "Welcome to Teo (\"we,\" \"our,\" or \"us\"). We are committed to protecting your privacy and safeguarding your personal health and fitness information when you use the Teo mobile app, our website, and any connected services you choose to authorize.",
                    "By using Teo, you consent to the data practices described in this policy. If you do not agree with this Privacy Policy, please do not use the app or website.",
                ],
            ),
            (
                "2. Information We Collect",
                [
                    "We collect information needed to deliver a personalized AI coaching experience, operate the product, and support authorized integrations.",
                ],
                [
                    "Personal information: name, email address, date of birth, profile photo, height, weight, gender, and age when required to personalize coaching and training-load calculations.",
                    "Health and fitness data: workouts, sport type, distances, durations, elevation, heart rate, resting heart rate, HRV, power, speed, cadence, GPS traces, and sleep or recovery metrics when synced.",
                    "Device and technical data: device model, operating system version, identifiers, IP address, feature usage, and crash or reliability data needed to operate and improve the product.",
                ],
            ),
            (
                "3. How We Use Your Information",
                [
                    "We use your data solely to provide and improve Teo's coaching features and connected-service workflows. We do not sell your personal data or health data.",
                ],
                [
                    "Plan generation: training history, biometrics, and goals are processed to generate personalized schedules and structured workouts.",
                    "Adaptive coaching: completed workouts and recovery signals are used to adjust future training load, intensity, and recommendations.",
                    "Coach Chat: recent workout context and profile information help Teo answer questions and provide coaching guidance that is relevant to you.",
                    "Integration sync: authorized provider connections are used to publish planned workouts, import completed activity data, and reconcile planned versus completed training.",
                ],
            ),
            (
                "4. Third-Party Integrations and Data Sharing",
                [
                    "We share information only with trusted processors, providers you choose to connect, or when required by law.",
                ],
                [
                    "Supabase: secure cloud database hosting, authentication, and core data storage for Teo account, workout, and sync records.",
                    "Google Gemini: active service provider for plan-generation and coaching content. Data sent for these features is minimized and anonymized where possible.",
                    "Intervals.icu: planned / rolling out as a workout-delivery broker for publishing planned workouts and, in later phases, reconciling planned versus completed training.",
                    "Strava API: planned direct completed-activity ingest path and webhook-driven sync source.",
                    "Garmin Connect: planned long-term direct workout-delivery and activity-sync path.",
                    "Apple HealthKit and Google Health Connect: planned / conditional integrations limited to necessary training-analysis data types.",
                    "MyWhoosh: planned beta bike-workout delivery integration.",
                ],
                "If you authorize Intervals.icu or future provider integrations, Teo will use only the scopes and data needed for the enabled feature. If you also connect downstream services inside another platform, those services remain governed by that platform's own permissions and privacy policies unless you separately authorize a direct Teo integration with that provider.",
            ),
            (
                "5. Data Security",
                [],
                [
                    "Encryption: data is encrypted in transit with TLS and protected at rest within our database and infrastructure.",
                    "Row Level Security: database policies are designed so users can access only their own records unless a privileged service path is required.",
                    "Access control: internal access is restricted to authorized personnel and validated service-provider workflows.",
                ],
            ),
            (
                "6. Your Rights",
                [
                    "Regardless of your location, Teo aims to support access, deletion, portability, and correction rights consistent with applicable privacy laws, including GDPR and CCPA concepts.",
                ],
                [
                    "Right to access: you can request a copy of the personal data we hold about you.",
                    "Right to deletion: you can request deletion of your account and associated Teo data, including through the Delete Account flow in the app when available.",
                    "Right to portability: you can request export of your workout history and related account data in standard formats where available.",
                    "Right to rectification: you can correct inaccurate profile information and ask us to fix data that is incomplete or inaccurate.",
                    "Revocation: you can also revoke optional provider access by disconnecting integrations where available and by updating permissions with the relevant provider.",
                ],
            ),
            (
                "7. Data Retention and Deletion",
                [],
                [
                    "We retain your personal and health data only while your account remains active or as otherwise needed to provide the service.",
                    "When you delete your account or submit a validated deletion request, your account and associated Teo data are permanently deleted from our servers within 30 days.",
                    "Encrypted backups may retain data for up to 90 days before they are overwritten.",
                    "If Teo sends data to a provider you authorize, that provider's own retention and deletion practices may also apply to the copy stored on its systems.",
                ],
            ),
            (
                "8. Children's Privacy",
                [
                    "Teo is not intended for children under 13. We do not knowingly collect personal information from children under 13, and if we become aware that we have collected such information, we will take steps to delete it promptly.",
                ],
            ),
            (
                "9. Changes to This Policy",
                [
                    "We may update this Privacy Policy from time to time. When we do, we will post the updated version on this page and revise the Last Updated date shown above.",
                ],
            ),
            (
                "10. Contact",
                [
                    "If you have questions about this Privacy Policy, contact us at hello@teocoaching.ca. Product rights and deletion flows should be implemented in the app and backend where applicable.",
                ],
            ),
        ],
    },
    "fr": {
        "output": PUBLIC_DIR / "privacy-policy-fr.pdf",
        "eyebrow": "POLITIQUE DE CONFIDENTIALITÉ TEO",
        "title": "Politique de confidentialité",
        "subtitle": "Coaching IA adaptatif pour les athlètes d’endurance",
        "effective_label": "Date d’effet",
        "effective_value": "14 février 2026",
        "updated_label": "Dernière mise à jour",
        "updated_value": "3 avril 2026",
        "contact_label": "Contact",
        "contact_value": "hello@teocoaching.ca",
        "summary": [
            ("Aucune vente de données", "Teo ne vend pas les données personnelles ni les données de santé."),
            ("Consentement requis", "Les intégrations optionnelles et la synchronisation de fournisseurs reposent sur une autorisation explicite."),
            ("Copie PDF officielle", "Cette version est une copie statique de marque de la politique publiée sur teocoaching.ca."),
        ],
        "sections": [
            (
                "1. Introduction",
                [
                    "Bienvenue chez Teo (« nous », « notre » ou « nos »). Nous nous engageons à protéger votre vie privée et vos renseignements personnels, de santé et de condition physique lorsque vous utilisez l’application mobile Teo, notre site web et les services connectés que vous choisissez d’autoriser.",
                    "En utilisant Teo, vous consentez aux pratiques de données décrites dans cette politique. Si vous n’acceptez pas cette politique de confidentialité, veuillez ne pas utiliser l’application ou le site web.",
                ],
            ),
            (
                "2. Données que nous collectons",
                [
                    "Nous collectons les données nécessaires pour fournir une expérience de coaching IA personnalisée, exploiter le produit et prendre en charge les intégrations autorisées.",
                ],
                [
                    "Renseignements personnels : nom, adresse courriel, date de naissance, photo de profil, taille, poids, genre et âge lorsque cela est nécessaire pour personnaliser le coaching et les calculs de charge d’entraînement.",
                    "Données de santé et de condition physique : entraînements, type de sport, distances, durées, dénivelé, fréquence cardiaque, fréquence cardiaque au repos, VFC, puissance, vitesse, cadence, traces GPS et données de sommeil ou de récupération lorsqu’elles sont synchronisées.",
                    "Données techniques et d’appareil : modèle d’appareil, version du système d’exploitation, identifiants, adresse IP, utilisation des fonctionnalités et données de plantage ou de fiabilité nécessaires au fonctionnement et à l’amélioration du produit.",
                ],
            ),
            (
                "3. Comment nous utilisons vos données",
                [
                    "Nous utilisons vos données uniquement pour fournir et améliorer les fonctionnalités de coaching de Teo et les flux des services connectés. Nous ne vendons pas vos données personnelles ni vos données de santé.",
                ],
                [
                    "Génération de plans : l’historique d’entraînement, les biométries et les objectifs sont traités pour générer des horaires personnalisés et des entraînements structurés.",
                    "Coaching adaptatif : les entraînements complétés et les signaux de récupération sont utilisés pour ajuster la charge, l’intensité et les recommandations futures.",
                    "Coach Chat : le contexte de vos entraînements récents et les informations de profil aident Teo à répondre à vos questions et à fournir des conseils pertinents.",
                    "Synchronisation des intégrations : les connexions à des fournisseurs autorisés servent à publier des entraînements planifiés, importer des activités complétées et rapprocher l’entraînement prévu de l’entraînement réalisé.",
                ],
            ),
            (
                "4. Intégrations tierces et partage de données",
                [
                    "Nous partageons des informations uniquement avec des sous-traitants de confiance, les fournisseurs que vous choisissez de connecter ou lorsque la loi l’exige.",
                ],
                [
                    "Supabase : hébergement sécurisé de la base de données infonuagique, authentification et stockage principal des comptes, entraînements et données de synchronisation de Teo.",
                    "Google Gemini : fournisseur de service actif pour la génération de plans et le contenu de coaching. Les données envoyées sont réduites au minimum et anonymisées lorsque possible.",
                    "Intervals.icu : intégration planifiée / en déploiement comme courtier de livraison d’entraînements pour publier les entraînements planifiés et, plus tard, rapprocher le prévu et le réalisé.",
                    "API Strava : intégration directe planifiée pour l’import d’activités complétées et la synchronisation pilotée par webhooks.",
                    "Garmin Connect : voie directe planifiée à long terme pour la livraison d’entraînements et la synchronisation d’activités.",
                    "Apple HealthKit et Google Health Connect : intégrations planifiées / conditionnelles limitées aux types de données nécessaires à l’analyse de l’entraînement.",
                    "MyWhoosh : intégration bêta planifiée pour la livraison d’entraînements cyclistes.",
                ],
                "Si vous autorisez Intervals.icu ou de futures intégrations de fournisseurs, Teo n’utilisera que les portées et les données nécessaires à la fonctionnalité activée. Si vous connectez aussi des services en aval dans une autre plateforme, ces services restent régis par les permissions et politiques de confidentialité propres à cette plateforme, sauf si vous autorisez séparément une intégration directe Teo avec ce fournisseur.",
            ),
            (
                "5. Sécurité des données",
                [],
                [
                    "Chiffrement : les données sont chiffrées en transit avec TLS et protégées au repos dans notre base de données et notre infrastructure.",
                    "Row Level Security : les politiques de base de données sont conçues pour que les utilisateurs ne puissent accéder qu’à leurs propres enregistrements, sauf lorsqu’un chemin de service privilégié est nécessaire.",
                    "Contrôle d’accès : l’accès interne est limité au personnel autorisé et aux flux valides des fournisseurs de service.",
                ],
            ),
            (
                "6. Vos droits",
                [
                    "Peu importe votre lieu de résidence, Teo vise à prendre en charge les droits d’accès, de suppression, de portabilité et de correction d’une manière compatible avec les lois applicables en matière de vie privée, y compris les principes du RGPD et du CCPA.",
                ],
                [
                    "Droit d’accès : vous pouvez demander une copie des données personnelles que nous détenons à votre sujet.",
                    "Droit à la suppression : vous pouvez demander la suppression de votre compte et des données Teo associées, y compris via le flux de suppression de compte dans l’application lorsqu’il est disponible.",
                    "Droit à la portabilité : vous pouvez demander l’exportation de votre historique d’entraînement et des données de compte connexes dans des formats standards lorsque c’est possible.",
                    "Droit de rectification : vous pouvez corriger les informations de profil inexactes et demander la correction de données incomplètes ou inexactes.",
                    "Révocation : vous pouvez aussi révoquer l’accès à des fournisseurs optionnels en déconnectant les intégrations lorsqu’elles sont offertes et en mettant à jour les permissions chez le fournisseur concerné.",
                ],
            ),
            (
                "7. Rétention et suppression des données",
                [],
                [
                    "Nous conservons vos données personnelles et de santé seulement tant que votre compte reste actif ou aussi longtemps que nécessaire pour fournir le service.",
                    "Lorsque vous supprimez votre compte ou soumettez une demande de suppression validée, votre compte et les données Teo associées sont supprimés de façon définitive de nos serveurs dans un délai de 30 jours.",
                    "Des sauvegardes chiffrées peuvent conserver des données pendant une période pouvant aller jusqu’à 90 jours avant d’être écrasées.",
                    "Si Teo envoie des données à un fournisseur que vous autorisez, les pratiques de rétention et de suppression de ce fournisseur peuvent aussi s’appliquer à la copie conservée sur ses systèmes.",
                ],
            ),
            (
                "8. Confidentialité des enfants",
                [
                    "Teo n’est pas conçu pour les enfants de moins de 13 ans. Nous ne recueillons pas sciemment de renseignements personnels auprès d’enfants de moins de 13 ans et, si nous apprenons que nous avons recueilli de tels renseignements, nous prendrons des mesures pour les supprimer rapidement.",
                ],
            ),
            (
                "9. Modifications de cette politique",
                [
                    "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Lorsque nous le faisons, nous publions la version mise à jour sur cette page et nous revoyons la date de dernière mise à jour indiquée ci-dessus.",
                ],
            ),
            (
                "10. Nous joindre",
                [
                    "Si vous avez des questions au sujet de cette politique de confidentialité, communiquez avec nous à hello@teocoaching.ca. Les flux produits liés aux droits, à la suppression et à la rétention doivent être implémentés dans l’application et le backend lorsqu’ils s’appliquent.",
                ],
            ),
        ],
    },
}


def text_width(draw: ImageDraw.ImageDraw, text: str, used_font: ImageFont.FreeTypeFont) -> int:
    return int(draw.textlength(text, font=used_font))


def wrap_text(draw: ImageDraw.ImageDraw, text: str, used_font: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    words = text.split()
    if not words:
        return [""]

    lines: list[str] = []
    current = words[0]
    for word in words[1:]:
        candidate = f"{current} {word}"
        if text_width(draw, candidate, used_font) <= max_width:
            current = candidate
        else:
            lines.append(current)
            current = word
    lines.append(current)
    return lines


class PdfBuilder:
    def __init__(self, policy: dict):
        self.policy = policy
        self.pages: list[Image.Image] = []
        self.page_no = 0
        self.logo = Image.open(LOGO_PATH).convert("RGBA").resize((118, 118))
        self.h1 = font(56, bold=True)
        self.h2 = font(31, bold=True)
        self.h3 = font(22, bold=True)
        self.body = font(22)
        self.body_bold = font(22, bold=True)
        self.meta_label = font(16, bold=True)
        self.meta_value = font(23, bold=True)
        self.kicker = font(17, bold=True)
        self.footer_font = font(15)
        self.small = font(18)
        self.new_page()

    def new_page(self):
        page = Image.new("RGB", (PAGE_W, PAGE_H), COLORS["paper"])
        draw = ImageDraw.Draw(page)
        draw.rectangle((0, 0, PAGE_W, 220), fill="#FFF6EF")
        draw.ellipse((-180, -180, 520, 420), fill="#FFE7D5")
        draw.ellipse((1120, -80, 1760, 480), fill="#FFF0E5")
        self.pages.append(page)
        self.page_no += 1
        self.draw = draw
        self.y = MARGIN_Y

    def ensure_space(self, needed: int):
        if self.y + needed <= PAGE_H - MARGIN_Y - 80:
            return
        self.draw_footer()
        self.new_page()

    def draw_footer(self):
        y = PAGE_H - MARGIN_Y + 24
        self.draw.line((MARGIN_X, y, PAGE_W - MARGIN_X, y), fill=COLORS["line"], width=2)
        self.draw.text((MARGIN_X, y + 16), f"Teo · {self.policy['title']}", font=self.footer_font, fill=COLORS["muted"])
        page_text = f"{self.page_no}"
        w = text_width(self.draw, page_text, self.footer_font)
        self.draw.text((PAGE_W - MARGIN_X - w, y + 16), page_text, font=self.footer_font, fill=COLORS["muted"])

    def draw_wrapped_paragraph(self, text: str, x: int, width: int, font_obj, fill: str, line_gap: int = 10):
        lines = wrap_text(self.draw, text, font_obj, width)
        bbox = font_obj.getbbox("Ag")
        line_height = bbox[3] - bbox[1] + line_gap
        for line in lines:
            self.draw.text((x, self.y), line, font=font_obj, fill=fill)
            self.y += line_height
        self.y += 6

    def draw_hero(self):
        hero_h = 440
        hero_box = (MARGIN_X, self.y, PAGE_W - MARGIN_X, self.y + hero_h)
        self.draw.rounded_rectangle(hero_box, radius=42, fill=COLORS["card"], outline="#FED7AA", width=3)
        self.draw.rounded_rectangle((MARGIN_X + 26, self.y + 26, MARGIN_X + 240, self.y + 64), radius=19, fill="#FFF0E5")
        self.draw.text((MARGIN_X + 44, self.y + 35), self.policy["eyebrow"], font=self.kicker, fill=COLORS["orange"])
        self.pages[-1].paste(self.logo, (MARGIN_X + 42, self.y + 98), self.logo)
        self.draw.text((MARGIN_X + 182, self.y + 112), self.policy["title"], font=self.h1, fill=COLORS["ink"])
        self.y = self.y + 195
        self.draw_wrapped_paragraph(self.policy["subtitle"], MARGIN_X + 42, 820, self.body, COLORS["slate"], 12)

        meta_x = PAGE_W - MARGIN_X - 330
        meta_y = hero_box[1] + 86
        self.draw.rounded_rectangle((meta_x, meta_y, meta_x + 248, meta_y + 210), radius=28, fill="#FFFBF8", outline=COLORS["line"], width=2)
        meta = [
            (self.policy["effective_label"], self.policy["effective_value"]),
            (self.policy["updated_label"], self.policy["updated_value"]),
            (self.policy["contact_label"], self.policy["contact_value"]),
        ]
        current_y = meta_y + 24
        for label, value in meta:
            self.draw.text((meta_x + 22, current_y), label.upper(), font=self.meta_label, fill=COLORS["muted"])
            current_y += 24
            self.draw.text((meta_x + 22, current_y), value, font=self.meta_value, fill=COLORS["orange"] if "@" in value else COLORS["ink"])
            current_y += 44

        summary_y = hero_box[1] + 320
        card_w = (CONTENT_W - 24) // 3
        for idx, (title, body_text) in enumerate(self.policy["summary"]):
            x = MARGIN_X + idx * (card_w + 12)
            self.draw.rounded_rectangle((x, summary_y, x + card_w, summary_y + 92), radius=24, fill="#FFFFFF", outline=COLORS["line"], width=2)
            self.draw.text((x + 18, summary_y + 16), title, font=self.h3, fill=COLORS["ink"])
            temp_y = summary_y + 48
            lines = wrap_text(self.draw, body_text, self.small, card_w - 34)
            for line in lines[:2]:
                self.draw.text((x + 18, temp_y), line, font=self.small, fill=COLORS["slate"])
                temp_y += 24

        self.y = hero_box[3] + 28

    def draw_section(self, title: str, paragraphs: list[str] | None = None, bullets: list[str] | None = None, callout: str | None = None):
        paragraphs = paragraphs or []
        bullets = bullets or []

        estimated = 130 + len(paragraphs) * 80 + len(bullets) * 86 + (120 if callout else 0)
        self.ensure_space(estimated)

        box_x1 = MARGIN_X
        box_x2 = PAGE_W - MARGIN_X
        start_y = self.y
        self.draw.rounded_rectangle((box_x1, start_y, box_x2, start_y + 10), radius=36, fill=COLORS["card"], outline=None)

        self.draw.rounded_rectangle((box_x1, start_y, box_x2, start_y + estimated), radius=32, fill=COLORS["card"], outline=COLORS["line"], width=2)
        self.draw.rounded_rectangle((box_x1 + 24, start_y + 24, box_x1 + 98, start_y + 34), radius=5, fill=COLORS["orange"])
        self.y = start_y + 54
        self.draw.text((box_x1 + 24, self.y), title, font=self.h2, fill=COLORS["ink"])
        self.y += 52

        content_x = box_x1 + 24
        content_w = CONTENT_W - 48

        for paragraph in paragraphs:
            self.draw_wrapped_paragraph(paragraph, content_x, content_w, self.body, COLORS["slate"], 11)

        for bullet in bullets:
            self.ensure_space(68)
            bullet_lines = wrap_text(self.draw, bullet, self.body, content_w - 36)
            self.draw.ellipse((content_x, self.y + 11, content_x + 10, self.y + 21), fill=COLORS["orange"])
            bx = content_x + 26
            for line in bullet_lines:
                self.draw.text((bx, self.y), line, font=self.body, fill=COLORS["slate"])
                self.y += 31
            self.y += 8

        if callout:
            self.ensure_space(110)
            callout_h = 28
            callout_lines = wrap_text(self.draw, callout, self.small, content_w - 34)
            callout_box_h = 34 + len(callout_lines) * 26
            self.draw.rounded_rectangle((content_x, self.y + 6, content_x + content_w, self.y + 6 + callout_box_h), radius=24, fill=COLORS["dark"])
            ty = self.y + 24
            for line in callout_lines:
                self.draw.text((content_x + 18, ty), line, font=self.small, fill="#E5E7EB")
                ty += 26
            self.y += callout_box_h + 20

        bottom_y = self.y + 20
        self.draw.rounded_rectangle((box_x1, start_y, box_x2, bottom_y), radius=32, fill=None, outline=COLORS["line"], width=2)
        self.y = bottom_y + 22

    def build(self):
        self.draw_hero()
        for section in self.policy["sections"]:
            title = section[0]
            paragraphs = section[1] if len(section) > 1 else []
            bullets = section[2] if len(section) > 2 else []
            callout = section[3] if len(section) > 3 else None
            self.draw_section(title, paragraphs, bullets, callout)

        self.draw_footer()
        output = self.policy["output"]
        self.pages[0].save(output, save_all=True, append_images=self.pages[1:])
        return output


def main():
    outputs = []
    for policy in POLICIES.values():
        builder = PdfBuilder(policy)
        outputs.append(builder.build())
    for output in outputs:
        print(output)


if __name__ == "__main__":
    main()
