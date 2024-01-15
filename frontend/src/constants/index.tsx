import SVGColors from "../atoms/SVGColors";

export const HEADER = {
  H_MOBILE: 4,
  H_DESKTOP: 20,
  H_DESKTOP_OFFSET: 80 - 16,
};

export const NAV = {
  WIDTH: 280,
};

const icon = (name: string) => (
  <SVGColors
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

export const navConfig = [
  {
    title: "overview",
    path: "overview",
    icon: icon("ic_analytics"),
  },
  {
    title: "search",
    path: "search",
    icon: icon("ic_search"),
  },
  {
    title: "jobs",
    path: "jobs",
    icon: icon("ic_jobs"),
  },
  {
    title: "users",
    path: "users",
    icon: icon("ic_users"),
  },
];

export const maintainerConfig = {
  title: "maintainer",
  path: "maintainer",
  icon: icon("ic_maintainer"),
};

export const settingsConfig = {
  title: "settings",
  path: "settings",
  icon: icon("ic_settings"),
};

export const industries = [
  "Agriculture",
  "Automobiles",
  "Aviation",
  "Banking",
  "Biotechnology",
  "Chemicals",
  "Coal",
  "Construction",
  "Defence",
  "E-commerce",
  "Education and Training",
  "Electronics",
  "Energy",
  "Fast Moving Consumer Goods (FMCG)",
  "Food Processing",
  "Healthcare",
  "Information Technology (IT)",
  "Infrastructure",
  "Insurance",
  "Manufacturing",
  "Media and Entertainment",
  "Mining",
  "Oil and Gas",
  "Pharmaceuticals",
  "Real Estate",
  "Retail",
  "Services",
  "Steel",
  "Telecommunications",
  "Textiles",
  "Tourism and Hospitality",
  "Transportation",
  "Utilities",
];

export const department = [
  "Finance",
  "Human Resources",
  "Information Technology",
  "Marketing",
  "Sales",
  "Research and Development",
  "Production",
  "Purchasing",
  "Legal",
  "Customer Service",
  "Supply Chain",
  "Quality Assurance",
  "Administration",
  "Engineering",
  "Operations",
  "Public Relations",
  "Health and Safety",
  "Education",
  "Training and Development",
  "Corporate Strategy",
  "Business Development",
  "Compliance",
  "Sustainability",
  "Export and Import",
  "Logistics",
  "Procurement",
  "Product Management",
  "Project Management",
  "Risk Management",
  "Data Analysis",
  "Innovation Management",
];

export const UgDegree = [
  {
    Degree: "Bachelor of Arts (BA)",
    Majors: [
      "English",
      "History",
      "Political Science",
      "Economics",
      "Sociology",
      "Psychology",
      "Philosophy",
      "Geography",
      "Languages",
    ],
  },
  {
    Degree: "Bachelor of Science (BSc)",
    Majors: [
      "Physics",
      "Chemistry",
      "Biology",
      "Zoology",
      "Botany",
      "Mathematics",
      "Statistics",
      "Computer Science",
      "Biotechnology",
      "Environmental Science",
      "Microbiology",
    ],
  },
  {
    Degree: "Bachelor of Commerce (BCom)",
    Majors: [
      "General Commerce",
      "Accountancy",
      "Finance",
      "Business Management",
      "Taxation",
      "Marketing",
      "E-Commerce",
      "Banking & Insurance",
    ],
  },
  {
    Degree: "Bachelor of Engineering (BE)/Bachelor of Technology (BTech)",
    Majors: [
      "Mechanical Engineering",
      "Electrical Engineering",
      "Civil Engineering",
      "Computer Science & Engineering",
      "Electronics & Communication Engineering",
      "Chemical Engineering",
      "Aerospace Engineering",
      "Information Technology",
      "Automobile Engineering",
      "Biomedical Engineering",
    ],
  },
  {
    Degree: "Bachelor of Business Administration (BBA)",
    Specializations: [
      "Human Resources",
      "Finance",
      "Marketing",
      "International Business",
      "Hospitality",
      "Operations Management",
      "Entrepreneurship",
    ],
  },
  {
    Degree: "Bachelor of Law (LLB)",
  },
  {
    Degree: "Bachelor of Education (BEd)",
  },
  {
    Degree: "Bachelor of Computer Applications (BCA)",
  },
  {
    Degree: "Bachelor of Fine Arts (BFA)",
    Specializations: [
      "Painting",
      "Sculpting",
      "Dance",
      "Music",
      "Photography",
      "Applied Arts",
    ],
  },
  {
    Degree: "Bachelor of Architecture (BArch)",
  },
  {
    Degree: "Bachelor of Pharmacy (BPharm)",
  },
  {
    Degree: "Bachelor of Fashion Technology (BFTech)",
  },
  {
    Degree: "Bachelor of Hotel Management (BHM)",
  },
  {
    Degree: "Bachelor of Mass Media (BMM)",
  },
  {
    Degree: "Bachelor of Physical Education (BPEd)",
  },
];

export const PgDegree = [
  {
    Degree: "Master of Business Administration",
    Majors: [
      "Finance",
      "Marketing",
      "Human Resources",
      "Operations Management",
      "Information Technology",
    ],
  },
  {
    Degree: "Master of Technology",
    Majors: [
      "Computer Science and Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Civil Engineering",
      "Chemical Engineering",
      "Biotechnology",
    ],
  },
  {
    Degree: "Master of Science",
    Majors: [
      "Physics",
      "Chemistry",
      "Biology",
      "Mathematics",
      "Environmental Science",
      "Biotechnology",
    ],
  },
  {
    Degree: "Master of Arts",
    Majors: [
      "English",
      "History",
      "Political Science",
      "Economics",
      "Sociology",
      "Psychology",
    ],
  },
  {
    Degree: "Master of Computer Applications",
    Majors: [
      "Application Software",
      "Hardware Technology",
      "Management Information Systems",
      "Internet",
      "Software Development",
      "Systems Management",
    ],
  },
  {
    Degree: "Master of Pharmacy",
    Majors: [
      "Pharmaceutics",
      "Pharmacology",
      "Pharmaceutical Chemistry",
      "Pharmacognosy",
      "Quality Assurance",
    ],
  },
  {
    Degree: "Master of Education",
    Majors: [
      "Educational Technology",
      "Educational Management",
      "Curriculum and Instruction",
      "Special Education",
      "Educational Planning",
    ],
  },
  {
    Degree: "Master of Laws",
    Majors: [
      "Corporate Law",
      "Criminal Law",
      "International Law",
      "Intellectual Property Law",
      "Tax Law",
      "Constitutional Law",
    ],
  },
  {
    Degree: "Master of Fine Arts",
    Majors: [
      "Painting",
      "Sculpting",
      "Applied Arts",
      "Art History",
      "Printmaking",
    ],
  },
  {
    Degree: "Master of Public Health",
    Majors: [
      "Epidemiology",
      "Health Policy and Management",
      "Biostatistics",
      "Environmental Health",
      "Social and Behavioral Sciences",
    ],
  },
];

export const PhdDegree = [
  {
    major: "Physics",
    specializations: [
      "Particle Physics",
      "Quantum Mechanics",
      "Condensed Matter Physics",
      "Astrophysics",
    ],
  },
  {
    major: "Chemistry",
    specializations: [
      "Organic Chemistry",
      "Inorganic Chemistry",
      "Physical Chemistry",
      "Analytical Chemistry",
      "Theoretical Chemistry",
    ],
  },
  {
    major: "Biology",
    specializations: [
      "Molecular Biology",
      "Cell Biology",
      "Genetics",
      "Neuroscience",
      "Ecology",
      "Evolutionary Biology",
    ],
  },
  {
    major: "Computer Science",
    specializations: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Theoretical Computer Science",
      "Human-Computer Interaction",
      "Cyber Security",
    ],
  },
  {
    major: "Engineering",
    specializations: [
      "Civil Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Computer Engineering",
      "Chemical Engineering",
      "Aerospace Engineering",
    ],
  },
  {
    major: "Economics",
    specializations: [
      "Microeconomics",
      "Macroeconomics",
      "Econometrics",
      "Developmental Economics",
      "International Economics",
      "Financial Economics",
    ],
  },
  {
    major: "Mathematics",
    specializations: [
      "Algebra",
      "Geometry",
      "Topology",
      "Number Theory",
      "Applied Mathematics",
      "Statistics",
    ],
  },
  {
    major: "Medicine",
    specializations: [
      "Internal Medicine",
      "Surgery",
      "Pediatrics",
      "Psychiatry",
      "Pathology",
      "Radiology",
    ],
  },
  {
    major: "English Literature",
    specializations: [
      "British Literature",
      "American Literature",
      "Postcolonial Literature",
      "Literary Theory",
      "Language Studies",
    ],
  },
  {
    major: "History",
    specializations: [
      "Indian History",
      "European History",
      "World History",
      "Cultural History",
      "Economic History",
      "Social History",
    ],
  },
  {
    major: "Law",
    specializations: [
      "Constitutional Law",
      "Criminal Law",
      "Corporate Law",
      "International Law",
      "Environmental Law",
      "Human Rights Law",
    ],
  },
  {
    major: "Management",
    specializations: [
      "Finance",
      "Marketing",
      "Operations Management",
      "Human Resources",
      "Strategic Management",
      "Information Technology Management",
    ],
  },
  {
    major: "Psychology",
    specializations: [
      "Clinical Psychology",
      "Cognitive Psychology",
      "Social Psychology",
      "Educational Psychology",
      "Industrial-Organizational Psychology",
    ],
  },
  {
    major: "Agriculture",
    specializations: [
      "Agronomy",
      "Plant Breeding",
      "Soil Science",
      "Horticulture",
      "Animal Husbandry",
      "Agricultural Economics",
    ],
  },
  {
    major: "Environmental Science",
    specializations: [
      "Ecology",
      "Environmental Policy",
      "Natural Resource Management",
      "Pollution Control",
      "Sustainable Development",
    ],
  },
];

export default navConfig;
