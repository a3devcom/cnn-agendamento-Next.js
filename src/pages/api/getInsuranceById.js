import axios from "axios";
import config from "@/config/apiConfig";

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const response = await axios.get(`https://api.clinicanasnuvens.com.br/tipo-convenio/${id}`, config);

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
}
