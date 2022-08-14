/** @jsx h */
import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import Header from "../islands/Header.tsx";
import { tw } from "@twind";
// import Footer from "../islands/Footer.tsx";


export default function Home() {

  

  return (

    <div>
      <Head>
        <title>O'zbekistonda Birinchi Internet Bozor Superbozor.uz </title>
        <meta name="description" content="" />
        <meta name="yandex-verification" content="a9e6221dd7b6e348" />
        <style>{`
        .lottie {
          background: transparent;
          height: auto;
          width: 500px;
          max-width: 100%;
          pointer-events: none;
        }

        .circles {
          width: 98vw;
          height: auto;
        }
        
        `}
        </style>
      </Head>
      <Header/>

      <section class={tw`relative`}>
          <div class={tw`absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none`} aria-hidden="true">
            <svg class="circles" width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                  <stop stop-color="#FFF" offset="0%"></stop>
                  <stop stop-color="#EAEAEA" offset="77.402%"></stop>
                  <stop stop-color="#DFDFDF" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g fill="url(#illustration-01)" fill-rule="evenodd">
                <circle cx="1232" cy="128" r="128"></circle>
                <circle cx="155" cy="443" r="64"></circle>
              </g>
            </svg>
          </div>
          <div class={tw`max-w-6xl mx-auto px-4 sm:px-6`}>
            <div class={tw`pt-16 pb-12 md:pt-16 md:pb-20`}>
              <div class={tw`text-center pb-12 md:pb-16`}>
                <h1 class={tw`text-3xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate`}>SuperBozor.uz<span class={tw`block`}> <span class={tw`bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400`}>Birinchi Onlayn Bozor</span></span>
                </h1>
                
              </div>
              
            </div>
          </div>
        </section>

      
    </div>
  );
}

