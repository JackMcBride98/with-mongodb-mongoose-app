import dbConnect from '../../../lib/dbConnect';
import Doc from '../../../models/Doc';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;
  console.log('here');

  await dbConnect();

  switch (method) {
    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedDoc = await Doc.deleteOne({ _id: id });
        if (!deletedDoc) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

export const config = {
  runtime: 'experimental-edge',
};
