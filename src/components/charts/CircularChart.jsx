import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const CircularChart = ({ categories, correlations }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
  
    const width = 500;
    const height = 500;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 20;
  
    const angleScale = d3.scalePoint()
      .domain(categories)
      .range([0, 2 * Math.PI])
      .padding(0.5);
  
    const lines = [];
    categories.forEach((category, i) => {
      categories.forEach((targetCategory, j) => {
        if (i < j) {
          lines.push({
            source: angleScale(category),
            target: angleScale(targetCategory),
            correlation: correlations[i][j],
          });
        }
      });
    });
  
    svg.selectAll(".correlation-line")
      .data(lines)
      .enter()
      .append("line")
      .attr("class", "correlation-line")
      .attr("x1", d => centerX + radius * Math.cos(d.source))
      .attr("y1", d => centerY + radius * Math.sin(d.source))
      .attr("x2", d => centerX + radius * Math.cos(d.target))
      .attr("y2", d => centerY + radius * Math.sin(d.target))
      .style("stroke", d => d3.interpolateRdYlBu(d.correlation))
      .style("stroke-width", "2px")
      .style("opacity", 0.7)
      .transition()
      .duration(2000)
      .ease(d3.easeLinear)
      .style("stroke-dasharray", "5,5")
      .style("opacity", 0.3)
      .transition()
      .duration(2000)
      .ease(d3.easeLinear)
      .style("stroke-dasharray", "2,2")
      .style("opacity", 0.7);
  
  }, [categories, correlations]);
  

  return (
    <div className="rounded-xl bg-dimWhite px-2 py-1">
        <h3 className="font-poppins font-semibold text-[18px] sm:text-[24px] lg:text-[36px] ml-3 mt-3">Correlations</h3>
        <div className="border-[1px] border-black mx-5 mt-2"/>
        <svg
            ref={svgRef}
            width={500}
            height={500}
        />
    </div>
  );
};

export default CircularChart;
