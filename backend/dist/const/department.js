"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const department = {
    Finance: [
        'Budgeting',
        'Financial Analysis',
        'Forecasting',
        'Cash Flow Management',
        'Accounting',
        'Financial Reporting',
        'Cost Accounting',
        'Taxation',
        'Internal Controls',
        'Auditing',
        'Financial Planning',
        'Risk Management',
        'Treasury Management',
        'Investment Analysis',
        'Strategic Planning',
        'Variance Analysis',
        'Compliance',
        'General Ledger',
        'Accounts Payable',
        'Accounts Receivable',
        'SOX',
        'GAAP',
        'Financial Modeling',
        'ERP Systems',
        'Mergers & Acquisitions',
        'Capital Budgeting',
        'Credit Analysis',
        'Asset Management',
        'Reconciliation',
        'Business Valuation',
    ],
    'Human Resources': [
        'Employee Relations',
        'Recruitment',
        'Onboarding',
        'Performance Management',
        'Training and Development',
        'HR Policies',
        'Compensation and Benefits',
        'Talent Management',
        'HR Strategy',
        'Compliance',
        'Workforce Planning',
        'HR Analytics',
        'Succession Planning',
        'Diversity and Inclusion',
        'HRIS',
        'Payroll Administration',
        'Labor Law',
        'Conflict Resolution',
        'Staffing',
        'Organizational Development',
        'Change Management',
        'Employee Engagement',
        'Talent Acquisition',
        'Interviewing',
        'Job Descriptions',
        'Employee Retention',
        'HR Consulting',
        'Strategic Planning',
        'Employer Branding',
        'Human Capital Management',
    ],
    'Information Technology': [
        'Cloud Computing',
        'Cybersecurity',
        'Data Analysis',
        'Database Management',
        'DevOps',
        'Machine Learning',
        'Network Architecture',
        'Software Development',
        'Artificial Intelligence',
        'Technical Support',
        'IT Infrastructure',
        'Project Management',
        'Systems Administration',
        'Web Development',
        'Programming Languages',
        'Information Security',
        'Business Intelligence',
        'IT Service Management',
        'Virtualization',
        'Agile Methodology',
        'Big Data',
        'Information Systems',
        'Quality Assurance',
        'User Experience (UX)',
        'System Integration',
        'Mobile Application Development',
        'IT Compliance',
        'Cloud Services',
        'Blockchain',
        'Internet of Things (IoT)',
    ],
    Marketing: [
        'Brand Management',
        'Market Research',
        'Digital Marketing',
        'SEO/SEM',
        'Social Media Marketing',
        'Content Strategy',
        'Email Marketing',
        'Marketing Campaigns',
        'Google Analytics',
        'Product Launch',
        'CRM',
        'Consumer Behavior',
        'Advertising',
        'Public Relations',
        'Lead Generation',
        'Target Market Analysis',
        'Marketing Automation',
        'Conversion Rate Optimization',
        'E-commerce Marketing',
        'Media Planning',
        'Copywriting',
        'Graphic Design',
        'Event Planning',
        'Strategic Planning',
        'Competitive Analysis',
        'Customer Segmentation',
        'Influencer Partnerships',
        'Brand Strategy',
        'Content Creation',
        'B2B / B2C Marketing',
    ],
    Sales: [
        'Business Development',
        'Account Management',
        'Lead Generation',
        'Sales Targets',
        'Revenue Growth',
        'Market Research',
        'Customer Relationship Management',
        'Sales Strategy',
        'Competitive Analysis',
        'Negotiation',
        'Sales Presentations',
        'Product Demonstration',
        'Prospecting',
        'Sales Forecasting',
        'Quota Achievement',
        'Closing Techniques',
        'Client Acquisition',
        'Sales Cycle Management',
        'Sales Training',
        'B2B Sales',
        'B2C Sales',
        'Key Account Handling',
        'Pipeline Management',
        'CRM Software',
        'Cold Calling',
        'Contract Negotiation',
        'Cross-Selling',
        'Upselling',
        'Solution Selling',
        'Team Leadership',
    ],
    'Research and Development': [
        'Research',
        'Development',
        'Product Design',
        'Innovation',
        'Prototyping',
        'Data Analysis',
        'Technical Writing',
        'Patenting',
        'Experimental Design',
        'Project Management',
        'Quality Control',
        'Product Testing',
        'Scientific Method',
        'Analytical Skills',
        'Laboratory Management',
        'Peer-Reviewed Publications',
        'Grant Writing',
        'Cross-Functional Teamwork',
        'Problem Solving',
        'Statistical Analysis',
        'Feasibility Studies',
        'Research Proposals',
        'Technology Transfer',
        'Intellectual Property',
        'Clinical Trials',
        'Biotechnology',
        'Engineering',
        'Machine Learning',
        'Chemistry',
        'Physics',
    ],
    Production: [
        'Manufacturing',
        'Production Planning',
        'Process Improvement',
        'Quality Control',
        'Lean Manufacturing',
        'Six Sigma',
        'Operational Efficiency',
        'Continuous Improvement',
        'Assembly Line',
        'Supply Chain Management',
        'Production Scheduling',
        'Safety Compliance',
        'Inventory Management',
        'Equipment Maintenance',
        'Workforce Management',
        'Cost Reduction',
        'Product Development',
        '5S',
        'Kaizen',
        'Root Cause Analysis',
        'Production Metrics',
        'Machinery Operations',
        'Standard Operating Procedures (SOPs)',
        'ISO Standards',
        'Just-in-Time (JIT)',
        'Total Quality Management (TQM)',
        'Production Optimization',
        'Workplace Safety',
        'Material Requirements Planning (MRP)',
        'Capacity Planning',
    ],
    Purchasing: [
        'Procurement',
        'Supplier Negotiation',
        'Vendor Management',
        'Supply Chain Management',
        'Inventory Control',
        'Purchase Orders',
        'Strategic Sourcing',
        'Cost Reduction',
        'Materials Management',
        'Contract Management',
        'Spend Analysis',
        'Supplier Relationship Management',
        'Request for Proposal (RFP)',
        'Supplier Evaluation',
        'Compliance Management',
        'Purchasing Strategies',
        'Category Management',
        'Total Cost of Ownership',
        'Import/Export',
        'Global Sourcing',
        'Buying',
        'Bid Analysis',
        'Price Analysis',
        'Procurement Software',
        'E-Procurement',
        'Risk Management',
        'Quality Assurance',
        'Inventory Optimization',
        'Market Research',
        'Supplier Diversity',
    ],
    Legal: [
        'Litigation',
        'Contracts',
        'Compliance',
        'Corporate Law',
        'Intellectual Property',
        'Legal Research',
        'Legal Writing',
        'Due Diligence',
        'Regulatory Affairs',
        'Dispute Resolution',
        'Estate Planning',
        'Civil Law',
        'Criminal Law',
        'Negotiation',
        'Mergers & Acquisitions',
        'Legal Advice',
        'Risk Management',
        'Corporate Governance',
        'Employment Law',
        'Antitrust',
        'Document Review',
        'Arbitration',
        'Data Privacy',
        'Environment Law',
        'Patents',
        'Securities',
        'Legal Strategy',
        'Trademarks',
        'Bankruptcy',
        'Mediation',
    ],
    'Customer Service': [
        'Customer Support',
        'Client Relations',
        'Problem Resolution',
        'Communication Skills',
        'Help Desk',
        'Product Knowledge',
        'Call Center',
        'Customer Retention',
        'Service Delivery',
        'Conflict Resolution',
        'CRM Software',
        'Ticketing Systems',
        'Empathy',
        'Customer Satisfaction',
        'Multitasking Skills',
        'Order Processing',
        'Customer Engagement',
        'Feedback Collection',
        'Patience',
        'Sales Support',
        'Technical Support',
        'Customer Education',
        'Live Chat Support',
        'Customer Onboarding',
        'Phone Etiquette',
        'Quality Assurance',
        'Customer Service Training',
        'Account Management',
        'Return Merchandise Authorization (RMA)',
        'Bilingual Customer Support',
    ],
    'Supply Chain': [
        'Inventory Management',
        'Logistics',
        'Procurement',
        'Supply Chain Optimization',
        'Demand Planning',
        'Warehouse Management',
        'Transportation',
        'Sourcing',
        'Supplier Relationship Management',
        'Materials Management',
        'Supply Chain Analytics',
        'Forecasting',
        'Cost Reduction',
        'Vendor Management',
        'Supply Chain Strategy',
        'Lean Principles',
        'ERP Systems',
        'Compliance',
        'Quality Control',
        'Continuous Improvement',
        'Distribution Centers',
        'Import/Export',
        'Global Sourcing',
        'Risk Management',
        'Customer Service',
        'Order Fulfillment',
        'Project Management',
        'Six Sigma',
        'SKU Management',
        'KPI Tracking',
    ],
    'Quality Assurance': [
        'Test Cases',
        'QA Automation',
        'Selenium',
        'Quality Control',
        'Test Plans',
        'Defect Tracking',
        'Regression Testing',
        'ISTQB Certification',
        'JIRA',
        'Test Scripts',
        'Continuous Integration',
        'Performance Testing',
        'Software Testing Life Cycle (STLC)',
        'Manual Testing',
        'Bug Reporting',
        'Test Strategy',
        'Quality Metrics',
        'User Acceptance Testing',
        'Cross-browser Compatibility',
        'Test Execution',
        'Risk Management',
        'Version Control',
        'Scrum',
        'Agile Methodology',
        'Black Box Testing',
        'White Box Testing',
        'API Testing',
        'Quality Standards',
        'Test Automation Frameworks',
        'Exploratory Testing',
    ],
    Administration: [
        'Administrative Support',
        'Scheduling',
        'Office Management',
        'Data Entry',
        'Record Keeping',
        'Inventory Management',
        'Policy Implementation',
        'Project Coordination',
        'Workflow Supervision',
        'Compliance',
        'Meeting Facilitation',
        'Executive Support',
        'Time Management',
        'Report Generation',
        'Contract Management',
        'Budgeting',
        'Strategic Planning',
        'Customer Service',
        'Procurement',
        'Human Resources',
        'Staff Training',
        'Performance Evaluation',
        'Resource Allocation',
        'Troubleshooting',
        'Database Administration',
        'Business Administration',
        'Confidentiality',
        'Multi-tasking',
        'Process Improvement',
        'Communication Skills',
    ],
    Engineering: [
        'AutoCAD',
        'SolidWorks',
        'MATLAB',
        'Project Management',
        '3D Modeling',
        'Finite Element Analysis',
        'CAD/CAM',
        'Prototyping',
        'Machine Design',
        'Troubleshooting',
        'Lean Manufacturing',
        'Six Sigma',
        'Quality Assurance',
        'Root Cause Analysis',
        'Electrical Circuits',
        'PLC Programming',
        'SCADA',
        'HVAC',
        'Renewable Energy',
        'Thermodynamics',
        'Structural Analysis',
        'Python',
        'Data Analysis',
        'System Design',
        'CFD',
        'P&ID',
        'Project Planning',
        'Risk Management',
        'Commissioning',
        'Technical Writing',
    ],
    Operations: [
        'Process Improvement',
        'Supply Chain Management',
        'Project Management',
        'Logistics Coordination',
        'Inventory Management',
        'Operational Efficiency',
        'Quality Control',
        'Cost Reduction',
        'Strategic Planning',
        'Team Leadership',
        'Performance Metrics',
        'Workflow Optimization',
        'Six Sigma',
        'Lean Manufacturing',
        'Continuous Improvement',
        'Change Management',
        'Vendor Management',
        'Customer Service',
        'SOP Implementation',
        'Risk Management',
        'ERP Systems',
        'Scheduling',
        'Compliance',
        'Data Analysis',
        'Forecasting',
        'Business Process',
        'Root Cause Analysis',
        'Resource Allocation',
        'P&L Management',
        'KPI Tracking',
    ],
    'Public Relations': [
        'Press Releases',
        'Media Relations',
        'Crisis Management',
        'Strategic Communications',
        'Social Media Management',
        'Content Creation',
        'Brand Management',
        'Event Planning',
        'Publicity Campaigns',
        'Reputation Management',
        'Speech Writing',
        'Copywriting',
        'Public Affairs',
        'Spokesperson',
        'Influencer Collaborations',
        'Corporate Communications',
        'Messaging Strategy',
        'Audience Engagement',
        'Communication Planning',
        'Media Pitches',
        'Stakeholder Relations',
        'Editorial Calendars',
        'Public Speaking',
        'Press Conferences',
        'Interview Preparation',
        'Newsletters',
        'Digital Communications',
        'Communication Research',
        'Media Training',
        'SEO/SEM',
    ],
    'Health and Safety': [
        'OSHA compliance',
        'Risk assessment',
        'Safety training',
        'Incident investigation',
        'Emergency response',
        'Hazard recognition',
        'EHS (Environmental, Health, and Safety) management',
        'Safety audits',
        'Industrial hygiene',
        'Occupational health',
        'Personal protective equipment (PPE)',
        'Safety policies',
        'Accident prevention',
        'Regulatory compliance',
        'Ergonomics',
        'Workplace safety',
        'Safety inspections',
        'Fire safety',
        'Safety program development',
        'HSE (Health, Safety, and Environment)',
        'First aid',
        'CPR certified',
        'Environmental compliance',
        'Waste management',
        'Safety committee leadership',
        'Injury reporting',
        'Job safety analysis (JSA)',
        'Chemical safety',
        'Safety data sheets (SDS) management',
        'ISO 45001',
    ],
    Education: [
        'Curriculum Development',
        'Classroom Management',
        'Educational Technology',
        'Instructional Design',
        'Student Assessment',
        'Lesson Planning',
        'Special Education',
        'Differentiated Instruction',
        'Educational Leadership',
        'Continuous Improvement',
        'Literacy',
        'Student Engagement',
        'Teaching',
        'Professional Development',
        'Academic Advising',
        'Pedagogy',
        'Learning Outcomes',
        'Behavioral Management',
        'Educational Research',
        'Faculty Training',
        'Education Policy',
        'E-Learning',
        'Student Counseling',
        'Higher Education',
        'Grant Writing',
        'Accreditation',
        'Educational Psychology',
        'Mentoring',
        'Education Administration',
        'Education Advocacy',
    ],
    'Training and Development': [
        'instructional design',
        'e-learning',
        'curriculum development',
        'learning management systems',
        'facilitation',
        'employee engagement',
        'leadership development',
        'performance management',
        'succession planning',
        'needs analysis',
        'competency mapping',
        'training delivery',
        'certification programs',
        'workshop development',
        'onboarding',
        'talent development',
        'coaching',
        'team building',
        'assessment tools',
        'organizational development',
        'diversity training',
        'change management',
        'career development',
        'mentoring programs',
        'soft skills training',
        'compliance training',
        'webinar production',
        'ROI on training',
        'learning strategies',
        'training metrics',
    ],
    'Corporate Strategy': [
        'Strategic Planning',
        'Market Analysis',
        'Competitive Intelligence',
        'Business Development',
        'Growth Strategies',
        'Scenario Planning',
        'Mergers and Acquisitions',
        'Corporate Governance',
        'Financial Modeling',
        'Portfolio Management',
        'Change Management',
        'Cross-functional Leadership',
        'Organizational Development',
        'Corporate Partnerships',
        'Stakeholder Engagement',
        'Risk Management',
        'Project Management',
        'Performance Metrics',
        'Innovation Management',
        'Value Proposition',
        'Operational Excellence',
        'P&L Responsibility',
        'Business Transformation',
        'Due Diligence',
        'Market Entry Strategies',
        'Strategic Alliances',
        'Investor Relations',
        'Corporate Social Responsibility',
        'Resource Allocation',
        'Benchmarking',
    ],
    'Business Development': [
        'Lead Generation',
        'Market Analysis',
        'Sales Strategy',
        'Negotiation',
        'Relationship Building',
        'Revenue Growth',
        'Client Acquisition',
        'Account Management',
        'Competitive Analysis',
        'Strategic Partnerships',
        'B2B Sales',
        'CRM Software',
        'Proposal Writing',
        'Contract Management',
        'Cross-functional Collaboration',
        'Business Planning',
        'Sales Presentations',
        'Networking',
        'Customer Retention',
        'Sales Forecasting',
        'Product Demonstrations',
        'Value Proposition',
        'Market Penetration',
        'Sales Cycle Management',
        'Business Case Development',
        'Project Management',
        'Consultative Sales Approach',
        'Target Market Identification',
        'Brand Awareness Campaigns',
        'Trade Shows Participation',
    ],
    Compliance: [
        'Regulatory Compliance',
        'Risk Management',
        'Audit',
        'Anti-Money Laundering',
        'AML',
        'Know Your Customer',
        'KYC',
        'Compliance Training',
        'Policy Development',
        'Ethics',
        'GDPR',
        'Data Privacy',
        'Sanctions',
        'Sarbanes-Oxley Act',
        'SOX',
        'Compliance Monitoring',
        'Internal Controls',
        'Due Diligence',
        'Legal Compliance',
        'Financial Regulations',
        'Compliance Reporting',
        'Consumer Protection Laws',
        'Corporate Governance',
        'Quality Control',
        'Compliance Reviews',
        'Investigations',
        'Compliance Audits',
        'Fraud Prevention',
        'Risk Assessment',
        'Code of Conduct',
    ],
    Sustainability: [
        'Sustainable Development',
        'Green Initiatives',
        'Environmental Policy',
        'Carbon Footprint Reduction',
        'Renewable Energy',
        'Corporate Social Responsibility (CSR)',
        'LEED Certification',
        'Climate Change',
        'Resource Efficiency',
        'Eco-friendly Practices',
        'Waste Management',
        'Sustainability Reporting',
        'Environmental Impact Assessment',
        'Conservation Strategies',
        'Sustainable Supply Chain',
        'Energy Conservation',
        'Environmental Compliance',
        'Life Cycle Assessment',
        'Sustainability Metrics',
        'Biodiversity',
        'Sustainability Education',
        'Community Engagement',
        'Emissions Tracking',
        'Sustainability Strategy',
        'Regulatory Affairs',
        'Green Building',
        'Sustainable Agriculture',
        'Water Conservation',
        'Environmental Auditing',
        'Stakeholder Engagement',
    ],
    'Export and Import': [
        'Customs Compliance',
        'Export Controls',
        'Freight Forwarding',
        'International Trade',
        'Logistics Management',
        'Shipping Regulations',
        'Trade Documentation',
        'Import Licensing',
        'Supply Chain Coordination',
        'Tariff Classification',
        'Incoterms',
        'Export Licenses',
        'Customs Brokerage',
        'Trade Compliance',
        'Harmonized System Codes',
        'Letter of Credit',
        'Bill of Lading',
        'Foreign Trade Zones',
        'Trade Agreements',
        'Cargo Handling',
        'Commodity Expertise',
        'Export Declarations',
        'Proforma Invoice',
        'Shipping Schedules',
        'Regulatory Affairs',
        'Market Analysis',
        'International Logistics',
        'Risk Management',
        'Global Sourcing',
        'Multimodal Transportation',
    ],
    Logistics: [
        'Supply Chain Management',
        'Inventory Control',
        'Warehouse Operations',
        'Distribution Management',
        'Transportation Coordination',
        'Shipping and Receiving',
        'Logistics Planning',
        'Freight Forwarding',
        'Route Optimization',
        'Customs Compliance',
        'Logistics Analysis',
        'ERP Systems',
        'Material Handling',
        'Cost Reduction',
        'Vendor Negotiations',
        'Order Fulfillment',
        'Logistics Software',
        'Continuous Improvement',
        'Project Management',
        'Demand Planning',
        'Import/Export Operations',
        'Cross-Docking',
        'Third-Party Logistics (3PL)',
        'Supply Chain Optimization',
        'Fleet Management',
        'Quality Assurance',
        'KPI Monitoring',
        'Safety Regulations',
        'Capacity Planning',
        'Lean Logistics',
    ],
    Procurement: [
        'Supplier Management',
        'Vendor Relations',
        'Contract Negotiation',
        'Strategic Sourcing',
        'Purchase Orders',
        'Supply Chain Management',
        'Cost Reduction',
        'Procure-to-Pay',
        'Inventory Management',
        'E-procurement',
        'Material Requirements Planning (MRP)',
        'Category Management',
        'Supplier Evaluation',
        'Supplier Diversity',
        'Compliance Management',
        'Risk Management',
        'Market Analysis',
        'Demand Forecasting',
        'Total Cost of Ownership (TCO)',
        'Request for Proposal (RFP)',
        'Request for Quotation (RFQ)',
        'Procurement Policies',
        'Supplier Integration',
        'Bidding Process',
        'Spend Analysis',
        'Quality Control',
        'Negotiation Skills',
        'Procurement Software',
        'Global Sourcing',
        'Supply Management',
    ],
    'Product Management': [
        'Product strategy',
        'Market analysis',
        'Competitive analysis',
        'Product life cycle',
        'Roadmapping',
        'Requirement gathering',
        'User stories',
        'Backlog prioritization',
        ' go-to-market strategy',
        'Feature definition',
        'Product launch',
        'User experience (UX)',
        'Customer journey',
        'Minimum viable product (MVP)',
        'Key performance indicators (KPIs)',
        'Agile methodology',
        'Scrum',
        'Cross-functional leadership',
        'Stakeholder management',
        'Pricing strategy',
        'Revenue growth',
        'Product vision',
        'Business case',
        'Data-driven decision-making',
        'Customer feedback',
        'Prototyping',
        'A/B testing',
        'User acceptance testing (UAT)',
        'Product development',
        'Innovation management',
    ],
    'Project Management': [
        'Project Lifecycle',
        'Stakeholder Engagement',
        'Scope Management',
        'Time Management',
        'Cost Estimation',
        'Resource Allocation',
        'Risk Management',
        'Quality Control',
        'Agile Methodology',
        'Waterfall Model',
        'Scrum Framework',
        'Kanban',
        'Project Charter',
        'Work Breakdown Structure',
        'Milestone Tracking',
        'Gantt Chart',
        'Project Scheduling',
        'Change Management',
        'PMO (Project Management Office)',
        'Performance Metrics',
        'Budget Oversight',
        'Team Leadership',
        'Cross-functional Coordination',
        'Vendor Management',
        'Project Status Reporting',
        'Issue Resolution',
        'Project Planning',
        'Critical Path Method',
        'CAPM/PMP Certification',
        'Project Documentation',
    ],
    'Risk Management': [
        'Risk Assessment',
        'Risk Analysis',
        'Compliance',
        'Risk Mitigation',
        'Enterprise Risk Management (ERM)',
        'Operational Risk',
        'Financial Risk',
        'Market Risk',
        'Credit Risk',
        'Risk Reporting',
        'Quantitative Analysis',
        'Regulatory Frameworks',
        'Risk Appetite',
        'Internal Controls',
        'Risk Modeling',
        'Business Continuity Planning',
        'Due Diligence',
        'Risk Control Self-Assessment (RCSA)',
        'Governance',
        'Audit',
        'Policy Development',
        'Basel Accords',
        'Sarbanes-Oxley Act (SOX)',
        'Control Testing',
        'Risk Strategy',
        'Fraud Investigation',
        'Regulatory Compliance',
        'Stress Testing',
        'Value at Risk (VaR)',
        'Incident Management',
    ],
    'Data Analysis': [
        'Data Analysis',
        'Statistics',
        'Machine Learning',
        'Data Mining',
        'Big Data',
        'SQL',
        'Python',
        'R Programming',
        'Data Visualization',
        'Tableau',
        'Predictive Modeling',
        'Business Intelligence',
        'Excel',
        'Power BI',
        'Hadoop',
        'SAS',
        'Matplotlib',
        'Seaborn',
        'Quantitative Research',
        'Time Series Analysis',
        'Data Cleaning',
        'Data Integration',
        'ETL',
        'Data Management',
        'Regression Analysis',
        'Cluster Analysis',
        'Decision Trees',
        'Natural Language Processing',
        'A/B Testing',
        'SPSS',
    ],
    'Innovation Management': [
        'Ideation',
        'Product Development',
        'Design Thinking',
        'Innovation Strategy',
        'R&D Management',
        'Project Management',
        'Intellectual Property',
        'Open Innovation',
        'Innovation Ecosystems',
        'Technology Transfer',
        'Market Analysis',
        'Prototyping',
        'User-Centered Design',
        'Disruptive Technologies',
        'Business Model Innovation',
        'Innovation Culture',
        'Cross-functional Team',
        'Agile Methodologies',
        'Innovation Pipeline',
        'Lean Startup',
        'Patent Strategy',
        'Venture Capital',
        'Intrapreneurship',
        'Strategic Partnerships',
        'Customer Discovery',
        'Innovation Metrics',
        'Commercialization',
        'Innovation Consulting',
        'Foresight and Trends Analysis',
        'Continuous Improvement',
    ],
};
exports.default = department;
