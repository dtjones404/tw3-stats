import dbConnect from '../../lib/dbConnect';
import generateDummyGames from '../../lib/generateDummyGames';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'POST':
      try {
        const { username, n } = req.body;
        const dummyArr = generateDummyGames(username, n);
        const newData = await Promise.all(
          dummyArr.map((game) => {
            return fetch('https://tw3-stats.vercel.app/api/game', {
              method: 'POST',
              body: JSON.stringify(game),
              headers: {
                'Content-Type': 'application/json',
              },
            });
          })
        );
        const jsonData = await Promise.all(newData.map((res) => res.json()));
        return res.status(200).json(jsonData);
      } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false });
      }
    default:
      res.status(400).json({ success: false });
      break;
  }
}
