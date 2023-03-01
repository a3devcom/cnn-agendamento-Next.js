import axios from "axios";

export default async function handler(_req, res) {
  try {
    const config = {
      headers: {
        Authorization: `Basic ${btoa('apiCnn:7eb16006265aa53516b1159503cc26eb738529d3448091416aba7c7784e5f681')}`,
        'clinicaNasNuvens-cid': '035ae979d091677ebc66e4ca780d894d' 
      }
    };

    const response = await axios.get("https://api.clinicanasnuvens.com.br/executor-agenda/lista?somenteAtivos=true", config);


    res.status(200).json(response.data.lista);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
}
