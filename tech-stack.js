const toolsData = {
    nodes: [
        { id: "Tools", group: 1 },
        { id: "Version Control", group: 2 },
        { id: "Project Management", group: 3 },
        { id: "Integration", group: 4 },
        { id: "Infrastructure", group: 5 },
        { id: "CI/CD", group: 6 },
        { id: "Docker", group: 2 },
        { id: "Git", group: 2 },
        { id: "GitHub", group: 2 },
        { id: "Jira", group: 3 },
        { id: "MS Project", group: 3 },
        { id: "Trello", group: 3 },
        { id: "ClickUp", group: 3 },
        { id: "Draw.io", group: 3 },
        { id: "Figma", group: 3 },
        { id: "MIRTH Connect", group: 4 },
        { id: "Mule", group: 4 },
        { id: "HL7/FHIR", group: 4 },
        { id: "AWS CDK", group: 5 },        
        { id: "IaC", group: 5 },
        { id: "GitHub Actions", group: 6 }
    ],
    links: [
        { source: "Tools", target: "Version Control", value: 1 },
        { source: "Tools", target: "Project Management", value: 1 },
        { source: "Tools", target: "Integration", value: 1 },
        { source: "Tools", target: "Infrastructure", value: 1 },
        { source: "Tools", target: "CI/CD", value: 1 },
        { source: "Version Control", target: "Docker", value: 1 },
        { source: "Version Control", target: "Git", value: 1 },
        { source: "Version Control", target: "GitHub", value: 1 },
        { source: "Project Management", target: "Jira", value: 1 },
        { source: "Project Management", target: "MS Project", value: 1 },
        { source: "Project Management", target: "Trello", value: 1 },
        { source: "Project Management", target: "ClickUp", value: 1 },
        { source: "Project Management", target: "Draw.io", value: 1 },
        { source: "Project Management", target: "Figma", value: 1 },
        { source: "Integration", target: "MIRTH Connect", value: 1 },
        { source: "Integration", target: "Mule", value: 1 },
        { source: "Integration", target: "HL7/FHIR", value: 1 },
        { source: "Infrastructure", target: "AWS CDK", value: 1 },
        { source: "Infrastructure", target: "IaC", value: 1 },
        { source: "CI/CD", target: "GitHub Actions", value: 1 }
    ]
};

const programmingData = {
    nodes: [
        { id: "Programming", group: 1 },
        { id: "Languages", group: 2 },
        { id: "Data Analysis", group: 3 },
        { id: "Data Visualization", group: 4 },
        { id: "Big Data", group: 5 },
        { id: "Machine Learning", group: 6 },
        { id: "Python", group: 2 },
        { id: "R", group: 2 },
        { id: "VB.NET", group: 2 },
        { id: "Scala", group: 2 },
        { id: "Django", group: 2 },
        { id: "JavaScript", group: 2 },
        { id: "Pandas", group: 3 },
        { id: "NumPy", group: 3 },
        { id: "Matplotlib", group: 3 },
        { id: "PyArrow", group: 3 },
        { id: "Power BI", group: 4 },
        { id: "Tableau", group: 4 },
        { id: "Pentaho", group: 4 },
        { id: "Google Data Studio", group: 4 },
        { id: "SSRS", group: 4 },
        { id: "SSAS", group: 4 },
        { id: "Apache Spark", group: 5 },
        { id: "PySpark", group: 5 },
        { id: "Pentaho Data Integration", group: 5 },
        { id: "SSIS", group: 5 },
        { id: "SageMaker", group: 6 },
        { id: "SageMaker Canvas", group: 6 }
    ],
    links: [
        { source: "Programming", target: "Languages", value: 1 },
        { source: "Programming", target: "Data Analysis", value: 1 },
        { source: "Programming", target: "Data Visualization", value: 1 },
        { source: "Programming", target: "Big Data", value: 1 },
        { source: "Programming", target: "Machine Learning", value: 1 },
        { source: "Languages", target: "Python", value: 1 },
        { source: "Languages", target: "R", value: 1 },
        { source: "Languages", target: "VB.NET", value: 1 },
        { source: "Languages", target: "Scala", value: 1 },
        { source: "Languages", target: "Django", value: 1 },
        { source: "Languages", target: "JavaScript", value: 1 },
        { source: "Data Analysis", target: "Pandas", value: 1 },
        { source: "Data Analysis", target: "NumPy", value: 1 },
        { source: "Data Analysis", target: "Matplotlib", value: 1 },
        { source: "Data Analysis", target: "PyArrow", value: 1 },
        { source: "Data Visualization", target: "Power BI", value: 1 },
        { source: "Data Visualization", target: "Tableau", value: 1 },
        { source: "Data Visualization", target: "Pentaho", value: 1 },
        { source: "Data Visualization", target: "Google Data Studio", value: 1 },
        { source: "Data Visualization", target: "SSRS", value: 1 },
        { source: "Data Visualization", target: "SSAS", value: 1 },
        { source: "Big Data", target: "Apache Spark", value: 1 },
        { source: "Big Data", target: "PySpark", value: 1 },
        { source: "Big Data", target: "Pentaho Data Integration", value: 1 },
        { source: "Big Data", target: "SSIS", value: 1 },
        { source: "Machine Learning", target: "SageMaker", value: 1 },
        { source: "Machine Learning", target: "SageMaker Canvas", value: 1 }
    ]
};

