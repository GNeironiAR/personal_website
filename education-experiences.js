document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const currentDate = new Date().toISOString().split('T')[0];

    // Work Experience
    const workExperiences = [
        {
            company: 'Argeniss Software',
            position: 'Data Engineer (confidential client)',
            startDate: '2024-09-01',
            endDate: currentDate,
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
            endDate: currentDate,
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
                'Led the successful implementation of a comprehensive health information system, improving operational efficiency and quality of patient care across the organization.',
                'Analyzed, designed, and implemented complex ETL processes, integrating data from multiple systems and departments to create a single source of truth for health information.',
                'Implemented dashboards, reports, and visualizations with PowerBI and Google Data Studio, providing management and medical staff with critical information for decision-making.',
                'Rescued a declining implementation project, implying a cultural change throughout the organization, migrating to a data-driven decision-making process.',
                'Developed a custom patient tracking system that improved continuity of care and reduced medical errors by 30%.',
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


    function createEducationItems() {
        const container = document.getElementById('education-container');
        educationItems.forEach(item => {
            const educationItem = document.createElement('div');
            educationItem.className = 'education-item';
            educationItem.innerHTML = `
                <div class="education-icon">🎓</div>
                <div class="education-title">${item.title}</div>
                <div class="education-institution">${item.institution}</div>
                <div class="education-date">${item.year}</div>
            `;
            container.appendChild(educationItem);
        });
    }

    createTimelineItems();
    createEducationItems();
});