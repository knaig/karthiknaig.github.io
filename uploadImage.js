import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function uploadImage(base64Data, fileName) {
  const imageData = base64Data.split(',')[1]; // Remove the data:image/png;base64, part
  const buffer = Buffer.from(imageData, 'base64');
  
  const filePath = path.join(__dirname, 'images', fileName);
  
  // Ensure the images directory exists
  if (!fs.existsSync(path.join(__dirname, 'images'))) {
    fs.mkdirSync(path.join(__dirname, 'images'));
  }

  fs.writeFileSync(filePath, buffer);
  console.log(`Image saved as ${filePath}`);
}

// Usage example:
// uploadImage('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==', 'example.png');

export { uploadImage };