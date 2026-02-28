import React from 'react';
import CalendarScreen from './screens/CalendarScreen';
import ExpiredScreen from './screens/ExpiredScreen';
import { isOrazaExpired } from './utils';

const STARS = [
  'app-star s1 d0 o1 t8 l6',
  'app-star s2 d2 o2 t12 l22',
  'app-star s1 d4 o1 t6 l41',
  'app-star s2 d1 o2 t18 l55',
  'app-star s1 d3 o2 t10 l73',
  'app-star s2 d5 o1 t20 l92',

  'app-star s2 d3 o1 t28 l10',
  'app-star s1 d1 o2 t34 l26',
  'app-star s2 d5 o1 t30 l44',
  'app-star s1 d2 o2 t38 l63',
  'app-star s2 d4 o1 t26 l80',
  'app-star s1 d0 o1 t36 l95',

  'app-star s1 d4 o1 t46 l5',
  'app-star s2 d1 o2 t52 l19',
  'app-star s1 d5 o1 t48 l37',
  'app-star s2 d3 o1 t58 l53',
  'app-star s1 d2 o2 t50 l71',
  'app-star s2 d0 o1 t60 l88',

  'app-star s2 d2 o1 t66 l12',
  'app-star s1 d4 o2 t72 l29',
  'app-star s2 d0 o1 t70 l47',
  'app-star s1 d3 o2 t78 l64',
  'app-star s2 d5 o1 t68 l82',
  'app-star s1 d1 o1 t76 l96',

  'app-star s1 d5 o1 t86 l8',
  'app-star s2 d1 o2 t90 l24',
  'app-star s1 d3 o2 t88 l42',
  'app-star s2 d4 o1 t94 l58',
  'app-star s1 d2 o2 t92 l77',
  'app-star s2 d0 o1 t96 l93',

  'app-star s2 d3 o1 t14 l12',
  'app-star s1 d2 o2 t22 l34',
  'app-star s2 d4 o1 t16 l67',
  'app-star s1 d0 o1 t24 l86',
  'app-star s2 d5 o2 t40 l14',
  'app-star s1 d1 o1 t42 l78',
  'app-star s2 d2 o2 t62 l34',
  'app-star s1 d4 o1 t82 l62',
  'app-star s2 d0 o2 t84 l88',
  'app-star s1 d5 o1 t44 l92',

  'app-star s2 d1 o2 t3 l33',
  'app-star s1 d3 o1 t7 l51',
  'app-star s2 d0 o2 t11 l70',
  'app-star s1 d2 o1 t15 l88',
  'app-star s2 d4 o2 t19 l4',
  'app-star s1 d5 o1 t23 l48',

  'app-star s2 d2 o1 t32 l17',
  'app-star s1 d0 o2 t37 l59',
  'app-star s2 d3 o1 t43 l31',
  'app-star s1 d1 o2 t49 l84',
  'app-star s2 d5 o1 t55 l9',
  'app-star s1 d4 o2 t61 l42',

  'app-star s2 d0 o1 t67 l74',
  'app-star s1 d3 o2 t73 l20',
  'app-star s2 d1 o1 t79 l56',
  'app-star s1 d5 o2 t85 l38',
  'app-star s2 d2 o1 t91 l15',
  'app-star s1 d4 o2 t97 l69',

  'app-star s1 d1 o1 t5 l90',
  'app-star s2 d3 o2 t9 l27',
  'app-star s1 d0 o1 t27 l72',
  'app-star s2 d5 o2 t33 l45',
  'app-star s1 d2 o1 t57 l3',
  'app-star s2 d4 o2 t75 l98',
];

const App: React.FC = () => {
  const expired = isOrazaExpired();

  return (
    <div className="relative min-h-[90vh] w-full overflow-x-hidden bg-[#050a1e]">
      {/* Слои фонового изображения */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1635] via-[#050a1e] to-[#030612]"></div>
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none app-noise"></div>
      </div>
      {/* Контент приложения */}
      <div className="relative z-10 px-4">
        {/* Header Section */}
        <header className="flex flex-col items-center mb-2 max-w-[1100px] mx-auto text-center">
          {/* Top Bar: Lantern, Logo, Moon */}
          <div className="w-full flex justify-between items-start mb-0 px-4">
            <div className="flex flex-col items-center">
              <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-[#D4A843]"></div>
              <span className="text-4xl drop-shadow-[0_0_15px_rgba(212,168,67,0.6)] animate-pulse">
                🏮
              </span>
            </div>

            <div className="flex flex-col items-center mt-8">
              <div className="bg-white px-16 py-2 rounded-sm shadow-xl border-b-8 border-red-800">
                <div className="flex items-center">
                  <div className="text-red-600 font-black text-3xl italic mr-1">V</div>
                  <div className="text-gray-900 font-bold text-2xl tracking-tighter uppercase">
                    Valvoline<span className="text-[12px] align-top font-normal">TM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-6xl text-[#D4A843] rotate-[-15deg] drop-shadow-[0_0_20px_rgba(212,168,67,0.4)]">
                🌙
              </span>
              <span className="text-white/60 text-sm font-serif italic mt-[20px] ml-3">2026</span>
            </div>
          </div>
          {/* Один баннер вместо трёх канистр (без анимации) */}
          <div className="w-full flex justify-center items-center relative z-1 mt-0 mb-0 md:mt-2 md:mb-2">
            <div className="w-[85vw] max-w-[320px] sm:max-w-[420px] md:max-w-[650px] z-20">
              <img
                src={`${import.meta.env.BASE_URL}valvoline_glow.png`}
                alt="Valvoline"
                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
          {/* Contact Row */}
          <div className="w-full border-y border-white/10 py-4 mb-6 flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-12 text-white/90 text-xs md:text-sm font-medium">
            <div className="flex items-center">
              <span className="mr-2">📞</span> +993(522) 7 47 41
            </div>
            <div className="hidden md:block text-[#D4A843] opacity-30">|</div>
            <div className="flex items-center">
              <span className="mr-2">📍</span> ş. Mary köçe Magtymguly
            </div>
          </div>

          <h2 className="text-3xl md:text-6xl font-serif italic text-white mb-4 drop-shadow-lg">
            Orazalaryňyz kabul bolsun!
          </h2>
        </header>

        {expired ? <ExpiredScreen /> : <CalendarScreen />}
      </div>

      {/* Звездное небо (без inline-style) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {STARS.map((cls, i) => (
          <div key={i} className={cls} />
        ))}
      </div>
    </div>
  );
};

export default App;
