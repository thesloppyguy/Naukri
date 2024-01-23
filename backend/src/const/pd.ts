const pd: { [key: string]: string[] } = {
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
        "operations management",
        "Operations Management"
    ],
    "Master of Business Administration Information Technology": [
        "mba it",
        "MBA IT"
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
        "mca mis",
        "MCA MIS",
        "management information systems",
        "Management Information Systems"
    ],
    "Master of Computer Applications Internet": [
        "mca internet",
        "MCA Internet",
        "internet",
        "Internet"
    ],
    "Master of Computer Applications Software Development": [
        "mca software development",
        "MCA Software Development",
        "software development",
        "Software Development"
    ],
    "Master of Computer Applications Systems Management": [
        "mca systems management",
        "MCA Systems Management",
        "systems management",
        "Systems Management"
    ],
    "Master of Pharmacy": ["mpharm", "MPharm", "pharmacy", "Pharmacy"],
    "Master of Pharmacy Pharmaceutics": [
        "mpharm pharmaceutics",
        "MPharm Pharmaceutics",
        "pharmaceutics",
        "Pharmaceutics"
    ],
    "Master of Pharmacy Pharmacology": [
        "mpharm pharmacology",
        "MPharm Pharmacology",
        "pharmacology",
        "Pharmacology"
    ],
    "Master of Pharmacy Pharmaceutical Chemistry": [
        "mpharm chem",
        "MPharm Chem",
        "pharmaceutical chemistry",
        "Pharmaceutical Chemistry"
    ],
    "Master of Pharmacy Pharmacognosy": [
        "mpharm pharmacognosy",
        "MPharm Pharmacognosy",
        "pharmacognosy",
        "Pharmacognosy"
    ],
    "Master of Pharmacy Quality Assurance": [
        "mpharm qa",
        "MPharm QA",
        "quality assurance",
        "Quality Assurance"
    ],
    "Master of Education": ["med", "MEd", "education", "Education"],
    "Master of Education Educational Technology": [
        "med edtech",
        "MEd EdTech",
        "educational technology",
        "Educational Technology"
    ],
    "Master of Education Educational Management": [
        "med management",
        "MEd Management",
        "educational management",
        "Educational Management"
    ],
    "Master of Education Curriculum and Instruction": [
        "med curriculum",
        "MEd Curriculum",
        "curriculum and instruction",
        "Curriculum and Instruction"
    ],
    "Master of Education Special Education": [
        "med special ed",
        "MEd Special Ed",
        "special education",
        "Special Education"
    ],
    "Master of Education Educational Planning": [
        "med planning",
        "MEd Planning",
        "educational planning",
        "Educational Planning"
    ],
    "Master of Laws": ["llm", "LLM", "laws", "Laws"],
    "Master of Laws Corporate Law": [
        "llm corporate law",
        "LLM Corporate Law",
        "corporate law",
        "Corporate Law"
    ],
    "Master of Laws Criminal Law": [
        "llm criminal law",
        "LLM Criminal Law",
        "criminal law",
        "Criminal Law"
    ],
    "Master of Laws International Law": [
        "llm international law",
        "LLM International Law",
        "international law",
        "International Law"
    ],
    "Master of Laws Intellectual Property Law": [
        "llm ip law",
        "LLM IP Law",
        "intellectual property law",
        "Intellectual Property Law"
    ],
    "Master of Laws Tax Law": [
        "llm tax law",
        "LLM Tax Law",
        "tax law",
        "Tax Law"
    ],
    "Master of Laws Constitutional Law": [
        "llm constitutional law",
        "LLM Constitutional Law",
        "constitutional law",
        "Constitutional Law"
    ],
    "Master of Fine Arts": ["mfa", "MFA", "fine arts", "Fine Arts"],
    "Master of Fine Arts Painting": [
        "mfa painting",
        "MFA Painting",
        "painting",
        "Painting"
    ],
    "Master of Fine Arts Sculpting": [
        "mfa sculpting",
        "MFA Sculpting",
        "sculpting",
        "Sculpting"
    ],
    "Master of Fine Arts Applied Arts": [
        "mfa applied arts",
        "MFA Applied Arts",
        "applied arts",
        "Applied Arts"
    ],
    "Master of Fine Arts Art History": [
        "mfa art history",
        "MFA Art History",
        "art history",
        "Art History"
    ],
    "Master of Fine Arts Printmaking": [
        "mfa printmaking",
        "MFA Printmaking",
        "printmaking",
        "Printmaking"
    ],
    "Master of Public Health": ["mph", "MPH", "public health", "Public Health"],
    "Master of Public Health Epidemiology": [
        "mph epidemiology",
        "MPH Epidemiology",
        "epidemiology",
        "Epidemiology"
    ],
    "Master of Public Health Health Policy and Management": [
        "mph policy",
        "MPH Policy",
        "health policy and management",
        "Health Policy and Management"
    ],
    "Master of Public Health Biostatistics": [
        "mph biostatistics",
        "MPH Biostatistics",
        "biostatistics",
        "Biostatistics"
    ],
    "Master of Public Health Environmental Health": [
        "mph environmental health",
        "MPH Environmental Health",
        "environmental health",
        "Environmental Health"
    ],
    "Master of Public Health Social and Behavioral Sciences": [
        "mph social sciences",
        "MPH Social Sciences",
        "social and behavioral sciences",
        "Social and Behavioral Sciences"
    ]
}
export default pd;