const databaseData = {
    nodes: [
        { id: "Databases", group: 1 },
        { id: "SQL", group: 2 },
        { id: "NoSQL", group: 3 },
        { id: "File Formats", group: 4 },
        { id: "Managed Services", group: 5 },
        { id: "PostgreSQL", group: 2 },
        { id: "MySQL", group: 2 },
        { id: "SQLite", group: 2 },
        { id: "Oracle", group: 2 },
        { id: "SQL Server", group: 2 },
        { id: "MongoDB", group: 3 },
        { id: "JSON", group: 4 },
        { id: "Parquet", group: 4 },
        { id: "Amazon RDS", group: 5 }
    ],
    links: [
        { source: "Databases", target: "SQL", value: 1 },
        { source: "Databases", target: "NoSQL", value: 1 },
        { source: "Databases", target: "File Formats", value: 1 },
        { source: "Databases", target: "Managed Services", value: 1 },
        { source: "SQL", target: "PostgreSQL", value: 1 },
        { source: "SQL", target: "MySQL", value: 1 },
        { source: "SQL", target: "SQLite", value: 1 },
        { source: "SQL", target: "Oracle", value: 1 },
        { source: "SQL", target: "SQL Server", value: 1 },
        { source: "NoSQL", target: "MongoDB", value: 1 },
        { source: "File Formats", target: "JSON", value: 1 },
        { source: "File Formats", target: "Parquet", value: 1 },
        { source: "Managed Services", target: "Amazon RDS", value: 1 }
    ]
};

const cloudData = {
    nodes: [
        { id: "Cloud Platforms", group: 1 },
        { id: "AWS", group: 2 },
        { id: "Azure", group: 3 },
        { id: "Analytics Services", group: 4 },
        { id: "Storage Services", group: 5 },
        { id: "Compute Services", group: 6 },
        { id: "Data Services", group: 7 },
        { id: "Security Services", group: 8 },
        { id: "Messaging Services", group: 9 },
        { id: "Amazon QuickSight", group: 4 },
        { id: "Amazon Athena", group: 4 },
        { id: "Azure Databricks", group: 4 },
        { id: "AWS S3", group: 5 },
        { id: "AWS Lambda", group: 6 },
        { id: "Amazon EMR", group: 7 },
        { id: "AWS Glue", group: 7 },
        { id: "Amazon Kinesis", group: 7 },
        { id: "Azure Data Factory", group: 7 },
        { id: "Lake Formation", group: 7 },
        { id: "Microsoft Fabric", group: 7 },
        { id: "AWS KMS", group: 8 },
        { id: "AWS IAM", group: 8 },
        { id: "AWS SQS", group: 9 }
    ],
    links: [
        { source: "Cloud Platforms", target: "AWS", value: 1 },
        { source: "Cloud Platforms", target: "Azure", value: 1 },
        { source: "Cloud Platforms", target: "Analytics Services", value: 1 },
        { source: "Cloud Platforms", target: "Storage Services", value: 1 },
        { source: "Cloud Platforms", target: "Compute Services", value: 1 },
        { source: "Cloud Platforms", target: "Data Services", value: 1 },
        { source: "Cloud Platforms", target: "Security Services", value: 1 },
        { source: "Cloud Platforms", target: "Messaging Services", value: 1 },
        { source: "AWS", target: "Amazon QuickSight", value: 1 },
        { source: "AWS", target: "Amazon Athena", value: 1 },
        { source: "AWS", target: "AWS S3", value: 1 },
        { source: "AWS", target: "AWS Lambda", value: 1 },
        { source: "AWS", target: "Amazon EMR", value: 1 },
        { source: "AWS", target: "AWS Glue", value: 1 },
        { source: "AWS", target: "Amazon Kinesis", value: 1 },
        { source: "AWS", target: "Lake Formation", value: 1 },
        { source: "AWS", target: "AWS KMS", value: 1 },
        { source: "AWS", target: "AWS IAM", value: 1 },
        { source: "AWS", target: "AWS SQS", value: 1 },
        { source: "Azure", target: "Azure Data Factory", value: 1 },
        { source: "Azure", target: "Azure Databricks", value: 1 },
        { source: "Azure", target: "Microsoft Fabric", value: 1 },
        { source: "Analytics Services", target: "Amazon QuickSight", value: 1 },
        { source: "Analytics Services", target: "Amazon Athena", value: 1 },
        { source: "Analytics Services", target: "Azure Databricks", value: 1 },
        { source: "Storage Services", target: "AWS S3", value: 1 },
        { source: "Compute Services", target: "AWS Lambda", value: 1 },
        { source: "Data Services", target: "Amazon EMR", value: 1 },
        { source: "Data Services", target: "AWS Glue", value: 1 },
        { source: "Data Services", target: "Amazon Kinesis", value: 1 },
        { source: "Data Services", target: "Azure Data Factory", value: 1 },
        { source: "Data Services", target: "Lake Formation", value: 1 },
        { source: "Data Services", target: "Microsoft Fabric", value: 1 },
        { source: "Security Services", target: "AWS KMS", value: 1 },
        { source: "Security Services", target: "AWS IAM", value: 1 },
        { source: "Messaging Services", target: "AWS SQS", value: 1 }
    ]
};

