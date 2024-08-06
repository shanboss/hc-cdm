// queries.ts
export interface Item {
  id: number;
  name: string;
  query: string;
  queryOutput: Record<string, any>[]; // Changed type to an array of objects
}

export const queries: Item[] = [
  {
    id: 1,
    name: "PatientQuery",
    query: `select 
pat.fhir_id,
CONCAT(hname.given, ' ', hname.family) as fullname,
gender, 
birth_date ,
ifr1.identifier_value as ethnicity,
ifr2.identifier_value as race,
ifr3.identifier_value as mrn,
DATEDIFF(YEAR, birth_date, GETDATE()) - 
    CASE 
        WHEN DATEADD(YEAR, DATEDIFF(YEAR, birth_date, GETDATE()), birth_date) > GETDATE() 
        THEN 1 
        ELSE 0 
    END AS age,
CASE
        WHEN birth_date > DATEADD(MONTH, -7, GETDATE()) THEN 'P0M--P7M'
        WHEN birth_date > DATEADD(YEAR, -1, GETDATE()) THEN 'P0Y--P1Y'
        WHEN birth_date > DATEADD(YEAR, -5, GETDATE()) THEN 'P1Y--P5Y'
        WHEN birth_date > DATEADD(YEAR, -10, GETDATE()) THEN 'P5Y--P10Y'
        WHEN birth_date > DATEADD(YEAR, -15, GETDATE()) THEN 'P10Y--P15Y'
        WHEN birth_date > DATEADD(YEAR, -20, GETDATE()) THEN 'P15Y--P20Y'
        WHEN birth_date > DATEADD(YEAR, -30, GETDATE()) THEN 'P20Y--P30Y'
        WHEN birth_date > DATEADD(YEAR, -40, GETDATE()) THEN 'P30Y--P40Y'
        WHEN birth_date > DATEADD(YEAR, -50, GETDATE()) THEN 'P40Y--P50Y'
        WHEN birth_date > DATEADD(YEAR, -60, GETDATE()) THEN 'P50Y--P60Y'
        WHEN birth_date > DATEADD(YEAR, -70, GETDATE()) THEN 'P60Y--P70Y'
        WHEN birth_date > DATEADD(YEAR, -80, GETDATE()) THEN 'P70Y--P80Y'
        ELSE 'P80Y--P9999Y'
    END AS age_group,
address.city,
address.address_state
from hc_patient pat
left join hc_identifier ifr1
on pat.fhir_id = ifr1.fhir_id
and ifr1.identifier_system = 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity'
left join hc_identifier ifr2
on pat.fhir_id = ifr2.fhir_id
and ifr2.identifier_system = 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race'
left join hc_identifier ifr3
on pat.fhir_id = ifr3.fhir_id
and ifr3.identifier_system = 'http://hospital.org/mrn'
left join hc_humanname hname
on pat.fhir_id = hname.fhir_id
left join hc_address address
on pat.fhir_id = address.fhir_id
where DATEDIFF(YEAR, birth_date, GETDATE()) between 65 and 80} `,
    queryOutput: [
      {
        fhir_id: "Patient-15",
        fullname: "Jason Price",
        gender: "female",
        birth_date: "1958-06-27",
        ethnicity: "Non-Hispanic",
        race: "Other",
        mrn: "MRN000015",
        age: 66,
        age_group: "P60Y--P70Y",
        city: "Pruitthaven",
        address_state: "CA",
      },
      {
        fhir_id: "Patient-3",
        fullname: "Derek Myers",
        gender: "male",
        birth_date: "1946-09-04",
        ethnicity: "Non-Hispanic",
        race: "Native Hawaiian or Other Pacific Islander",
        mrn: "MRN000003",
        age: 77,
        age_group: "P70Y--P80Y",
        city: "Lake Michael",
        address_state: "CA",
      },
      {
        fhir_id: "Patient-5",
        fullname: "Connie Baker",
        gender: "female",
        birth_date: "1950-06-22",
        ethnicity: "Non-Hispanic",
        race: "Other",
        mrn: "MRN000005",
        age: 74,
        age_group: "P70Y--P80Y",
        city: "Hernandezside",
        address_state: "CA",
      },
      {
        fhir_id: "Patient-6",
        fullname: "Ashley Moreno",
        gender: "female",
        birth_date: "1949-06-26",
        ethnicity: "Hispanic or Latino",
        race: "Black or African American",
        mrn: "MRN000006",
        age: 75,
        age_group: "P70Y--P80Y",
        city: "South Daniel",
        address_state: "CA",
      },
    ],
  },
  {
    id: 2,
    name: "Claim Type",
    query: `select claim_type, claim_status, claim_outcome, count(patient_id) as counts
from (
select
REPLACE(ref2.resource_reference, 'Patient/', '') as patient_id,
cct.codeableconcept_code as claim_type,
eob.status as claim_status,
eob.outcome as claim_outcome,
billable_period_start,
billable_period_end
from hc_explanation_of_benefit eob
left join hc_reference ref2
on eob.fhir_id = ref2.fhir_id and ref2.attribute_name = 'patient'
left join hc_codeableconcept cct
on eob.fhir_id = cct.fhir_id
	and cct.attribute_name = 'type'
where eob.fhir_id like 'EOB%'
) T
group by claim_type, claim_status, claim_outcome`,
    queryOutput: [
      {
        claim_type: "medical",
        claim_status: "active",
        claim_outcome: "complete",
        counts: 33,
      },
      {
        claim_type: "oral",
        claim_status: "active",
        claim_outcome: "complete",
        counts: 33,
      },
      {
        claim_type: "pharmacy",
        claim_status: "active",
        claim_outcome: "complete",
        counts: 34,
      },
    ],
  },
  { id: 3, name: "Query 3", query: "", queryOutput: [] },
];
