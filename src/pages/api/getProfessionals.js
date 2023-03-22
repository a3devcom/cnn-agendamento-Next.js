import axios from "axios";
import config from "@/config/apiConfig";

export default async function handler(_req, res) {
  try {
    const response = await axios.get("https://api.clinicanasnuvens.com.br/executor-agenda/lista?somenteAtivos=true", config);


    res.status(200).json(response.data.lista);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
}
