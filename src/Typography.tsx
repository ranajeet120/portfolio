import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import resume from "./assets/resume.pdf";
import dp from "./assets/dp.png";
import type { SvgIconProps } from "@mui/material";

export const NAV = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Certificate",
  "Qualification",
  "Contact",
];

export type about_type = {
  hi: string;
  image: string;
  name: string;
  typed: string;
  desc: string;
  highlight: { value: string; lebel: string }[];
  contacts: {
    icon: React.ElementType<SvgIconProps>;
    onClick: () => void;
  }[];
  contact_title: string;
  contact_sub_title: string;
  contact_desc: string;
};

export type skills_type = { name: string; level: number; cat: string };

export type projects_type = {
  p_name: string;
  p_description: string;
  p_technologies: string[];
  p_client: string;
  p_organization: string;
  p_type_of_work: string;
  p_ratings: { value: number; total: number };
  p_clientSatisfaction: number;
  p_teamMember: number;
};

export type experience_type = {
  role: string;
  company: string;
  period: string;
  desc: string;
};

export type qualification_type = {
  q_degree: string;
  q_college: string;
  q_specialization: string;
  q_university: string;
  q_year: string;
};

export type certificate_type = {
  c_name: string;
  c_id: string;
  c_topic: string;
  c_year: string;
  c_organization: string;
};

