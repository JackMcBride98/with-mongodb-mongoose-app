import mongoose from 'mongoose';

const DocSchema = new mongoose.Schema({
  name: String,
  description: String,
});

export default mongoose.models.Doc || mongoose.model('Doc', DocSchema);
