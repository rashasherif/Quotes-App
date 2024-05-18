var quotes=[
    {
        quote:"Be yourself; everyone else is already taken.",
        author:"Oscar Wilde"

    },
    {
        quote:"So many books, so little time.",
        author:"Frank Zappa"

    },


    {
        quote:"A room without books is like a body without a soul.",
        author:"Marcus Tullius Cicero"

    },

    {
        quote:"You only live once, but if you do it right, once is enough.",
        author:"Mae West"

    },
    {
        quote:"In three words I can sum up everything I've learned about life: it goes on.",
        author:"Robert Frost"

    },
    {
        quote:"If you tell the truth, you don't have to remember anything.",
        author:"Mark Twain"

    },
];



function generateQuote() {
    var random = Number.parseInt(Math.random()*quotes.length + 1);
            
    
    document.getElementById("quoteText").innerHTML=` <p> \" ${quotes[random].quote} \" </p>
                                                    <h3> -- ${quotes[random].author}</h3> `
}

