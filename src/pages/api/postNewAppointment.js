import axios from "axios";
import config from "@/config/apiConfig";

export default async function handler(req, res) {
  const { data, emailPaciente, horaInicio, horaFim, idLocalAgenda, idPaciente, idPacienteConvenio, idPessoaExecutor, telefoneCelularPaciente } = req.query;

  try {
    const response = await axios.post("https://api.clinicanasnuvens.com.br/agenda/novo", {
      data,
      emailPaciente,
      encaminhamento: null,
      horaFim,
      horaInicio,
      idLocalAgenda,
      idOrigemPaciente: null,
      idPaciente,
      idPacienteConvenio,
      idPessoaExecutor,
      idTipoConsulta: 74946,
      notificarEmailPaciente: true,
      notificarEmailProfissional: true,
      notificarSMSPaciente: true,
      notificarSMSProfissional: true,
      notificarWhatsappPaciente: true,
      observacoes: 'Este agendamento foi realizado pelo site',
      procedimentos: [
        {
          idEspecialidade: null,
          idPromocao: null,
          idTipoProcedimento: 483902,
          quantidade: 1
        }
      ],
      salaEspera: 'CRIAR',
      status: 'AGENDADO',
      telefoneCelularPaciente
    }, config);

    return res.status(201).json(response.data);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
}