function createGraph(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id ${containerId} not found`);
        return;
    }

    const width = container.clientWidth;
    const height = container.clientHeight;

    console.log(`Creating graph for ${containerId}. Width: ${width}, Height: ${height}`);
    console.log(`Number of nodes: ${data.nodes.length}, Number of links: ${data.links.length}`);

    const svg = d3.select(`#${containerId}`)
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("background-color", "rgba(0,0,0,0.1)");

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const simulation = d3.forceSimulation(data.nodes)
        .force("link", d3.forceLink(data.links).id(d => d.id).distance(30)) // Reducida la distancia de los enlaces
        .force("charge", d3.forceManyBody().strength(-50)) // Reducida la fuerza de repulsión
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collision", d3.forceCollide().radius(30)) // Reducido el radio de colisión
        .force("x", d3.forceX(width / 2).strength(0.1)) // Fuerza adicional para mantener los nodos centrados horizontalmente
        .force("y", d3.forceY(height / 2).strength(0.1)); // Fuerza adicional para mantener los nodos centrados verticalmente

    const link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(data.links)
        .enter().append("line")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .attr("stroke-width", 1); // Reducido el ancho de las líneas

    const node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("g")
        .data(data.nodes)
        .enter().append("g");

    node.append("circle")
        .attr("r", 5) // Reducido el tamaño de los círculos
        .attr("fill", d => color(d.group))
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5);

    node.append("text")
        .attr("dx", 8)
        .attr("dy", ".35em")
        .text(d => d.id)
        .attr("fill", "#fff")
        .style("font-size", "10px"); // Reducido el tamaño de la fuente

    node.append("title")
        .text(d => d.id);

    simulation
        .nodes(data.nodes)
        .on("tick", ticked);

    simulation.force("link")
        .links(data.links);

    function ticked() {
        link
            .attr("x1", d => Math.max(0, Math.min(width, d.source.x)))
            .attr("y1", d => Math.max(0, Math.min(height, d.source.y)))
            .attr("x2", d => Math.max(0, Math.min(width, d.target.x)))
            .attr("y2", d => Math.max(0, Math.min(height, d.target.y)));

        node
            .attr("transform", d => `translate(${Math.max(0, Math.min(width, d.x))},${Math.max(0, Math.min(height, d.y))})`);
    }

    function drag(simulation) {
        function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }
        
        function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }
        
        function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }
        
        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }

    node.call(drag(simulation));

    console.log(`Graph for ${containerId} created`);
}

// Crear los cuatro gráficos
createGraph('database-graph', databaseData);
createGraph('cloud-graph', cloudData);
createGraph('tools-graph', toolsData);
createGraph('programming-graph', programmingData);