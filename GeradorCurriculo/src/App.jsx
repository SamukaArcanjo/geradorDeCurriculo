import React, { useState } from "react";

function App() {
  const [name, setName] = useState("sasaaaa");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  return (
    <div className="flex min-h-screen bg-slate-100">
      <div className="flex justify-center items-center w-1/2 p-8 border-r border-slate-300">
        <div className="w-[500px] min-h-[800px] bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-8">
            Configurações
          </h1>

          <div className="flex flex-col gap-4 bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-slate-700">
              Dados iniciais
            </h2>

            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Sobrenome"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-1/2 p-8">
        <div className="w-[650px] min-h-[800px] bg-white rounded-2xl shadow-xl p-10">
          <h1 className="text-4xl font-bold text-slate-800">
            {name} {sobrenome}
          </h1>

          <div className="mt-6 space-x-2 text-slate-600">
            <p>{`Email: ${email}`}</p>
            <p>{`Telefone ${telefone}`} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
