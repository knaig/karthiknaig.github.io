import { uploadImage } from './uploadImage.js';

// Replace this with your actual base64-encoded image data
const imageData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==';

uploadImage(imageData, 'example.png');