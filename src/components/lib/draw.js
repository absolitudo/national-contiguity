import * as d3 from "d3"
import "./flags.css"

function draw(data, canvas) {
    const height = 600
    const width = 1000


    const svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height)



    /* Simulation */
    var simulation = d3.forceSimulation()
        .nodes(data.nodes)
        .force("link", d3.forceLink(data.links))
        .force("charge", d3.forceManyBody().distanceMax(100))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .on("tick", ticked);

    /* Lines */
    var link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(data.links)
        .enter()
        .append("line")
        .attr("stroke-width", 1);

    /* Flags */
    var node = d3.select(".flag-container")
        .selectAll("img")
        .data(data.nodes)
        .enter()
        .append("img")
            .attr("class", (d) => "flag flag-" + d.code)
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));


    /* Animation */
    function ticked() {
        link
            .attr("x1", (d) => d.source.x)
            .attr("y1", (d) => d.source.y)
            .attr("x2", (d) => d.target.x)
            .attr("y2", (d) => d.target.y)

        node
            .style("left", (d) => (d.x - 5)+"px")
            .style("top", (d) => (d.y - 8)+"px")

    }
    /* Drag */
    function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
}

export default draw
