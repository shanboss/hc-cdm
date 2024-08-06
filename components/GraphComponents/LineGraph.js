"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineGraph = ({ categories, series }) => {
  // Transform the data to fit Recharts format
  const data = categories.map((category, index) => {
    const dataItem = { name: category };
    series.forEach((s) => {
      dataItem[s.name] = s.data[index];
    });
    return dataItem;
  });

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        {series.map((s, index) => (
          <Line
            key={index}
            type="linear" // Set line type to "linear" for straight lines
            dataKey={s.name}
            fill={index % 2 === 0 ? "#1968A1" : "#f26d21"}
            strokeWidth={3} // Set the line thickness
            dot={false} // Remove the dots at every turn
            strokeDasharray={index % 2 === 0 ? "3 3" : "0"}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
