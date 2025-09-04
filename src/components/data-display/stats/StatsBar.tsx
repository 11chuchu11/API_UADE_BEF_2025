export function StatsBar() {
    return (
      <div className="mx-auto w-full max-w-5xl rounded-xl bg-orange-50 ring-1 ring-emerald-100 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* 1 */}
          <div className="flex flex-col items-center justify-center py-8 px-6">
            <div className="text-4xl md:text-5xl font-extrabold leading-none tracking-tight text-emerald-700 tabular-nums">
              +350
            </div>
            <div className="mt-3 text-sm md:text-base text-emerald-700/70">
              Familias Atendidas
            </div>
          </div>
  
          {/* 2 (con separador a la izquierda en desktop) */}
          <div className="flex flex-col items-center justify-center py-8 px-6 md:border-l md:border-emerald-200/70">
            <div className="text-4xl md:text-5xl font-extrabold leading-none tracking-tight text-emerald-700 tabular-nums">
              +5000
            </div>
            <div className="mt-3 text-sm md:text-base text-emerald-700/70">
              Citas Realizadas
            </div>
          </div>
  
          {/* 3 (con separador a la izquierda en desktop) */}
          <div className="flex flex-col items-center justify-center py-8 px-6 md:border-l md:border-emerald-200/70">
            <div className="text-4xl md:text-5xl font-extrabold leading-none tracking-tight text-emerald-700 tabular-nums">
              +10
            </div>
            <div className="mt-3 text-sm md:text-base text-emerald-700/70">
              Años de Experiencia
            </div>
          </div>
        </div>
      </div>
    );
  }
  