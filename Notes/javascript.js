// datele se zic primitive cand ele stockeasa valoarea intr-un contenitor
// si cand vorbim de referinte (array obiecte null si functiile) ele stockeasa referinta catre locul din memorie si nu memoria in sine
// de asta se poate schimba continutul unui array/obiect

const myStr = 'Alin'; 
myStr = 'Marius'; // nu poate fi schimbata

const myArr = [1, 2, 3];
myArr = ['4', true]; // asta o sa functioneze

