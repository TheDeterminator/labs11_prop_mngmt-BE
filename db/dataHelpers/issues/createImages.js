const cloudinary = require('cloudinary').v2;
const { create } = require('../images');

const createImages = ({ files, params: { id: issueId } }, res) => {
  let [images] = Object.values(files);
  if (!Array.isArray(images)) images = [images];

  if (images.length && images[0] !== undefined) {
    console.log(images);
    const results = images.map(image => cloudinary.uploader.upload(image.path));
    Promise.all(results).then(async cloud => {
      try {
        const paths = cloud.map(
          ({ public_id, format }) => `${public_id}.${format}`
        );
        const local = await create({ paths, issueId });
        res.json({ cloud, local });
      } catch (error) {
        res.status(500).json({ error });
      }
    });
  } else res.status(500).json({ error: 'No images found!' });
};

module.exports = createImages;
