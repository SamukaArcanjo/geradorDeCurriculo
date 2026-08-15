import { useState } from "react";
import Curriculo from "./Curriculo";

function Escolaridade(props) {
  const [botao, setBotao] = useState(false);

  const listEscolaridade = [
    "Ensino médio incompleto",
    "Ensino médio completo",
    "Ensino superior incompleto",
    "Ensino superior completo",
    "Pós graduado",
  ];

  return (
    <div className="flex flex-col gap-4 bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-slate-700">Escolaridade</h2>

        <button
          className="w-8 h-8 flex items-center justify-center rounded-md bg-[#c7c7c7] text-white font-bold hover:bg-[#8f8f8f] transition-colors"
          onClick={() => setBotao(!botao)}
        >
          +
        </button>
      </div>

      {botao
        ? listEscolaridade.map((escolaridade) => {
            return (
              <div key={escolaridade}>
                <button
                  className="w-full text-left px-4 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 transition-colors"
                  onClick={() => {
                    (props.setSelEscolaridade(escolaridade),
                      console.log("Deu certo"));
                  }}
                >
                  {escolaridade}
                </button>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default Escolaridade;
