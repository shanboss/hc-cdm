import React from "react";
import { dataItems } from "./graphData";
import {
  claimCategoryData,
  timelineData,
  genderData,
  ageGroupData,
  raceData,
} from "./graphData";
import HorizontalBarChart from "@/components/GraphComponents/HorizontalGraph";
import VerticalBarChart from "@/components/GraphComponents/VerticalGraph";

import LineGraph from "@/components/GraphComponents/LineGraph";
import { time } from "console";

export default function page() {
  return (
    <div>
      <h1 className="font-bold text-xl border-b border-gray-600">
        Finance Overview
      </h1>
      {/* Top Data */}
      <div className="flex justify-center items-center mt-4">
        <div className="flex flex-row gap-x-2 ">
          {dataItems.map((item, index) => (
            <div
              key={index}
              className="text-center p-4 border-r border-gray-300 last:border-r-0"
            >
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="text-lg text-gray-300">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Begin Graphs */}
      {/* Row 1 */}
      <div className="flex flex-row mt-4 gap-x-2">
        {/* Claim Payments by Category */}
        <div className="w-1/2 border rounded-md p-2 border-gray-500">
          <h1 className="mb-2">Claim Payments by Claim Category</h1>
          <HorizontalBarChart
            categories={claimCategoryData.categories}
            series={claimCategoryData.series}
          />
        </div>
        {/* Claim Payments by Timeline */}
        <div className="w-1/2 border rounded-md p-2 border-gray-500">
          <h1 className="mb-2">Claim Payments by Claim Category</h1>

          <LineGraph
            categories={timelineData.categories}
            series={timelineData.series}
          />
        </div>
      </div>
      {/* Row 2 */}
      <div className="flex flex-row gap-x-2 mt-4">
        <div className="w-1/3 border rounded-md p-2 border-gray-500">
          <h1>Claim Payments by Claim Category</h1>
          <VerticalBarChart
            categories={genderData.categories}
            series={genderData.series}
          />
        </div>
        <div className="w-1/3 border rounded-md p-2 border-gray-500">
          <h1>Claim Payments by Age Group</h1>
          <HorizontalBarChart
            categories={ageGroupData.categories}
            series={ageGroupData.series}
          />
        </div>
        <div className="w-1/3 border rounded-md p-2 border-gray-500">
          <h1>Claim Payments by Race</h1>
          <VerticalBarChart
            categories={raceData.categories}
            series={raceData.series}
          />
        </div>
      </div>
    </div>
  );
}
