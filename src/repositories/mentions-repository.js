const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

exports.listMentions = async () => {
  const res = await Mentions.find({}, 'friend mention');
  return res;
};

exports.createMention = async data => {
  const mention = new Mentions(data);
  await mention.save();
};

exports.updateMention = async (id, data) => {
    await Mentions.findByIdAndUpdate(id, {
      $set: data
    });
  };

exports.deleteMention = async id => {
    await Mentions.findByIdAndDelete(id);
};