function Curriculo(props) {
  return (
    <div className="flex w-full justify-center">
      <div className="min-h-[800px] w-full max-w-[650px] rounded-2xl bg-white p-10 shadow-xl">
        <h1 className="text-4xl font-bold text-slate-800">
          {props.name} {props.sobrenome}
        </h1>

        <div className="mt-6 space-y-2 text-slate-600">
          <p>{props.email ? `Email: ${props.email}` : ""}</p>
          <p>{props.telefone ? `Telefone: ${props.telefone}` : ""}</p>
          <p>{props.cep ? `Cep: ${props.cep}` : ""}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Experiência</h2>
          <div>
            <p>{props.tituloExp}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-800">
            Escolaridade
          </h2>

          <p className="mt-2 text-slate-600">{props.selEscolaridade}</p>
        </div>
      </div>
    </div>
  );
}

export default Curriculo;
