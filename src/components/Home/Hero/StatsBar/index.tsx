export function StatsBar() {
    return (
      <div className="mx-auto w-full max-w-5xl rounded-xl bg-orange-50 ring-1 ring-emerald-100 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* 1 */}
          <div className="flex flex-col items-center justify-center py-8 px-6">
            <div className="text-4xl md:text-5xl font-extrabold leading-none tracking-tight text-primary/101 tabular-nums">
              +350
            </div>
            <div className="mt-3 text-sm md:text-base text-primary">
              Familias Atendidas
            </div>
          </div>
  
          {/* 2 (con separador a la izquierda en desktop) */}
          <div className="flex flex-col items-center justify-center py-8 px-6 md:border-l md:border-chart-3">
            <div className="text-4xl md:text-5xl font-extrabold leading-none tracking-tight text-primary tabular-nums">
              +5000
            </div>
            <div className="mt-3 text-sm md:text-base text-primary">
              Citas Realizadas
            </div>
          </div>
  
          {/* 3 (con separador a la izquierda en desktop) */}
          <div className="flex flex-col items-center justify-center py-8 px-6 md:border-l md:border-chart-3">
            <div className="text-4xl md:text-5xl font-extrabold leading-none tracking-tight text-primary/90 tabular-nums">
              +10
            </div>
            <div className="mt-3 text-sm md:text-base text-primary">
              Años de Experiencia
            </div>
          </div>
        </div>
      </div>
    );
  }
  