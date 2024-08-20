// Datos para cada gráfico
const sqlData = {
    nodes: [
        { id: "Databases", group: 1 },
        { id: "SQL", group: 1 },
        { id: "NoSQL", group: 1 },
        { id: "PostgreSQL", group: 1 },
        { id: "MySQL", group: 1 },
        { id: "SQLite", group: 1 },
        { id: "Oracle", group: 1 },
        { id: "RDS", group: 1 }
    ],
    links: [
        { source: "Databases", target: "SQL", value: 1 },
        { source: "Databases", target: "NoSQL", value: 1 },
        { source: "SQL", target: "PostgreSQL", value: 1 },
        { source: "SQL", target: "MySQL", value: 1 },
        { source: "SQL", target: "SQLite", value: 1 },
        { source: "SQL", target: "Oracle", value: 1 },
        { source: "Databases", target: "RDS", value: 1 }
    ]
};

const toolsData = {
    nodes: [
        { id: "Tools", group: 1 },
        { id: "AWS", group: 2 },
        { id: "Docker", group: 2 },
        { id: "Git", group: 2 },
        { id: "Jira", group: 3 },
        { id: "Draw.io", group: 3 },
        { id: "MS Project", group: 3 },
        { id: "Azure", group: 2 },  
        { id: "Trello", group: 3 },  
        { id: "ClickUp", group: 3 },  
        { id: "Figma", group: 3 }  
    ],
    links: [
        { source: "Tools", target: "Docker", value: 1 },
        { source: "Tools", target: "Git", value: 1 },
        { source: "Tools", target: "Jira", value: 1 },
        { source: "Tools", target: "Draw.io", value: 1 },
        { source: "Tools", target: "MS Project", value: 1 },
        { source: "Tools", target: "AWS", value: 1 },
        { source: "Tools", target: "Azure", value: 1 },  
        { source: "Tools", target: "Trello", value: 1 }, 
        { source: "Tools", target: "ClickUp", value: 1 },  
        { source: "Tools", target: "Figma", value: 1 } 
    ]
};

const pythonDataData = {
    nodes: [
        { id: "Programming", group: 1 },
        { id: "Python", group: 1 },
        { id: "Data Analysis", group: 2 },
        { id: "Django", group: 3 },
        { id: "Power BI", group: 2 },
        { id: "Tableau", group: 2 },
        { id: "Pentaho", group: 2 },
        { id: "Pandas", group: 2 },
        { id: "NumPy", group: 2 },
        { id: "Scikit-learn", group: 2 },
        { id: "Matplotlib", group: 2 }
    ],
    links: [
        { source: "Programming", target: "Python", value: 1 },
        { source: "Python", target: "Django", value: 1 },
        { source: "Data Analysis", target: "Power BI", value: 1 },
        { source: "Data Analysis", target: "Tableau", value: 1 },
        { source: "Data Analysis", target: "Pentaho", value: 1 },
        { source: "Python", target: "Pandas", value: 1 },
        { source: "Python", target: "NumPy", value: 1 },
        { source: "Python", target: "Scikit-learn", value: 1 },
        { source: "Python", target: "Matplotlib", value: 1 },
        { source: "Data Analysis", target: "Pandas", value: 1 },
        { source: "Data Analysis", target: "NumPy", value: 1 },
        { source: "Data Analysis", target: "Scikit-learn", value: 1 },
        { source: "Data Analysis", target: "Matplotlib", value: 1 }
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
        .style("background-color", "rgba(0,0,0,0.1)"); // Fondo ligeramente visible para depuración

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const simulation = d3.forceSimulation(data.nodes)
        .force("link", d3.forceLink(data.links).id(d => d.id).distance(50))
        .force("charge", d3.forceManyBody().strength(-200))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collision", d3.forceCollide().radius(30));

    const link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(data.links)
        .enter().append("line")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .attr("stroke-width", 2);

    const node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("g")
        .data(data.nodes)
        .enter().append("g");

    node.append("circle")
        .attr("r", 10) // Tamaño aumentado para mejor visibilidad
        .attr("fill", d => color(d.group))
        .attr("stroke", "#fff")
        .attr("stroke-width", 2);

    node.append("text")
        .attr("dx", 12)
        .attr("dy", ".35em")
        .text(d => d.id)
        .attr("fill", "#fff")
        .style("font-size", "8px");

    node.append("title")
        .text(d => d.id);

    simulation
        .nodes(data.nodes)
        .on("tick", ticked);

    simulation.force("link")
        .links(data.links);

    function ticked() {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("transform", d => `translate(${d.x},${d.y})`);
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

// Crear los tres gráficos
createGraph('sql-graph', sqlData);
createGraph('tools-graph', toolsData);
createGraph('python-data-graph', pythonDataData);