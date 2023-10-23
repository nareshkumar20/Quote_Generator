import React, { useState, useEffect } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import "@fontsource-variable/josefin-sans"
import "@fontsource-variable/dancing-script"

function App() {
  const [quote, setQuote] = useState({});
  const [color, setColor] = useState("");
  const chooseColor = () => {
    const colors = ["red", "pink", "blue", "teal", "lime", "cyan", "violet", "rose", "emerald"];
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }


  const getQuote = async () => {
    chooseColor();
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    console.log(data);
    setTimeout(() => { setQuote(data) }, 1000);
    return data;
  }

  useEffect(() => { getQuote() }, []);

  return (
    <div class={`container-fluid bg-${color}-800 flex items-center justify-center h-screen p-7 w-screen`}>
      <div class={`bg-${color}-500 p-6 rounded-lg w-max-100 shadow-lg`}>
        <h3 class="tracking-widest text-white text-xs font-medium title-font mb-4">RANDOM QUOTE GENERATOR</h3>
        {(quote.content) ? (
          <>
            <TypeWriterEffect class="leading-relaxed text-base"
              textStyle={{ fontFamily: "Josefin Sans", color: "white", fontSize: 25 }}
              startDelay={5}
              cursorColor="white"
              text={quote.content}
              typeSpeed={50}
            />
            <h2 class="text-center text-xl text-gray-200 font-medium title-font mt-4 mb-3" style={{ fontFamily: "Dancing Script" }}>{quote.author}</h2>

            <center>
              <a href={"https://www.twitter.com/intent/tweet?text=" + (quote.content) + " Said by : " + (quote.author)}>
                <button type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
                  <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"></path></svg>
                  Tweet this quote
                </button>
              </a>
            </center>

            <p class="text-center text-xs text-gray-300">Reload to see new quote</p>

          </>
        ) : (
          <>
            <div class="text-center" role="status">
              <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
            <h2 class="text-center text-lg text-gray-900 font-medium title-font mt-4">Loading......</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default App;




