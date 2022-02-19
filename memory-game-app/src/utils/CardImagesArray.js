import { v4 as uuidv4 } from 'uuid';



const importImagesToObject = (r) => {
  const images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const imagesObj = importImagesToObject(require.context('./images', false, /\.(png|jpe?g|svg)$/));

const seperateObject = obj => {
  const imagesArray = [];
  const keys = Object.keys(obj);
  keys.forEach(key => {
    imagesArray.push({
      key: obj[key],
      id: uuidv4()
    });
  })
  return imagesArray;
}

const Images = seperateObject(imagesObj);

export default Images

