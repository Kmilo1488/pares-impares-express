const express = require('express');
const app = express();

app.get('/', (req, res) => {
  var numberArray = [];

  for(var i = 1; i <= 50; i++){
      numberArray.push(i);
  }

  var mensaje = [];

  numberArray.forEach(function(num) {
    numeros = num % 2
    if ( numeros === 0 ) {
      mensaje.push(`${num} Soy Par!`);
    }
    else {
      mensaje.push(`${num} Soy Impar!`);
    }
  });

  res.render('index', {numero: mensaje});

});

app.listen(3000, () => console.log('Listening on port 3000!'));
app.set('view engine', 'pug');
app.set('views', 'views');
