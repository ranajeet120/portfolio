import dp from "./assets/dp.png";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import resume from "./assets/resume.pdf";
import type { SvgIconComponent } from "@mui/icons-material";

export type MenuType =
  | "introduction"
  | "about"
  | "qualification"
  | "certification"
  | "experience"
  | "project"
  | "services";

export type IntroductionType = {
  image: string;
  firstLine: string;
  secondLine: string;
  thirdLine: string;
  downloadButton: string;
  actionButton: {
    icon: SvgIconComponent;
    onClick: () => void;
  }[];
};

export type AboutType = {
  desc: string;
};

export type QualificationType = {
  q_degree: string;
  q_college: string;
  q_specialization: string;
  q_university: string;
  q_year: string;
  q_grade: string;
  q_type: string;
};

export type CertificationType = {
  c_name: string;
  c_id: string;
  c_topic: string;
  c_year: string;
  c_organization: string;
};

export type ExperienceType = {
  e_organization: string;
  duration: string;
  designation: string;
  role: string;
  responsibility: string[];
};

export type ProjectType = {
  p_name: string;
  p_description: string;
  p_technologies: string[];
  p_client: string;
  p_organization: string;
  p_type_of_work: string;
  p_link: { ios: string; android: string; web: string };
  p_ratings: { value: number; total: number };
  p_clientSatisfaction: number;
  p_teamMember: number;
};

export type ServiceType = string;

export type TypographyListType = {
  menu: MenuType[];
  profileInfo: {
    type: MenuType;
    data:
      | IntroductionType
      | AboutType
      | QualificationType[]
      | CertificationType[]
      | ExperienceType[]
      | ProjectType[]
      | ServiceType[];
  }[];
};

