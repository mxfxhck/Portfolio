import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Mukunda',
    lastName:  'W.',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Cloud Support Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Kolkata',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/mxfxhck',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/mukundawadsal/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/mxfx_hck',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:Mukundawadsal@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Welcome to my Tech Playground!</>,
    subline: <>Hey There, I'm Mukunda, Cloud Wrangler at <InlineCode>F13</InlineCode>,  bug bounty hunter, and full-time tech geek. 
        Breaking stuff, building cooler stuff, and living for that “it works!” moment. Dive in!</>
}

const about = {
    label: 'About',
    title: 'About Me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false,
    },
    avatar: {
        display: true,
    },
    calendar: {
        display: true,
        link: 'https://drive.google.com/file/d/1qQkt4D7dz_W8aWn7yupTdCjbZwZQe26C/view?usp=sharing',
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: (
            <>
                Hey There, I'm a Cloud Support Engineer at F13 Technologies, where I ensure smooth and efficient cloud operations. 
                I'm also a passionate developer, a self-proclaimed code junkie, and a bug bounty hunter always on the lookout for the next challenge. 
                When I'm not debugging or writing code, I enjoy building innovative projects, exploring AI solutions, 
                and contributing to the tech community. Dive in to see my work and journey!
            </>
        ),
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'F13 Technologies',
                timeframe: '2024 - Present',
                role: 'Cloud Support Engineer',
                achievements: [
                    <>Optimized cloud infrastructure for F13, reducing latency by 25% and improving system uptime to 99.9%.</>,
                    <>Led the deployment of a real-time monitoring tool, enhancing incident response times by 40%.</>,
                ],
                images: [], // No images yet
            },
            {
                company: 'WNS Global Services Pvt. Ltd.',
                timeframe: '2022 - 2024',
                role: 'Senior Associate Operations - GDS',
                achievements: [
                    <>Streamlined operational workflows for GDS processes, achieving a 25% improvement in efficiency and reducing errors by 15%.</>,
                    <>Collaborated with cross-functional teams to implement a knowledge-sharing framework, boosting team productivity by 20%.</>,
                ],
                images: [], // No images yet
            },
        ],
    },
    studies: {
        display: true,
        title: 'Studies',
        institutions: [
            {
                name: 'Pune University',
                description: (
                    <>
                        Earned a Bachelor of Computer Application degree, building a strong foundation in software development, programming, and IT systems. 
                        Gained hands-on experience with coding, databases, and problem-solving.
                    </>
                ),
            },
            {
                name: 'Skynet Linux Institute',
                description: (
                    <>
                        Completed AWS Solution Architect certification and Red Hat Certified System Administrator (RHCSA), gaining expertise in cloud computing, Linux systems, and infrastructure management.
                    </>
                ),
            },
        ],
    },
    technical: {
        display: true,
        title: 'Technical Skills',
        skills: [
            {
                title: 'React.js',
                description: <>Experienced in building dynamic and responsive web applications using React.js, leveraging component-based architecture for scalability.</>,
                images: [],
            },
            {
                title: 'Node.js',
                description: <>Developing scalable backend services and APIs with Node.js, focusing on real-time data handling and performance optimization.</>,
                images: [],
            },
            {
                title: 'PHP & MySQL',
                description: <>Skilled in creating robust web applications with PHP and MySQL, ensuring efficient database design and seamless integration.</>,
                images: [],
            },
            {
                title: 'AWS',
                description: <>Proficient in deploying and managing cloud solutions using AWS services like EC2, S3, Lambda, and CloudFormation.</>,
                images: [],
            },
            {
                title: 'Bash Scripting',
                description: <>Automating tasks and managing system operations efficiently using Bash scripting, enhancing productivity and minimizing errors.</>,
                images: [],
            },
            {
                title: 'Pentesting Tools',
                description: <>Hands-on experience with tools like Burp Suite, Nmap, Metasploit, and Wireshark for vulnerability assessment and penetration testing.</>,
                images: [],
            },
        ],
    },
};

export default about;


const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
}

const work = {
    label: 'Work',
    title: 'Get in Touch',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Hire Me',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    images: [
        { 
           
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
