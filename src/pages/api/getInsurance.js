import axios from "axios";
import config from "@/config/apiConfig";

export default async function handler(_req, res) {
  try {
    const response = await axios.get(`https://api.clinicanasnuvens.com.br/tipo-convenio/lista?somenteAtivos=true&somenteParticulares=false`, config);
    console.log(response.data);
    const filteredList = response.data.lista.filter((convenio) => convenio.nome !== 'Particular');


    res.status(200).json(filteredList);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
}
