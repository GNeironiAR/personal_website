document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const currentDate = new Date().toISOString().split('T')[0];

    // Experiencia laboral
    const workExperiences = [
        {
            company: 'Argeniss Software',
            position: 'Data Analyst',
            startDate: '2024-09-01',
            endDate: currentDate,
            technologies: 'Microsoft reporting tools, SQL, VBNet',
            achievements: [
                'Created and maintained paginated reports in Microsoft environments for the client project.',
                'Analyzed complex data sets to identify trends and insights.',
                'Consulted with stakeholders to understand reporting requirements.',
                'Created visually appealing and informative reports.',
                'Programmed SQL queries for efficient data extraction.',
                'Created a VBNet code for generating Bar Codes in the CODE39 standard without using third-party APIs or Libraries.'
            ]
        },
        {
            company: 'Scale AI',
            position: 'AI Quality Assurance analyst',
            startDate: '2023-08-01',
            endDate: currentDate,
            technologies: 'AI models, Code review',
            achievements: [
                'Help train generative AI models by performing code review of model output.',
                'Write code snippets with reasoning to help the AI model respond appropriately to prompts.',
                'Fix bugs and improve model performance.'
            ]
        },
        {
            company: 'NTB Solutions',
            position: 'Sr Data Analyst',
            startDate: '2018-08-01',
            endDate: '2024-02-29',
            technologies: 'Azure Databricks, Azure, Spark, Python, Power BI, Pentaho, Tableau, SQL and NoSQL databases',
            achievements: [
                'Built a custom report with Pentaho Report Designer that helped optimize the budget and save millions of dollars for a major health insurance company.',
                'Implemented patient tracking that allows hospitals and clinics to continuously monitor patient health, schedule medical appointment reminders, and alert about potential medical interventions.',
                'Developed predictive analytics to predict demand for medical resources, such as hospital beds or medical supplies, to ensure efficient resource management in healthcare institutions.',
                'Evaluated operational efficiency and health care costs in health institutions, identifying areas for improvement and cost reduction.'
            ]
        },
        {
            company: 'Sanatorio La Entrerriana',
            position: 'Data Analyst and IT Manager',
            startDate: '2008-07-01',
            endDate: '2018-08-31',
            technologies: 'PowerBI, Google Data Studio, SQL, Oracle databases',
            achievements: [
                'Led the implementation of a health information system.',
                'Analyzed, designed, and implemented ETL processes.',
                'Implemented dashboards, reports, and visualizations with PowerBI and Google Data Studio.',
                'Took care of an implementation project that was declining, implying a cultural change in the entire organization, migrating to a data-driven process and decision-making.'
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
            item.innerHTML = `
                <div class="timeline-content">
                    <h2>${exp.company}</h2>
                    <h3>${exp.position}</h3>
                    <p>${exp.startDate} - ${exp.endDate === currentDate ? 'Present' : exp.endDate}</p>
                    ${isMobile ? '' : `<p><strong>Technologies:</strong> ${exp.technologies}</p>`}
                    <ul>
                        ${exp.achievements.slice(0, isMobile ? 2 : 3).map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
            `;
            container.appendChild(item);
        });
    }

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