import { factionNames } from '../models/Faction';

export default function generateDummyGames(username, n) {
  const factions = Object.values(factionNames);
  const opponents = [
    'Mong00ose',
    'next_js',
    'sTaTiCReNdErInG',
    'googleOAuth',
    'Reactxtable',
    'xxx_OutdatedDocumentation_xxx',
  ];
  const dummyGames = [];
  for (let i = 0; i < n; i++) {
    const p1Faction = factions[Math.floor(Math.random() * 21)];
    const p2Faction = factions[Math.floor(Math.random() * 21)];
    const p1Username = username;
    const p2Username = opponents[Math.floor(Math.random() * 6)];
    const seconds = Math.floor(Math.random() * 60);
    const duration = `${3 + Math.floor(Math.random() * 11)}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
    const winner = Math.random() >= 0.5 ? p1Username : p2Username;
    dummyGames.push({
      p1Faction,
      p2Faction,
      p1Username,
      p2Username,
      duration,
      winner,
    });
  }
  return dummyGames;
}
