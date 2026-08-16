import { useEffect, useState } from "react";

function Experiencia(props) {
  const [botao, setBotao] = useState(false);
  const [valueUm, setValueUm] = useState("");
  const [valueDois, setValueDois] = useState("");

  // Calculando data
  useEffect(() => {
    if (valueUm !== "" && valueDois !== "") {
      const dataInicio = new Date(valueUm);
      const dataFim = new Date(valueDois);

      let anosFim = dataFim.getFullYear() - dataInicio.getFullYear();
      let mesFim = dataFim.getMonth() - dataInicio.getMonth();
      let diaFim = dataFim.getDate() - dataInicio.getDate();

      if (diaFim < 0) {
        mesFim--;

        const diasNoMesAnterior = new Date(
          dataFim.getFullYear(),
          dataFim.getMonth(),
          0,
        ).getDate();

        diaFim += diasNoMesAnterior;
      }

      if (mesFim < 0) {
        anosFim--;
        mesFim += 12;
      }

      props.setTempExp(`${anosFim} ano(s) e ${mesFim} mes(es)`);
    }
  }, [valueUm, valueDois]);

  return (
    <div className="flex flex-col gap-5 rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-700">Experiência</h2>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-300 text-xl font-bold text-white transition-colors hover:bg-slate-400"
          onClick={() => setBotao(!botao)}
        >
          +
        </button>
      </div>

      {/* Formulário */}
      {botao && (
        <div className="flex w-full flex-col gap-4">
          {/* Cargo */}
          <input
            type="text"
            placeholder="Digite qual era o seu cargo nessa experiência"
            onChange={(event) => props.setTituloExp(event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />

          {/* Datas */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-600">
                Data de início
              </label>

              <input
                type="date"
                value={valueUm}
                onChange={(event) => setValueUm(event.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-slate-600">
                Data de término
              </label>

              <input
                type="date"
                value={valueDois}
                onChange={(event) => setValueDois(event.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white p-3 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Descrição */}
          <textarea
            placeholder="Fale um pouco sobre sua experiência"
            onChange={(event) => props.setSobreExp(event.target.value)}
            className="min-h-[160px] w-full resize-y rounded-lg border border-slate-300 bg-white p-3 text-start text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
    </div>
  );
}

export default Experiencia;
