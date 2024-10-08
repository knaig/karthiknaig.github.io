const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const output = fs.createWriteStream(path.join(__dirname, '..', 'project.zip'));
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('Project has been zipped successfully.');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

// Add files and directories to the zip
archive.glob('**/*', {
  cwd: path.join(__dirname, '..'),
  ignore: ['node_modules/**', 'dist/**', 'project.zip']
});

archive.finalize();