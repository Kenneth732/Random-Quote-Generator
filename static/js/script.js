// script.js
const quoteText = document.getElementById("quoteText");
const newQuoteBtn = document.getElementById("newQuoteBtn");

const backgroundImageUrls = [
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/122e2813-42b0-4ada-8d0a-20631b711365/dg2kgr9-424a1503-0544-4ee9-920e-cfefe57ec243.jpg/v1/fill/w_894,h_894,q_70,strp/dark_fantasy_by_m1ndm4k3rs_dg2kgr9-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzEyMmUyODEzLTQyYjAtNGFkYS04ZDBhLTIwNjMxYjcxMTM2NVwvZGcya2dyOS00MjRhMTUwMy0wNTQ0LTRlZTktOTIwZS1jZmVmZTU3ZWMyNDMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ToDEgJJ2qeXNw-CJL8Ha2ueZDnhpdQQrZyv_NdikgH0",

  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/122e2813-42b0-4ada-8d0a-20631b711365/dg222cg-5036c58f-05be-43a1-8703-51a3b1accd13.jpg/v1/fill/w_894,h_894,q_70,strp/let_it_rain_by_m1ndm4k3rs_dg222cg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzEyMmUyODEzLTQyYjAtNGFkYS04ZDBhLTIwNjMxYjcxMTM2NVwvZGcyMjJjZy01MDM2YzU4Zi0wNWJlLTQzYTEtODcwMy01MWEzYjFhY2NkMTMuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.xs4vyh6cdVFtKfvtTtnKPt9nX88GP16VRRcArW11XWQ",

  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/122e2813-42b0-4ada-8d0a-20631b711365/dg35t8g-da2d00ec-167a-479e-ac26-1ce4243bdafc.png/v1/fill/w_894,h_894,q_70,strp/the_girl_with_the_tattoo_by_m1ndm4k3rs_dg35t8g-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzEyMmUyODEzLTQyYjAtNGFkYS04ZDBhLTIwNjMxYjcxMTM2NVwvZGczNXQ4Zy1kYTJkMDBlYy0xNjdhLTQ3OWUtYWMyNi0xY2U0MjQzYmRhZmMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4-u4GJdvdKf-13XzODo7VTU7FqyvW2qhwSB6W9YZXac",

  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d246cca6-17e0-4e8a-8725-0ac0a76c1e44/dg37gj9-228d6a9e-1dc5-4a92-b886-1e9b900d4a99.png/v1/fill/w_894,h_894,q_70,strp/in_new_zealand_for_the_world_cup__by_namiacimora_dg37gj9-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2QyNDZjY2E2LTE3ZTAtNGU4YS04NzI1LTBhYzBhNzZjMWU0NFwvZGczN2dqOS0yMjhkNmE5ZS0xZGM1LTRhOTItYjg4Ni0xZTliOTAwZDRhOTkucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.sPlg_KIkfn5H4saOK1myIaBicNDfIK6VnRCpDOo3XKY",

  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/463adb00-62d0-49dc-8a5c-0d68b68d601f/dg37cm2-8c52fa34-e92a-4b2e-89c5-62e32e31d451.png/v1/fit/w_512,h_768,q_70,strp/1girl_black_shirts_by_battlemasterleo_dg37cm2-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvNDYzYWRiMDAtNjJkMC00OWRjLThhNWMtMGQ2OGI2OGQ2MDFmXC9kZzM3Y20yLThjNTJmYTM0LWU5MmEtNGIyZS04OWM1LTYyZTMyZTMxZDQ1MS5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.wq98r6vfkBgIa3LjiHlG3vxE92qEsvfFxCC6Smw37xw",

  "",
  // Add more image URLs as needed
];

function getRandomBackgroundImageUrl() {
  const randomIndex = Math.floor(Math.random() * backgroundImageUrls.length);
  return backgroundImageUrls[randomIndex];
}

// Function to fetch a random quote from an API using Promises
function fetchRandomQuote() {
  return fetch("https://api.quotable.io/random")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => data.content)
    .catch(error => {
      console.error("Error fetching quote:", error);
      return "Error: Failed to fetch quote";
    });
}
