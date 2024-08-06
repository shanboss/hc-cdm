// pages/api/getData.js
import { poolPromise } from "../../dbConfig";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const pool = await poolPromise;
      const result = await pool.request().query("SELECT * FROM your_table");
      res.status(200).json(result.recordset);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
