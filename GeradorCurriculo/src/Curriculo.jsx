function Curriculo(props) {
  return (
    <div className="flex w-full justify-center">
      <div className="min-h-[800px] w-full max-w-[650px] rounded-2xl bg-white p-10 shadow-xl">
        {/* Cabeçalho */}
        <div className="border-b border-slate-200 pb-6">
          <h1 className="text-4xl font-bold text-slate-800">
            {props.name} {props.sobrenome}
          </h1>

          <div className="mt-4 space-y-1 text-sm text-slate-600">
            {props.email && <p>Email: {props.email}</p>}
            {props.telefone && <p>Telefone: {props.telefone}</p>}
            {props.cep && <p>CEP: {props.cep}</p>}
          </div>
        </div>

        {/* Experiência */}
        <div className="mt-8">
          <h2 className="border-b border-slate-200 pb-2 text-2xl font-semibold text-slate-800">
            Experiência
          </h2>

          <div className="mt-4">
            <div className="flex items-center justify-between gap-4">
              <p className="text-lg font-semibold text-slate-700">
                {props.tituloExp}
              </p>

              <p className="whitespace-nowrap text-sm text-slate-500">
                {props.tempExp}
              </p>
            </div>

            <p className="mt-2 max-w-full break-words leading-relaxed text-slate-600">
              {props.sobreExp}
            </p>
          </div>
        </div>

        {/* Escolaridade */}
        <div className="mt-8">
          <h2 className="border-b border-slate-200 pb-2 text-2xl font-semibold text-slate-800">
            Escolaridade
          </h2>

          <p className="mt-4 text-slate-600">{props.selEscolaridade}</p>
        </div>
      </div>
    </div>
  );
}

export default Curriculo;
