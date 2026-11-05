export const personalInfo = {
  name: "Fazal Azim",
  role: "Software Engineer",
  titleSpecialization: "React.js Web & React Native Mobile Specialist",
  tagline: "Results-driven Software Engineer with 4+ years of professional experience building modern, scalable web and mobile applications.",
  location: "Swat, Pakistan",
  email: "fazalazim238@gmail.com",
  phone: "+92 345 0491493",
  whatsapp: "923450491493",
  linkedin: "https://www.linkedin.com/in/fazalazim238",
  linkedinHandle: "fazalazim238",
  github: "https://github.com",
  resumeUrl: "/fazal-azim-resume.pdf",
  profileImage: "/assets/profile/fazal-azim.jpeg",
  bio: `Results-driven Software Engineer with 4+ years of professional experience in building modern, scalable, and user-friendly web and mobile applications. Specialized in front-end technologies with strong expertise in React.js and React Native, along with hands-on experience collaborating with backend teams and integrating APIs. Adept at translating business requirements into high-performance, maintainable software products.`,
  stats: [
    { label: "Years Experience", value: "4+", sub: "Continuous Growth" },
    { label: "React & Native Apps", value: "15+", sub: "Web & Mobile" },
    { label: "Core Expertise", value: "React / Native", sub: "Web + iOS + Android" },
    { label: "UI Performance", value: "60 FPS", sub: "Smooth Architecture" },
  ],
};

