import bazarDorImg from "../../assets/Project-img/bazar-dor.jpg";
import banglaNewsImg from "../../assets/Project-img/bangla-news-24.jpg";
import wanderlustImg from "../../assets/Project-img/wanderlust.jpg";
import fitlogImg from "../../assets/Project-img/fitlog.jpg";

// Edit this file to add / change projects. Screenshots live in
// src/assets/Project-img/. Fields marked "verify" are written conservatively —
// update them once you have checked the real code.

const projects = [
  {
    id: 1,
    name: "Bangla News 24",
    image: banglaNewsImg,
    techStack: ["Next.js", "React", "JavaScript"], // verify (add Tailwind CSS / database if used)
    description:
      "A Bangla online news portal with a breaking-news ticker, category pages (politics, world, economy, health, sports, technology, video), featured stories, a most-read list and sign in / sign up pages.",
    features: [
      "Breaking news ticker",
      "Category-wise news pages",
      "Featured & most-read sections",
      "Sign in / Sign up",
    ],
    liveLink: "https://bangla-news-24-iota-one.vercel.app/",
    githubClient: "https://github.com/mdabuhanif230/bangla-news-24",
    challenges:
      "Structuring many news categories and detail pages, keeping the layout clean with Bangla text, and making it responsive across devices.", // verify
    futurePlans:
      "Add search, bookmarks and comments, an admin panel to publish news, and better loading and SEO performance.", // verify
  },
  {
    id: 2,
    name: "Wanderlust",
    image: wanderlustImg,
    techStack: ["Next.js", "React", "JavaScript"], // verify (add backend / database / auth tools)
    description:
      "A travel booking website where visitors can explore featured destinations, search by location, duration, budget and group size, add new destinations, and manage their bookings and profile.",
    features: [
      "Destination listing & details",
      "Search by location, budget and people",
      "Add destination",
      "My bookings & profile",
      "Login / Sign up",
    ],
    liveLink: "https://wanderlust-client-lilac.vercel.app/",
    githubClient: "https://github.com/mdabuhanif230/wanderlust-client",
    challenges:
      "Connecting the client with the destination and booking data, handling login state, and building the search filters.", // verify
    futurePlans:
      "Add online payment, reviews and ratings, wishlist, and an admin dashboard to manage destinations and bookings.", // verify
  },
  {
    id: 3,
    name: "Bazar Dor",
    image: bazarDorImg,
    techStack: ["Next.js", "React", "JavaScript", "Tailwind CSS", "MongoDB", "Better Auth"], // verify
    description:
      "A Bangla daily market price website where people can check the latest prices of essentials such as rice, lentils, oil, vegetables, fish, meat, eggs and spices, along with how much each price went up or down today.",
    features: [
      "Live price ticker",
      "Category-wise products",
      "Price up / down indicators",
      "Product detail pages",
      "Sign in / Sign up",
    ],
    liveLink: "https://bazar-dor-mh.vercel.app/",
    githubClient: "https://github.com/mdabuhanif230/Bazar--Dor--MH",
    challenges:
      "Showing many products with daily price changes clearly, working with Bangla text and numbers, and keeping the layout responsive.", // verify
    futurePlans:
      "Add price history charts, market-wise comparison, search and a watchlist, plus an admin panel to update prices.", // verify
  },
  {
    id: 4,
    name: "FitLog",
    image: fitlogImg,
    techStack: ["Next.js", "React", "JavaScript"], // verify (add Tailwind CSS etc. if used)
    description:
      "A dark-themed workout library and training plan tracker. Visitors can browse twelve lifts covering every major muscle group, search by name or tag, add workouts to today's plan and save their favourites.",
    features: [
      "Workout library with search",
      "Add to My Plan",
      "Saved workouts",
      "Dark, responsive UI",
    ],
    liveLink: "https://fit-log-ecru-three.vercel.app/",
    githubClient: "https://github.com/mdabuhanif230/FitLog",
    challenges:
      "Managing the plan and saved lists across pages, searching and filtering workouts, and keeping the dark design consistent on every screen size.", // verify
    futurePlans:
      "Add user accounts, set and rep logging, weekly progress charts and custom workout creation.", // verify
  },
];

export default projects;
