import { useState, useEffect, useRef } from "react";
import Intro from "./components/intro";
// import FloatingHearts from "./components/FloatingHearts"; // REMOVIDO

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

import './App.css';

export default function App() {
  const [showMain, setShowMain] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
    }
  }, []);

  return (
    <>
      {!showMain && <Intro onEnter={() => setShowMain(true)} />}
      {showMain && (
        <div className="main-container">
          <header>
            <h1>Feliz Dia dos Namorados ❤️</h1>
            <p>Essa é uma surpresa feita com muito amor só pra você!</p>
          </header>

          <section className="carousel-section">
            <h2>Nossos momentos, sempre inesqueciveis ao seu lado!</h2>
            <div className="carousel-wrapper">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                modules={[Pagination, Autoplay, EffectFade]}
                className="swiper-container"
              >
                {[...Array(11)].map((_, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={`/fotos/foto${i + 1}.jpg`}
                      alt={`nós ${i + 1}`}
                      className="carousel-image"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          <section>
            <h2>Nosso Vídeo 🎥</h2>
            <video
              controls
              autoPlay
              loop
              className="rounded-xl w-full max-w-2xl mx-auto shadow-xl"
              style={{ height: "400px", objectFit: "cover" }}
            >
              <source src="/video/0610.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          </section>

          <section>
            <div className="card">
              <h2>Minha princesa,</h2>
              <p>
                Desde que você entrou na minha vida, eu descobri o verdadeiro significado da felicidade. Sempre gostei da minha própria companhia, mas foi com você que percebi como a vida a dois pode ser muito mais leve, bonita e completa.
Estar ao seu lado tornou tudo melhor — até os dias comuns ganharam brilho.

Eu te amo muito mais do que as palavras podem expressar… muito mais do que você imagina. 💖
              </p>
            </div>
          </section>

          <footer>
            <p>Com amor, seu namodivo ❤️</p>
            <audio ref={audioRef} loop>
              <source src="/musica/bk-planos.mp3" type="audio/mpeg" />
            </audio>
          </footer>

          <button
            onClick={() => {
              if (audioRef.current.paused) {
                audioRef.current.play();
              } else {
                audioRef.current.pause();
              }
            }}
            className="fixed bottom-4 right-4 bg-white text-red-600 p-3 rounded-full shadow-lg hover:bg-red-100 transition z-20"
          >
            🔊
          </button>
        </div>
      )}
    </>
  );
}
