
import * as d3 from "d3"

function draw(data) {
    const height = 600
    const width = 600


    const svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height)


    svg.append("image")
        .attr("x", 100)
        .attr("y", 100)
        .attr("width", 100)
        .attr("height", 100)
        .attr("xlink:href", "./imgs/flags.png")

/*
    /* Simulation
    var simulation = d3.forceSimulation()
        .nodes(data.nodes)
        .force("link", d3.forceLink(data.links))
        .force("charge", d3.forceManyBody().distanceMax(100))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .on("tick", ticked);

    /* Lines
    var link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(data.links)
        .enter()
        .append("line")
        .attr("stroke-width", 1);

    /* Flags
    var node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(data.nodes)
        .enter()
        .append("circle")
        .attr("r", 5)
        .attr("fill", "pink")

    /* Animation
    function ticked() {
        link
            .attr("x1", (d) => d.source.x)
            .attr("y1", (d) => d.source.y)
            .attr("x2", (d) => d.target.x)
            .attr("y2", (d) => d.target.y)

        node
            .attr("cx", (d) => d.x)
            .attr("cy", (d) => d.y)
    }*/
}

export default draw
