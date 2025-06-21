const termHero = {
    title: 'Your Data,',
    subtitle: 'Our Commitment',
    description: 'Welcome to Aries. We encourage you to thoroughly review our Terms to clearly understand your rights, obligations, and how we handle your data, ensuring transparency, user protection, and responsible use of our AI-powered services.'
}

const termIntro = {
    title: 'Before Using Aries',
    description: 'By accessing and using Aries, you agree to comply with and be bound by these Terms of Service and our Privacy Policy. Aries is a modular AI companion designed to enhance your productivity, wellness, and learning experiences. If you do not agree with any part of these terms, you should not use our services.'
}

const termList = [
    {
        id: 1,
        heading: 'Account Responsibilities',
        description: 'To access certain features, you may need to create an account. You are responsible for:',
        keyPoints: [
            'Providing accurate, up-to-date information.',
            'Maintaining the confidentiality of your login credentials.',
            'All activity under your account.'
        ]
    },
    {
        id: 2,
        heading: 'Acceptable Use Policy',
        description: 'You agree to use Aries lawfully and ethically. You may not:',
        keyPoints: [
            'Misuse, hack, or exploit the platform.',
            'Submit or generate harmful, abusive, or misleading content.',
            'Interfere with system integrity or security.'
        ]
    },
    {
        id: 3,
        heading: 'Privacy & Data Security',
        description: 'Your privacy matters to us. Aries collects only necessary data to improve your experience and ensure service integrity. We do not sell your data. Key points include:',
        keyPoints: [
            'Collected to personalize and optimize features.',
            'Secured using industry-standard encryption.',
            'Data is stored securely and used strictly for feature enhancement and analytics.'
        ]
    },
    {
        id: 4,
        heading: 'AI Use and Limitations',
        description: 'Aries uses advanced AI modules to provide responses, guidance, and content. While we strive for accuracy:',
        keyPoints: [
            'AI responses may sometimes be incorrect or incomplete.',
            'Aries is not a substitute for professional advice (e.g., medical, legal, financial).',
            'Users should verify critical information before taking action.'
        ]
    },
    {
        id: 5,
        heading: 'Service Modifications & Availability',
        description: 'We may add, update, or remove features over time. We strive to minimize disruption, but we are not liable for:',
        keyPoints: [
            'Temporary unavailability.',
            'Data loss due to user-side issues.',
            'Changes in service scope or accessibility.'
        ]
    },
    {
        id: 6,
        heading: 'Termination of Use',
        description: 'We reserve the right to terminate or suspend your access to Aries if:',
        keyPoints: [
            'You breach these terms.',
            'Your behavior threatens the safety or usability of the platform.',
            'Required by law or regulatory obligations.'
        ]
    },
    {
        id: 7,
        heading: 'Intellectual Property',
        description: 'All branding, content, code, and AI modules developed by Aries are protected under intellectual property laws. You may not:',
        keyPoints: [
            'Reproduce or distribute our content without permission.',
            'Reverse-engineer or clone any part of Aries functionality.'
        ]
    },
    {
        id: 8,
        heading: 'Updates to Terms',
        description: 'These terms may change as Aries evolves. We will:',
        keyPoints: [
            'Notify you of significant updates via the platform or email.',
            'Always display the most current version on this page.'
        ]
    },
]

const termContact = {
    title: 'Contact & Help Resources',
    description: "We're here to support you. If you need help understanding our Terms or Privacy Policy, or you're facing a specific issue, you can reach us in the following ways:",
    contactPoints: [
        {
            id: 1,
            prefix: 'You can',
            middle: { label: 'Browse FAQs', path: '/faqs' },
            suffix: 'to quickly find answers to common questions.'
        },
        {
            id: 2,
            prefix: 'Visit our',
            middle: { label: 'Support Page', path: '/support' },
            suffix: 'for personalized help, issue reporting, and troubleshooting.'
        },
        {
            id: 3,
            prefix: 'Also you can reach us directly at',
            middle: { label: 'support@aries.app', path: 'mailto:workofakshat@gmail.com' },
            suffix: 'for specific concerns.'
        }
    ]
}

export { termHero, termIntro, termList, termContact }