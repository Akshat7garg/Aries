import { BrainCircuit, BriefcaseBusiness, Dumbbell, Goal, Puzzle, ShieldCheck, Sparkles, TrendingUp, UserPlus, Zap } from "lucide-react"

const heroSection = {
    badge: 'Introducing Aries',
    title: 'AI That Works',
    subtitle: 'The Way You Think',
    description: "Aries is your personalized AI companion - modular, intuitive, and always adapting. Whether you're crushing fitness goals, perfecting your grammer, preparing for exams, or leveling up your mindset, Aries evolves to match your pace and purpose.",
    cta1: {
        label: 'Learn More',
        path: '/features'
    },
    cta2: 'Get Started'
}

const aboutSection = {
    badge: 'About Aries',
    title: 'Intelligence Designed',
    subtitle: 'Around You',
    description: "Aries is more than just a chatbot - it's a modular AI system engineered to support both your personal and professional growth. Equipped with specialized tools for fitness, communication, mental clarity, and academic success, Aries adapts to your goals and evolves with your needs - helping you lead a sharper, stronger, and more purpose-driven life.",
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
            icon: BriefcaseBusiness,
            title: 'Pathwise',
            description: 'Navigate careers, jobs, and interviews.',
            link: '/chat/pathwise'
        }, {
            id: 3,
            icon: Sparkles,
            title: 'PersonaLift',
            description: 'Boost charm, presence, and soft skills.',
            link: '/chat/personaLift'
        }
    ],
    ctaAbout: {
        label: 'Explore More',
        path: '/features'
    }
}

const whySection = {
    badge: 'Why Choose Aries',
    title: 'Smarter AI,',
    subtitle: 'Real Results',
    description: "Aries is built to deliver more than answers - it delivers value through precision, adaptability, and trust.",
    whyCards: [
        {
            id: 1,
            icon: Goal,
            title: 'Accuracy',
            description: 'Responses that actually make sense.'
        },
        {
            id: 2,
            icon: BrainCircuit,
            title: 'Multiple Models',
            description: 'Purpose-built for real-life use cases.'
        },
        {
            id: 3,
            icon: TrendingUp,
            title: 'Goal-Oriented Design',
            description: 'Built to help you grow daily.'
        },
        {
            id: 4,
            icon: ShieldCheck,
            title: 'Privacy First',
            description: 'Your data stays always secure.'
        }
    ]
}

const howToUseSection = {
    badge: 'How To Use',
    title: 'Fast Setup.',
    subtitle: 'Smarter Results.',
    description: "Aries is designed for simplicity and scalability. From initial setup to everyday use, each step is optimized to deliver intelligent, modular support tailored to your needs.",
    flowCards: [
        {
            id: 1,
            icon: UserPlus,
            title: 'Set Up Your Profile',
            description: 'Sign up in seconds and access all Aries modules without any cost.',
            isLast: false
        },
        {
            id: 2,
            icon: Puzzle,
            title: 'Choose Your Modules',
            description: 'Activate only the AI modules you need - like Fitness Coach, Grammar Corrector, or Exam Preparator.',
            isLast: false
        },
        {
            id: 3,
            icon: Zap,
            title: 'Engage and Evolve',
            description: 'Ask, explore, and grow. Aries adapts to your journey and gets smarter with every interaction.',
            isLast: true
        }
    ]
}

const faqSection = {
    badge: 'Frequently Asked Questions',
    title: 'Got Questions?',
    subtitle: "We've Got Answers.",
    description: "Everything you need to know about Aries - how it works, how your data is handled, and what makes it unique.",
    faqs: [
        {
            id: 1,
            question: "What is Aries?",
            answer: "Aries is a modular AI platform made up of multiple intelligent assistants - each designed to support specific areas like fitness, writing, career, mental health, and more."
        },
        {
            id: 2,
            question: "How is Aries different from others?",
            answer: "Aries isn't just a chatbot. It's a collection of task-focused AI modules that adapt to your goals, offering real-time guidance and personalization beyond casual conversation."
        },
        {
            id: 3,
            question: "Who is Aries built for?",
            answer: "Aries is for anyone looking to grow - students, professionals, fitness enthusiasts, or individuals seeking personal development. It adapts to your goals at any stage."
        }
    ],
    ctaFQA: {
        label: 'View All FAQs',
        path: '/faqs'
    }
}

export { heroSection, aboutSection, whySection, howToUseSection, faqSection }