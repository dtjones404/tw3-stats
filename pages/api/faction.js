import dbConnect from '../../lib/dbConnect';
import factionController from '../../lib/factionController';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const data = await factionController.getFactions();
        res.status(200).json(data);
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const updatedData = await factionController.updateFaction(req.body);
        res.status(200).json(updatedData);
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }
    default:
      res.status(400).json({ success: false });
      break;
  }
}
