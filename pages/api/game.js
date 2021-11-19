import dbConnect from '../../lib/dbConnect';
import Game from '../../models/Game';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'POST':
      try {
        const newData = await Game.create(req.body);
        res.status(200).json(newData);
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
