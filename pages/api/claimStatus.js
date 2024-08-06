import { poolPromise } from "../../dbConfig";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const pool = await poolPromise;
      const result = await pool.request().query(`
        SELECT claim_type, claim_status, claim_outcome, COUNT(patient_id) as counts
        FROM (
          SELECT
            REPLACE(ref2.resource_reference, 'Patient/', '') as patient_id,
            cct.codeableconcept_code as claim_type,
            eob.status as claim_status,
            eob.outcome as claim_outcome,
            billable_period_start,
            billable_period_end
          FROM hc_explanation_of_benefit eob
          LEFT JOIN hc_reference ref2
            ON eob.fhir_id = ref2.fhir_id AND ref2.attribute_name = 'patient'
          LEFT JOIN hc_codeableconcept cct
            ON eob.fhir_id = cct.fhir_id
            AND cct.attribute_name = 'type'
          WHERE eob.fhir_id LIKE 'EOB%'
        ) T
        GROUP BY claim_type, claim_status, claim_outcome
      `);
      res.status(200).json(result.recordset);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