const typography_list: TypographyListType = {
  menu: [
    "introduction",
    "about",
    "qualification",
    "certification",
    "experience",
    "project",
    "services",
  ],
  profileInfo: [
    {
      type: "introduction",
      data: {
        image: dp,
        firstLine: "Hello 👋, I'm",
        secondLine: "Roni Biswas",
        thirdLine:
          "Software Developer ( Specialized on website & mobile applications ) | 5+ years of experience",
        downloadButton: "Download Resume",
        actionButton: [
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
      },
    },
    {
      type: "about",
      data: {
        desc: `I'm a developer with <strong>over 5 years of experience</strong> 
          helping clients turn ideas into reliable, scalable digital products. I
          focus on delivering solutions that are not just functional, but
          aligned with business goals—ensuring every project creates real value
          for its users and stakeholders.
          <br></br>
          I've successfully <strong>delivered 20+ projects</strong> across
          multiple industries, working closely with clients to understand their
          requirements and translate them into efficient, user-friendly
          applications. My approach is rooted in clear communication, timely
          delivery, and maintaining a high standard of quality throughout the
          development process.
          <br></br>
          I bring both collaboration and leadership to the
          table—working effectively as a team player while also taking
          <strong>ownership as a project lead</strong> when needed. From
          planning and structuring projects to managing execution, I ensure that
          development stays organized, transparent, and goal-driven.
          <br></br
          My experience spans a variety of project types, including
          <strong>
            business platforms, booking and management systems, educational
            tools, AI-assisted solutions, and interactive applications
          </strong>
          . This exposure allows me to quickly adapt to different business needs
          and deliver tailored solutions that fit each unique use case. 
          <br></br>
          I believe in <strong>building long-term value, not just completing tasks</strong>.
          By focusing on clean, maintainable solutions and intuitive user
          experiences, I aim to deliver products that are scalable, impactful,
          and ready to grow alongside your business.`,
      },
    },
    {
      type: "qualification",
      data: [
        {
          q_degree: "Masters of Computer Application",
          q_college: "Global Institute of Management & Science",
          q_specialization: "Web & Mobile App Development",
          q_university: "Bangalore University",
          q_year: "2019-21",
          q_grade: "7.29 CGPA",
          q_type: "qualification",
        },
        {
          q_degree: "Bachelors of Computer Application",
          q_college: "GitaRam Institute of Management",
          q_specialization: "Web & Mobile App Development",
          q_university: "West Bengal University of Technology",
          q_year: "2016-19",
          q_grade: "7.83 CGPA",
          q_type: "qualification",
        },
      ],
    },
    {
      type: "certification",
      data: [
        {
          c_name: "Cerficate in Information Technology Application",
          c_id: "YS-BHA-19-190011/2024",
          c_topic: "Computer Fundamental and Learning",
          c_year: "2014",
          c_organization: "Youth Computer",
        },
        {
          c_name: "National Certificate in Modular Employable Skill",
          c_id: "0193-SS-102-B00091028",
          c_topic: "Communication & Character Observation",
          c_year: "2015",
          c_organization: "Ministry of Labour & Employment",
        },
        {
          c_name: "Cerficate of Excellence",
          c_id: "",
          c_topic: "How Calculation Works Internally ( College Presentation )",
          c_year: "2017",
          c_organization: "Gitaram Institute of Management",
        },
        {
          c_name: "Cerficate of Excellence",
          c_id: "",
          c_topic: "Educational Impact on Society ( College Debate )",
          c_year: "2018",
          c_organization: "Gitaram Institute of Management",
        },
        {
          c_name: "Summer Industrial Training Certificate",
          c_id: "ACPL/SVT2018/2017",
          c_topic: "Automation of Travel Agency ( PHP & MySQL )",
          c_year: "2018",
          c_organization: "Ardent Computech Pvt. Ltd.",
        },
        {
          c_name: "Cerficate of Special Appreciation",
          c_id: "",
          c_topic: "Blood Donation Camp",
          c_year: "2018",
          c_organization: "Gitaram Institute of Management",
        },
        {
          c_name: "Cerficate of Deploma in Communicative English",
          c_id: "1/A/0113/01",
          c_topic:
            "Communicative English, Enhancing fluency, Confidence, and professional communication skills",
          c_year: "2018",
          c_organization: "Dey's Education",
        },
        {
          c_name: "Cerficate of Debate & Extempore Competition",
          c_id: "1/A/009",
          c_topic: "",
          c_year: "2019",
          c_organization: "Dey's Education",
        },
        {
          c_name: "Industrial Training Certificate",
          c_id: "ARD/2019/0952",
          c_topic: "Content Management System ( PHP & MySQL )",
          c_year: "2019",
          c_organization: "Ardent Computech Pvt. Ltd.",
        },
        {
          c_name: "Certificate of Completion",
          c_id: "",
          c_topic:
            "Civil Mobile App for Urban Planning and Sustainable Development",
          c_year: "2021",
          c_organization: "Crompt IT",
        },
        {
          c_name: "Certificate of Participation",
          c_id: "",
          c_topic: "Diamond Jublee Cup ( Cricket Tournament )",
          c_year: "2019",
          c_organization: "The Community Center(Bangalore University)",
        },

        {
          c_name: "Certificate of Participation",
          c_id: "",
          c_topic: "Impact of Covid-19 on Indian Economy",
          c_year: "2020",
          c_organization: "Global Institute of Management & Science",
        },
        {
          c_name: "Certificate of Participation",
          c_id: "",
          c_topic: "Cyber Sicurity in New Age and Impact",
          c_year: "2020",
          c_organization: "Global Institute of Management & Science",
        },
        {
          c_name: "Certificate of AI & ML using Python",
          c_id: "ASD/AI/GLO/SEN/10321",
          c_topic: "Sentiment Analysis on User Data",
          c_year: "2021",
          c_organization: "Academy of Skill Development",
        },
      ],
    },
    {
      type: "experience",
      data: [
        {
          e_organization: "Freelance / Self Employed",
          duration: "Nov 2025 to Present",
          designation: "Senior Software Engineer",
          role: "Lead React Native, React Js, Node Js Developer & Trainer",
          responsibility: [
            "Developed and delivered end-to-end solutions, ensuring quality, efficiency, and timely execution.",
            "Identified, analyzed, and resolved complex issues while maintaining system stability and performance.",
            "Led and collaborated with teams, managing full project lifecycles from planning to successful delivery.",
            "Projects: City Pulse, Smart Layer Count, ColagBro's",
            "Technologies: React Native, React Js, Node Js, Express Js, TypeScript, Laravel, Python",
          ],
        },
        {
          e_organization: "Webskitters Technology Solution Pvt. Lmt.",
          duration: "May 2024 to Oct 2025",
          designation: "Application Developer",
          role: "Lead React Native Developer",
          responsibility: [
            "Led frontend development for multiple mobile and web applications, ensuring high-performance and user-centric UI/UX.",
            "Improved overall code quality and reduced production bugs by 40% through proactive code reviews and QA coordination.",
            "Took ownership of complex modules, mentored junior developers, and distributed tasks for efficient delivery.",
            "Projects: Chom Chom, Wokka, Greengalli, Therapy Evaluater, Nowfit",
            "Technologies: React Native, React Js, Node Js, Express Js, TypeScript, Laravel, Python",
          ],
        },
        {
          e_organization: "Geoalgo Technology Pvt. Lmt.",
          duration: "Nov 2023 to May 2024",
          designation: "React Native & React Js Developer",
          role: "Lead React Native, React Js Developer",
          responsibility: [
            "Worked on full-stack development of web and mobile applications.",
            "Delivered client-focused solutions following Agile methodologies.",
            "Optimized application performance through reusable and scalable code.",
            "Projects: Roopya Mobile App",
            "Technologies: React Native, React Js, TypeScript",
          ],
        },
        {
          e_organization: "Softsuave Technology Pvt. Lmt.",
          duration: "Mar 2022 to Sep 2023",
          designation: "Executive Software Engineer",
          role: "React Native, React Js Developer",
          responsibility: [
            "Collaborated directly with clients to manage deliverables and expectations.",
            "Led and mentored team members to achieve project goals efficiently.",
            "Implemented Agile practices for rapid and iterative development",
            "Projects: Collabxx, MyPlot, Yimby, Defy Commercial, Dynafios",
            "Technologies: React Native, React Js, TypeScript, Laravel",
          ],
        },
        {
          e_organization: "Freelance / Self Employed",
          duration: "May 2020 to Jan 2021",
          designation: "Website Developer",
          role: "PHP & MySQL developer",
          responsibility: [
            "Delivered freelance web solutions using PHP and MySQL for diverse clients.",
            "Built and maintained dynamic, database-driven applications with optimized performance.",
            "Collaborated with clients to develop scalable, secure, and user-focused systems.",
            "Projects: Fewi Stock, Ahuja Classes, Attainment Calculator, Fero Coin",
            "Technologies: PHP & MySQL",
          ],
        },
        {
          e_organization: "Crompt IT Pvt. Lmt.",
          duration: "Apr 2019 to Apr 2020",
          designation: "Data Process Engineer",
          role: "PHP & MySQL developer",
          responsibility: [
            "Managed and processed large-scale datasets with high accuracy and security.",
            "Built internal automation tools to reduce manual effort and improve productivity.",
            "Designed reports and dashboards to support decision-making.",
            "Projects: Company Admin Portal",
            "Technologies: PHP & MySQL",
          ],
        },
      ],
    },
    {
      type: "project",
      data: [
        {
          p_name: "City Pulse",
          p_description:
            "A comprehensive medical shop web platform with an integrated admin portal, enabling seamless product management, order processing, and efficient inventory tracking while ensuring a smooth and reliable user experience.",
          p_technologies: ["React JS", "Node JS", "AWS", "S3"],
          p_client: "City Pulse",
          p_organization: "Freelance",
          p_type_of_work: "Full Stack Web Application",
          p_link: { ios: "", android: "", web: "" },
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
          p_link: { ios: "", android: "", web: "" },
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
          p_link: { ios: "", android: "", web: "" },
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
          p_link: { ios: "", android: "", web: "" },
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
          p_link: { ios: "", android: "", web: "" },
          p_ratings: { value: 4.6, total: 5 },
          p_clientSatisfaction: 95,
          p_teamMember: 3,
        },
      ],
    },
    {
      type: "services",
      data: [
        "Custom Web Application Development",
        "Responsive UI/UX Design",
        "React & Next.js Development",
        "Mobile App Development (React Native)",
        "API Integration & Development",
        "Performance Optimization",
        "Bug Fixing & Maintenance",
        "E-commerce Solutions",
        "SEO-Friendly Frontend Development",
        "Deployment & CI/CD Setup",
      ],
    },
  ],
};

export default typography_list;
