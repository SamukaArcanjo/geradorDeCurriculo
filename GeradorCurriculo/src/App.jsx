import React, { useState } from "react";
import DadosIniciais from "./DadosIniciais";
import Curriculo from "./Curriculo";
import Escolaridade from "./Escolaridade";
import Experiencia from "./Experiencia";

function App() {
  const [name, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");

  // Escolaridade
  const [selEscolaridade, setSelEscolaridade] = useState("");

  // Experiencia
  const [tituloExp, setTituloExp] = useState("");
  const [sobreExp, setSobreExp] = useState("");
  const [tempExp, setTempExp] = useState("");

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Área de configurações */}
      <div className="flex w-1/2 flex-col items-center  p-8">
        <h1 className="mb-8 text-3xl font-bold text-slate-800">
          Configurações
        </h1>

        <div className="w-full max-w-xl space-y-6 bg-white p-8 shadow-xl rounded-md">
          <DadosIniciais
            name={name}
            setName={setName}
            sobrenome={sobrenome}
            setSobrenome={setSobrenome}
            email={email}
            setEmail={setEmail}
            telefone={telefone}
            setTelefone={setTelefone}
            cep={cep}
            setCep={setCep}
          />
          <div>
            <Experiencia
              tituloExp={tituloExp}
              setTituloExp={setTituloExp}
              sobreExp={sobreExp}
              setSobreExp={setSobreExp}
              tempExp={tempExp}
              setTempExp={setTempExp}
            />
          </div>

          <div>
            <Escolaridade
              selEscolaridade={selEscolaridade}
              setSelEscolaridade={setSelEscolaridade}
            />
          </div>
        </div>
      </div>

      {/* Área do currículo */}
      <div className="flex w-1/2 items-start justify-center p-8">
        <Curriculo
          name={name}
          sobrenome={sobrenome}
          email={email}
          telefone={telefone}
          cep={cep}
          selEscolaridade={selEscolaridade}
          tituloExp={tituloExp}
          sobreExp={sobreExp}
          tempExp={tempExp}
        />
      </div>
    </div>
  );
}

export default App;
