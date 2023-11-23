import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = ({ data, title, yAxisTitle, width = 500, height = 400 }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Calculate inner dimensions based on provided width and height
    const margin = { top: 40, right: 30, bottom: 30, left: 30 }; // Adjust margins as needed

    const cardWidth = width;
    const cardHeight = height;

    const innerWidth = cardWidth - margin.left - margin.right;
    const innerHeight = cardHeight - margin.top - margin.bottom;

    // Parse the date strings into JavaScript Date objects
    const parseDate = d3.timeParse('%Y-%m-%d');

    const x = d3
      .scaleTime()
      .range([0, innerWidth])
      .domain(d3.extent(data, d => parseDate(d.date)));

    const y = d3
      .scaleLinear()
      .range([innerHeight, 0]) // Reverse the range to position the y-axis correctly
      .domain([d3.min(data, d => d.value), d3.max(data, d => d.value)]);

    const line = d3
      .line()
      .x(d => x(parseDate(d.date)))
      .y(d => y(d.value));

    svg.selectAll('*').remove();

    svg.attr('width', cardWidth)
      .attr('height', cardHeight)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Append x-axis
    svg.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x).tickFormat(d3.timeFormat('%b %d')))
      .select('.domain')
      .remove();

    // Append y-axis
    const yAxis = svg.append('g')
      .call(d3.axisLeft(y)
        .ticks(5) // Customize the number of ticks
      );

    // Append y-axis label
    yAxis.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', -60) // Adjust the position as needed
      .attr('dy', '0.71em')
      .attr('fill', '#000')
      .text(yAxisTitle);

    // Append path
    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', line);

  }, [data, width, height, yAxisTitle]);

  return (
    <div className="rounded-xl bg-slate-300 px-2 py-1">
      <h3 className="font-poppins font-semibold text-[18px] sm:text-[24px] lg:text-[36px] ml-3 mt-3">{title}</h3>
      <div className="border-[1px] border-black mx-4 mt-2" />
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        style={{ maxWidth: '100%', height: 'auto', height: 'intrinsic' }}
      />
    </div>
  );
};

export default LineChart;
