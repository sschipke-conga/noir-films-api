import '@babel/polyfill';
import app from './app';

const apiKey = process.env.API_KEY

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on localhost:${app.get('port')}`);
});

