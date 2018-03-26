var quotes = document.getElementById('quotes_json');
var parse_quotes = JSON.parse(quotes.textContent);
var rand_index = Math.floor(Math.random() * parse_quotes.length);

phrase_quote = document.getElementById('phrase');
signature_quote = document.getElementById('signature');
image_quote = document.getElementById('image');

phrase_quote.innerHTML = parse_quotes[rand_index]['phrase'];
signature_quote.innerHTML = parse_quotes[rand_index]['signature'];
image_quote.src = "images/" + parse_quotes[rand_index]['image_author'] + ".gif";