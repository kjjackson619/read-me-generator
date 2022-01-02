
const generatePage = (contributor) => {
  return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>ReadMe Generator</title>
    </head>
  
    <body>
      <h1>ReadMe</h1>
      <h2>Contribution By: ${contributor}</h2>
    </body>
    </html>
    `;
};

module.exports = generatePage;