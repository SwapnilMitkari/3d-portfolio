import {
    car,
    contact,
    estate,
    github,
    linkedin,
    mongodb,
    motion,
    mui,
    nodejs,
    redux,
    soundon,
    summiz,
    typescript,
} from "../assets/icons";

// PROFILE — edit these directly for quick tweaks
export const profile = {
    name: "Swapnil Mitkari",
    role: "Product Manager — Digital Payments & Banking",
    tagline:
        "6+ years turning banking infrastructure into products people actually use. Also an EFI-registered horse rider.",
    email: "swapnil.mitkari2027@mastersunion.org",
    phone: "+91 8329924760",
    linkedin: "https://www.linkedin.com/in/swapnil-mitkari-4ab337171",
    github: "https://github.com/SwapnilMitkari",
};

export const skills = [
    { name: "Roadmap Planning", type: "Business" },
    { name: "GTM Strategy", type: "Business" },
    { name: "Stakeholder Management", type: "Business" },
    { name: "Strategic Partnerships", type: "Business" },
    { name: "Release Management", type: "Business" },
    { name: "RICE Prioritization", type: "Business" },
    { name: "Python", type: "Technical" },
    { name: "Node.js", type: "Technical" },
    { name: "SQL / Tableau", type: "Technical" },
    { name: "Figma", type: "Technical" },
    { name: "JIRA", type: "Technical" },
    { name: "IBM ACE / Middleware", type: "Technical" },
    { name: "Drupal CMS", type: "Technical" },
    { name: "CRMNext", type: "Technical" },
];

export const experiences = [
    {
        title: "Drupal Web Developer Intern",
        company_name: "Zenex Partners",
        iconBg: "#e2e8f0",
        date: "Apr 2017 - Jul 2017",
        points: [
            "Built and maintained Drupal-based websites end to end, shipping critical releases with 100% on-time delivery.",
        ],
    },
    {
        title: "Business Development Intern",
        company_name: "Grad2Live",
        iconBg: "#cbd5e1",
        date: "Aug 2020 - Oct 2020",
        points: [
            "Executed market research to identify 100+ leads, feeding customer-discovery and product prioritization decisions.",
            "Supported 5 client demos as part of GTM strategy, translating customer feedback into stakeholder-facing narratives.",
        ],
    },
    {
        title: "Technology Trainee → AVP, Digital Payments & Acquiring",
        company_name: "RBL Bank",
        iconBg: "#a2d2ff",
        date: "Oct 2020 - Jun 2026",
        points: [
            "Owned the 6–12 month UPI Payments roadmap, driving transaction success rate from 79% to 92% in 4 months.",
            "Shipped a failed-transaction recovery flow, cutting drop-off from 18% to 12% for 8 lakh users.",
            "Defined requirements for a real-time settlement system, cutting manual effort 80% and unlocking ₹50+ Cr revenue.",
            "Led product discovery-to-launch for WhatsApp Banking, driving 5,000+ term deposits within 2 months.",
            "Owned the roadmap for GIFT City Fund Transfer and Digital Term Deposit journeys, generating ₹192+ Cr in business.",
            "Drove API Banking platform strategy, onboarding 30 strategic partners including Pine Labs, CRED & Razorpay.",
            "Managed a 320+ API portfolio, cutting partner onboarding time 50% at 20 lakh calls/day.",
            "Winner, CEO Award '24 — led Paytm POS onboarding, scaling to 400+ merchants and ₹30 Cr revenue in 6 months.",
        ],
    },
];

export const socialLinks = [
    { name: "Contact", iconUrl: contact, link: "/contact" },
    { name: "GitHub", iconUrl: github, link: "https://github.com/SwapnilMitkari" },
    { name: "LinkedIn", iconUrl: linkedin, link: "https://www.linkedin.com/in/swapnil-mitkari-4ab337171" },
];

export const projects = [
    {
        iconUrl: mui,
        theme: "btn-back-green",
        name: "Micro-Confidence",
        description:
            "Full-stack wellness app (React, TypeScript, Supabase, n8n) delivering daily social-confidence micro-challenges with streaks, courage-score gamification, and 4 automated n8n workflows. Live, with a full PRD/BRD/FSD documentation suite.",
        link: "https://my-confidence-quest.lovable.app/",
    },
    {
        iconUrl: nodejs,
        theme: "btn-back-blue",
        name: "Siemens Supplier Onboarding — n8n Automation",
        description:
            "Complete end-to-end n8n workflow automating a 7-gate supplier onboarding pipeline (Identify → Register → Documents → Risk → SAP → Qualify → Activate), including an AI document-classification agent and Google Sheets/Gmail integrations.",
        link: "https://github.com/SwapnilMitkari",
    },
    {
        iconUrl: summiz,
        theme: "btn-back-yellow",
        name: "PoshanSetu",
        description:
            "F&B business model for school-age (5–12) child nutrition in tier-3/4 India — a fortified millet-and-dal mix sold to state governments as a screened-cohort supplement and to parents via retail. Full GTM, unit economics, and regulatory strategy.",
        link: "#",
    },
    {
        iconUrl: mongodb,
        theme: "btn-back-black",
        name: "Sector Map: Industrial Automation",
        description:
            "Research deck mapping the shift from hardware to AI-enabled software/services in industrial automation — market sizing, incumbents vs. AI-native challengers, policy drivers, and a Siemens supplier-onboarding case study.",
        link: "#",
    },
    {
        iconUrl: contact,
        theme: "btn-back-orange",
        name: "The Nash Equilibrium Inside India's E20 Standoff",
        description:
            "Published research article using game theory to explain why India's E20 ethanol-blending policy persists despite backlash — co-authored analysis of the government, farmer, and owner payoff structure.",
        link: "#",
    },
    {
        iconUrl: soundon,
        theme: "btn-back-pink",
        name: "Seedhi Si Baat",
        description:
            "An original Hinglish rap covering an entire GTM/marketing framework — Need/Want/Demand, STP, the 4 Ps, Porter's Five Forces, BCG and Ansoff matrices — written and produced as a study aid.",
        link: "#",
    },
    {
        iconUrl: redux,
        theme: "btn-back-red",
        name: "Edureka Growth Strategy — PM Case Study",
        description:
            "Diagnosed a stalled MRR despite rising leads by identifying a dropping lead-conversion rate, then designed a sustainable growth path (self-serve funnel, subscriptions, referrals) with vertical/lateral experiments to validate root cause.",
        link: "#",
    },
    {
        iconUrl: typescript,
        theme: "btn-back-blue",
        name: "Gmail Language Translation — PRD",
        description:
            "Full PRD for a native translation feature in Gmail targeting non-English-speaking users, with competitive analysis vs. Outlook, prioritized feature set (P0–P4), and mockups of the end-to-end translation workflow.",
        link: "#",
    },
];
