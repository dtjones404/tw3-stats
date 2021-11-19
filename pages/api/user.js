import dbConnect from '../../lib/dbConnect';
import User from '../../models/User';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const userData = await User.findOne(req.body);
        res.status(200).json(userData);
      } catch (err) {
        console.log(err);
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const updatedData = await User.findOneAndUpdate(
          { username: req.body.username },
          req.body,
          {
            new: true,
            upsert: true,
          }
        );
        res.status(200).json(updatedData);
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
