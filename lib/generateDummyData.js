import { factionList } from '../models/Faction';

export default function generateDummyData() {
  const gamesPlayed = {};
  const gamesWon = {};
  const winrates = {};
  for (const faction of factionList) {
    winrates[faction] = {};
    winrates[faction][faction] = 0.5;
    gamesWon[faction] = 0;
    gamesPlayed[faction] = 0;
  }
  for (let i = 0; i < factionList.length; i++) {
    for (let j = i + 1; j < factionList.length; j++) {
      const w1 = 0.423 + Math.random() / 7;
      const w2 = 1 - w1;
      const games = 500 + Math.floor(Math.random() * 1000);
      const g1 = Math.round(games * w1);
      const g2 = games - g1;
      winrates[factionList[i]][factionList[j]] = +w1.toFixed(3);
      winrates[factionList[j]][factionList[i]] = +w2.toFixed(3);
      gamesPlayed[factionList[i]] += games;
      gamesPlayed[factionList[j]] += games;
      gamesWon[factionList[i]] += g1;
      gamesWon[factionList[j]] += g2;
    }
  }
  return factionList.map((faction) => {
    return {
      name: faction,
      gamesPlayed: gamesPlayed[faction],
      gamesWon: gamesWon[faction],
      winrateVsFaction: winrates[faction],
    };
  });
}
