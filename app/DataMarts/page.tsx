import React from "react";
import DataTable from "@/components/DataTable";
const baseData = [
  ["Column", "FHIR Mapping", "Datatype", "Description"],
  ["fhir_id", "ExplanationOfBenefit.id", "nvarchar(100)", "FHIR record UUID"],
  [
    "status",
    "ExplanationOfBenefit.status",
    "varchar(100)",
    "ExplanationOfBenefitsStatus active | cancelled | draft | entered-in-error",
  ],
  [
    "outcome",
    "ExplanationOfBenefit.outcome",
    "varchar(100)",
    "Claim Processing Codes queued | complete | error | partial",
  ],
  [
    "billable_period_start",
    "ExplanationOfBenefit.billablePeriod.start",
    "datetime",
    "Relevant start time for the claim",
  ],
  [
    "billable_period_end",
    "ExplanationOfBenefit.billablePeriod.end",
    "datetime",
    "Relevant end time for the claim",
  ],
  [
    "patient_id",
    "ExplanationOfBenefit.patient",
    "varchar(100)",
    "Recipient of the products and services",
  ],
  [
    "claim_type",
    "ExplanationOfBenefit.type",
    "varchar(100)",
    "Category or discipline institutional | oral | pharmacy | professional | vision",
  ],
];

const eobAdjudicationData = [
  ["Column", "FHIR Mapping", "Datatype", "Description"],
  [
    "adjudication_category",
    "ExplanationOfBenefit.item.adjudication.category",
    "codeableconcept",
    "Code representing the adjudication category",
  ],
  [
    "adjudication_amount",
    "ExplanationOfBenefit.item.adjudication.amount",
    "money",
    "Monetary amount for adjudication",
  ],
  [
    "adjudication_reason",
    "ExplanationOfBenefit.item.adjudication.reason",
    "codeableconcept",
    "Reason for adjudication",
  ],
  [
    "adjudication_value",
    "ExplanationOfBenefit.item.adjudication.value",
    "decimal",
    "Adjudication value",
  ],
];
const eobItemData = [
  ["Column", "FHIR Mapping", "Datatype", "Description"],
  [
    "item_sequence",
    "ExplanationOfBenefit.item.sequence",
    "positiveInt",
    "Sequence of the item",
  ],
  [
    "item_productOrService",
    "ExplanationOfBenefit.item.productOrService",
    "codeableconcept",
    "Product or service provided",
  ],
  [
    "item_servicedDate",
    "ExplanationOfBenefit.item.servicedDate",
    "date",
    "Date of service",
  ],
  [
    "item_quantity",
    "ExplanationOfBenefit.item.quantity",
    "quantity",
    "Quantity of the product or service",
  ],
  [
    "item_unitPrice",
    "ExplanationOfBenefit.item.unitPrice",
    "money",
    "Unit price of the product or service",
  ],
  [
    "item_net",
    "ExplanationOfBenefit.item.net",
    "money",
    "Net amount for the item",
  ],
];
const patientBaseData = [
  ["Column", "FHIR Mapping", "Datatype", "Description"],
  ["patient_id", "Patient.id", "string", "Unique identifier for the patient"],
  ["patient_name", "Patient.name", "humanname", "Name of the patient"],
  ["patient_gender", "Patient.gender", "code", "Gender of the patient"],
  [
    "patient_birthDate",
    "Patient.birthDate",
    "date",
    "Birth date of the patient",
  ],
  ["patient_address", "Patient.address", "address", "Address of the patient"],
];

export default function page() {
  return (
    <>
      <div className="text-2xl font-bold">Data Marts - Finance</div>
      <div className="bg-gray-900 p-4 rounded-md mt-2">
        <h1>
          <span className="font-bold">Table 1: </span>EOB_Base
          <DataTable data={baseData} />
        </h1>
        <h1>
          <span className="font-bold">Table 2: </span>EOB_Adjudication
          <DataTable data={eobAdjudicationData} />
        </h1>
        <h1>
          <span className="font-bold">Table 3: </span>EOB_Item
          <DataTable data={eobItemData} />
        </h1>
        <h1>
          <span className="font-bold">Table 4: </span>Patient_Base
          <DataTable data={patientBaseData} />
        </h1>
      </div>
    </>
  );
}
