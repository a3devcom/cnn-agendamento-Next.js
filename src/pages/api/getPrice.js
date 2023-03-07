import axios from "axios";

export default async function handler(req, res) {
  const { data, hora, idConvenio, idProcedimento } = req.query;

  try {
    const config = {
      headers: {
        Authorization: `Basic ${btoa('apiCnn:7eb16006265aa53516b1159503cc26eb738529d3448091416aba7c7784e5f681')}`,
        'clinicaNasNuvens-cid': '035ae979d091677ebc66e4ca780d894d' 
      }
    };

    
      const response = await axios.get("https://api.clinicanasnuvens.com.br/tipo-procedimento/valores-venda?dataBase=2023-03-07&horaBase=09%3A15%3A00&idTipoConvenio=35487&idTipoProcedimento=495224", config);


      return res.status(200).json(response);    
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
}