export const featuredProjects = [
  {
    id: "petsbroz",
    title: "Petsbroz",
    type: "mobile",
    category: "Mobile App • Marketplace & Community",
    shortTagline: "The modern marketplace and social discovery hub for pet lovers.",
    badge: "React Native • Marketplace & Reels",
    accentColor: "#F59E0B", // warm amber/orange
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    borderGlow: "rgba(245, 158, 11, 0.4)",
    overview:
      "Here at Petsbroz we make it our mission to help find the perfect pet with ease. With our easy to use filters you can search to find your desired pet. Looking to sell your Pet you can Post your ad and monitor the activities to find the perfect relocated home.",
    features: [
      {
        title: "Intelligent Pet Search & Filters",
        description: "Effortlessly discover pets matching your specific criteria including breed, age, location, and vaccinations.",
      },
      {
        title: "Ad Posting & Listing Management",
        description: "Post your pet ads with multi-photo uploads, custom descriptions, pricing, and health records in minutes.",
      },
      {
        title: "Real-time Inquiries & Activity Monitor",
        description: "Track ad performance, buyer views, saved favorites, and incoming messages to ensure a safe, perfect relocated home.",
      },
      {
        title: "Engaging Video Reels Feed",
        description: "Interactive vertical short-video feed for pet owners to showcase pet playful moments and boost adoption visibility.",
      },
      {
        title: "Smooth Onboarding & Auth",
        description: "Seamless user verification, profile personalization, and role-based pet caregiver settings.",
      },
    ],
    techStack: ["React Native", "Redux Toolkit", "REST APIs", "Axios", "Video Streaming", "Responsive Mobile UI"],
    screens: [
      {
        title: "Home Discovery",
        subtitle: "Categorized listings, featured breeds & quick search",
        image: "/assets/petbroz/petsbroz-home.png",
      },
      {
        title: "Pet Reels Feed",
        subtitle: "Dynamic video showcase connecting pets with adopters",
        image: "/assets/petbroz/petsbroz-reels.png",
      },
      {
        title: "Post Ad Flow",
        subtitle: "Intuitive ad creation and real-time activity monitoring",
        image: "/assets/petbroz/petsbroz-post-ad.png",
      },
      {
        title: "Welcome Screen",
        subtitle: "Modern onboarding experience and community introduction",
        image: "/assets/petbroz/petsbroz-welcome.png",
      },
      {
        title: "Authentication",
        subtitle: "Secure sign-up, verification and profile setup",
        image: "/assets/petbroz/petsbroz-signup.png",
      },
    ],
  },
  {
    id: "collabmind",
    title: "CollabMind",
    type: "hybrid",
    category: "Mobile & Web SaaS • Construction Management",
    shortTagline: "Streamlining residential construction through Dream, Design, and Build.",
    badge: "React.js & React Native • Architecture SaaS",
    accentColor: "#3B82F6", // architectural blue
    gradient: "from-blue-600/20 via-indigo-500/10 to-transparent",
    borderGlow: "rgba(59, 130, 246, 0.4)",
    overview:
      "CollabMind is a project management platform designed for professionals in the residential construction industry. It helps improve efficiency, streamline time management, and encourage seamless collaboration among team members, clients, and contractors.\n\nCreated by an architect who wanted to reduce the time spent on administrative and project management tasks, CollabMind provides an easy-to-use platform that allows users to focus more on creativity, design, and successful project delivery.",
    phases: [
      {
        name: "Dream Phase",
        desc: "Inspiration boards, early scope alignment, and client dream visualization.",
      },
      {
        name: "Design Phase",
        desc: "Detailed architectural drawings, material boards, and iterative client approvals.",
      },
      {
        name: "Build Phase",
        desc: "On-site construction milestones, contractor logs, schedule sync, and budget control.",
      },
    ],
    features: [
      {
        title: "Team Collaboration",
        description: "Enables team members, clients, and contractors to share input and collaborate effectively.",
      },
      {
        title: "Project Management",
        description: "Manage multiple projects while keeping tasks, schedules, and activities organized in unified views.",
      },
      {
        title: "Integrated Calendar",
        description: "Schedule project-related events, milestones, and keep all stakeholders informed.",
      },
      {
        title: "Material Selection Management",
        description: "Organize, evaluate, and finalize construction materials with detailed material charts and PDF exports.",
      },
      {
        title: "Centralized Communication",
        description: "Keep all project communications, important messages, and discussions in one structured place.",
      },
      {
        title: "Collaborative Comments",
        description: "Facilitate pinpoint feedback and communication directly on architectural tasks and assets.",
      },
      {
        title: "Project Export",
        description: "Generate comprehensive project records, including comments, audit trails, and documents.",
      },
      {
        title: "Personalized Branding",
        description: "Customize the platform's appearance and client portals to match your architectural studio brand.",
      },
    ],
    techStack: ["React Native", "React.js", "Redux", "PDF Generator", "Multi-Tenant Architecture", "REST APIs", "Agile Sprints"],
    screens: [
      {
        title: "Dream Phase",
        subtitle: "Vision mapping and conceptual phase tracking",
        image: "/assets/collabmind/dream.png",
      },
      {
        title: "Design Phase",
        subtitle: "Material selection, architectural specs & approvals",
        image: "/assets/collabmind/design.png",
      },
      {
        title: "Build Phase",
        subtitle: "On-site execution, task management & milestone checkpoints",
        image: "/assets/collabmind/build.png",
      },
      {
        title: "Plan Time & Calendar",
        subtitle: "Integrated scheduling and event tracking for all stakeholders",
        image: "/assets/collabmind/plan-time.png",
      },
      {
        title: "Manage Team",
        subtitle: "Contractor, client & architect role-based collaboration",
        image: "/assets/collabmind/manage-team.png",
      },
      {
        title: "Personalized Branding I",
        subtitle: "White-label customization and brand aesthetics",
        image: "/assets/collabmind/make-it-yours-1.png",
      },
      {
        title: "Personalized Branding II",
        subtitle: "Studio logo, color themes & client presentation settings",
        image: "/assets/collabmind/make-it-yours-2.png",
      },
    ],
  },
  {
    id: "network",
    title: "Network Messenger",
    type: "mobile",
    category: "Mobile App • Private & Encrypted Communication",
    shortTagline: "The encrypted messenger built for how people actually connect.",
    badge: "React Native • CallKeep & E2EE",
    accentColor: "#10B981", // secure emerald / cyan
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderGlow: "rgba(16, 185, 129, 0.4)",
    overview:
      "The encrypted messenger built for how people actually connect.\n\nNo ads, AI-free, and independent. Network brings privacy, speed, and real human connection back to messaging without compromising security or selling user data.",
    features: [
      {
        title: "End-to-End Encrypted Messaging",
        description: "Zero-knowledge encryption for private texts, photos, and high-fidelity attachments.",
      },
      {
        title: "Voice and Video Calls with CallKeep",
        description: "Crystal-clear peer-to-peer audio and video calls powered by native CallKeep background answering.",
      },
      {
        title: "Firebase Notifications",
        description: "Instant, battery-efficient VoIP and chat alerts delivered reliably across iOS and Android.",
      },
      {
        title: "Unified Events & Birthdays",
        description: "Events, birthdays, and group chats all together in one place—finally organized.",
      },
      {
        title: "Tags, Filters & Custom Notes",
        description: "Sort and bring meaningful context to your personal and professional network.",
      },
      {
        title: "Secure Native Contact Sync",
        description: "Syncs with your native contacts app with encrypted hashes to suggest contacts using Network.",
      },
      {
        title: "Real-Time Soft Location Sharing",
        description: "Share approximate or live location during meetups with granular privacy controls.",
      },
      {
        title: "Smart Reconnect Reminders",
        description: "Thoughtful nudges to check in on friends and colleagues you haven't spoken with lately.",
      },
    ],
    techStack: ["React Native", "CallKeep", "Firebase Notifications", "WebSockets / Realtime", "Cryptographic Protocols", "Native Contacts API"],
    screens: [
      {
        title: "Chats & Feeds",
        subtitle: "Unified inbox with pin, tags, unread filters & secret chats",
        image: "/assets/network/network-chats.png",
      },
      {
        title: "Direct Conversation",
        subtitle: "End-to-end encrypted messaging with voice notes and media",
        image: "/assets/network/network-chat.png",
      },
      {
        title: "Contacts Sync & Groups",
        subtitle: "Native address book integration with private hashing",
        image: "/assets/network/network-contacts.png",
      },
      {
        title: "Account & Privacy",
        subtitle: "Granular security settings, 2FA, biometric lock & storage",
        image: "/assets/network/network-account.png",
      },
    ],
  },
];

