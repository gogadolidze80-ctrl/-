export const CLUB = {
  name: 'RC Batumi',
  nameKa: 'სარაგბო კლუბი ბათუმი',
  tagline: 'აჭარის ს pride · საქართველოს гордость',
  founded: 1976,
  stadium: 'აჭარა არენა',
  capacity: 3000,
  coach: 'Levan Maisashvili',
  titles: 8,
  address: 'ბათუმი, საქართველო',
  email: 'info@rcbatumi.ge',
  phone: '+995 422 27 00 00',
};

export const NAV_LINKS = [
  { id: 'home', label: 'მთავარი' },
  { id: 'about', label: 'კლუბი' },
  { id: 'standings', label: 'ცხრილი' },
  { id: 'fixtures', label: 'მატჩები' },
  { id: 'players', label: 'გუნდი' },
  { id: 'news', label: 'სიახლეები' },
  { id: 'contact', label: 'კონტაქტი' },
];

export const STANDINGS = [
  { pos: 1, name: 'ბათუმი', played: 14, won: 12, lost: 2, diff: 245, points: 58, highlight: true },
  { pos: 2, name: 'ლელო', played: 14, won: 11, lost: 3, diff: 198, points: 54 },
  { pos: 3, name: 'აკადემi', played: 14, won: 10, lost: 4, diff: 156, points: 48 },
  { pos: 4, name: 'ყვავიტi', played: 14, won: 9, lost: 5, diff: 89, points: 42 },
  { pos: 5, name: 'რკინიგზა', played: 14, won: 7, lost: 7, diff: 12, points: 34 },
  { pos: 6, name: 'გურია', played: 14, won: 6, lost: 8, diff: -34, points: 28 },
  { pos: 7, name: 'ქუთaisi', played: 14, won: 4, lost: 10, diff: -112, points: 20 },
  { pos: 8, name: 'თelavi', played: 14, won: 3, lost: 11, diff: -156, points: 16 },
  { pos: 9, name: 'სuრხumi', played: 14, won: 2, lost: 12, diff: -198, points: 12 },
  { pos: 10, name: 'ზestafoni', played: 14, won: 1, lost: 13, diff: -200, points: 8 },
];

export const FIXTURES = [
  {
    id: 1,
    date: '2026-07-18',
    time: '15:00',
    home: 'ბათუმi',
    away: 'ლელო',
    venue: 'აჭარა არენა',
    status: 'upcoming',
    isHome: true,
  },
  {
    id: 2,
    date: '2026-07-11',
    time: '17:30',
    home: 'ბათუმi',
    away: 'რკინიგზა',
    venue: 'აჭარა არენა',
    status: 'finished',
    scoreHome: 35,
    scoreAway: 14,
    isHome: true,
  },
  {
    id: 3,
    date: '2026-07-04',
    time: '15:00',
    home: 'ყვავიტi',
    away: 'ბათუმi',
    venue: 'ავიაცია',
    status: 'finished',
    scoreHome: 19,
    scoreAway: 28,
    isHome: false,
  },
  {
    id: 4,
    date: '2026-07-25',
    time: '15:00',
    home: 'ბათუმi',
    away: 'აკადემi',
    venue: 'აჭარა არენა',
    status: 'upcoming',
    isHome: true,
  },
];

export const PLAYERS = [
  { id: 1, name: 'Giorgi Kveseladze', number: 1, position: 'Prop', positionKa: 'პროპi' },
  { id: 2, name: 'Davit Kacharava', number: 2, position: 'Hooker', positionKa: 'ჰუკერი' },
  { id: 3, name: 'Levan Datunashvili', number: 3, position: 'Prop', positionKa: 'პროპi' },
  { id: 4, name: 'Lasha Lomidze', number: 4, position: 'Lock', positionKa: 'ლოკi' },
  { id: 5, name: 'Mamuka Gorgodze', number: 5, position: 'Lock', positionKa: 'ლოკi' },
  { id: 6, name: 'Beka Gorgadze', number: 6, position: 'Flanker', positionKa: 'ფლანკერი' },
  { id: 7, name: 'Giorgi Tkhilaishvili', number: 7, position: 'Flanker', positionKa: 'ფლანკერი' },
  { id: 8, name: 'Zurab Zhvania', number: 8, position: 'Number 8', positionKa: 'მერცხველი' },
  { id: 9, name: 'Lasha Khmaladze', number: 9, position: 'Scrum-half', positionKa: 'სქrum-half' },
  { id: 10, name: 'Merab Sharikadze', number: 10, position: 'Fly-half', positionKa: 'ფლაi-ჰalf' },
  { id: 11, name: 'Tamaz Mchedlidze', number: 11, position: 'Wing', positionKa: 'ფრთა' },
  { id: 12, name: 'Saba Tevdorashvili', number: 12, position: 'Centre', positionKa: 'центр' },
];

export const NEWS = [
  {
    id: 1,
    title: 'ბათუმi ლიგის ლიდერობას ინარჩunებს',
    excerpt: 'RC Batumi-მ 35-14 გაამარჯვა რკინიგზას და ტურნirის ცხრილის სიმაღლეში დარჩა.',
    date: '2026-07-11',
    category: 'მატჩi',
    tone: 'blue',
  },
  {
    id: 2,
    title: 'აჭარა არენაზე ახალი სეზონის გახსნა',
    excerpt: '2025/26 სეზონის ოფიციალური გახსნის ცeremonia ბათუმის გულში — ფანების დიდი მხარდაჭერით.',
    date: '2026-07-05',
    category: 'კლუბi',
    tone: 'red',
  },
  {
    id: 3,
    title: 'RC Batumi ევროპულ ტურნirში',
    excerpt: 'ბათუმის გუნდი Rugby Europe Challenge Cup-ის მომდევნო ეტაპზე გავიდა.',
    date: '2026-06-28',
    category: 'საერთაშორისო',
    tone: 'white',
  },
  {
    id: 4,
    title: 'ახალგაზრდული აკademia — ახალი წარმატება',
    excerpt: 'RC Batumi Academy-მ U18 ჩემპიონატში ოქროს მedaლი მოიპოვა.',
    date: '2026-06-20',
    category: 'აკademia',
    tone: 'blue',
  },
];

export const STATS = [
  { value: '8', label: 'ჩემპიონობა' },
  { value: '1976', label: 'დ founding' },
  { value: '3000', label: 'სტadium capacity' },
  { value: '#1', label: 'ლიგის ცხრილი' },
];

export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('ka-GE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function getNextMatch() {
  return FIXTURES.find((f) => f.status === 'upcoming' && f.isHome) ?? FIXTURES[0];
}
