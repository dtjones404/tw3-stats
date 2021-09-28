import summaryController from '../../lib/summaryController';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const data = await summaryController.getSummaries();
        res.status(200).json(data);
      } catch (err) {
        res.status(400).json({ success: false, data });
      }
      break;
    case 'PUT':
      try {
        const updatedData = await summaryController.updateSummary(req.body);
        res.status(200).json(updatedData);
      } catch (err) {
        res.status(400).json({ success: false });
      }
    default:
      res.status(400).json({ success: false });
      break;
  }
}
