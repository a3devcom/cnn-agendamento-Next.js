import axios from "axios";

export default async function handler(_req, res) {
  try {
    const config = {
      headers: {
        Authorization: `Basic ${btoa('apiCnn:7eb16006265aa53516b1159503cc26eb738529d3448091416aba7c7784e5f681')}`,
        'clinicaNasNuvens-cid': '035ae979d091677ebc66e4ca780d894d' 
      }
    };

    const response = await axios.get(`https://api.clinicanasnuvens.com.br/tipo-convenio/lista?somenteAtivos=true&somenteParticulares=false`, config);
    console.log(response.data);
    const filteredList = response.data.lista.filter((convenio) => convenio.nome !== 'Particular');


    res.status(200).json(filteredList);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
}
