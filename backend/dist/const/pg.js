"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg = {
    "Master of Business Administration": [
        "mba",
        "MBA",
        "business",
        "Business",
        "administration",
        "Administration"
    ],
    "Master of Business Administration Finance": [
        "finance",
        "Finance"
    ],
    "Master of Business Administration Marketing": [
        "marketing",
        "Marketing"
    ],
    "Master of Business Administration Human Resources": [
        "hr",
        "HR",
        "human resources",
        "Human Resources"
    ],
    "Master of Business Administration Operations Management": [
        "operations",
        "Operations",
        "ops",
        "Ops"
    ],
    "Master of Business Administration Information Technology": [
        "mba it",
        "MBA IT",
        "information technology",
        "Information Technology",
    ],
    "Master of Technology": ["mtech", "MTech", "technology", "Technology"],
    "Master of Technology Computer Science and Engineering": [
        "mtech cse",
        "MTech CSE",
        "Master computer science",
        "Computer Science",
        "engineering",
        "Engineering"
    ],
    "Master of Technology Mechanical Engineering": [
        "mtech me",
        "MTech ME",
        "mechanical engineering",
        "Mechanical Engineering"
    ],
    "Master of Technology Electrical Engineering": [
        "mtech ee",
        "MTech EE",
        "electrical engineering",
        "Electrical Engineering"
    ],
    "Master of Technology Civil Engineering": [
        "mtech ce",
        "MTech CE",
        "civil engineering",
        "Civil Engineering"
    ],
    "Master of Technology Chemical Engineering": [
        "mtech chemE",
        "MTech ChemE",
        "chemical engineering",
        "Chemical Engineering"
    ],
    "Master of Technology Biotechnology": [
        "mtech biotech",
        "MTech Biotech",
        "biotechnology",
        "Biotechnology"
    ],
    "Master of Science": ["ms science", "MS Science", "science", "Science"],
    "Master of Science Physics": [
        "ms physics",
        "MS Physics",
        "physics",
        "Physics"
    ],
    "Master of Science Chemistry": [
        "ms chemistry",
        "MS Chemistry",
        "chemistry",
        "Chemistry"
    ],
    "Master of Science Biology": [
        "ms biology",
        "MS Biology",
        "biology",
        "Biology"
    ],
    "Master of Science Mathematics": [
        "ms mathematics",
        "MS Mathematics",
        "mathematics",
        "Mathematics"
    ],
    "Master of Science Environmental Science": [
        "ms environmental science",
        "MS Environmental Science",
        "environmental science",
        "Environmental Science"
    ],
    "Master of Science Biotechnology": [
        "ms biotech",
        "MS Biotech",
        "biotechnology",
        "Biotechnology"
    ],
    "Master of Arts": ["ma", "MA", "arts", "Arts"],
    "Master of Arts English": ["ma english", "MA English", "english", "English"],
    "Master of Arts History": ["ma history", "MA History", "history", "History"],
    "Master of Arts Political Science": [
        "ma political science",
        "MA Political Science",
        "political science",
        "Political Science"
    ],
    "Master of Arts Economics": [
        "ma economics",
        "MA Economics",
        "economics",
        "Economics"
    ],
    "Master of Arts Sociology": [
        "ma sociology",
        "MA Sociology",
        "sociology",
        "Sociology"
    ],
    "Master of Arts Psychology": [
        "ma psychology",
        "MA Psychology",
        "psychology",
        "Psychology"
    ],
    "Master of Computer Applications": [
        "mca",
        "MCA",
        "computer applications",
        "Computer Applications"
    ],
    "Master of Computer Applications Application Software": [
        "mca software",
        "MCA Software",
        "application software",
        "Application Software"
    ],
    "Master of Computer Applications Hardware Technology": [
        "mca hardware",
        "MCA Hardware",
        "hardware technology",
        "Hardware Technology"
    ],
    "Master of Computer Applications Management Information Systems": [
        "mis",
        "MIS",
        "information",
        "Information"
    ],
    "Master of Computer Applications Internet": [
        "internet",
        "Internet"
    ],
    "Master of Computer Applications Software Development": [
        "software development",
        "Software Development"
    ],
    "Master of Computer Applications Systems Management": [
        "systems management",
        "Systems Management"
    ],
    "Master of Pharmacy": ["mpharm", "MPharm", "pharmacy", "Pharmacy"],
    "Master of Pharmacy Pharmaceutics": [
        "pharmaceutics",
        "Pharmaceutics"
    ],
    "Master of Pharmacy Pharmacology": [
        "pharmacology",
        "Pharmacology"
    ],
    "Master of Pharmacy Pharmaceutical Chemistry": [
        "mpharm chem",
        "MPharm Chem",
        "pharma chem",
        "pharma Chem",
        "pharmaceutical chemistry",
        "Pharmaceutical Chemistry"
    ],
    "Master of Pharmacy Pharmacognosy": [
        "pharmacognosy",
        "Pharmacognosy"
    ],
    "Master of Pharmacy Quality Assurance": [
        "qa",
        "QA",
        "assurance",
        "Assurance",
        "quality assurance",
        "Quality Assurance"
    ],
    "Master of Education": ["med", "MEd", "education", "Education", "ed", "Ed", "ED"],
    "Master of Education Educational Technology": [
        "edtech",
        "EdTech",
        "ED",
        "Ed",
        "educational technology",
        "Educational Technology"
    ],
    "Master of Education Educational Management": [
        "educational management",
        "Educational management",
        "Educational management",
        "Educational Management"
    ],
    "Master of Education Curriculum and Instruction": [
        "curriculum",
        "Curriculum",
        "instruction",
        "Instruction"
    ],
    "Master of Education Special Education": [
        "special",
        "Special"
    ],
    "Master of Education Educational Planning": [
        "educational planning",
        "Educational planning",
        "educational Planning",
        "Educational Planning"
    ],
    "Master of Laws": ["llm", "LLM", "laws", "Laws"],
    "Master of Laws Corporate Law": [
        "corporate",
        "Corporate"
    ],
    "Master of Laws Criminal Law": [
        "criminal",
        "Criminal"
    ],
    "Master of Laws International Law": [
        "international",
        "International"
    ],
    "Master of Laws Intellectual Property Law": [
        "ip",
        "IP",
        "property",
        "Property",
        "intellectual",
        "Intellectual"
    ],
    "Master of Laws Tax Law": [
        "tax",
        "Tax"
    ],
    "Master of Laws Constitutional Law": [
        "constitutional",
        "Constitutional"
    ],
    "Master of Fine Arts": ["mfa", "MFA", "fine arts", "Fine Arts"],
    "Master of Fine Arts Painting": [
        "painting",
        "Painting"
    ],
    "Master of Fine Arts Sculpting": [
        "sculpting",
        "Sculpting"
    ],
    "Master of Fine Arts Applied Arts": [
        "applied",
        "Applied"
    ],
    "Master of Fine Arts Art History": [
        "Art history",
        "Art history",
        "art history",
        "Art History"
    ],
    "Master of Fine Arts Printmaking": [
        "printmaking",
        "Printmaking"
    ],
    "Master of Public Health": ["mph", "MPH", "public health", "Public Health", "public", "health", "Public", "Health"],
    "Master of Public Health Epidemiology": [
        "epidemiology",
        "Epidemiology"
    ],
    "Master of Public Health Health Policy and Management": [
        "policy",
        "Policy"
    ],
    "Master of Public Health Biostatistics": [
        "biostatistics",
        "Biostatistics"
    ],
    "Master of Public Health Environmental Health": [
        "environmental health",
        "Environmental Health",
        "Environmental health",
        "environmental Health"
    ],
    "Master of Public Health Social and Behavioral Sciences": [
        "social",
        "behavioral",
        "Behavioral"
    ]
};
exports.default = pg;
