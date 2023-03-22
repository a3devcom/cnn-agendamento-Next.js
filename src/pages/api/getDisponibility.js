import axios from "axios";
import config from "@/config/apiConfig";

export default async function handler(req, res) {
  const { id, date } = req.query;

  try {
    const response = await axios.get(`https://api.clinicanasnuvens.com.br/executor-agenda/disponibilidade?data=${date}&idExecutorAgenda=${id}`, config);


    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
}
