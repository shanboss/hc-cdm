// graphData.ts

export interface DataItem {
  label: string;
  value: string | number;
}

export const dataItems: DataItem[] = [
  { label: "Member Count", value: 20 },
  { label: "Claim Incurred Rate", value: "100.00%" },
  { label: "Medical PMPM", value: "$34.5" },
  { label: "Pharmacy PMPM", value: "$30.4" },
  { label: "Overall $ Spent", value: "$23,147.9" },
];
export const claimCategoryData = {
  categories: ["Medical Care", "Dental Care"],
  series: [
    { name: "Claim Amount", data: [15000, 5000] },
    { name: "Billed Amount", data: [20000, 8000] },
  ],
};

export const timelineData = {
  categories: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  series: [
    {
      name: "Claim Amount",
      data: [
        2000, 3000, 1500, 3500, 2200, 1800, 2000, 2500, 2700, 3000, 3200, 3300,
      ],
    },
    {
      name: "Billed Amount",
      data: [
        2500, 3200, 1800, 3600, 2500, 1900, 2200, 2700, 2900, 3100, 3400, 3500,
      ],
    },
  ],
};

export const genderData = {
  categories: ["female", "male"],
  series: [
    { name: "Claim Amount", data: [18000, 5000] },
    { name: "Billed Amount", data: [20000, 3000] },
  ],
};

export const ageGroupData = {
  categories: [
    "P20Y - P30Y",
    "P40Y - P50Y",
    "P70Y - P80Y",
    "P60Y - P70Y",
    "P50Y - P60Y",
    "P30Y - P40Y",
    "P80Y - P9999Y",
  ],
  series: [
    { name: "Claim Amount", data: [6000, 5500, 5000, 4500, 4000, 3500, 2000] },
    { name: "Billed Amount", data: [8000, 7000, 6500, 6000, 5500, 5000, 3000] },
  ],
};

export const raceData = {
  categories: ["Non Hispanic", "Hispanic or Latino"],
  series: [
    { name: "Claim Amount", data: [15000, 12000] },
    { name: "Billed Amount", data: [16000, 14000] },
  ],
};
