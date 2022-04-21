const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

const routes = require('./routes');

require('./configs/mongoose');

// set up view templete
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use(routes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));
