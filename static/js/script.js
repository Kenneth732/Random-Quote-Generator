// class QuoteApp {
//   constructor() {
//       this.quoteText = document.getElementById("quoteText");
//       this.newQuoteBtn = document.getElementById("newQuoteBtn");
//       this.backgroundImageUrls = [
//           "./assetsp1.jpg",
//           "./assetsp2.jpg",
//           "./assetsp3.jpg",
//           "./assetsp4.jpg",
//           "./assetsp5.jpg",
//           "./assetsp6.jpg",
//           "./assetsp7.jpg",
//           "./assetsp8.jpg",
//           "./assetsp9.jpg",
//           "./assetsp10.jpg",
//       ];
//       this.currentBackgroundImageIndex = 0;

//       this.newQuoteBtn.addEventListener("click", () => {
//           this.fetchRandomQuote();
//           this.changeBackgroundImage();
//       });
//   }

//   async fetchRandomQuote() {
//       try {
//           const response = await fetch("https://api.quotable.io/random");
//           const data = await response.json();
//           const quote = data.content;
//           this.displayQuote(quote);
//       } catch (error) {
//           console.error("Error fetching a new quote:", error);
//       }
//   }

//   displayQuote(quote) {
//       this.quoteText.textContent = quote;
//   }

//   changeBackgroundImage() {
//       // Get the container element to change the background
//       const container = document.querySelector(".container");

//       // Increment the current background image index and wrap around if needed
//       this.currentBackgroundImageIndex = (this.currentBackgroundImageIndex + 1) % this.backgroundImageUrls.length;

//       // Set the background image of the container
//       container.style.backgroundImage = `url(${this.backgroundImageUrls[this.currentBackgroundImageIndex]})`;
//   }
// }

// // Initialize the QuoteApp
// const quoteApp = new QuoteApp();
// quoteApp.fetchRandomQuote(); // Fetch and display an initial quote
// quoteApp.changeBackgroundImage(); // Set an initial background image

































class QuoteApp {
  constructor() {
      this.quoteText = document.getElementById("quoteText");
      this.newQuoteBtn = document.getElementById("newQuoteBtn");

      this.newQuoteBtn.addEventListener("click", this.fetchRandomQuote.bind(this));
  }

  async fetchRandomQuote() {
      try {
          const response = await fetch("https://api.quotable.io/random");
          const data = await response.json();
          const quote = data.content;
          this.displayQuote(quote);
      } catch (error) {
          console.error("Error fetching a new quote:", error);
      }
  }

  displayQuote(quote) {
      this.quoteText.textContent = quote;
  }
}

// Initialize the QuoteApp
const quoteApp = new QuoteApp();
quoteApp.fetchRandomQuote(); // Fetch and display an initial quote
