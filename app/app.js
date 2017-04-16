var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req, res){
	url = 'http://www.uonbi.ac.ke'

	request (url, function(error, response, html){
		if (!error) {
			var $ = cheerio.load(html);
			var links = $('a');
			var merged = [].concat.apply([], links);
			var links2 = [];
			$(merged).each(function(i, link){
				var attribute = $(link).attr('href');
				if (links2.indexOf(attribute) == -1) {
					links2.push(attribute);
				}
				
			});

		}
		/*fs.writeFile('links.json', JSON.stringify(links2), function(err){	
		})
		console.log(links2);*/
		var file = fs.createWriteStream('links.txt');
		file.on('error', function(err){ console.log ("A problem was encountered."); });
		links2.forEach(function(item) {
			file.write(item + "\r\n");
		});
		file.end();
		console.log('File successfully written! - Check project directory for the links.txt file.')
		res.send('Check your console.')
	});

})

app.listen('8082');
console.log('Magic happens on port 8082');
exports = module.exports = app;