import axios from "axios";
import config from "@/config/apiConfig";

export default async function handler(req, res) {
  const { idPaciente, idTipoConvenio } = req.query;

  try {
    const response = await axios.post("https://api.clinicanasnuvens.com.br/convenio-paciente/associar", {
      carteirinha: null,
      dataValidade: null,
      idPaciente,
      idTipoConvenio,
    }, config);

    return res.status(201).json(response.data.id);
  } catch (error) {
    console.log(error);

    res.status(200).json({ message: 'Convenio já associado com o paciente' });
  }
}