export const reactWebProjects = [
  {
    id: "tabula",
    title: "Tabula LMS",
    category: "React.js Web App • EdTech Platform",
    badge: "React.js • Redux",
    role: "Front-End Developer",
    accentColor: "#8B5CF6",
    description:
      "Interactive multi-user web dashboards for tutors and students in an educational ecosystem. Enabled educators to author structured courses, assign dynamic assignments, and monitor student completion analytics in real-time.",
    highlights: [
      "Built responsive student and instructor portals with React.js and Redux",
      "Dynamic assignment submission workflows and real-time grading rubrics",
      "Interactive curriculum calendar with scheduled milestone alerts",
    ],
    stack: ["React.js", "Redux", "REST APIs", "TailwindCSS", "Axios"],
  },
  {
    id: "vendo-reps",
    title: "Vendo RemoteReps",
    category: "React.js Web App • Amazon BI & Analytics",
    badge: "React.js • Chart.js",
    role: "Front-End Developer",
    accentColor: "#EC4899",
    description:
      "High-performance business intelligence tracking dashboard for Amazon merchant analytics. Visualized granular sales velocity, inventory turnover, and daily, weekly, and monthly performance metrics for data-driven store decisions.",
    highlights: [
      "Engineered real-time interactive charting widgets for high-volume sales metrics",
      "Filtering by ASIN, marketplace region, advertising spend, and profit margins",
      "Exportable executive reports in PDF and spreadsheet formats",
    ],
    stack: ["React.js", "Chart.js", "Axios", "REST APIs", "Responsive UI"],
  },
  {
    id: "createy",
    title: "Createy",
    category: "React.js Web App • E-Commerce Storefront Builder",
    badge: "React.js • Context API",
    role: "Front-End Developer",
    accentColor: "#06B6D4",
    description:
      "Multi-tenant admin and customer dashboard enabling entrepreneurs to configure, brand, and manage their own digital storefronts without writing code.",
    highlights: [
      "Custom product catalog management with inventory SKU tracking",
      "Drag-and-drop store customizer with instant preview",
      "High-scalability frontend architecture for non-technical shop owners",
    ],
    stack: ["React.js", "Context API", "Component Library", "REST APIs"],
  },
];

