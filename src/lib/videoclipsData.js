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
    year: '2026', // TODO: confirmar año exacto de lanzamiento
    youtubeId: '_CIjJpfptaA',
    cover: '',
    story:
      'Contanos acá cómo surgió la idea de este videoclip, cuándo fue grabado, dónde fue filmado, quiénes participaron y alguna anécdota o curiosidad del rodaje.',
    karaokeUrl: CLUB_URL,
    backstage: [],
  },
  {
    slug: 'la-gran-manada',
    title: 'La Gran Manada',
    artist: 'Cualquier Verdura',
    year: '2026', // TODO: confirmar año exacto de lanzamiento
    youtubeId: 'ijV2LFd25qw',
    cover: '',
    story:
      'Contanos acá cómo surgió la idea de este videoclip, cuándo fue grabado, dónde fue filmado, quiénes participaron y alguna anécdota o curiosidad del rodaje.',
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
