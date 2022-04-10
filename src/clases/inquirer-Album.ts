import inquirer from 'inquirer';
import { Album } from "./album";
import { Artistas } from "./artistas";
import { Cancion } from "./cancion";
import { GenerosMusicales } from "./generosMusicales";
import { Grupos } from "./grupos";
import { Playlist } from "./playlist";
import * as index from "../index";
import * as InquirerFile from "./inquirer";
import { CommandsGenerosCanciones } from './inquirer';
import { addCancion, addCancionGenero } from './inquirer-Cancion';
import { addGrupo } from './inquirer-Grupos';

/**
 * @enum CommandsGrupoArtista si es un grupo o un artista
 */
export enum CommandsGrupoArtista {
  Grupo = `Grupo`,
  Artista = `Artista`
}

/**
 * @enum CommandsSingle si es un sí o no
 */
export enum CommandsSingle {
  Si = `Si`,
  No = `No`
}

/**
 * @function addAlbum para añadir un nuevo album
 */
export async function addAlbum() {
  const nombreAlbum = await inquirer.prompt( {
    type: "input",
    name: "nombreAlbum",
    message: "Introduce el nombre del álbum: "
  });
  const nombreGrupoArtista = await inquirer.prompt({
    type: "input",
    name: "nombreGrupoArtista",
    message: "Introduce el nombre del grupo o artista: "
  });
  const grupoOArtista = await inquirer.prompt( {
    type: "list",
    name: "grupoOArtista",
    message: "¿Es un grupo o un artista?: ",
    choices: Object.values(CommandsGrupoArtista)
  });
  let artistasArray: Artistas[] = [];
  let gruposArray: Grupos[] = [];
  switch(grupoOArtista["grupoOArtista"]) {
    case CommandsGrupoArtista.Grupo:
      //addGrupo(gruposArray);
      addGrupoArtista(artistasArray);
      break;
    case CommandsGrupoArtista.Artista:
      
      break;
  }
  const generoAlbum = await inquirer.prompt( {
    type: "list",
    name: "generoAlbum",
    message: "Introduce el/los generos musicales del album: ",
    choices: Object.values(CommandsGenerosCanciones)
  });
  let genero1_: GenerosMusicales[] = [];
  addCancionGenero(genero1_);

  const anioPublicacion = await inquirer.prompt( {
    type: "number",
    name: "anioPublicacion",
    message: "Introduce el año de publicación: "
  });

  const cancionesAlbum = await inquirer.prompt( {
    type: "number",
    name: "cancionesAlbum",
    message: "Introduce las canciones del álbum: "
  });

  addCancion();

  let nombre_: string = nombreAlbum["nombreAlbum"];
  let autores_: Grupos|Artistas = nombreGrupoArtista["nombreGrupoArtista"];
  let genero_: GenerosMusicales [] = generoAlbum["generoAlbum"];
  let yearsPublicacion_: number = anioPublicacion["anioPublicacion"];
  let cancionesAlbum_: Cancion[] = cancionesAlbum["cancionesAlbum"];
  let album: Album = new Album(nombre_, autores_, genero_, yearsPublicacion_, cancionesAlbum_);
 
  console.clear();
  InquirerFile.menuPrincipal();
}


/**
 * @function addGrupoArtista para añadir los artistas del grupo
 * @param artistas del grupo
 */
export async function addGrupoArtista(artistas: Artistas[]) {
  const artistasArray = await inquirer.prompt({
    type: "input",
    name: "artistasArray",
    message: "Introduce los artistas pertenecientes al Grupo: ",
  })
  
  let nombreArtistas: string = artistasArray["artistasArray"]; 
  let numeroArtistas: number = -1;
  for(let i: number = 0; i < index.artistas.length; i++){
    if(index.artistas[i].getNombreArtista() === nombreArtistas){
      numeroArtistas = i;
      break;
    } else {
      index.artistas[i].setNombreArtista(nombreArtistas);
      break
    }
  }
  if(numeroArtistas === -1){
    console.log(`No hay una artista con ese nombre`);
    InquirerFile.menuPrincipal();

  } else {
    //addGrupo(numeroArtistas); //pProblema con los argumentos
    artistas.push(index.artistas[numeroArtistas]);
    const finalArtista = await inquirer.prompt({
      type: "list",
      name: "finalArtista",
      message: "¿Desea añadir otro artista al grupo?",
      choices: Object.values(InquirerFile.CommandsSingle)
    });
    switch(finalArtista["finalArtista"]) {
      case CommandsSingle.Si:
        await addGrupoArtista(artistas)
        break;
      case CommandsSingle.No:
        break;
    }
  }
}