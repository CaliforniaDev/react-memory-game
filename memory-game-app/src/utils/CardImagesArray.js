import { v4 as uuidv4 } from 'uuid';


function importImagesToObject(r) {
  // EXTRACTS IMAGES FROM FOLDER INTO AN OBJECT //
  const images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

function convertImageSrcToTitle(imageSrc) {
  //  CREATES OUR FILE NAME INTO A HEADER/TITLE //
  const matchFileExtensions = /\.[^/.]+$/; // <-- THIS HELPS REMOVE FILE EXTENSIONS //
  const matchCapitalLetters = /([A-Z])/g; // <-- THIS HELPS ADD SPACING BETWEEN CAPITAL LETTERS //
  let imageTitle = imageSrc.replace(matchFileExtensions, "");
  imageTitle = imageTitle.replace(matchCapitalLetters, ' $1').trim();
  
  return imageTitle;
}

function seperateObject (obj, convertImageSrcToTitle) {
  // TAKE THE EXTRACTED FOLDER AND CREATE KEY VALUE PROPERTIES //
  const imagesArray = [];
  const keys = Object.keys(obj);
  keys.forEach(key => {
    const imageTitle = convertImageSrcToTitle(key);
    imagesArray.push({
      name: imageTitle, 
      src: obj[key],
      id: uuidv4()
    });
  })
  return imagesArray;
}

const imagesObj = importImagesToObject(require.context('./images', false, /\.(png|jpe?g|svg)$/));
const Images = seperateObject(imagesObj, convertImageSrcToTitle);

export default Images

