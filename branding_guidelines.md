# Teo Branding Guidelines

These guidelines ensure visual and tonal consistency between the Teo mobile application and the marketing website.

---

## 1. Core Identity

### Mission
To democratize elite endurance coaching. Teo provides every athlete—whether a beginner runner or an Ironman triathlete—with a personalized, adaptive, and intelligent training plan that fits their life, not the other way around.

### Vision
A world where high-quality coaching is accessible to everyone, regardless of budget.

### Tone of Voice
- **Professional but Approachable**: We are experts, but we don't use jargon to confuse. We explain *why*.
- **Motivational & Empowering**: We encourage consistency and progress. "You got this."
- **Intelligent & Adaptive**: We emphasize the "smart" nature of the AI. It's not a static PDF; it's a living plan.

---

## 2. Visual Identity

### Aesthetic: "Organic Glass"
The design language is **NOT** Dark Mode or Flat Design. It is **Organic, Airy, and Dimensional**.
It relies on two key pillars:
1.  **Colorful Mesh Gradients**: Backgrounds are never solid colors. They are fluid blends of nature-inspired tones (Sunrise Orange, Ocean Blue, Spring Green).
2.  **Frosted Glass**: UI elements are translucent panels that float above the background, blurring what's behind them to create legibility and depth.

### Color Palette

#### Primary Colors
| Role | Name | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | **Vibrant Orange** | `#F97316` | Progress bars, toggles, 'Focus' states. |
| **Action** | **Dark Navy** | `#0F172A` | Primary Action Buttons (e.g., "Generate Plan"). |
| **Success** | **Mint Green** | `#10B981` | Completed phases, checkmarks. |

#### Backgrounds
| Role | Name | Hex/Desc | Usage |
| :--- | :--- | :--- | :--- |
| **Mesh Blend** | **The Aura** | `linear-gradient` | A soft, expansive blend of **Teal, Blue, Purple, and Orange**. |
| **Glass Card** | **Frost** | `rgba(255,255,255, 0.4)` | Card backgrounds. High blur (`20px`). |
| **Input** | **Mist** | `rgba(255,255,255, 0.5)` | Text inputs, subtle containers. |

#### Text & UI
| Role | Name | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Headings** | **Ink** | `#0F172A` | Primary Headings. |
| **Body** | **Slate** | `#334155` | Secondary text. |
| **Inverse** | **White** | `#FFFFFF` | Text on Dark Navy buttons. |

---

## 3. Typography

**Font Family**: **Inter** (Google Fonts)

The app uses a clean, modern, rounded sans-serif. **Inter** is the closest web-safe match.

| Role | Weight | Size (Desktop) | Size (Mobile) | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **H1 Hero** | Bold (700) | 64px | 40px | 1.1 | -0.02em |
| **H2 Section** | SemiBold (600)| 48px | 32px | 1.2 | -0.01em |
| **H3 Card** | SemiBold (600)| 24px | 20px | 1.3 | Normal |
| **Body** | Regular (400)| 16px | 16px | 1.6 | Normal |
| **Button** | Medium (500) | 16px | 16px | 1.0 | 0.02em |

---

## 4. UI Elements & Glassmorphism

### Glass Cards
To match the app's floating cards:

```css
/* Organic Glass Card */
.glass-card {
  @apply bg-white/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg shadow-black/5;
}
```

### Buttons
The primary action button is distinct: **Solid Dark Navy** with **White Text**. It stands out sharply against the soft glass/mesh background.

```css
/* Navy Action Button */
.btn-action {
  @apply bg-[#0F172A] text-white rounded-full px-8 py-3 font-medium shadow-xl hover:bg-[#1E293B] transition-all;
}
```

### Inputs & Forms
Inputs are softer, lighter glass panels.

```css
/* Glass Input */
.input-glass {
  @apply bg-white/50 border border-white/30 rounded-xl px-4 py-3 placeholder-slate-500 text-slate-900;
}
```

---

## 5. Logo & Iconography

### Icons
- **Library**: `Lucide React`
- **Style**: Stroke width `2px`. Rounded caps/joins.
- **Color**: usually **Slate-700** (`#334155`) or **Orange** (`#F97316`) for active states.

---

## 6. Imagery Guidelines

### App Mockups
- **Crucial**: Show the app transparency. When placing the app mockup on the website, ensure the phone screen content (the mesh background) blends or complements the website background.
- **Device**: iPhone 15 Pro Titanium.

### Photography
- High-energy, outdoor endurance sports.
- **Lighting**: Natural, "Golden Hour" to match the orange/warm tones of the palette.
- **Process**: Avoid overly gritty/dark photos. Keep them bright and inspiring.
