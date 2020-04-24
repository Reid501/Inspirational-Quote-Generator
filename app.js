let button = document.getElementById("btn1");

const quotes = [
    {
        quote: `Whatever the mind of man can conceive and believe, it can achieve.`,
        author: `Napoleon Hill`
    },

    {
        quote: `Strive not to be a success, but rather to be of value.`,
        author: `Albert Einstein`,
    },

    {
        quote: `I attribute my success to this: I never gave or took any excuse.`,
        author: `Florence Nightingale`,
    },

    {
        quote: "You miss 100% of the shots you dont take.",
        author: `Wayne Gretzky`,
    },

    {
        quote: `I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.`,
        author: `Michael Jordan`,
    },

    {
        quote: `The most difficult thing is the decision to act, the rest is merely tenacity.`,
        author: `Amelia Earhart`,
    },
    
    {
        quote: `Life is what happens to you while you’re busy making other plans.`,
        author: `John Lennon`,
    },

    {
        quote: `Twenty years from now you will be more disappointed by the things that you didnt do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.`,
        author: `Mark Twain`,
    },

    {
        quote: `Believe you can and youre halfway there`,
        author: `Theodore Roosevelt`,
    },

    {
        quote: `The battles that count arent the ones for gold medals. The struggles within yourself--the invisible battles inside all of us--that's where its at.`,
        author: `Jesse Owens`,
    },
];

button.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quotes").textContent = quotes[random].quote;
    document.getElementById("authors").textContent = quotes[random].author;})

    console.log('hello world');