export const skillsData = {
  frontendWeb: {
    title: "React.js & Frontend Architecture",
    icon: "code",
    skills: [
      { name: "React.js", level: 96 },
      { name: "Next.js", level: 88 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "Responsive UI & Clean CSS Architecture", level: 94 },
      { name: "Component-Driven Design & Micro-Interactions", level: 92 },
    ],
  },
  mobile: {
    title: "React Native & Mobile Development",
    icon: "mobile",
    skills: [
      { name: "React Native", level: 95 },
      { name: "Cross-Platform (iOS & Android)", level: 92 },
      { name: "Performance Optimization (60 FPS)", level: 90 },
      { name: "Native Modules & Hardware Bridges", level: 86 },
      { name: "App Store & Google Play Deployment", level: 88 },
    ],
  },
  firebaseAndNative: {
    title: "Firebase & Native Integrations",
    icon: "shield",
    skills: [
      { name: "Firebase Backend Integration", level: 92 },
      { name: "Firebase Cloud Messaging (Notifications)", level: 94 },
      { name: "CallKeep (Native VoIP & Call UI)", level: 90 },
      { name: "Deep Linking & Universal Links", level: 86 },
      { name: "Push Notification Pipelines", level: 92 },
    ],
  },
  stateAndApi: {
    title: "State Management & REST APIs",
    icon: "database",
    skills: [
      { name: "Redux Toolkit (RTK)", level: 94 },
      { name: "Context API", level: 92 },
      { name: "REST APIs & JSON Data Handling", level: 95 },
      { name: "Axios Interceptors & API Optimization", level: 94 },
      { name: "WebSockets & Real-Time Sync", level: 86 },
    ],
  },
  workflow: {
    title: "Workflow, Tools & Soft Skills",
    icon: "terminal",
    skills: [
      { name: "Git, GitHub & Version Control", level: 92 },
      { name: "Agile, Scrum & Sprint Planning", level: 90 },
      { name: "Code Reviews & Clean Code Practices", level: 92 },
      { name: "Project Management & Collaboration", level: 90 },
      { name: "Debugging, Profiling & Documentation", level: 92 },
    ],
  },
};

export const careerTimeline = [
  {
    role: "React / React Native Developer",
    company: "Teknovation",
    location: "Matta Swat (Onsite)",
    period: "March 2024 – Present",
    current: true,
    highlights: [
      "Developed and maintained scalable web and mobile applications using React.js and React Native.",
      "Collaborated closely with backend developers, designers, and project managers to deliver complete solutions.",
      "Participated in Agile workflows including daily standups, sprint planning, and retrospectives.",
      "Improved application performance and responsiveness by optimizing frontend architecture.",
      "Ensured clean, reusable, and maintainable code practices across projects.",
      "Contributed to feature design, debugging, and continuous improvement of applications.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Jazzari (Service-Based Company)",
    location: "Lahore (Onsite)",
    period: "July 2022 – February 2024",
    current: false,
    highlights: [
      "Designed and developed interactive web applications in a professional office environment.",
      "Worked closely with clients to gather requirements and deliver tailored solutions.",
      "Collaborated with cross-functional teams to ensure timely project delivery.",
      "Focused on building responsive, user-friendly interfaces with optimized performance.",
    ],
  },
  {
    role: "BS Software Engineering",
    company: "University of Swat",
    location: "Swat, Pakistan",
    period: "2017 – 2021",
    current: false,
    highlights: [
      "Graduated with a CGPA of 3.32.",
      "Final Year Project: 'Car Kids Learner' — interactive educational game for children using C and Unity.",
      "Strong foundational skills in software engineering, algorithms, data structures, and computer science principles.",
    ],
  },
];
