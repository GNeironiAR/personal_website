document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const currentDate = new Date().toISOString().split('T')[0];

    // Función para crear el contenido del tooltip
    function createTooltipContent(item) {
        if (item.group === 4) {
            // Para los estudios, mostrar solo el año y el curso
            return `
                <h3>${item.title.split(': ')[1]}</h3>
                <p><strong>Year:</strong> ${item.title.split(': ')[0]}</p>
            `;
        } else {
            // Para las experiencias laborales, mantener el formato actual
            return `
                <h3>${item.content}</h3>
                <p><strong>Period:</strong> ${item.start} - ${item.end || 'Presente'}</p>
                <p><strong>Position:</strong> ${item.title}</p>
                ${item.technologies ? `<p><strong>Technologies:</strong> ${item.technologies}</p>` : ''}
                ${item.achievements ? `<p><strong>Achievements:</strong></p><ul>${item.achievements.map(achievement => `<li>${achievement}</li>`).join('')}</ul>` : ''}
            `;
        }
    }

    // Crear los elementos de la línea de tiempo
    const items = new vis.DataSet([
        {
            id: 1, 
            content: 'Sanatorio La Entrerriana', 
            start: '2008-07-01', 
            end: '2018-08-31', 
            group: 1, 
            title: 'Data Analyst and IT Manager',
            technologies: 'PowerBI, Google Data Studio, SQL, Oracle databases',
            achievements: [
                'Led the implementation of a health information system.',
                'Analyzed, designed, and implemented ETL processes.',
                'Implemented dashboards, reports, and visualizations with PowerBI and Google Data Studio.',
                'Took care of an implementation project that was declining, implying a cultural change in the entire organization, migrating to a data-driven process and decision-making.'
            ]
        },
        {
            id: 2, 
            content: 'NTB Solutions', 
            start: '2018-08-01', 
            end: '2024-02-29', 
            group: 2, 
            title: 'Sr Data Analyst',
            technologies: 'Azure Databricks, Azure, Spark, Python, Power BI, Pentaho, Tableau, SQL and NoSQL databases',
            achievements: [
                'Built a custom report with Pentaho Report Designer that helped optimize the budget and save millions of dollars for a major health insurance company.',
                'Implemented patient tracking that allows hospitals and clinics to continuously monitor patient health, schedule medical appointment reminders, and alert about potential medical interventions.',
                'Developed predictive analytics to predict demand for medical resources, such as hospital beds or medical supplies, to ensure efficient resource management in healthcare institutions.',
                'Evaluated operational efficiency and health care costs in health institutions, identifying areas for improvement and cost reduction.'
            ]
        },
        {
            id: 3, 
            content: 'Scale AI', 
            start: '2023-08-01', 
            end: currentDate, 
            group: 3, 
            title: 'AI Quality Assurance analyst',
            technologies: 'AI models, Code review',
            achievements: [
                'Help train generative AI models by performing code review of model output.',
                'Write code snippets with reasoning to help the AI model respond appropriately to prompts.',
                'Fix bugs and improve model performance.'
            ]
        },
        {id: 4, content: '', start: '2015-01-01', group: 4, subgroup: 1, type: 'point', title: '2015: Database fundamental - Universidad Tecnológica Nacional (FRBA)'},
        {id: 5, content: '', start: '2016-01-01', group: 4, subgroup: 2, type: 'point', title: '2016: Database programing - PL-SQL - Universidad Tecnológica Nacional (FRBA)'},
        {id: 6, content: '', start: '2017-01-01', group: 4, subgroup: 1, type: 'point', title: '2017: Bachelor\'s Degree in Business Management - Universidad Autónoma de Entre Ríos'},
        {id: 7, content: '', start: '2018-01-01', group: 4, subgroup: 2, type: 'point', title: '2018: ITIL V3® - Universidad Tecnológica Nacional (FRBA)'},
        {id: 8, content: '', start: '2018-06-01', group: 4, subgroup: 1, type: 'point', title: '2018: ITIL® Foundation Certificate in IT Service Management - PeopleCert'},
        {id: 9, content: '', start: '2019-01-01', group: 4, subgroup: 2, type: 'point', title: '2019: Programing fundamentals - Universidad Tecnológica Nacional (FRBA)'},
        {id: 10, content: '', start: '2020-01-01', group: 4, subgroup: 1, type: 'point', title: '2020: Scrum Grand Master - Universidad Tecnológica Nacional (FRBA)'},
        {id: 11, content: '', start: '2020-06-01', group: 4, subgroup: 2, type: 'point', title: '2020: Programador Lenguaje R - Edutin'},
        {id: 12, content: '', start: '2021-01-01', group: 4, subgroup: 1, type: 'point', title: '2021: Project manager officer - Universidad Tecnológica Nacional (FRBA)'},
        {id: 13, content: '', start: '2021-03-01', group: 4, subgroup: 2, type: 'point', title: '2021: EC2 - AWS'},
        {id: 14, content: '', start: '2021-04-01', group: 4, subgroup: 1, type: 'point', title: '2021: Introduction to AWS Solutions - AWS'},
        {id: 15, content: '', start: '2021-05-01', group: 4, subgroup: 2, type: 'point', title: '2021: Serverless development - AWS'},
        {id: 16, content: '', start: '2021-06-01', group: 4, subgroup: 1, type: 'point', title: '2021: Cloud Practitioner Essentials - AWS'},
        {id: 17, content: '', start: '2021-07-01', group: 4, subgroup: 2, type: 'point', title: '2021: CloudFormation - AWS'},
        {id: 18, content: '', start: '2021-08-01', group: 4, subgroup: 1, type: 'point', title: '2021: Elastic Container Services - AWS'},
        {id: 19, content: '', start: '2021-09-01', group: 4, subgroup: 2, type: 'point', title: '2021: Scrum Foundation Professional Certificate - CertiProf'},
        {id: 20, content: '', start: '2022-01-01', group: 4, subgroup: 1, type: 'point', title: '2022: Analista PMO – Project Management Officer - Universidad Tecnológica Nacional'},
        {id: 21, content: '', start: '2022-03-01', group: 4, subgroup: 2, type: 'point', title: '2022: Elements of AI - University of Helsinki'},
        {id: 22, content: '', start: '2022-06-01', group: 4, subgroup: 1, type: 'point', title: '2022: Machine Learning Engineer - Anyone AI'},
        {id: 23, content: '', start: '2023-01-01', group: 4, subgroup: 2, type: 'point', title: '2023: Azure Fundamentals. Describe cloud concepts - Azure'},
        {id: 24, content: '', start: '2023-02-01', group: 4, subgroup: 1, type: 'point', title: '2023: Azure Fundamentals. Describe Azure architecture and services - Azure'},
        {id: 25, content: '', start: '2023-03-01', group: 4, subgroup: 2, type: 'point', title: '2023: Azure Fundamentals. Describe Azure management - Azure'},
        {id: 26, content: '', start: '2023-04-01', group: 4, subgroup: 1, type: 'point', title: '2023: Get started with data engineering on Azure - Azure'},
        {id: 27, content: '', start: '2023-05-01', group: 4, subgroup: 2, type: 'point', title: '2023: Data engineering task with Apache Spark groups on Azure Synapse - Azure'},
        {id: 28, content: '', start: '2023-06-01', group: 4, subgroup: 1, type: 'point', title: '2023: Data analysis solutions with serverless SQL groups on Azure Synapse - Azure'},
        {id: 29, content: '', start: '2023-07-01', group: 4, subgroup: 2, type: 'point', title: '2023: Data modeling, querying and exploring on Azure Synapse - Azure'},
        {id: 30, content: '', start: '2023-08-01', group: 4, subgroup: 1, type: 'point', title: '2023: Data storage job with on Azure Synapse Analytics - Azure'},
        {id: 31, content: '', start: '2023-09-01', group: 4, subgroup: 2, type: 'point', title: '2023: Version Control with GIT - Azure'},
        {id: 32, content: '', start: '2023-10-01', group: 4, subgroup: 1, type: 'point', title: '2023: Data transformation and transfer with Data pipelines on Azure Synapse Analytics - Azure'},
        {id: 33, content: '', start: '2023-11-01', group: 4, subgroup: 2, type: 'point', title: '2023: C1 English Language - EFSET'},
        {id: 34, content: '', start: '2023-12-01', group: 4, subgroup: 1, type: 'point', title: '2023: B2.2 English - Freedom Private Institute'},
        {id: 35, content: '', start: '2024-01-01', group: 4, subgroup: 2, type: 'point', title: '2024: Introducción a Amazon Kinesis Analytics - AWS'},
        {id: 36, content: '', start: '2024-02-01', group: 4, subgroup: 1, type: 'point', title: '2024: Amazon EMR Getting Started - AWS'},
        {id: 37, content: '', start: '2024-03-01', group: 4, subgroup: 2, type: 'point', title: '2024: AWS Glue Getting Started - AWS'},
        {id: 38, content: '', start: '2024-04-01', group: 4, subgroup: 1, type: 'point', title: '2024: Amazon Athena - AWS'},
        {id: 39, content: '', start: '2024-05-01', group: 4, subgroup: 2, type: 'point', title: '2024: Amazon QuickSight Getting Started - AWS'},
        {id: 40, content: '', start: '2024-06-01', group: 4, subgroup: 1, type: 'point', title: '2024: Visualizing with QuickSight - AWS'},
        {id: 41, content: '', start: '2024-07-01', group: 4, subgroup: 2, type: 'point', title: '2024: AWS IoT Analytics Getting Started - AWS'},
        {id: 42, content: '', start: '2024-08-01', group: 4, subgroup: 1, type: 'point', title: '2024: Amazon Redshift Getting Started - AWS'}
    ]);

    // Configurar los grupos
    const groups = new vis.DataSet([
        {id: 1, content: 'Work Experience', className: 'work-experience'},
        {id: 2, content: 'Work Experience', className: 'work-experience'},
        {id: 3, content: 'Work Experience', className: 'work-experience'},
        {id: 4, content: 'Education', className: 'education'}
    ]);

    // Configurar las opciones
    const options = {
        stack: false,
        start: '2008-01-01',
        end: `${currentYear + 1}-12-31`,
        editable: false,
        margin: {
            item: 10,
            axis: 5
        },
        tooltip: {
            followMouse: false,
            overflowMethod: 'flip'
        },
        timeAxis: {
            scale: 'year',
            step: 1
        },
        format: {
            minorLabels: {
                year: 'YYYY'
            }
        },
        zoomable: false,
        moveable: false,
        onInitialDrawComplete: function() {
            // Desactivar el tooltip nativo de vis.js
            timeline.setOptions({ tooltip: { template: () => '' } });
        }
    };

    // Crear la línea de tiempo
    const container = document.getElementById('timeline');
    const timeline = new vis.Timeline(container, items, groups, options);

    // Crear el elemento del tooltip personalizado
    const customTooltip = document.createElement('div');
    customTooltip.className = 'custom-tooltip';
    document.body.appendChild(customTooltip);

    // Variable para almacenar el temporizador del tooltip
    let tooltipTimer;

    // Función para posicionar el tooltip dentro de los límites de la pantalla
    function positionTooltip(x, y) {
        const tooltipRect = customTooltip.getBoundingClientRect();
        const bodyRect = document.body.getBoundingClientRect();

        let left = x + 10; // 10px de offset horizontal
        let top = y - 20;  // 20px de offset vertical

        // Ajustar horizontalmente si se sale por la derecha
        if (left + tooltipRect.width > bodyRect.right) {
            left = x - tooltipRect.width - 10;
        }

        // Ajustar verticalmente si se sale por abajo
        if (top + tooltipRect.height > bodyRect.bottom) {
            top = bodyRect.bottom - tooltipRect.height - 10;
        }

        // Asegurar que no se salga por arriba o por la izquierda
        top = Math.max(10, top);
        left = Math.max(10, left);

        customTooltip.style.left = `${left}px`;
        customTooltip.style.top = `${top}px`;
        
    }


    // Manejar la aparición del tooltip
    timeline.on('itemover', function(properties) {
        clearTimeout(tooltipTimer); // Limpiar cualquier temporizador existente
        const item = items.get(properties.item);
        customTooltip.innerHTML = createTooltipContent(item);
        customTooltip.style.display = 'block';
        customTooltip.style.position = 'absolute';
        
    // Posicionar el tooltip
    positionTooltip(properties.event.pageX, properties.event.pageY);
        
        // Añadir la clase visible para la animación
        requestAnimationFrame(() => customTooltip.classList.add('visible'));
    });

    // Manejar la desaparición del tooltip
    timeline.on('itemout', function() {
        customTooltip.classList.remove('visible');
        tooltipTimer = setTimeout(() => {
            customTooltip.style.display = 'none';
        }, 300);
    });

    // Actualizar la posición del tooltip al mover el mouse
    document.addEventListener('mousemove', function(event) {
        if (customTooltip.style.display === 'block') {
            positionTooltip(event.pageX, event.pageY);
        }
    });

    timeline.on('mouseOver', function(props) {
        if (props.item) {
            props.event.stopPropagation();
        }
    });

    //custom legend
    function addCustomLegend() {
        const legendContainer = document.createElement('div');
        legendContainer.className = 'custom-legend';
        legendContainer.innerHTML = `
            <div class="legend-item work-experience">
                <span class="legend-color"></span>
                <span>Work Experience</span>
            </div>
            <div class="legend-item education">
                <span class="legend-color"></span>
                <span>Education</span>
            </div>
        `;
        container.appendChild(legendContainer);
    }

    // Llamar a la función para agregar la leyenda personalizada
    addCustomLegend();
    
});