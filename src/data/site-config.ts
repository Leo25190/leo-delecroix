import type socialIcons from '@assets/icons/socialIcons';

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Social = {
    name: keyof typeof socialIcons;
    url: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Social[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Léo Delecroix',
    subtitle: 'Data Science & Software Engineering Student',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/astro-img.webp',
        alt: 'Astro - Build fast static sites'
    },
    headerNavLinks: [
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        },
        {
            text: 'Technologies',
            href: '/technologies'
        }
    ],
    footerNavLinks: [
        // {
        //     text: 'About',
        //     href: '/about'
        // },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            name: 'Instagram',
            url: 'https://instagram.com/'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/l%C3%A9o-delecroix-30b7a1221/'
        }
    ],
    hero: {
        title: 'Welcome!',
        text: 'As a Computer Science student at IMT Nord Europe, I am passionate about data science and software engineering. My professional experiences have allowed me to develop strong skills in these fields. I enjoy building AI models for diverse applications, such as motion-to-text processing, image classification, and predictive analytics. Beyond AI, I also have a keen interest in web development, particularly in integrating machine learning models or creating SaaS-oriented platforms.',
        // image: {
        //     src: '/path.jpeg',
        //     alt: 'A person sitting at a desk in front of a computer'
        // },
        actions: [
            {
                text: 'LinkedIn',
                href: 'https://www.linkedin.com/in/l%C3%A9o-delecroix-30b7a1221/'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Léo Delecroix Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
