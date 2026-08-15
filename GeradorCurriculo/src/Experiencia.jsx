import { useState } from "react";

function Experiencia(props) {
  const [botao, setBotao] = useState(false);
  const [valueUm, setValueUm] = useState(0);
  const [valueDois, setValueDois] = useState(0);

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-slate-700">Experiência</h2>

        <button
          className="flex h-8 w-8 items-center justify-center rounded-md bg-[#c7c7c7] font-bold text-white transition-colors hover:bg-[#8f8f8f]"
          onClick={() => setBotao(!botao)}
        >
          +
        </button>

        {botao ? (
          <div className="flex w-full flex-col gap-3">
            <input
              type="text"
              placeholder="Digite qual era o seu cargo nessa experiencia"
              onChange={(event) => props.setTituloExp(event.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />

            <div>
              <input
                type="date"
                onChange={(event) => setValueUm(event.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                onChange={(event) => setValueDois(event.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="text"
              placeholder="fale um pouco sobre sua experiencia"
              onChange={(event) => props.setSobreExp(event.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Experiencia;
