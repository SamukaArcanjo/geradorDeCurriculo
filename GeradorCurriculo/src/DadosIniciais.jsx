function DadosIniciais(props) {
  return (
    <div className="w-full">
      <div className="w-full rounded-2xl">
        <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-semibold text-slate-700">
            Dados iniciais
          </h2>

          <input
            type="text"
            placeholder="Nome"
            value={props.name}
            onChange={(e) => props.setName(e.target.value)}
            className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Sobrenome"
            value={props.sobrenome}
            onChange={(e) => props.setSobrenome(e.target.value)}
            className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={props.email}
            onChange={(e) => props.setEmail(e.target.value)}
            className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Telefone"
            value={props.telefone}
            onChange={(e) => props.setTelefone(e.target.value)}
            className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Cep"
            value={props.cep}
            onChange={(e) => props.setCep(e.target.value)}
            className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

export default DadosIniciais;
