import { DuaData } from './types';

export const COLORS = {
  bgPrimary: '#050a1e',
  bgSecondary: '#0a1635',
  accentGreen: '#1FAF5A',
  accentGold: '#D4A843',
  textSuhoor: '#ff4d4d', // Red as seen in the poster
  textIftar: '#ff4d4d', // Red as seen in the poster
  rowActive: 'rgba(255, 255, 255, 0.1)',
  rowGadyr: 'rgba(212, 168, 67, 0.15)',
};

export const DUA_SUHOOR: DuaData = {
  title: 'Agyz beklenende okalýan doga.',
  arabic:
    'نَنَوَيْتُ أَنْ أَصُومَ صَوْمَ شَهْرِ رَمَضَانَ مِنَ الْفَجْرِ إِلَى الْمَغْرِبِ خَالِصًا لِلَّهِ تَعَالَى. اَللَّهُ أَكْبَرُ ',
  turkmen:
    'Neweýtu en esume sawme şehra ramezane minel-fejri ilel-magribi halisan lillahi tagala. Allahu ekber.',
};

export const DUA_IFTAR: DuaData = {
  title: 'Agyz açylanda okalýan doga.',
  arabic:
    'اللَّهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ، وَلِصَوْمِ غَدٍ نَوَيْتُ، فَاغْفِرْ لِي يَا غَفَّارُ مَا قَدَّمْتُ وَمَا أَخَّرْتُ. بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَتُ',
  turkmen:
    'Allahumme leke sumtu we bike ämentu we alä rizkyke eftartu we lisawmi gadin neweýtu fagfirli yä gaffäru mä kaddemtu we mä ehhartu. Birahmetike yä erhamer-rahymin.',
};

export const COLUMNS = [
  { key: 'milady', label: 'Milady\nýylynyň\naýy' },
  { key: 'hijri', label: 'Hijri-kamary\nýylynyň\naýy' },
  { key: 'weekday', label: 'Hepdäniň\ngünleri' },
  { key: 'suhoor', label: 'Agyz\nbeklenýän\nwagt', isAccent: true },
  { key: 'fajr', label: 'Ertir\namazy' },
  { key: 'sunrise', label: 'Günüň\ndogýan\nwagty' },
  { key: 'dhuhr', label: 'Öýle\namazy' },
  { key: 'asr', label: 'Ikindi\namazy' },
  { key: 'iftar', label: 'Agzaçar\nwagty we\nagşam namazy', isAccent: true },
  { key: 'isha', label: 'Ýassy we\nTarawa\nNamazy' },
];
