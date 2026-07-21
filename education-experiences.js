document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const currentDate = new Date().toISOString().split('T')[0];

    // Work Experience
    const workExperiences = [
        {
            company: 'Marvell Technology',
            position: 'Senior AI Engineer - Forward Deployed Engineer',
            startDate: '2026-06-01',
            endDate: currentDate,
            client: 'Contractor via InterEx Group',
            technologies: 'LLM Gateway, Claude API, Anthropic Admin API, AWS Bedrock, Snowflake/BigQuery, Databricks, PowerBI, Copilot Kit, ServiceNow, Glean, Workday, MCP, RAG, Prompt Engineering',
            achievements: [
                'Enterprise AI engineer within Marvell\'s Enterprise AI team (semiconductor company, Nvidia NVLink Fusion partner - USD 2B partnership announced March 2026).',
                'Own 5 concurrent enterprise AI verticals and engagements: Finance (dashboards and analytics), HR/People (governance-first configuration on Workday HRIS), Global Workplace Services (real estate, facilities, EHS, sustainability), Video Creators Conference Support (AI video tooling for presenter enablement), and Claude Cost Monitoring & Alerting.',
                'Designed end-to-end solution architecture for Claude Cost Monitoring: LLM Gateway (source of truth) -> warehouse -> BI dashboards + alert engine + Copilot Kit self-service governance UI.',
                'Author bilingual delivery documentation (ES working copy + EN VDI-ready) with vertical-specific training and templates, following a reusable playbook for onboarding new verticals.',
                'Ship code review and peer-review docs cross-team, coordinating with Enterprise AI leadership (Lead Architect, Business Engagement Model owner) and the platform team on tooling standards (Databricks, PowerBI).',
                'Operate under a Forward Deployed Engineering model: scoping AI enablement per role and user rather than universal tooling.'
            ]
        },
        {
            company: 'Argeniss Software',
            position: 'Solutions Architect / Pre-Sales Engineer',
            startDate: '2026-03-01',
            endDate: currentDate,
            client: 'Multiple Clients (Travel-tech, Healthcare)',
            technologies: 'AWS, Cloud Architecture, Solution Design, Technical Discovery, Stack Selection, Healthcare Interoperability, Multi-tenant SaaS Design',
            achievements: [
                'Technical advisor in pre-sales engagements supporting the COO during client discovery and proposal phases.',
                'Lead technical assessments, architecture proposals, and stack recommendations for early-stage and pre-seed clients across travel tech and healthcare.',
                'Created Technical Assessment Playbook (Discovery -> Assessment -> Proposal) standardizing the pre-sales workflow across clients.',
                'Designed a Reviewer-of-Record engagement model for a travel-tech CRM built with AI coding agents: architecture review of critical paths + production support with severity-based SLAs.',
                'Authored a staffing-model proposal for phased healthcare (homecare AR) ERP modernization on AWS (Postgres operational + Redshift analytical domains, Cognito + SSO, PWA-first, scheduling algorithm).',
                'Established reusable proposal patterns: AWS-first, Cognito over custom JWT, ETL batch (Glue) vs CDC managed, dual operational/analytical domains, snapshot JSONB vs cross-schema FKs.',
                'Generate additional engineering scope for delivery teams (PM + Architect + Engineer) by anchoring trust through technical depth.',
                'Formalized role scope with Argeniss leadership (July 2026): pre-sales technical ownership + limited healthcare-domain advisory for delivery teams.'
            ]
        },
        {
            company: 'Quira',
            position: 'Founder & Technical Lead',
            startDate: '2025-12-01',
            endDate: currentDate,
            client: 'SaaS Startup',
            technologies: 'AWS (CDK 9 stacks, ECS Fargate, ALB, WAF, Cognito, RDS PostgreSQL 15, SQS, Lambda, SNS, Route53, ACM, KMS), FastAPI, Next.js 14, Material UI, next-intl, Recharts, ESP32 (Arduino C++), SHT31, HMAC-SHA256 + HKDF, WeasyPrint, Python, TypeScript, Resend',
            achievements: [
                'Founded multi-tenant industrial IoT platform for environmental monitoring (temperature, humidity), with real-time alerts, auditable PDF/CSV reports, and native Microsoft Teams integration via Power Automate.',
                'Designed and deployed full production stack on AWS via 9 CDK stacks: ECS Fargate behind ALB with WAF, Route53 + ACM, RDS PostgreSQL 15, Cognito, SQS, 6 Lambdas, and SNS.',
                'Built FastAPI backend with 47 endpoints and 103 tests; HMAC-SHA256 + HKDF device authentication with idempotent client-side deduplication; alert engine with severity escalation; async report generation via WeasyPrint workers (PDF/CSV).',
                'Designed sensor-agnostic data model and driver registry to support multi-sensor expansion (CO2, pressure, vibration on V2 roadmap) without schema changes.',
                'Developed Next.js 14 admin panel with 25 pages, 6-section sidebar, full ES/EN i18n via next-intl, and Recharts-based reading visualizations.',
                'Validated end-to-end with real ESP32 + SHT31 hardware: device readings reach the platform, trigger alerts, and render in production charts.',
                'Designed B2B2B revenue model with tripartite split between platform, partner, and vendor; first partner LOI signed in Colombia (aerospace warehouse pilot, ~30 devices).',
                'Production launch: April 19, 2026.'
            ]
        },
        {
            company: 'CloudPrune AI',
            position: 'Founder & Technical Lead',
            startDate: '2025-11-01',
            endDate: currentDate,
            client: 'SaaS Startup',
            technologies: 'AWS (CDK, Lambda, ECS Fargate, RDS PostgreSQL async, API Gateway, S3, SQS, Cost Explorer, EventBridge, KMS), FastAPI, Mangum, Next.js 14, Material UI, PostgreSQL, Stripe, Auth0, Resend, Claude API, MCP, Python, TypeScript, Docker, Turbo, GitHub Actions OIDC',
            achievements: [
                'Founded production B2B2B FinOps SaaS platform that analyzes AWS accounts and auto-generates Infrastructure-as-Code in 3 formats (CDK Python, Terraform HCL, CloudFormation YAML) for cost optimization (app.cloudpruneai.com).',
                'Built and deployed 18 resource analyzers covering 31+ optimization checks across compute, storage, networking, databases, commitments, extended support, and AI/ML services.',
                'Shipped a production real-time anomaly detection engine (Q3 2026): 3-sigma against a trailing 30-day baseline, EventBridge daily cron, Lambda worker, and alert delivery via Slack and Teams webhooks with per-account settings + history UI.',
                'Added an AI cost tracking module for Bedrock, OpenAI, and Anthropic spend visibility (token-level tracking on the Q3+ roadmap).',
                'Architected hybrid serverless platform: FastAPI on AWS Lambda + Mangum (API), ECS Fargate (scan workers), async RDS PostgreSQL, 271-test suite with CI/CD via GitHub Actions OIDC (no long-lived credentials).',
                'Implemented AI-powered IaC code generation using Claude API (Anthropic) with multi-format output and business context enrichment via Claude Haiku.',
                'Designed B2B2B partner-led GTM model with tiered pricing (Free / Assist EUR 4,900 one-time / Operate EUR 590/month): white-label PDF reports, gainshare (10% / 7.5% at scale) plus recurring subscriptions.',
                'Onboarded 4 active partners across Argentina, Spain, and Uruguay; first real scan with a consulting partner detected USD 5,260/year in waste across a client AWS account.',
                'GDPR-compliant architecture (Privacy Policy, DPA, ROPA, Security Posture Document, DELETE /users/me). USPTO trademark registration in progress (Serial: 99585602; certificate expected August 2026).'
            ]
        },
        {
            company: 'Argeniss Software',
            position: 'AWS Data Integration Engineer',
            startDate: '2025-10-01',
            endDate: currentDate,
            client: 'Fintech Company',
            technologies: 'AWS (DMS, Lambda, Step Functions, DynamoDB, S3, Redshift, KMS), Terraform, Python, SQL Server, MongoDB, REST APIs',
            achievements: [
                'Architected and deployed automated DMS system replicating 10-30 SQL Server databases to Redshift with CDC (30-120 sec latency).',
                'Built reusable Terraform modules (DMS instance, endpoints, KMS) following Infrastructure-as-Code best practices.',
                'Designed multi-source architecture supporting SQL Server (DMS), MongoDB (Change Streams), and REST APIs (Salesforce, NetSuite).',
                'Developed orchestration system with Step Functions and Lambda (Python) for zero-touch database onboarding (3 commands to replicate).',
                'Implemented DynamoDB-driven configuration catalog and S3 data lake for semi-structured data (JSON/Parquet).',
                'Deployed multi-AZ, Security Hub compliant infrastructure with automated KMS rotation and CloudWatch monitoring.',
                'Created Redshift Spectrum integration for querying S3-based data alongside relational tables.',
                'Delivered 60-70% infrastructure reusability across source types, reducing onboarding time from weeks to days.'
            ]
        },
        {
            company: 'Argeniss Software',
            position: 'AWS Cloud and AI Engineer',
            startDate: '2025-02-01',
            endDate: '2025-10-01',
            client: 'Multiple Clients (E-learning, Healthcare)',
            technologies: 'AWS (CDK, Lambda Docker, API Gateway, Bedrock Claude 3.5 Sonnet, Athena, Glue, S3, DynamoDB, SQS, CloudFront, EventBridge, Secrets Manager, Parameter Store, KMS, Lake Formation, IAM, SageMaker Canvas, CloudWatch), GitHub Actions, Python, MySQL, Parquet, Vue.js, Docker',
            achievements: [
                'Concurrent client engagements covering data engineering, AI/LLM integration, and machine learning forecasting; sole engineer responsible for design and implementation across multiple production systems.',
                'Architected complete ETL system extracting student performance data from MySQL to S3 Data Lake with Parquet optimization and user partitioning.',
                'Built dynamic REST API with API Gateway + Lambda + Athena for configurable student analytics endpoints (no-code endpoint creation via DynamoDB).',
                'Developed LLM-powered analysis system using AWS Bedrock (Claude 3.5 Sonnet) and RAG pattern for personalized educational recommendations and NCLEX question generation, with iterative AI feedback loop.',
                'Implemented 6 production Lambda functions (containerized) handling ETL, API queries, LLM analysis, NCLEX generation, SQS updates, and batch processing.',
                'Designed Vue.js frontend with CloudFront distribution for NCLEX question generator.',
                'Built API-to-Data Lake pipeline with dual-Lambda architecture, incremental timestamp-based processing, JSON-to-Parquet conversion, and partitioned storage (year/month/day).',
                'Implemented machine learning forecast infrastructure using SageMaker Canvas with dual prediction system (short-term 180 days / long-term 12 months), full GitHub Actions CI/CD with multi-environment deployment.',
                'Designed Healthcare Data Lake with serverless CDK architecture, Lake Formation granular access control, KMS encryption, and HIPAA-compliant security.',
                'Optimized query costs with Athena partitioning strategies, achieving sub-second API response times.'
            ]
        },
        {
            company: 'Argeniss Software',
            position: 'Data Engineer (confidential client)',
            startDate: '2024-09-01',
            endDate: '2025-02-01',
            client: 'Confidential',
            technologies: 'AWS (Lambda, S3, Glue, Lake Formation, IAM, KMS, SQS), Python, Apache Parquet, AWS CDK, Pandas, PyArrow, IaC',
            achievements: [
                'Designed and implemented a serverless data processing architecture using AWS CDK (Cloud Development Kit) for infrastructure as code (IaC) automation.',
                'Developed a Python Lambda function for efficient JSON to Parquet data transformation, including implementation of processing logic to handle multiple types of medical records, optimization of data schema for analytical queries, implementation of robust error handling and logging, and integration with AWS services such as S3 and SQS.',
                'Designed and implemented a data cataloging system using AWS Glue, including configuration of crawlers for automatic schema discovery, design of a database structure optimized for analytical queries, and implementation of efficient partitioning policies.',
                'Implemented data security and governance best practices, including IAM role and policy configuration following the principle of least privilege, implementation of data encryption at rest using KMS, and configuration of Lake Formation for granular access control.',
                'Achieved significant reduction in storage and processing costs through data format optimization.',
                'Improved query performance through implementation of Parquet and efficient partitioning.',
            ]
        },
        {
            company: 'Argeniss Software',
            position: 'Data Analyst (confidential client)',
            startDate: '2024-09-01',
            endDate: '2025-02-01',
            client: 'Confidential',
            technologies: 'Microsoft reporting tools, SQL, VBNet, SSRS, SSIS, SSAS, Power BI',
            achievements: [
                'Created and maintained paginated reports in Microsoft environments for client projects, improving complex data visualization.',
                'Analyzed complex data sets to identify trends and insights, providing valuable information for decision-making.',
                'Consulted with stakeholders to understand reporting requirements, ensuring deliverables met client expectations.',
                'Designed visually appealing and informative reports, enhancing data understanding for end-users.',
                'Programmed efficient SQL queries for data extraction, optimizing report performance.',
                'Developed VBNet code for generating bar codes in CODE39 standard without using third-party APIs or libraries, saving licensing costs.',
                'Implemented BI solutions using SSRS, SSIS, and SSAS, improving data integration and analysis across the organization.',
                'Created interactive dashboards in Power BI, allowing users to explore data intuitively and make real-time data-driven decisions.'
            ]
        },
        {
            company: 'Scale AI',
            position: 'AI Quality Assurance Analyst',
            startDate: '2023-08-01',
            endDate: '2024-10-20',
            technologies: 'AI models, Code review, Python, JavaScript, Natural Language Processing',
            achievements: [
                'Contributed to training generative AI models by performing code reviews of model output, improving response accuracy and relevance.',
                'Wrote code snippets with detailed reasoning to help the AI model respond appropriately to prompts, enhancing its code comprehension and generation capabilities.',
                'Identified and fixed bugs in model output, improving overall generated code quality.',
                'Proposed and implemented model performance improvements, optimizing its ability to handle complex programming tasks.',
                'Collaborated in creating specialized training datasets to enhance model capabilities in specific programming languages.',
                'Participated in evaluating and adjusting model parameters to optimize performance across various coding tasks.',
                'Developed automated test scripts to assess the quality and consistency of AI model output.'
            ]
        },
        {
            company: 'NTB Solutions',
            position: 'Sr Data Analyst',
            startDate: '2018-08-01',
            endDate: '2024-02-29',
            technologies: 'Azure Databricks, Azure, Spark, Python, Power BI, Pentaho, Tableau, SQL and NoSQL databases, Machine Learning',
            achievements: [
                'Designed and developed a custom report with Pentaho Report Designer that helped optimize budget and save millions of dollars for a major health insurance company.',
                'Implemented a patient tracking system allowing hospitals and clinics to continuously monitor patient health, schedule medical appointment reminders, and alert about potential medical interventions, significantly improving preventive care.',
                'Developed predictive analytics models to forecast demand for medical resources, such as hospital beds or medical supplies, ensuring efficient resource management in healthcare institutions.',
                'Evaluated operational efficiency and healthcare costs in health institutions, identifying areas for improvement and cost reduction, resulting in a 15% annual savings in operational expenses.',
                'Led the implementation of a data lake solution using Azure Databricks, enhancing the organization\'s ability to process and analyze large volumes of health data.',
                'Designed and implemented complex ETL pipelines using Spark and Python, automating data integration from multiple sources and improving data quality.',
                'Created interactive dashboards in Power BI and Tableau, providing executives and medical staff with critical real-time information for decision-making.',
                'Implemented machine learning models to predict hospital readmissions and optimize resource allocation, resulting in a 20% improvement in patient care efficiency.'
            ]
        },
        {
            company: 'Sanatorio La Entrerriana',
            position: 'Data Analyst and IT Manager',
            startDate: '2008-07-01',
            endDate: '2018-08-31',
            technologies: 'PowerBI, Google Data Studio, SQL, Oracle databases, ETL processes, Health Information Systems',
            achievements: [
                'Led multi-year implementation of integrated HIS/LIS/RIS health information system across the institution, achieving full staff adoption and replacing legacy paper-based workflows.',
                'Analyzed, designed, and implemented complex ETL processes, integrating data from multiple systems and departments to create a single source of truth for health information.',
                'Created executive dashboards and operational reports with PowerBI and Google Data Studio, providing management and medical staff with critical information for decision-making.',
                'Managed Oracle databases for mission-critical healthcare applications, optimizing SQL queries for report generation and data extraction.',
                'Built and led IT team from 2 to 8 professionals, managing vendor relationships and coordinating with clinical leadership on technology adoption strategies.',
                'Implemented a medical inventory and supply management system that resulted in a 25% reduction in inventory costs.',
                'Designed and executed training programs for medical and administrative staff on the effective use of new information systems, improving adoption and efficiency.',
                'Established data security policies and procedures that ensured compliance with health data privacy regulations, avoiding potential sanctions and protecting sensitive patient information.'
            ]
        }
    ];

    // Educación
