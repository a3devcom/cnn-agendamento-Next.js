import axios from "axios";
import config from "@/config/apiConfig";

export default async function handler(req, res) {
  const { cpf } = req.query;

  try {
    const response = await axios.get(`https://api.clinicanasnuvens.com.br/paciente/lista?cpfCnpj=${cpf}`, config);

    if( response.data.lista === []) {
      return res.status(404).json({ message: "No person with that cpf found"})
    } else {
      return res.status(200).json(response.data.lista[0]);
    }    
  } catch (error) {
    console.log(error);

    res.status(404).json({ message: 'Not found' });
  }
}
