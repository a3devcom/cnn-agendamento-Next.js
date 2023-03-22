import axios from "axios";
import config from "@/config/apiConfig";

export default async function handler(req, res) {
  const { type } = req.query;

  try {
    if(type === 'Cirurgia') {
      const response = await axios.get("https://api.clinicanasnuvens.com.br/tipo-procedimento/lista?somenteAtivos=true&tipo=EXCETO_EXAME", config);

      const filteredList = response.data.lista.filter((procedimento) => procedimento.nome !== 'Consulta');

      return res.status(200).json(filteredList);
    } else {
      const response = await axios.get("https://api.clinicanasnuvens.com.br/tipo-procedimento/lista?somenteAtivos=true&tipo=SOMENTE_EXAME", config);

      return res.status(200).json(response.data.lista);
    }
    
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
}
