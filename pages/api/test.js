import dbConnect from '../../lib/dbConnect';
import generateDummyData from '../../lib/generateDummyData';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'PUT':
      try {
        const dummyArr = generateDummyData();
        const newData = await Promise.all(
          dummyArr.map((faction) => {
            return fetch('https://tw3-stats.vercel.app/api/faction', {
              method: 'PUT',
              body: JSON.stringify(faction),
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
