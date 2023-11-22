import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineGraph = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    // Access the SVG element using the ref
    const svg = d3.select(svgRef.current);

    // Declare chart dimensions and margins
    const width = 928;
    const height = 500;
    const marginTop = 20;
    const marginRight = 30;
    const marginBottom = 30;
    const marginLeft = 40;

    // Declare the x (horizontal position) scale.
    const x = d3.scaleUtc(d3.extent(data, d => d.date), [marginLeft, width - marginRight]);

    // Declare the y (vertical position) scale.
    const y = d3.scaleLinear([0, d3.max(data, d => d.close)], [height - marginBottom, marginTop]);

    // Declare the line generator.
    const line = d3.line()
      .x(d => x(d.date))
      .y(d => y(d.close));

    // Add the axes
    svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))
      .call(g => g.select(".domain").remove());

    svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y))

    // Append a path for the line.
    svg.append("path")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line(data));
  }, [data]);

  return (
    <div className="rounded-xl bg-slate-300 px-2 py-1">
      <h3 className="font-poppins font-semibold text-[18px] sm:text-[24px] lg:text-[36px] ml-3 mt-3">Total Liquidity</h3>
      <div className="border-[1px] border-black mx-5 mt-2"/>
      <svg  
        ref={svgRef}
        width={928}
        height={500}
        viewBox={`0 0 928 500`}
        style={{ maxWidth: '100%', height: 'auto', height: 'intrinsic' }}
      />
    </div>
  );
};

export default LineGraph;
