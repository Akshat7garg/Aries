import { BookmarkCheck, Headset, Share2, LogIn, Bot, Bug, Shield, Lightbulb, MessageCircle } from "lucide-react"

const supportHero = {
    title: 'Need Help?',
    subtitle: "We're Here for You.",
    description: "Whether you're encountering technical difficulties, seeking guidance on a specific feature, or simply curious about how something works - Aries Support is designed to provide fast, clear, and personalized assistance tailored to your needs, anytime."
}

const supportIntro = {
    title: 'How Aries Support Works',
    description: "We believe support should be seamless. At Aries, resolving issues or answering your questions is fast, friendly, and intelligent. Here's how:",
    introCards: [
        {
            id: 1,
            icon: BookmarkCheck,
            title: 'Self-Help First',
            description: 'Browse FAQs and guides for instant solutions.'
        },
        {
            id: 2,
            icon: Headset,
            title: 'Direct Assistance',
            description: 'Contact us for real, human help directly.'
        },
        {
            id: 3,
            icon: Share2,
            title: 'Smart Routing',
            description: 'Issues routed smartly to right specialist.'
        }
    ]
}

const supportIssues = {
    title: 'Common Issues We Handle',
    description: 'From login troubles to detailed feature queries, Aries Support provides clear, comprehensive help to ensure a smooth user experience.',
    issueCards: [
        {
            id: 1,
            icon: LogIn,
            title: 'Login Issues',
            description: "Trouble signing in or verifying your account? We'll help."
        },
        {
            id: 2,
            icon: Bot,
            title: 'AI Module Help',
            description: "Confused about a tool's usage? Get guided assistance."
        },
        {
            id: 3,
            icon: Bug,
            title: 'Report a Bug',
            description: 'Found something broken? Let us fix it.'
        },
        {
            id: 4,
            icon: Shield,
            title: 'Privacy Questions',
            description: "Questions about your data or security? We're transparent."
        },
        {
            id: 5,
            icon: Lightbulb,
            title: 'Suggestions',
            description: 'Share your feedback or new ideas for Aries.'
        },
        {
            id: 6,
            icon: MessageCircle,
            title: 'General Queries',
            description: 'Got something else in mind? Ask us directly.'
        }
    ]
}

const supportContact = {
    title: 'Still Need Help?',
    subtitle: 'Reach out to us directly.',
    description: "If you didn't find what you were looking for in our FAQs or guides, we're here to help. Fill out the form below, and our support team will get back to you as soon as possible - usually within 24 hours."
}

export { supportHero, supportIntro, supportIssues, supportContact }