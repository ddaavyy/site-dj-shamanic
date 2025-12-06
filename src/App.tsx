function App() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-12">
      <h1 className="title-outline mb-12" data-text="DJ SHAMANIC">
        DJ SHAMANIC
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <img
          src="/foto-usuario.jpeg"
          alt="DJ Shamanic"
          className="w-full neon-border rounded-lg object-cover"
        />

        <div>
          <h2 className="neon-blue text-2xl mb-3">BIO OFICIAL</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            DJ Shamanic canaliza vibrações profundas de psytrance, misturando
            espiritualidade UV, estética tribal e atmosferas psicodélicas.
            Inspirado por ritmos ancestrais e frequência elevada, cada set é uma
            jornada ritualística que une energia, dança e consciência.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="neon-blue text-2xl mb-2">GÊNEROS</h2>
        <p className="text-gray-300 text-lg">
          Psytrance · Progressive Trance · Dark Progressive · Hardtechno
        </p>
      </div>

      <div className="mt-16 text-center">
        <h2 className="neon-blue text-2xl mb-4">REDES OFICIAIS</h2>

        <div className="flex flex-wrap justify-center gap-8 text-xl">
          <a className="hover:text-[#086a85] transition" target="_blank" href="https://www.instagram.com/_djshamanic_/?utm_source=ig_web_button_share_sheet">
            Instagram
          </a>
          <a className="hover:text-[#086a85] transition" target="_blank" href="https://soundcloud.com/amv-discarregado?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
            SoundCloud
          </a>
          <a className="hover:text-[#086a85] transition" href="#">
            YouTube
          </a>
          <a className="hover:text-[#086a85] transition" href="#">
            QR Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