export const DETAILS: {
  about: about_type;
  skills: skills_type[];
  projects: projects_type[];
  experience: experience_type[];
  qualification: qualification_type[];
  certificate: certificate_type[];
} = {
  about: {
    hi: "Hi, I'm",
    image: dp,
    name: "Roni Biswas",
    typed: "Frontend Developer.",
    desc: "Crafting performant, pixel-perfect web interfaces with obsessive attention to developer experience and user delight — 5+ years turning complexity into elegance.",
    highlight: [
      { value: "5+", lebel: "Years exp." },
      { value: "30+", lebel: "Projects" },
      { value: "12", lebel: "OSS repos" },
    ],
    contacts: [
      {
        icon: LinkedInIcon,
        onClick: () => {
          window.open(
            "https://www.linkedin.com/in/roni-biswas-906a731a4/",
            "_blank",
          );
        },
      },
      {
        icon: LocalPhoneIcon,
        onClick: () => {
          window.open("tel:+919609448616", "_blank");
        },
      },
      {
        icon: EmailIcon,
        onClick: () => {
          window.open("mailto:ranajeet.biswas.120@gmail.com", "_blank");
        },
      },
      {
        icon: WhatsAppIcon,
        onClick: () => {
          window.open("https://wa.me/+919609448616", "_blank");
        },
      },
      {
        icon: AssignmentIndIcon,
        onClick: () => {
          const link = document.createElement("a");
          link.href = resume;
          link.download = "Roni_Biswas_Resume.pdf";
          link.click();
        },
      },
    ],
    contact_title: "Let's build something",
    contact_sub_title: " remarkable.",
    contact_desc:
      "Open to freelance projects, full-time roles, and interesting collaborations. Let's connect.",
  },
  skills: [
    {
      name: "React Js / Next Js / Angular Js / Vue Js",
      level: 95,
      cat: "Framework",
    },
    { name: "React Native", level: 95, cat: "Framework" },
    { name: "Node Js / Express Js", level: 95, cat: "Framework" },
    { name: "PHP / Laravel", level: 80, cat: "Language" },
    { name: "Python", level: 80, cat: "Language" },
    { name: "Java", level: 80, cat: "Language" },
    { name: "Rest / GraphQL / Python / Java", level: 80, cat: "API" },
    {
      name: "GeoLocation / Device Tracking / Google Satelite",
      level: 80,
      cat: "API",
    },
    { name: "Persona", level: 80, cat: "Identity Verification" },
    { name: "CryptoJS", level: 80, cat: "Cryptography" },
    { name: "Vonage / Web Socket", level: 80, cat: "Communication" },
    {
      name: "ChatGPT / Gemini / Runway / Vercel",
      level: 80,
      cat: "AI Integration",
    },
  ],
  projects: [
    {
      p_name: "City Pulse",
      p_description:
        "A comprehensive medical shop web platform with an integrated admin portal, enabling seamless product management, order processing, and efficient inventory tracking while ensuring a smooth and reliable user experience.",
      p_technologies: ["React JS", "Node JS", "AWS", "S3"],
      p_client: "City Pulse",
      p_organization: "Freelance",
      p_type_of_work: "Full Stack Web Application",
      p_ratings: { value: 4.6, total: 5 },
      p_clientSatisfaction: 96,
      p_teamMember: 3,
    },
    {
      p_name: "Smart Layer Count",
      p_description:
        "An admin portal solution designed for precise layer-based calculations and data management, where existing logic was analyzed, calculation discrepancies were rectified, and system accuracy was improved through targeted enhancements.",
      p_technologies: ["React Native", "Python"],
      p_client: "Confidential",
      p_organization: "Freelance",
      p_type_of_work: "Desktop Admin Portal Application",
      p_ratings: { value: 4.4, total: 5 },
      p_clientSatisfaction: 92,
      p_teamMember: 1,
    },
    {
      p_name: "Atainment Calculator",
      p_description:
        "A smart and quick solution, designed to simplify student performance analysis, which provides accurate attainment insights by evaluating attendance, academic scores, behavior, and activity participation—all in one streamlined platform.",
      p_technologies: ["React JS", "Python", "MySQL"],
      p_client: "Global Academy of Technology",
      p_organization: "Freelance",
      p_type_of_work: "Module Based Web Application",
      p_ratings: { value: 4.7, total: 5 },
      p_clientSatisfaction: 95,
      p_teamMember: 1,
    },
    {
      p_name: "Chom Chom",
      p_description:
        "A multi-platform solution consisting of dedicated apps for parents and children, along with an admin portal and website, enabling interactive learning, games, storytelling, and routine management for children while providing parents with real-time tracking and insights into their child’s activities and progress.",
      p_technologies: ["React Native", "React JS", "Node JS", "MySQL"],
      p_client: "Confidential",
      p_organization: "Webskitters Technologies Pvt. Ltd",
      p_type_of_work: "Full Stack Multi-Platform Application",
      p_ratings: { value: 4.7, total: 5 },
      p_clientSatisfaction: 96,
      p_teamMember: 20,
    },
    {
      p_name: "Greengalli",
      p_description:
        "An e-commerce platform offering a seamless experience for buying and selling thrift clothing through web and mobile applications, promoting sustainable fashion while enabling efficient product browsing, secure transactions, and streamlined order management.",
      p_technologies: ["React JS", "React Native", "Node JS", "MySQL"],
      p_client: "Confidential",
      p_organization: "Webskitters Technologies Pvt. Ltd",
      p_type_of_work: "Full Stack E-commerce Application",
      p_ratings: { value: 4.6, total: 5 },
      p_clientSatisfaction: 95,
      p_teamMember: 12,
    },
    {
      p_name: "YIMBY",
      p_description:
        "Civil commerce platform for property and equipment trading with location insights, area calculations, and availability tracking.",
      p_technologies: ["React JS", "React Native", "Node JS", "MySQL"],
      p_client: "Confidential",
      p_organization: "Softsuave Technologies Pvt. Lmt.",
      p_type_of_work: "Commercial Civil Project",
      p_ratings: { value: 4.2, total: 5 },
      p_clientSatisfaction: 95,
      p_teamMember: 5,
    },
    {
      p_name: "Dynafios",
      p_description:
        "Laravel-based web app for financial and business operations with data management, reporting, and secure workflow automation.",
      p_technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
      p_client: "Confidential",
      p_organization: "Softsuave Technologies Pvt. Lmt.",
      p_type_of_work: "Web Application",
      p_ratings: { value: 4.3, total: 5 },
      p_clientSatisfaction: 96,
      p_teamMember: 4,
    },
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "Freelance / Self Employed",
      period: "Nov 2025 to Present",
      desc: "Delivered high-quality web & mobile applications for multiple clients, focusing on performance, scalability, and user experience. Built reusable components and optimized applications to improve load times and overall efficiency.",
    },
    {
      role: "Lead Application Developer",
      company: "Webskitters Technology Solution Pvt. Lmt.",
      period: "May 2024 to Oct 2025",
      desc: "Led frontend development across multiple web and mobile applications, delivering high-performance, user-focused UI/UX. Improved code quality and reduced production bugs by 40% through proactive code reviews and QA collaboration, while owning complex modules, mentoring developers, and ensuring efficient task delivery.",
    },
    {
      role: "Software Developer",
      company: "Geoalgo Technology Pvt. Lmt.",
      period: "Nov 2023 to May 2024",
      desc: "Worked on full-stack development of web and mobile applications, delivering client-focused solutions in Agile environments while optimizing performance through reusable and scalable code.",
    },
    {
      role: "Executive Software Engineer",
      company: "Softsuave Technology Pvt. Lmt.",
      period: "Mar 2022 to Sep 2023",
      desc: "Collaborated directly with clients to manage deliverables and expectations, led and mentored team members to achieve project goals efficiently, and implemented Agile practices for rapid, iterative development.",
    },
    {
      role: "Software Engineer",
      company: "Freelance / Self Employed",
      period: "May 2020 to Jan 2021",
      desc: "Delivered freelance web solutions using PHP and MySQL for diverse clients, building dynamic, database-driven applications with optimized performance while collaborating closely to develop scalable, secure, and user-focused systems.",
    },
    {
      role: "Data Process Engineer",
      company: "Crompt IT Pvt. Lmt.",
      period: "Apr 2019 to Apr 2020",
      desc: "Managed and processed large-scale datasets with high accuracy and security, built internal automation tools to reduce manual effort and improve productivity, and designed reports and dashboards to support data-driven decision-making.",
    },
  ],
  qualification: [
    {
      q_degree: "Masters of Computer Application",
      q_college: "Global Institute of Management & Science",
      q_specialization:
        "Building modern, scalable applications powered by AI, smart data handling, and efficient system design. From chatbot integration to complex data manipulation, I focus on delivering intelligent, high-performance solutions grounded in strong computer application fundamentals and computability concepts.",
      q_university: "Bangalore University",
      q_year: "2019-21",
    },
    {
      q_degree: "Bachelors of Computer Application",
      q_college: "GitaRam Institute of Management",
      q_specialization:
        "Developed a solid foundation in programming, web technologies, and application development. Built projects involving data handling, basic AI concepts, and system design, establishing the groundwork for advanced development and intelligent applications.",
      q_university: "West Bengal University of Technology",
      q_year: "2016-19",
    },
  ],
  certificate: [
    {
      c_name: "Certificate in Information Technology Application",
      c_id: "YS-BHA-19-190011/2024",
      c_topic:
        "Fundamentals of computer operations, basic software usage, and core IT learning concepts.",
      c_year: "2014",
      c_organization: "Youth Computer",
    },
    {
      c_name: "National Certificate in Modular Employable Skill",
      c_id: "0193-SS-102-B00091028",
      c_topic:
        "Training in communication skills, personality development, and workplace behavior.",
      c_year: "2015",
      c_organization: "Ministry of Labour & Employment",
    },
    {
      c_name: "Certificate of Excellence",
      c_id: "NO-ID",
      c_topic:
        "Explained internal working of calculations during a college-level technical presentation.",
      c_year: "2017",
      c_organization: "Gitaram Institute of Management",
    },
    {
      c_name: "Certificate of Excellence",
      c_id: "NO-ID",
      c_topic:
        "Participated in debate on the impact of education on society with analytical insights.",
      c_year: "2018",
      c_organization: "Gitaram Institute of Management",
    },
    {
      c_name: "Summer Industrial Training Certificate",
      c_id: "ACPL/SVT2018/2017",
      c_topic:
        "Developed a travel agency automation system using PHP and MySQL during industrial training.",
      c_year: "2018",
      c_organization: "Ardent Computech Pvt. Ltd.",
    },
    {
      c_name: "Certificate of Special Appreciation",
      c_id: "NO-ID",
      c_topic:
        "Recognized for contribution and participation in organizing a blood donation camp.",
      c_year: "2018",
      c_organization: "Gitaram Institute of Management",
    },
    {
      c_name: "Certificate of Deploma in Communicative English",
      c_id: "1/A/0113/01",
      c_topic:
        "Improved spoken English, confidence, fluency, and professional communication skills.",
      c_year: "2018",
      c_organization: "Dey's Education",
    },
    {
      c_name: "Certificate of Debate & Extempore Competition",
      c_id: "1/A/009",
      c_topic:
        "Participated in debate and extempore competitions showcasing public speaking skills.",
      c_year: "2019",
      c_organization: "Dey's Education",
    },
    {
      c_name: "Industrial Training Certificate",
      c_id: "ARD/2019/0952",
      c_topic:
        "Built a content management system using PHP and MySQL with database integration.",
      c_year: "2019",
      c_organization: "Ardent Computech Pvt. Ltd.",
    },
    {
      c_name: "Certificate of Completion",
      c_id: "CP-DATA-2021/00034/SF",
      c_topic:
        "Developed a civil mobile app focused on urban planning and sustainable development.",
      c_year: "2021",
      c_organization: "Crompt IT",
    },
    {
      c_name: "Certificate of Participation",
      c_id: "NO-ID",
      c_topic:
        "Participated in Diamond Jubilee Cup cricket tournament representing team collaboration.",
      c_year: "2019",
      c_organization: "The Community Center(Bangalore University)",
    },
    {
      c_name: "Certificate of Participation",
      c_id: "NO-ID",
      c_topic:
        "Attended seminar on the impact of COVID-19 on the Indian economy and business sectors.",
      c_year: "2020",
      c_organization: "Global Institute of Management & Science",
    },
    {
      c_name: "Certificate of Participation",
      c_id: "NO-ID",
      c_topic:
        "Participated in session on modern cybersecurity challenges and their real-world impact.",
      c_year: "2020",
      c_organization: "Global Institute of Management & Science",
    },
    {
      c_name: "Certificate of AI & ML using Python",
      c_id: "ASD/AI/GLO/SEN/10321",
      c_topic:
        "Built sentiment analysis model using Python to analyze user data and extract insights.",
      c_year: "2021",
      c_organization: "Academy of Skill Development",
    },
  ],
};
