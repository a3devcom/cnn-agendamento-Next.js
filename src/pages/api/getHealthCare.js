import axios from "axios";
import config from "@/config/apiConfig";

export default async function handler(req, res) {
  const { idPaciente, idTipoConvenio } = req.query;

  try {
    const response = await axios.get(`https://api.clinicanasnuvens.com.br/convenio-paciente/lista?idPaciente=${idPaciente}&somenteAtivos=true`, config);

    const id = response.data.lista.filter((convenio) => convenio.idTipoConvenio === Number(idTipoConvenio))[0].id;


    res.status(200).json(id);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error});
  }
}
