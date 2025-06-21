import { Bot, BrainCircuit, BrainCog, BriefcaseBusiness, Dumbbell, GraduationCap, Landmark, Layers, MailPlus, RefreshCcwDot, ShieldCheck, Sparkles, SpellCheck } from "lucide-react"

const featuresHero = {
    title: 'Curious about Aries?',
    subtitle: 'Discover what it can do.',
    description: "Aries goes beyond a chatbot—it's a collection of intelligent, goal-driven AI tools built to support productivity, learning, and well-being. Designed for your lifestyle, Aries adapts with precision to make personal growth simpler and smarter."
}

const keyFeatures = {
    title: 'Key Features Overview',
    keyCards: [
        {
            id: 1,
            icon: BrainCircuit,
            title: 'Modular Intelligence',
            description: 'Customize Aries with modules for fitness, writing, career, and more.'
        },
        {
            id: 2,
            icon: ShieldCheck,
            title: 'Privacy-First Architecture',
            description: 'Your data is encrypted, private - never tracked, sold, or shared.'
        },
        {
            id: 3,
            icon: Layers,
            title: 'Seamless Integration',
            description: 'Switch modules effortlessly - Aries adapts and connects tools in real time.'
        },
        {
            id: 4,
            icon: RefreshCcwDot,
            title: 'Always Evolving',
            description: 'Aries evolves with you, learning smartly to enhance future support.'
        }
    ]
}

const extraFeatures = {
    title: 'Why Aries Stands Out',
    keyPoints: [
        {
            id: 1,
            title: 'Purpose-Driven Design',
            description: 'Each module is built around real use-cases, not vague interactions.'
        },
        {
            id: 2,
            title: 'Human-Centered AI',
            description: 'Designed to assist, not replace. Aries supports human thinking and creativity.'
        },
        {
            id: 3,
            title: 'Built for Everyone',
            description: 'From students and professionals to creators and learners—Aries adapts to your pace.'
        }
    ]
}

const moduleFeatures = {
    title: 'Modules at a Glance',
    moduleCards: [
        {
            id: 1,
            icon: Dumbbell,
            title: 'VitalCore',
            description: 'Build strength, endurance, and daily discipline.',
            link: '/chat/vitalCore'
        },
        {
            id: 2,
            icon: SpellCheck,
            title: 'Linguix',
            description: 'Perfect your words with smart precision.',
            link: '/chat/linguix'
        },
        {
            id: 3,
            icon: MailPlus,
            title: 'Inboxtune',
            description: 'Write emails that sound just right.',
            link: '/chat/inboxtune'
        },
        {
            id: 4,
            icon: BriefcaseBusiness,
            title: 'Pathwise',
            description: 'Navigate careers, jobs, and interviews.',
            link: '/chat/pathwise'
        },
        {
            id: 5,
            icon: BrainCog,
            title: 'MindNest',
            description: 'Clarity, calm, and emotional resilience.',
            link: '/chat/mindNest'
        },
        {
            id: 6,
            icon: Bot,
            title: 'AriesFlow',
            description: 'Talk, explore, or just think aloud.',
            link: '/chat/ariesFlow'
        },
        {
            id: 7,
            icon: Landmark,
            title: 'Wealthly',
            description: 'Plan, save, and grow your finances.',
            link: '/chat/wealthly'
        },
        {
            id: 8,
            icon: Sparkles,
            title: 'PersonaLift',
            description: 'Boost charm, presence, and soft skills.',
            link: '/chat/personaLift'
        },
        {
            id: 9,
            icon: GraduationCap,
            title: 'PrepForge',
            description: 'Smarter revision. Sharper results. Less stress.',
            link: '/chat/prepForge'
        }
    ]
}

const featuresFooter = {
    title: 'Learn More',
    description: 'Want a deeper dive into how Aries modules work or how to make the most of your personalized AI?',
    moreLinks: [
        { label: 'Visit the Support Page', path: '/support' },
        { label: 'Explore the FAQs', path: '/faqs' }
    ]
}

export { featuresHero, keyFeatures, extraFeatures, moduleFeatures, featuresFooter }