const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Extract the URL path
  const filePath = req.url === '/' ? 'index.html' : req.url;
  const contentType = getContentType(filePath);

  // Read the file
  fs.readFile(path.join(__dirname, 'public', filePath), (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found
        res.writeHead(404);
        res.end('404 - File Not F00ound');
      } else {
        // Server error
        res.writeHead(500);
        res.end('500 - Internal Server Error');
      }
    } else {
      // Successful response
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// Helper function to determine the content type based on file extension
function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    default:
      return 'text/plain';
  }
}

// Start the server and listen on a specific port
const port = 3038;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



