import Koa from 'koa';
const app = new Koa();

app.use(function* (){
  this.body = 'Hello world!';
  console.log(this.body);
});

app.listen(3000, function(){
  console.log('Server running on https://localhost:3000')
});
