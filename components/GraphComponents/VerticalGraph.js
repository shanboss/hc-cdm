"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const VerticalBarChart = ({ categories, series }) => {
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
      <BarChart
        layout="horizontal"
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis type="category" dataKey="name" />
        <YAxis type="number" />

        <Legend />
        {series.map((s, index) => (
          <Bar
            key={index}
            dataKey={s.name}
            fill={index % 2 === 0 ? "#1968A1" : "#f26d21"}
            isAnimationActive={false} // Disable hover effect
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default VerticalBarChart;
