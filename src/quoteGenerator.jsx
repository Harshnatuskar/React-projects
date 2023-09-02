import React, { useState } from 'react';

const stormlightQuotes = [
  {
    quote: "\"Life before death. Strength before weakness. Journey before destination.\"",
    author: "-Kaladin Stormblessed"
  },
  {
    quote: "\"Words are where most change begins.\"",
    author: "-Navani Kholin"
  },
  {
    quote: "\"The purpose of a storyteller is not to tell you how to think, but to give you questions to think upon.\"",
    author: "-Wit"
  }, 
  {
    quote: "\"Expectation is the root of all heartache.\"",
    author: "-Dalinar Kholin"
  },
  {
    quote: "\"The most important step a person can take is always the next one.\"",
    author: "-Brandon Sanderson"
  },
];

function QuoteGenerator() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  function randomQ() {
    const newIndex = Math.floor(Math.random() * stormlightQuotes.length);
    setQuoteIndex(newIndex);
  }

  function tweetQuote() { 
    console.log('Tweeting quote:', stormlightQuotes[quoteIndex].quote);
  }
  
  return (
    <div className="quote-container" id="quote-box">
      <div className="quote" id='text'>{stormlightQuotes[quoteIndex].quote}</div>
      <div className="author" id="author">
        <span className="name">{stormlightQuotes[quoteIndex].author}</span>
      </div>
      <div className="buttons">
        <div className="features"> 
            <button className="tweet-quote" >
              <a id="tweet-quote" href="https://twitter.com/intent/tweet" onClick={tweetQuote}>
                Tweet
              </a>
            </button> 
          <button className="new-quote" id="new-quote" onClick={randomQ}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default QuoteGenerator;
