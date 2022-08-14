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
      <header class={tw`sticky top-0 z-50 bg-white md:bg-opacity-90 backdrop-blur-sm`}>
            
            <style>{`
            .mobile__menu__container {
                min-height: 80vh;
            }

            .mobile__menu {
                width: 100%;
                margin-top: 40px;
            }

            .mobile__menu li a {
                color: #111111;
                font-weight: 900;
            }

            html {
            font-size: 17px;
            }

            .breadcrumb li {
                display: inline-block;
                padding: 5px 10px;
            }

            iframe.map {
                width: 100vw !important;
            }

            .gap-4 {
                gap: 2rem;
            }

            .breadcrumb ul {
                display: flex;
            }
            
            .breadcrumb li {
                font-size: 14px;
            }
            
            .breadcrumb li::before {
                content: "→";
                padding-right: 20px;
            }
                
            .breadcrumb li:first-child::before {
                content: "";
            }

            .top__cities {
                padding-left: 20px;
            }
              
            .top__cities li {
                list-style: none;
                display: inline-block;
                font-size: 12px;
            }
            .top__cities li a {
                display: inline-block;
                padding-left: 12px;
                padding-right: 12px;
            }
    
            .list__title {
                font-weight: bold;
            }

            @media (max-width: 768px) {
                .services__section p.text-center {
                    margin-bottom: 15px;
                }
                
                .gap-4 {
                    gap: 1rem;
                }

            }
            
            `}
            </style>
            <div class={tw`flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8`}>
            <a class={tw`block text-teal-600`} href="https://www.localseo.studio">
                <span class={tw`sr-only`}>Home</span>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="369.99999999999994" height="50.000000000000014" viewBox="0 0 369.99999999999994 50.000000000000014" class="css-1j8o68f"><defs id="SvgjsDefs7875"></defs><g id="SvgjsG7876" featurekey="41S5F6-0" transform="matrix(0.5555555555555557,0,0,0.5555555555555557,-2.7777777777777786,-2.7777777777777786)" fill="#00756f"><g xmlns="http://www.w3.org/2000/svg" transform="translate(0,-952.36216)"><path style="opacity:1;fill:#00756f;fill-opacity:1;stroke:none;stroke-width:16;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" d="M 50 5 A 45 45 0 0 0 5 50 A 45 45 0 0 0 50 95 A 45 45 0 0 0 95 50 A 45 45 0 0 0 50 5 z M 31.996094 33.357422 A 0.42613663 0.42613663 0 0 1 32.199219 33.414062 L 39.845703 37.896484 A 0.42613663 0.42613663 0 0 1 39.96875 38.003906 L 42.714844 41.585938 L 46.775391 41.005859 A 0.42613663 0.42613663 0 0 1 46.880859 41.005859 L 50.068359 41.341797 L 51.521484 40.373047 A 0.42613663 0.42613663 0 0 1 52.134766 40.527344 L 52.792969 41.761719 L 53.771484 42.494141 A 0.42613663 0.42613663 0 0 1 53.939453 42.783203 L 54.058594 43.748047 L 54.675781 43.646484 A 0.42613663 0.42613663 0 0 1 55.171875 44.076172 L 55.09375 47.564453 L 55.949219 47.509766 A 0.42613663 0.42613663 0 0 1 56.398438 47.865234 L 56.779297 50.242188 L 60.117188 50.320312 A 0.42613663 0.42613663 0 0 1 60.523438 50.658203 L 60.75 51.716797 L 61.894531 52.462891 L 61.878906 52.275391 A 0.42613663 0.42613663 0 0 1 61.958984 51.990234 L 63.630859 49.705078 A 0.42613663 0.42613663 0 0 1 63.71875 49.615234 L 67.232422 46.978516 A 0.42613663 0.42613663 0 0 1 67.433594 46.896484 L 70.068359 46.546875 A 0.42613663 0.42613663 0 0 1 70.371094 47.316406 L 68.285156 48.794922 L 67.806641 49.232422 L 68.576172 49.458984 A 0.42613663 0.42613663 0 0 1 68.861328 49.732422 L 69.197266 50.746094 L 70.517578 50.689453 L 70.580078 49.837891 A 0.42613663 0.42613663 0 0 1 71.003906 49.443359 L 71.619141 49.443359 A 0.42613663 0.42613663 0 0 1 72.011719 49.705078 L 72.384766 50.595703 L 74.154297 51.320312 A 0.42613663 0.42613663 0 0 1 74.183594 51.333984 L 74.796875 51.640625 L 75.574219 51.640625 A 0.42613663 0.42613663 0 0 1 75.84375 52.396484 L 74.351562 53.626953 A 0.42613663 0.42613663 0 0 1 74.232422 53.695312 L 72.498047 54.355469 L 71.955078 55.052734 A 0.42613663 0.42613663 0 0 1 71.486328 55.195312 L 69.8125 54.638672 L 68.478516 55.34375 A 0.42613663 0.42613663 0 0 1 67.876953 55.101562 L 67.658203 54.449219 L 67.251953 54.179688 A 0.42613663 0.42613663 0 0 1 67.220703 53.494141 L 68.197266 52.699219 L 67.539062 52.214844 L 65.751953 53.148438 A 0.42613663 0.42613663 0 0 1 65.443359 53.181641 L 64.875 53.025391 L 64.677734 53.667969 L 64.830078 54.347656 A 0.42613663 0.42613663 0 0 1 64.488281 54.859375 L 63.212891 55.083984 L 62.339844 56.990234 A 0.42613663 0.42613663 0 0 1 61.964844 57.238281 L 59.427734 57.318359 L 59.191406 57.888672 L 59.875 58.759766 L 60.544922 58.759766 A 0.42613663 0.42613663 0 0 1 60.900391 58.949219 L 61.251953 59.476562 A 0.42613663 0.42613663 0 0 1 61.294922 59.865234 L 60.933594 60.806641 L 61.607422 61.855469 A 0.42613663 0.42613663 0 0 1 61.671875 62.142578 L 61.408203 64.078125 A 0.42613663 0.42613663 0 0 1 61.296875 64.310547 L 60.181641 65.505859 L 60.181641 66.216797 A 0.42613663 0.42613663 0 0 1 59.755859 66.642578 L 58.789062 66.642578 L 57.998047 66.642578 A 0.42613663 0.42613663 0 0 1 57.65625 66.472656 L 57.244141 65.921875 L 56.380859 65.849609 A 0.42613663 0.42613663 0 0 1 56.003906 65.535156 L 55.652344 64.216797 A 0.42613663 0.42613663 0 0 1 55.648438 64.019531 L 55.826172 63.1875 L 53.847656 62.673828 A 0.42613663 0.42613663 0 0 1 53.714844 62.613281 L 51.810547 61.316406 L 48.769531 59.923828 A 0.42613663 0.42613663 0 0 1 48.681641 59.871094 L 43.671875 55.916016 A 0.42613663 0.42613663 0 0 1 43.521484 55.677734 L 43.185547 54.253906 L 42.609375 53.349609 A 0.42613663 0.42613663 0 0 1 42.5625 53.246094 L 42.164062 51.974609 L 41.011719 51.107422 L 41.005859 51.130859 A 0.42613663 0.42613663 0 0 1 40.462891 51.416016 L 39.21875 51.001953 L 37.275391 51.087891 A 0.42613663 0.42613663 0 0 1 36.867188 50.833984 L 36.515625 50.042969 A 0.42613663 0.42613663 0 0 1 36.480469 49.90625 L 36.248047 47.185547 L 34.755859 47.042969 A 0.42613663 0.42613663 0 0 1 34.414062 46.808594 L 34.09375 46.166016 L 33.566406 46.166016 A 0.42613663 0.42613663 0 0 1 33.25 46.025391 L 32.568359 45.275391 L 31.609375 45.648438 L 31.693359 45.988281 A 0.42613663 0.42613663 0 0 1 31.384766 46.503906 L 30.138672 46.816406 L 29.349609 47.998047 A 0.42613663 0.42613663 0 0 1 28.960938 48.185547 L 28.234375 48.125 L 27.869141 49.158203 L 28.335938 50.326172 A 0.42613663 0.42613663 0 0 1 27.873047 50.90625 L 24.621094 50.378906 A 0.42613663 0.42613663 0 0 1 24.263672 49.966797 L 24 35.992188 A 0.42613663 0.42613663 0 0 1 24.306641 35.574219 L 31.865234 33.378906 A 0.42613663 0.42613663 0 0 1 31.996094 33.361328 L 31.996094 33.359375 L 31.996094 33.357422 z " transform="translate(0,952.36216)"></path></g></g><g id="SvgjsG7877" featurekey="RGwKHf-0" transform="matrix(2.4088647516685238,0,0,2.4088647516685238,68.69921298241037,-8.45190707612597)" fill="#333333"><path d="M0.54 19.7 l0 -2.82 c0.24 0.06 0.54 0.12 0.88 0.16 c0.34 0.06 0.7 0.1 1.08 0.12 s0.76 0.04 1.16 0.06 s0.78 0.04 1.12 0.04 c0.94 0 1.6 -0.06 2 -0.16 c0.38 -0.1 0.58 -0.28 0.58 -0.56 c0 -0.24 -0.18 -0.42 -0.36 -0.56 c-0.66 -0.44 -1.44 -0.62 -2.22 -0.8 c-2.2 -0.44 -4.22 -1.32 -4.22 -3.84 c0 -2.98 2.82 -3.68 5.24 -3.68 c1.34 0 2.7 0.14 4 0.46 l0 2.82 c-0.2 -0.06 -0.46 -0.1 -0.78 -0.16 c-0.34 -0.04 -0.68 -0.08 -1.06 -0.12 c-0.78 -0.08 -1.52 -0.12 -2.3 -0.12 c-0.44 0 -1.36 0 -1.78 0.16 c-0.28 0.1 -0.46 0.22 -0.46 0.54 c0 0.16 0.04 0.3 0.12 0.42 c0.08 0.14 0.22 0.24 0.4 0.34 c0.54 0.3 1.24 0.48 1.84 0.62 c0.5 0.12 1 0.26 1.52 0.4 c1.76 0.48 2.92 1.46 2.92 3.34 c0 3.1 -3.08 3.76 -5.56 3.76 c-1.36 0 -2.78 -0.1 -4.12 -0.42 z M19.32 7.76 l3 0 l0 7.24 c0 3.18 -2.28 5.1 -5.3 5.1 c-3.1 0 -5.3 -2.04 -5.3 -5.1 l0 -7.24 l3 0 l0 7.24 c0 1.44 0.86 2.32 2.3 2.32 c1.48 0 2.3 -0.86 2.3 -2.32 l0 -7.24 z M24.42 20 l0 -12.24 l5.8 0 c2.28 0 4.22 1.72 4.22 4.02 c0 2.32 -2 4.02 -4.22 4.02 l-2.8 0 l0 4.2 l-3 0 z M30.220000000000002 10.54 l-2.8 0 l0 2.48 l2.8 0 c0.7 0 1.22 -0.54 1.22 -1.24 s-0.52 -1.24 -1.22 -1.24 z M35.94 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 1.94 l6.1 0 l0 2.78 l-9.1 0 l0 -12.24 z M49.739999999999995 10.58 l0 2.92 l2.8 0 c0.92 0 1.46 -0.54 1.46 -1.46 s-0.54 -1.46 -1.46 -1.46 l-2.8 0 z M54.279999999999994 15.48 c0.56 0.76 1.12 1.52 1.7 2.26 c0.56 0.74 1.12 1.5 1.68 2.26 l-3.66 0 c-0.72 -0.96 -1.42 -1.92 -2.12 -2.88 c-0.7 -0.94 -1.42 -1.9 -2.14 -2.86 l0 5.74 l-3 0 l0 -12.24 l5.8 0 c2.28 0 4.22 1.74 4.22 4.04 c0 1.62 -1 3.04 -2.48 3.68 z M72.33999999999999 13.719999999999999 c0.88 0.62 1.4 1.54 1.4 2.62 c0 2.08 -1.92 3.66 -3.92 3.66 l-6.5 0 l0 -12.24 l6.1 0 c1.6 0 2.92 0.86 3.62 2.28 c0.2 0.46 0.3 0.92 0.3 1.4 c0 0.9 -0.36 1.64 -1 2.28 z M66.32 10.54 l0 1.96 l3.1 0 c0.52 0 0.92 -0.5 0.92 -1 c0 -0.52 -0.38 -0.96 -0.92 -0.96 l-3.1 0 z M66.32 15.280000000000001 l0 1.94 l3.5 0 c0.54 0 0.92 -0.44 0.92 -0.96 c0 -0.26 -0.1 -0.5 -0.28 -0.7 c-0.18 -0.18 -0.4 -0.28 -0.64 -0.28 l-3.5 0 z M81.32 17.32 c2.18 0 3.3 -1.4 3.3 -3.44 c0 -2.16 -1.2 -3.44 -3.3 -3.44 c-2.2 0 -3.3 1.4 -3.3 3.44 c0 2.12 1.22 3.44 3.3 3.44 z M81.32 20.1 c-3.76 0 -6.3 -2.56 -6.3 -6.22 c0 -3.78 2.66 -6.22 6.3 -6.22 c3.78 0 6.3 2.54 6.3 6.22 c0 3.8 -2.64 6.22 -6.3 6.22 z M92.34 17.28 l6.58 0 l0 2.72 l-10.2 0 l0 -2.72 l6.16 -6.8 l-5.76 0 l0 -2.72 l9.4 0 l0 2.72 z M106.00000000000001 17.32 c2.18 0 3.3 -1.4 3.3 -3.44 c0 -2.16 -1.2 -3.44 -3.3 -3.44 c-2.2 0 -3.3 1.4 -3.3 3.44 c0 2.12 1.22 3.44 3.3 3.44 z M106.00000000000001 20.1 c-3.76 0 -6.3 -2.56 -6.3 -6.22 c0 -3.78 2.66 -6.22 6.3 -6.22 c3.78 0 6.3 2.54 6.3 6.22 c0 3.8 -2.64 6.22 -6.3 6.22 z M117.16000000000003 10.58 l0 2.92 l2.8 0 c0.92 0 1.46 -0.54 1.46 -1.46 s-0.54 -1.46 -1.46 -1.46 l-2.8 0 z M121.70000000000002 15.48 c0.56 0.76 1.12 1.52 1.7 2.26 c0.56 0.74 1.12 1.5 1.68 2.26 l-3.66 0 c-0.72 -0.96 -1.42 -1.92 -2.12 -2.88 c-0.7 -0.94 -1.42 -1.9 -2.14 -2.86 l0 5.74 l-3 0 l0 -12.24 l5.8 0 c2.28 0 4.22 1.74 4.22 4.04 c0 1.62 -1 3.04 -2.48 3.68 z"></path></g></svg>
            </a>
            <div class={tw`flex items-center justify-end flex-1 md:justify-between`}>
                <nav class={tw`hidden md:block`} aria-labelledby="header-navigation">
                <h2 class={tw`sr-only`} id="header-navigation">Header navigation</h2>
                <ul class={tw`flex items-center gap-6 text-sm flex items-center justify-between flex-none`}>
                    
                </ul>
                </nav>


                <div class={tw`flex items-center gap-4`}>

                <a href="tel:(877)447-2611" class={tw`pt-6`} aria-label="Call Local SEO Studio">
                    <svg class="h-5 w-5 text-teal"  viewBox="0 0 24 24"  fill="none"  stroke="teal"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    &nbsp;
                </a>

                <div class={tw`sm:gap-4 sm:flex`}>
                    <a class={tw`sm:block px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-green-400 rounded-md hover:text-black transition`} href="/get-started"> Get Started </a>
                </div>
                <a href="/menu" class={tw`block p-2.5 text-gray-600 transition bg-gray-100 rounded md:hidden hover:text-gray-600/75`}>
                    <span class={tw`sr-only`}>Toggle menu</span>
                    <svg class={tw`w-5 h-5`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </a>
                </div>
            </div>
            </div>
        </header>

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

