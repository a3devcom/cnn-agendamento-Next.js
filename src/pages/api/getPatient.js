import axios from "axios";

export default async function handler(req, res) {
  const { cpf } = req.query;

  try {
    const config = {
      headers: {
        Authorization: `Basic ${btoa('apiCnn:7eb16006265aa53516b1159503cc26eb738529d3448091416aba7c7784e5f681')}`,
        'clinicaNasNuvens-cid': '035ae979d091677ebc66e4ca780d894d' 
      }
    };

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
