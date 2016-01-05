/**
 * Created by KristyWessel on 1/5/16.
 */

var http = require('http');

http.createServer(function(request, response){
    response.write(200);
    response.write("hello Heroku!");
    response.end();

// Once deployed to Heroku, they will be on a massive server farm and if everyone requested 3000
// the app wouldn't work. They will give us a random PORT on Heroku, but locally we will use 3000

}).listen(process.env.PORT || 3000);