const educationItems = [
    { title: 'Amazon Connect - Infrastructure as Code Fundamentals', institution: 'AWS', year: '2024' },
    { title: 'Amazon QuickSight Advanced Business Intelligence Authoring (Part 2)', institution: 'AWS', year: '2024' },
    { title: 'Amazon QuickSight Advanced Business Intelligence Authoring (PART 1)', institution: 'AWS', year: '2024' },
    { title: 'Amazon Redshift Getting Started', institution: 'AWS', year: '2024' },
    { title: 'AWS IoT Analytics Getting Started', institution: 'AWS', year: '2024' },
    { title: 'Visualizing with QuickSight', institution: 'AWS', year: '2024' },
    { title: 'Amazon QuickSight Getting Started', institution: 'AWS', year: '2024' },
    { title: 'Amazon Athena', institution: 'AWS', year: '2024' },
    { title: 'AWS Glue Getting Started', institution: 'AWS', year: '2024' },
    { title: 'Amazon EMR Getting Started', institution: 'AWS', year: '2024' },
    { title: 'Introducción a Amazon Kinesis Analytics', institution: 'AWS', year: '2024' },
    { title: 'B2.2 English', institution: 'Freedom Private Institute', year: '2023' },
    { title: 'C1 English Language', institution: 'EFSET', year: '2023' },
    { title: 'Data transformation and transfer with Data pipelines on Azure Synapse Analytics', institution: 'Azure', year: '2023' },
    { title: 'Version Control with GIT', institution: 'Azure', year: '2023' },
    { title: 'Data storage job with on Azure Synapse Analytics', institution: 'Azure', year: '2023' },
    { title: 'Data modeling, querying and exploring on Azure Synapse', institution: 'Azure', year: '2023' },
    { title: 'Data analysis solutions with serverless SQL groups on Azure Synapse', institution: 'Azure', year: '2023' },
    { title: 'Data engineering task with Apache Spark groups on Azure Synapse', institution: 'Azure', year: '2023' },
    { title: 'Get started with data engineering on Azure', institution: 'Azure', year: '2023' },
    { title: 'Azure Fundamentals. Describe Azure management', institution: 'Azure', year: '2023' },
    { title: 'Azure Fundamentals. Describe Azure architecture and services', institution: 'Azure', year: '2023' },
    { title: 'Azure Fundamentals. Describe cloud concepts', institution: 'Azure', year: '2023' },
    { title: 'Machine Learning Engineer', institution: 'Anyone AI', year: '2022' },
    { title: 'Elements of AI', institution: 'University of Helsinki', year: '2022' },
    { title: 'Analista PMO – Project Management Officer', institution: 'Universidad Tecnológica Nacional', year: '2022' },
    { title: 'Scrum Foundation Professional Certificate', institution: 'CertiProf', year: '2021' },
    { title: 'Elastic Container Services', institution: 'AWS', year: '2021' },
    { title: 'CloudFormation', institution: 'AWS', year: '2021' },
    { title: 'Cloud Practitioner Essentials', institution: 'AWS', year: '2021' },
    { title: 'Serverless development', institution: 'AWS', year: '2021' },
    { title: 'Introduction to AWS Solutions', institution: 'AWS', year: '2021' },
    { title: 'EC2', institution: 'AWS', year: '2021' },
    { title: 'Project manager officer', institution: 'Universidad Tecnológica Nacional (FRBA)', year: '2021' },
    { title: 'Programador Lenguaje R', institution: 'Edutin', year: '2020' },
    { title: 'Scrum Grand Master', institution: 'Universidad Tecnológica Nacional (FRBA)', year: '2020' },
    { title: 'Programing fundamentals', institution: 'Universidad Tecnológica Nacional (FRBA)', year: '2019' },
    { title: 'ITIL® Foundation Certificate in IT Service Management', institution: 'PeopleCert', year: '2018' },
    { title: 'ITIL V3®', institution: 'Universidad Tecnológica Nacional (FRBA)', year: '2018' },
    { title: "Bachelor's Degree in Business Management", institution: 'Universidad Autónoma de Entre Ríos', year: '2017' },
    { title: 'Database programing - PL-SQL', institution: 'Universidad Tecnológica Nacional (FRBA)', year: '2016' },
    { title: 'Database fundamental', institution: 'Universidad Tecnológica Nacional (FRBA)', year: '2015' }
];

