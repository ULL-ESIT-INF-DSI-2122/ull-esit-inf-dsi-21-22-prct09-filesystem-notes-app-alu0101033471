import { Album } from "./clases/clases-bases/album";
import { Artistas } from "./clases/clases-bases/artistas";
import { Cancion } from "./clases/clases-bases/cancion";
import { GenerosMusicales } from "./clases/clases-bases/generosMusicales";
import { Grupos } from "./clases/clases-bases/grupos";
import { Playlist } from "./clases/clases-bases/playlist";

//10 generos musicales
export let Rock = new GenerosMusicales(`Rock`); //6
export let Pop = new GenerosMusicales(`Pop`); //6
export let Rap = new GenerosMusicales(`Rap`);  //6
export let Electronica = new GenerosMusicales(`Electronica`); //6
export let Regueton = new GenerosMusicales(`Regueton`); //6
export let Hip_Hop = new GenerosMusicales(`Hip Hop`); //8
export let Metal = new GenerosMusicales(`Metal`); //6
export let Flamenco = new GenerosMusicales(`Flamenco`); //6
export let RyB = new GenerosMusicales(`RyB`); //8
export let Soul = new GenerosMusicales(`Soul`); //7
export let generos: GenerosMusicales[] = [Rock, Pop, Rap, Electronica, Regueton, Hip_Hop, Metal, Flamenco, RyB, Soul];

export let cancion1 = new Cancion('Pulling Teeth', 'Alan Ryker',  '4:23', [Metal], false, 2100000);
export let cancion2 = new Cancion('Thriller', 'Michael Jackson',  '5:58', [Pop], false, 825000000);  
let cancion3 = new Cancion('Billie Jean', 'Michael Jackson',  '4:55', [Rock], false, 1154580120); 
let cancion4 = new Cancion(`Wanna Be Startin' Something`, 'Michael Jackson',  '6:06', [RyB, Soul], false, 10850000); 
let cancion5 = new Cancion('Baby Be Mine', 'Michael Jackson',  '4:37', [RyB, Soul], false, 4580000); 
let cancion6 = new Cancion('The Girl Is Mine', 'Michael Jackson',  '4:10', [RyB, Soul], false, 120000000);
let cancion7 = new Cancion('Beat It', 'Michael Jackson',  '4:00', [RyB, Soul], false, 1811000000);
let cancion8 = new Cancion('Human Nature', 'Michael Jackson',  '4:59', [RyB, Soul], false, 810959778);
let cancion9 = new Cancion('Pretty Young Thing', 'Michael Jackson',  '4:07', [RyB, Soul], false, 136723704);
let cancion10 = new Cancion('The Lady in My Life', 'Michael Jackson',  '5:02', [RyB, Soul], false, 15000000); 
let cancion11 = new Cancion('Malamente', 'Rosalía',  '2:49', [Flamenco, Pop], false, 156000000);
let cancion12 = new Cancion('Preso', 'Rosalía',  '2:48', [Pop], false, 165000000); 
let cancion13 = new Cancion('Di mi nombre', 'Rosalía',  '3:01', [Rap], false, 81000000); 
let cancion14 = new Cancion('Mother Love', 'Queen',  '4:50', [Rock], false, 3300000); 
let cancion15 = new Cancion('Its A Beautiful Day', 'Queen',  '3:19', [Rock, Metal], false, 3000000);
let cancion16 = new Cancion('I Was Born To Love You', 'Queen',  '4:56', [Rock, Metal], false, 64000000); 
let cancion17 = new Cancion('Living on my own', 'Freddie Mercury',  '3:08', [Rock, Pop], false, 32000000); 
let cancion18 = new Cancion('Ojalá', 'Beret',  '3:43', [Rap, Pop], false, 197000000); 
let cancion19 = new Cancion('Master Of Puppets', 'Metallica',  '8:36', [Metal], true, 29000000);
let cancion20 = new Cancion('Battery', 'Metallica',  '5:13', [Metal], true, 1500000); 
let cancion21 = new Cancion('Disposable Heroes', 'Metallica',  '8:17', [Metal], false, 191000);
let cancion22 = new Cancion('Rumba en el cielo', 'Los Chunguitos',  '4:33', [Flamenco], false, 684000); 
let cancion23 = new Cancion('Yo me lo tengo que beber', 'Los Chunguitos', '3:45', [Flamenco], false, 231000); 
let cancion24 = new Cancion('Tinto de verano', 'Los Chunguitos', '3:24', [Flamenco], false, 141000); 
let cancion25 = new Cancion('Borriquito', 'Peret', '3:23', [Flamenco], false, 2200000);
let cancion26 = new Cancion('El muerto vivo', 'Peret', '4:51', [Flamenco], false, 8000000); 
let cancion27 = new Cancion('The Prodigy', 'The Prodigy', '2:53', [Electronica], false, 2100000); 
let cancion28 = new Cancion('Nasty', 'The Prodigy', '3:42', [Electronica], false, 15217880); 
let cancion29 = new Cancion('Rebel Radio', 'The Prodigy', '3:53', [Electronica], false, 1000000); 
let cancion30 = new Cancion('Diez mil porqués', 'Beret', '3:32', [Rap], false, 40000000); 
let cancion31 = new Cancion('Esencial', 'Beret', '2:40', [Rap, Pop], false, 23000000); 
let cancion32 = new Cancion('Yo te esperaré', 'Cali y El Dandee', '4:14', [Regueton], false, 469000000); 
let cancion33 = new Cancion('Te doy mi corazón', 'Cali y El Dandee', '4:01', [Regueton], false, 4600000); 
let cancion34 = new Cancion('La playa', 'Cali y El Dandee', '3:43', [Regueton], false, 5600000); 
let cancion35 = new Cancion('Many Men', '50Cent', '4:58', [Hip_Hop], false, 388000000); 
let cancion36 = new Cancion(`Don't Push me`, '50Cent', '4:09', [Hip_Hop], false, 2100000); 
let cancion37 = new Cancion('Almas Gemelas', 'Myke Towers', '4:49', [Regueton], false, 61000000); 
let cancion38 = new Cancion('Rutina', 'Myke Towers', '3:38', [Regueton], false, 44641453); 
let cancion39 = new Cancion('Culture', 'Migos', '4:45', [Hip_Hop], false, 1300000);  
let cancion40 = new Cancion('T-Shirt', 'Migos', '4:53', [Hip_Hop], false, 327000000); 
let cancion41 = new Cancion('Get Right Witcha', 'Migos', '4:18', [Hip_Hop], false, 160000000); 

