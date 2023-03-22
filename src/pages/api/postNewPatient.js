import axios from "axios";
import dayjs from "dayjs";
import config from "@/config/apiConfig";

export default async function handler(req, res) {
  const { email, telefone, cpf, dataNasc, genero, nome } = req.query;

  try {
    const response = await axios.post("https://api.clinicanasnuvens.com.br/paciente/novo", {
      contato: {
        email: email,
        ramalTelefoneComercial: null,
        ramalTelefoneRecados: null,
        ramalTelefoneResidencial: null,
        skype: null,
        telefoneCelular: telefone,
        telefoneComercial: null,
        telefoneRecados: null,
        telefoneResidencial: null
      },
      cpfcnpj: cpf,
      dataNascimento: dayjs(dataNasc).format('YYYY-MM-DD'),
      endereco: {
        bairro: null,
        cep: null,
        complemento: null,
        idCidade: null,
        numero: null,
        rua: null
      },
      estrangeiro: false,
      genero: genero,
      idNacionalidade: null,
      idOrigem: null,
      nome: nome,
      nomeSocial: null,
      numeroControle: null,
      numeroIdentificacao: null,
      sexo: genero[0]
    }, config);

    return res.status(200).json(response.data.id);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
}
