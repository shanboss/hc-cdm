import React from "react";
import DataTable from "@/components/DataTable";
const baseData = [
  ["Column", "FHIR Mapping", "Datatype", "Description"],
  ["eob_id", "ExplanationOfBenefit.id", "varchar(100)", "FHIR record UUID"],
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
];

const eobAdjudicationData = [
  ["Column", "FHIR Mapping", "Datatype", "Description"],
  ["eob_id", "ExplanationOfBenefit.id", "varchar(100)", "FHIR record UUID"],
  [
    "adjudication",
    "ExplanationOfBenefit.item.adjudication.amount.value",
    "decimal(18,2)",
    "Monetary amount, An amount of economic utility in some recognized currency.",
  ],
  [
    "codeableconcept_code",
    "ExplanationOfBenefit.item.adjudication.category",
    "varchar(100)",
    "Type of adjudication information. Filtered on the category of adjudication.",
  ],
];

const eobItemData = [
  ["Column", "FHIR Mapping", "Datatype", "Description"],
  ["eob_id", "ExplanationOfBenefit.id", "varchar(100)", "FHIR record UUID"],
  [
    "unitprice_value",
    "ExplanationOfBenefit.item.unitPrice.value",
    "decimal(18,2)",
    "Fee, charge or cost per item",
  ],
  [
    "quantity_value",
    "ExplanationOfBenefit.item.quantity.value",
    "decimal(18,2)",
    "Count of products or services",
  ],
  [
    "net_value",
    "ExplanationOfBenefit.item.net.value",
    "decimal(18,2)",
    "Total item cost",
  ],
  [
    "serviced_date",
    "ExplanationOfBenefit.item.servicedDate",
    "datetime",
    "Date or dates of service or product delivery",
  ],
];

const patientBaseData = [
  ["Column", "FHIR Mapping", "Datatype", "Description"],
  ["patient_id", "Patient.id", "nvarchar(100)", "FHIR record UUID"],
  [
    "fullname",
    "Patient.name.given\nPatient.name.family",
    "varchar(200)",
    `A name associated with the patient. Usually a combination of Given names (not always 'first') and Family name (often called 'Surname'). Includes middle names
This repeating element order: Given Names appear in the correct order for presenting the name`,
  ],
  [
    "gender",
    "Patient.gender",
    "varchar(50)",
    "Administrative Gender male | female | other | unknown",
  ],
  [
    "birth_date",
    "Patient.birthDate",
    "date",
    "The date of birth for the individual",
  ],
  [
    "ethnicity",
    "Identifier.identifier_value",
    "varchar(100)",
    "For fhir_id & Identifier System - http://hl7.org/fhir/v2/0189 (Ethnicity)",
  ],
  [
    "race",
    "Identifier.identifier_value",
    "varchar(100)",
    "For fhir_id & Identifier System - http://hl7.org/fhir/v2/0189 (Race)",
  ],
  [
    "mrn",
    "Identifier.identifier_value",
    "varchar(100)",
    "For fhir_id & Identifier System - http://hospital.org/fhir/identifiers (MRN)",
  ],
  ["age", "", "decimal", "Calculated on the birth_date"],
  ["age_group", "", "varchar(100)", "Calculated on the birth_date"],
  [
    "city",
    "Patient.address.city",
    "varchar(100)",
    "An address for the individual, Name of city, town, etc.",
  ],
  [
    "address_state",
    "Patient.address.state",
    "varchar(100)",
    "An address for the individual, Sub-unit of country (abbreviations ok).",
  ],
];

const coverageBase = [
  ["Column", "FHIR Mapping", "Datatype", "Description"],
  ["coverage_id", "Coverage.id", "varchar(100)", "FHIR record UUID"],
  ["period_start", "Coverage.period.start", "datetime", "Coverage start date"],
  ["period_end", "Coverage.period.end", "datetime", "Coverage end date"],
  [
    "coverage_status",
    "Coverage.status",
    "varchar(100)",
    "active | cancelled | draft | entered-in-error",
  ],
  [
    "coverage_type",
    "Coverage.type",
    "varchar(100)",
    "Coverage category such as medical or accident",
  ],
];
const accountBase = [
  ["Column", "FHIR Mapping", "Datatype", "Description"],
  ["account_id", "Account.id", "varchar(100)", "FHIR record UUID"],
  [
    "serviceperiod_start",
    "Account.servicePeriod.start",
    "datetime",
    "Coverage start date",
  ],
  [
    "serviceperiod_end",
    "Account.servicePeriod.end",
    "datetime",
    "Coverage end date",
  ],
  [
    "account_status",
    "Account.status",
    "varchar(100)",
    "active | cancelled | draft | entered-in-error",
  ],
  [
    "coverage_type",
    "Account.type",
    "varchar(100)",
    "E.g. patient, expense, depreciation",
  ],
];
const coverageEligibility = [
  ["Column", "FHIR Mapping", "Datatype", "Description"],
  [
    "coverage_id",
    "CoverageEligibilityResponse.insurance.coverage",
    "varchar(100)",
    "",
  ],
  [
    "purpose",
    "CoverageEligibilityResponse.purpose",
    "varchar(100)",
    "auth-requirements | benefits | discovery | validation",
  ],
  [
    "status",
    "CoverageEligibilityResponse.outcome",
    "varchar(100)",
    "active | cancelled | draft | entered-in-error",
  ],
  [
    "outcome",
    "CoverageEligibilityResponse.disposition",
    "varchar(100)",
    "queued | complete | error | partial",
  ],
  [
    "disposition",
    "CoverageEligibilityResponse.status",
    "varchar(max)",
    "Disposition Message",
  ],
];

export default function page() {
  return (
    <>
      <div className="text-2xl font-bold">Financial Data Mart</div>
      <p className="p-2 text-md">
        Data marts are specialized subsets of data warehouses designed to serve
        the needs of a specific group within an organization. They are built
        using SQL code that automatically runs on top of the Core Data Model to
        compute specific measures, groupings, risk models, and other analytical
        constructs. Data marts frequently employ value sets to define the
        concepts they use, ensuring consistent and accurate data interpretations
        across various analytical processes.
      </p>
      <p className="p-2 text-md">
        The Health Chain financial data mart encompasses several critical views
        designed to facilitate comprehensive data analysis and reporting. These
        views include:
      </p>
      <ul className="list-disc p-4">
        <li>Explanation of Benefit Base</li>
        <li>Explanation of Benefit Item Base</li>
        <li>Explanation of Benefit Adjudication Base</li>
        <li>Coverage Base</li>
        <li>Account Base</li>
        <li>Patient Base</li>
      </ul>
      <p className="p-2 text-md">
        Each of these views is derived from the Health Chain Core Data Model,
        ensuring consistency and reliability in the data. The Health Chain
        financial data mart views are instrumental in creating data
        aggregations, which are essential for supporting various analytical
        tasks and generating detailed reports. By leveraging these views,
        organizations can gain deeper insights into financial metrics,
        streamline their reporting processes, and enhance decision-making
        capabilities.
      </p>
      <div className="p-4 rounded-md mt-2">
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
        <h1>
          <span className="font-bold">Table 5: </span>Coverage_Base
          <DataTable data={coverageBase} />
        </h1>
        <h1>
          <span className="font-bold">Table 6: </span>Account_Base
          <DataTable data={accountBase} />
        </h1>
        <h1>
          <span className="font-bold">Table 7: </span>Coverage_Eligibility
          <DataTable data={coverageEligibility} />
        </h1>
      </div>
    </>
  );
}
