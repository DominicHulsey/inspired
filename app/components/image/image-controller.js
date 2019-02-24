import ImageService from "./image-service.js";

const _is = new ImageService()

function drawImage() {
  let image = _is.images
  // @ts-ignore
  document.body.style.backgroundImage = `url(${image.pic})`
}

export default class ImageController {
  constructor() {
    _is.addSubscriber('images', drawImage)
    _is.getImages()
  }

}

