
export default function Admin() {
  return (
    <section className="relative overflow-hidden bg-secondary pt-6 pb-12 lg:pb-16">
      <div className="mx-auto mt-12 mb-10 max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
          {/* Texto */}
          <div>
            <div className="h-1 w-16 bg-primary rounded-full mb-6" />
            <p className="text-primary font-semibold tracking-wide uppercase text-sm">
              hola
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-foreground">
              DOCTOR{" "}
              <span className="text-chart-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia reprehenderit recusandae quod in optio consectetur quidem nisi eum possimus a ad, sed sequi dicta id et, asperiores voluptatibus, voluptates rem.</span>
              <span className="text-primary">dddd</span>
            </h1>

            <p className="mt-5 text-foreground text-base md:text-lg max-w-prose">
              Doctor <span className="font-medium text-primary">hhh</span> aaa{" "}
              <span className="font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta hic, enim fuga quisquam illo quibusdam culpa, totam corrupti ea itaque repellendus nostrum possimus architecto impedit numquam ullam reprehenderit animi facilis.</span> y{" "}
              <span className="font-semibold">ff</span>a{" "}
              <span className="font-semibold">dd</span> aaaaaaa
            </p>

            <p className="mt-5 text-foreground">reserva</p>

  
          </div>

          <div className="relative">
            <div className="relative mx-auto w-72 sm:w-80 md:w-[28rem]">
              <img
                src={""}
                alt="foto del doctor"
                className="w-full h-auto object-contain drop-shadow-xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute inset-x-0 bottom-0 h-6 bg-white z-0" />  ← eliminado */}
    </section>
  );
}