// Singles
let cancion42 = new Cancion('Cóseme', 'Beret', '3:22', [Rap], true, 64000000); 
let cancion43 = new Cancion('Plan A', 'Paulo Londra', '3:06', [Rock], true, 63000000); 
let cancion44 = new Cancion('Face My Fears', 'Skrillex', '3:38', [Electronica], true, 19943008); 
let cancion45 = new Cancion('Tubular Bells', 'Mike Oldfield', '5:33', [Electronica], true, 116000); 
let cancion46 = new Cancion('Outkast', 'BoB',  '4:25', [Hip_Hop], true, 20011803); 
let cancion47 = new Cancion('Lose Yourself', 'Eminem',  '5:24', [Hip_Hop, Rap], true, 1200000000000); 
let cancion48 = new Cancion('Solita', 'Ozuna', '5:50', [Electronica], false, 609000000); 
let cancion49 = new Cancion('Rumbatón', 'Daddy Yankee', '4:15', [Regueton], false, 1154580120); 
let cancion50 = new Cancion('Bad', 'Michael Jackson',  '4:20', [RyB, Hip_Hop], true, 401000000); 

export let canciones: Cancion[] = [cancion1, cancion2, cancion3, cancion4, cancion5, cancion6, cancion7, cancion8, cancion9, cancion10, cancion11, cancion12, cancion13, cancion14, cancion15, cancion16, cancion17, cancion18, cancion19, cancion20, cancion21, cancion22, cancion23, cancion24, cancion25, cancion26, cancion27, cancion28, cancion29, cancion30, cancion31, cancion32, cancion33, cancion34, cancion35, cancion36, cancion37, cancion38, cancion39, cancion40, cancion41, cancion42, cancion43, cancion44, cancion45, cancion46, cancion47, cancion48, cancion49, cancion50];