function createTimelineItems() {
    const container = document.getElementById('timeline-container');
    const isMobile = window.innerWidth <= 768;
    
    workExperiences.forEach((exp, index) => {
        const item = document.createElement('div');
        item.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
        
        const visibleAchievements = isMobile ? 2 : 3;
        const achievementsList = exp.achievements
            .slice(0, visibleAchievements)
            .map(achievement => `<li>${achievement}</li>`)
            .join('');

        const hiddenAchievements = exp.achievements
            .slice(visibleAchievements)
            .map(achievement => `<li style="display: none;" class="hidden">${achievement}</li>`)
            .join('');

        item.innerHTML = `
            <div class="timeline-content">
                <h2>${exp.company}</h2>
                <h3>${exp.position}</h3>
                <p>${exp.startDate} - ${exp.endDate === currentDate ? 'Present' : exp.endDate}</p>
                ${isMobile ? '' : `<p><strong>Technologies:</strong> ${exp.technologies}</p>`}
                <ul>
                    ${achievementsList}
                    ${hiddenAchievements}
                </ul>
                ${exp.achievements.length > visibleAchievements ? 
                    '<button class="more-info">Click to see more achievements...</button>' : ''}
            </div>
        `;
        container.appendChild(item);
    });
}

// Función de toggle mejorada
window.toggleAchievements = function(element) {
    const content = element.closest('.timeline-content');
    const hiddenItems = content.querySelectorAll('li.hidden');
    const isExpanded = element.textContent.includes('less');
    
    hiddenItems.forEach(item => {
        item.style.display = isExpanded ? 'none' : 'list-item';
    });
    
    element.textContent = isExpanded ? 
        'Click to see more achievements...' : 
        'Click to see less';
};

// Event listener para los botones more-info
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('more-info')) {
        toggleAchievements(e.target);
    }
});


    // Updated function to create education items with new structure
    function createEducationItems() {
        const container = document.getElementById('education-container');
        educationItems.forEach(item => {
            const educationItem = document.createElement('div');
            educationItem.className = 'education-item';
            educationItem.innerHTML = `
                <div class="education-icon">🎓</div>
                <div class="education-details">
                    <div class="education-title">${item.title}</div>
                    <div class="education-institution">${item.institution}</div>
                    <div class="education-date">${item.year}</div>
                </div>
            `;
            container.appendChild(educationItem);
        });
    }

    createTimelineItems();
    createEducationItems();
});