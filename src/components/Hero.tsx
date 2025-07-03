const Hero = () => {
  return (
    <section className="w-full h-screen overflow-hidden isolate bg-background text-foreground">
      <div className="container mx-auto h-full px-4 flex flex-col-reverse lg:flex-row items-center justify-start pt-16 gap-8">
        {/* Texto */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-md">
            Bem-vindo ao <span className="text-yellow-500">Servidor</span>
            <br /> Minecraft da Comunidade
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore, construa e conecte-se com jogadores de todo o Brasil.
            <br />
            Um mundo de aventuras espera por você!
          </p>
          <a
            href="/about"
            className="mt-6 inline-block bg-yellow-400 text-orange-800 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-300 transition"
          >
            Saiba Mais
          </a>
        </div>

        {/* Imagem do Hero */}
        <div className="w-full max-w-lg lg:max-w-xl">
          <img
            src="/lovable-uploads/hero.png"
            alt="Personagens Minecraft"
            className="w-full h-auto rounded-xl drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