// Artistas construidos con el nombre solo
export let artista1 = new Artistas('Michael Jackson');
let artista2 = new Artistas('Freddie Mercury');
let artista3 = new Artistas('Alan Ryker');
let artista4 = new Artistas('Rosalía');
let artista5 = new Artistas('Beret');
let artista6 = new Artistas('Peret');
let artista7 = new Artistas('Myke Towers');
let artista8 = new Artistas('Paulo Londra');
let artista9 = new Artistas('Skrillex');
let artista10 = new Artistas('Mike Oldfield');
let artista11 = new Artistas('BoB');
let artista12 = new Artistas('Eminem');
let artista13 = new Artistas('Ozuna');
let artista14 = new Artistas('Daddy Yankee');
let artista15 = new Artistas('50Cent');
// Metallica componentes
let artista16 = new Artistas('James Heltfield');
let artista17 = new Artistas('Cliff Burton');
let artista18 = new Artistas('Lars Ulrich');
let artista19 = new Artistas('Dave Mustaine');
let artista20 = new Artistas('Kirk Hammett');
let artista21 = new Artistas('Jason Newsted');
let artista22 = new Artistas('Robert Trujillo');
let artista23 = new Artistas('Ron McGovney');
// Queen componentes
let artista24 = new Artistas('Brian May');
let artista25 = new Artistas('John Deacon');
let artista26 = new Artistas('Roger Taylor');
let artista27 = new Artistas('Mike Grose');
let artista28 = new Artistas('Doug Bogie');
let artista29 = new Artistas('Queen Barry Mitchell');
//Los Chunguitos componentes
let artista30 = new Artistas('Enrique Salazar');
let artista31 = new Artistas('Juan Salazar');
let artista32 = new Artistas('José Salazar');
//The Prodigy componentes
let artista33 = new Artistas('Keith Flint');
let artista34 = new Artistas('Liam Howlett');
let artista35 = new Artistas('Maxim Reality');
let artista36 = new Artistas('Sharky');
//Cali y El Dandee componentes
let artista37 = new Artistas('Alejandro Rengifo');
let artista38 = new Artistas('Mauricio Rengifo');
//Migos componentes
let artista39 = new Artistas('Quavo');
let artista40 = new Artistas('Offset');
let artista41 = new Artistas('Takeoff');

export let artistas: Artistas[] = [artista1, artista2, artista3, artista4, artista5, artista6, artista7, artista8, artista9, artista10, artista11, artista12, artista13, artista14, artista15, artista16, artista17, artista18, artista19, artista20, artista21, artista22, artista23, artista24, artista25, artista26, artista27, artista28, artista29, artista30, artista31, artista32, artista33, artista34, artista35, artista36, artista37, artista38, artista39, artista40, artista41];

// Grupos construidos con el nombre solo
export let grupo1 = new Grupos(`Metallica`);
let grupo2 = new Grupos(`Queen`);
let grupo3 = new Grupos(`Los Chunguitos`);
let grupo4 = new Grupos(`The Prodigy`);
let grupo5 = new Grupos(`Cali y El Dandee`);
let grupo6 = new Grupos(`Migos`);

export let grupos: Grupos[] = [grupo1, grupo2, grupo3, grupo4, grupo5, grupo6];

// Album puede construirse con todo 
export let album1 = new Album(`Thriller`, artista1, [Rock, RyB, Soul, Pop], 1982,[cancion2, cancion3, cancion4, cancion5, cancion6, cancion7, cancion8, cancion9, cancion10]);
let album2 = new Album(`The Day Is My Enemy`, `The Prodigy`, [Electronica], 2015, [cancion27, cancion28, cancion29]);
let album3 = new Album(`El Mal Querer`, artista4, [Flamenco, Pop, Rap], 2018, [cancion11, cancion12, cancion13]);
let album4 = new Album(`Made in Heaven`, `Queen`, [Rock, Metal], 1995, [cancion14, cancion15, cancion16]);
let album5 = new Album(`Prisma`, artista5, [Rap, Pop], 2019, [cancion18, cancion30, cancion31]);
let album6 = new Album(`Master Of Puppets`, `Metallica`, [Metal], 1986, [cancion19, cancion20, cancion21]);
let album7 = new Album(`Morir de amor`, `Los Chunguitos`, [Flamenco], 2003, [cancion22, cancion23, cancion24]);
let album8 = new Album(`Borriquito`, artista6, [Flamenco], 1972, [cancion25, cancion26]);
let album9 = new Album(`3a.m.`, `Cali y El Dandee`, [Regueton], 2012, [cancion32, cancion33, cancion34]);
let album10 = new Album(`Get Rich or Die Tryin'`, artista15, [Hip_Hop], 2003, [cancion35, cancion36]); 
let album11 = new Album(`ALMAS GEMELAS`, artista7, [Hip_Hop], 2021, [cancion37, cancion38]);
let album12 = new Album(`Asd`, artista5, [Hip_Hop], 2017, [cancion39, cancion40, cancion41]);
let album13 = new Album(`Zrt`, artista5, [Hip_Hop], 2018, [cancion39, cancion40, cancion41, cancion45]);
let album14 = new Album(`Mpn`, artista5, [Hip_Hop], 2030, [cancion39, cancion40, cancion41]);
let album15 = new Album(`Culture`, `Migos`, [Hip_Hop], 2017, [cancion39, cancion40, cancion41]);

export let albumes: Album[] = [album1, album2, album3, album4, album5, album6, album7, album8, album9, album10, album11, album12,  album13, album14, album15];


