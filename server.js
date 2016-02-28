
var express = require( 'express' );

var app = express();

app.use(express.static( __dirname + '/src/GerbilDance/wwwroot/' ) );

app.listen( 8080 );
