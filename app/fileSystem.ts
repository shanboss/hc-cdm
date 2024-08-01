interface FileSystemItem {
  name: string;
  type: "folder" | "file";
  description?: string;
  tables?: string[];
  referencedBy?: string[];
  erd?: string;
  children?: FileSystemItem[];
}
const fileSystem: FileSystemItem[] = [
  {
    name: "FHIR_Resources",
    type: "folder",
    children: [
      {
        erd: "/Account.png",
        name: "Account",
        type: "file",
        description:
          "The Account resource acts as a central record against which charges, payments, and adjustments are applied. It contains information about which parties are responsible for payment of the account.",
        tables: [
          "hc_account",
          "hc_account_guarantor",
          "hc_account_coverage",
          "hc_codeableconcept",
          "hc_reference",
          "hc_ancestor",
          "hc_extension",
          "hc_canonical",
          "hc_uri",
          "hc_assigner",
          "hc_address",
          "hc_humanname",
          "hc_identifier",
          "hc_contactpoint",
        ],
        referencedBy: ["Encounter", "Episode of Care"],
      },
      {
        erd: "/AllergyIntolerance-2.png",
        name: "AllergyIntolerance",
        type: "file",
        tables: [
          "hc_allergyintolerance",
          "hc_allergyintolerance_category",
          "hc_allergyintolerance_reaction",
          "hc_codeableconcept",
          "hc_identifier",
          "hc_annotation",
          "hc_reference",
          "hc_ancestor",
          "hc_extension",
          "hc_canonical",
          "hc_uri",
          "hc_assigner",
          "hc_contactpoint",
          "hc_address",
          "hc_humanname",
        ],
        description:
          "A record of a clinical assessment of an allergy or intolerance; a propensity, or a potential risk to an individual, to have an adverse reaction on future exposure to the specified substance, or class of substance. Where a propensity is identified, to record information or evidence about a reaction event that is characterized by any harmful or undesirable physiological response that is specific to the individual and triggered by exposure of an individual to the identified substance or class of substance. Substances include, but are not limited to: a therapeutic substance administered correctly at an appropriate dosage for the individual; food; material derived from plants or animals; or venom from insect stings",
      },
      {
        erd: "/ClaimResponse.png",
        name: "ClaimResponse",
        type: "file",
        tables: [
          "hc_claimresponse",
          "hc_claimresponse_additem",
          "hc_claimresponse_adjudication",
          "hc_claimresponse_detail",
          "hc_claimresponse_error",
          "hc_claimresponse_insurance",
          "hc_claimresponse_item",
          "hc_claimresponse_payment",
          "hc_claimresponse_processnote",
          "hc_claimresponse_subdetail",
          "hc_claimresponse_total",
          "hc_attachment",
          "hc_contactpoint",
          "hc_address",
          "hc_humanname",
          "hc_identifier",
          "hc_codeableconcept",
          "hc_reference",
          "hc_ancestor",
          "hc_extension",
          "hc_canonical",
          "hc_uri",
          "hc_assigner",
        ],
        referencedBy: [
          "Claim",
          "ClaimResponse",
          "ExplanationOfBenefit",
          "MedicationRequest",
        ],
        description:
          "The ClaimResponse resource provides application level adjudication results, or an application level error, which are the result of processing a submitted Claim resource where that Claim may be the functional corollary of a Claim, Predetermination or a Preauthorization.This resource is the only appropriate response to a Claim which a processing system recognizes as a Claim resource. This is the adjudicated response to a Claim, Predetermination or Preauthorization. The strength of the payment aspect of the response is matching to the strength of the original request. For a Claim the adjudication indicates payment which is intended to be made. For Preauthorization no payment will actually be made however funds may be reserved to settle a claim submitted later. For Predetermination no payment will actually be made and no assurance is given that the adjudication of a claim submitted later will match the adjudication provided, for example funds may have been exhausted in the interim. Only an actual claim may be expected to result in actual payment.",
      },
      {
        name: "Condition",
        type: "file",
        description: "This is the description for the Condition resource.",
      },
      {
        name: "Coverage",
        type: "file",
        description: "This is the description for the Coverage resource.",
      },
      {
        name: "Device",
        type: "file",
        description: "This is the description for the Device resource.",
      },
      {
        name: "Encounter",
        type: "file",
        description: "This is the description for the Encounter resource.",
      },
      {
        name: "EpisodeOfCare",
        type: "file",
        description: "This is the description for the EpisodeOfCare resource.",
      },
      {
        name: "Location",
        type: "file",
        description: "This is the description for the Location resource.",
      },
      {
        name: "MessageHeader",
        type: "file",
        description: "This is the description for the MessageHeader resource.",
      },
      {
        name: "Observation",
        type: "file",
        description: "This is the description for the Observation resource.",
      },
      {
        name: "Organization",
        type: "file",
        description: "This is the description for the Organization resource.",
      },
      {
        name: "Patient",
        type: "file",
        description: "This is the description for the Patient resource.",
      },
      {
        name: "Practitioner",
        type: "file",
        description: "This is the description for the Practitioner resource.",
      },
      {
        name: "PractitionerRole",
        type: "file",
        description:
          "This is the description for the PractitionerRole resource.",
      },
      {
        name: "Procedure",
        type: "file",
        description: "This is the description for the Procedure resource.",
      },
      {
        name: "Provenance",
        type: "file",
        description: "This is the description for the Provenance resource.",
      },
      {
        name: "RelatedPerson",
        type: "file",
        description: "This is the description for the RelatedPerson resource.",
      },
      {
        name: "ServiceRequest",
        type: "file",
        description: "This is the description for the ServiceRequest resource.",
      },
      {
        name: "ExplanationOfBenefit",
        type: "file",
        description:
          "This is the description for the ExplanationOfBenefit resource.",
      },
      {
        name: "Claim",
        type: "file",
        description: "This is the description for the Claim resource.",
      },
      // Add other FHIR resources as needed...
    ],
  },
];

export default fileSystem;
