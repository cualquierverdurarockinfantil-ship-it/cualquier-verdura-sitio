// Archivo audiovisual oficial de Cualquier Verdura.
// Para agregar un videoclip nuevo, sumá un objeto al array VIDEOCLIPS con
// este mismo formato — no hace falta tocar ningún componente.
//
// Campos:
//   slug            -> identificador único para la URL (/videoclip/:slug)
//   title           -> nombre de la canción
//   artist          -> autoría (por defecto "Cualquier Verdura")
//   year            -> año de lanzamiento del videoclip (completar)
//   youtubeId       -> ID del video de YouTube (lo que sigue a youtu.be/ o ?v=)
//   cover           -> opcional. Si no se especifica, se usa automáticamente
//                       la miniatura de YouTube en alta resolución.
//   story           -> texto editable: cómo surgió, cuándo/dónde se grabó,
//                       quiénes participaron, anécdotas, etc.
//   karaokeUrl      -> a dónde lleva el botón "Escuchá o hacé karaoke". Por
//                       defecto apunta a la home del Club Verdura.
//   backstage       -> array opcional de items { type: 'photo' | 'video', src, label }.
//                       Si queda vacío, la sección Backstage no se muestra.

const CLUB_URL = 'https://club.cualquierverdurarock.com';

export const VIDEOCLIPS = [
  {
    slug: 'un-buen-plan',
    title: 'Un Buen Plan',
    artist: 'Cualquier Verdura',
    year: '2024',
    youtubeId: '_CIjJpfptaA',
    cover: '',
    story:
      '"Un Buen Plan" fue grabado y producido en 2024, bajo la dirección de Lobo Ngero Films y con edición de Resch Producciones. Delante de cámara actúa parte de nuestra propia familia y amigos de la banda, que se sumaron a la aventura con muchas ganas. Para las imágenes de fondo se usaron tomas de la cuarta edición de Tacuarock, el festival que forma parte de nuestra historia. Como todo en Cualquier Verdura, este videoclip fue una producción totalmente independiente, hecha con recursos propios.',
    karaokeUrl: CLUB_URL,
    backstage: [],
  },
  {
    slug: 'la-gran-manada',
    title: 'La Gran Manada',
    artist: 'Cualquier Verdura',
    year: '2025',
    youtubeId: 'ijV2LFd25qw',
    cover: '',
    story:
      '"La Gran Manada" se grabó en 2025, otra vez con Lobo Ngero Films en la dirección y Resch Producciones en la edición. Esta vez sumamos a más gente de nuestra comunidad: el taller de percusión de Centro Blanco y Negro participó en la grabación de audio y en escenas del video, y el taller de teatro del mismo centro puso a sus actores y actrices como protagonistas del clip. Como siempre, se trató de una producción totalmente independiente, hecha con recursos propios de Cualquier Verdura.',
    karaokeUrl: CLUB_URL,
    backstage: [],
  },
];

export function getVideoclipCover(videoclip) {
  if (videoclip.cover) return videoclip.cover;
  return `https://img.youtube.com/vi/${videoclip.youtubeId}/maxresdefault.jpg`;
}

export function getVideoclipEmbedUrl(videoclip) {
  return `https://www.youtube.com/embed/${videoclip.youtubeId}`;
}

if (typeof window !== 'undefined') {
  window.__VIDEOCLIPS_DATA__ = VIDEOCLIPS;
}