// rellenar grupos
grupo1.construirGrupo([artista16, artista17, artista18, artista19, artista20, artista21, artista22, artista23], 1983, [Metal], [album6, album3, album4, album1], 8000000);
grupo2.construirGrupo([artista2, artista24, artista25, artista26, artista27, artista28, artista29], 1970, [Rock, Pop, Metal], [album4], 49000000);
grupo3.construirGrupo([artista30, artista31, artista32], 1973, [Flamenco], [album7], 137000);
grupo4.construirGrupo([artista33, artista34, artista35, artista36], 1990, [Electronica], [album2], 241000);
grupo5.construirGrupo([artista37, artista38], 2011, [Regueton], [album9], 1200000);
grupo6.construirGrupo([artista39, artista40, artista41], 2009, [Hip_Hop], [album12], 12400000);
//console.log(artista16.getGrupos());

// rellenar artistas 
artista1.construirArtista( [cancion2, cancion3, cancion4, cancion5, cancion6, cancion7, cancion8, cancion9, cancion10], 28125943); 
artista2.construirArtista( [cancion14, cancion15, cancion16, cancion17], 2539164); 
artista3.construirArtista( [cancion1], 13552); 
artista4.construirArtista( [cancion11, cancion12, cancion13], 1000000);
artista5.construirArtista( [cancion18, cancion30, cancion31, cancion42], 5439541);
artista6.construirArtista( [cancion25, cancion26], 234051);
artista7.construirArtista( [cancion37, cancion38], 27889188);
artista8.construirArtista( [cancion43], 17259897);
artista9.construirArtista( [cancion44], 20139441);
artista10.construirArtista( [cancion45], 2068481);
artista11.construirArtista( [cancion46], 11153307);
artista12.construirArtista( [cancion47], 52950475);
artista13.construirArtista( [cancion48], 35251309);
artista14.construirArtista( [cancion49], 2068741);
artista15.construirArtista( [cancion35, cancion36], 1585307);
// Metallica artistas
artista16.construirArtista( [cancion19, cancion20, cancion21], 17965468);
artista17.construirArtista( [cancion19, cancion20, cancion21], 17965468);
artista18.construirArtista( [cancion19, cancion20, cancion21], 17965468);
artista19.construirArtista( [cancion19, cancion20, cancion21], 17965468);
artista20.construirArtista( [cancion19, cancion20, cancion21], 17965468);
artista21.construirArtista( [cancion19, cancion20, cancion21], 17965468);
artista22.construirArtista( [cancion19, cancion20, cancion21], 17965468);
artista23.construirArtista( [cancion19, cancion20, cancion21], 17965468);
// Queen artistas
artista24.construirArtista( [cancion14, cancion15, cancion16], 1585307);
artista25.construirArtista( [cancion14, cancion15, cancion16], 1585307);
artista26.construirArtista( [cancion14, cancion15, cancion16], 1585307);
artista27.construirArtista( [cancion14, cancion15, cancion16], 1585307);
artista28.construirArtista( [cancion14, cancion15, cancion16], 1585307);
artista29.construirArtista( [cancion14, cancion15, cancion16], 1585307);
// Los Chunguitos artistas
artista30.construirArtista( [cancion22, cancion23, cancion24], 314980);
artista31.construirArtista( [cancion22, cancion23, cancion24], 314980);
artista32.construirArtista( [cancion22, cancion23, cancion24], 314980);
// The Prodigy artistas
artista33.construirArtista( [cancion27, cancion28, cancion29], 3378893);
artista34.construirArtista( [cancion27, cancion28, cancion29], 3378893);
artista35.construirArtista( [cancion27, cancion28, cancion29], 3378893);
artista36.construirArtista( [cancion27, cancion28, cancion29], 3378893);
// Cali y el Dandee artistas
artista37.construirArtista( [cancion32, cancion33, cancion34], 8907725);
artista38.construirArtista( [cancion32, cancion33, cancion34], 8907725);
// Migos artistas
artista39.construirArtista( [cancion39, cancion40, cancion41], 17644273);
artista40.construirArtista( [cancion39, cancion40, cancion41], 17644273);
artista41.construirArtista( [cancion39, cancion40, cancion41], 17644273);
/*

*/
// Playlists
export let playlist1 = new Playlist(`Regueton a Full`, [cancion37, cancion38, cancion49, cancion32, cancion34, cancion33]);
let playlist2 = new Playlist(`Rock For Ever`, [cancion3, cancion14, cancion43]);
let playlist3 = new Playlist(`Flamencos de corazóh`, [cancion11, cancion24, cancion26]);
let playlist4 = new Playlist(`Popurri`, [cancion20, cancion23, cancion45]);
let playlist5 = new Playlist(`De todo un poco`, [cancion19, cancion5, cancion3]);
let playlist6 = new Playlist(`Relax`, [cancion18, cancion23, cancion45]);
let playlist7 = new Playlist(`Descansito`, [cancion19, cancion30, cancion3]);
export let playlists: Playlist[] = [playlist1, playlist2, playlist3, playlist4, playlist5, playlist6, playlist7]

