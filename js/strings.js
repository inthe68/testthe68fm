export function doStringsStuff(){
    const quotes = [ "JBP and Rogan Suck@~HC", "Speak the truth and see what happens.@~Jordan B Peterson that guy sucks tho", "Evolution brings human beings. Human beings, through a long and painful process, bring humanity.@~Dan Simmons", "The essence of honor lay in the moment of combat between equals.@~Dan Simmons", "We are punished by our sins, not for them.@~Elbert Hubbard", "I never use a napkin on my lap at a restaurant...because I believe in myself.@~Hannibal Buress These Quotes are Hella Cringe.@~HC" ];



    let randNumIndex = Math.floor(Math.random() * quotes.length);
    let startQuote = quotes[randNumIndex];
    let splitQuote = startQuote.split("@");
    console.log("STrings.js XD")
    console.log(quotes)

    let finalQuoteString = splitQuote[0]; 
    console.log(finalQuoteString);
//     let finalQuote = splitQuote[0];
// let finalAuthor = splitQuote[1];
// document.getElementById('quote').innerHTML = finalQuote;
// document.getElementById('author').innerHTML = finalAuthor;
}