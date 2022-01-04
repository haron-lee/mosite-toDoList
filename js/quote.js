const quotes = [
  {
    quote: "Be with people who know your worth.",
  },
  {
    quote: "To be happy, we must not be too concerned with others.",
  },
  {
    quote:
      "You can either experience the pain of discipline or the pain of regret.",
  },
  {
    quote: "Every accomplishment starts with the decision to try. ",
  },
  {
    quote:
      "All you need is the plan, the road map, and the courage to press on to your destination. ",
  },
  {
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm.",
  },
  {
    quote:
      "If you want to conquer fear, don’t sit home and think about it. Go out and get busy. ",
  },
  {
    quote:
      "The best way to gain self-confidence is to do what you are afraid to do.",
  },
  {
    quote: "What great thing would you attempt if you knew you could not fail?",
  },
  {
    quote:
      "I am always doing that which I cannot do, in order that I may learn how to do it.",
  },
];

const quote = document.querySelector(".quote span");
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
