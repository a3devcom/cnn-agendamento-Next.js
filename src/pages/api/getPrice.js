import axios from "axios";
import config from "@/config/apiConfig";

export default async function handler(req, res) {
  const { data, hora, idConvenio, idProcedimento } = req.query;

  try {   
      const response = await axios.get(`https://api.clinicanasnuvens.com.br/tipo-procedimento/valores-venda?dataBase=${data}&horaBase=${hora}&idTipoConvenio=${idConvenio}&idTipoProcedimento=${idProcedimento}`, config);


      return res.status(200).json(response.data);    
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
}