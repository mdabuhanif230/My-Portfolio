import kindnestImg from "../../assets/Project-img/kindnest.jpg";
import wanderlustImg from "../../assets/Project-img/wanderlust.jpg";
import banglaNewsImg from "../../assets/Project-img/bangla-news-24.jpg";
import bazarDorImg from "../../assets/Project-img/bazar-dor.jpg";
import rentGearImg from "../../assets/Project-img/rentgear.jpg";

// Edit this file to add / change projects. Screenshots live in
// src/assets/Project-img/. Fields marked "verify" are written conservatively —
// update them once you have checked the real code.
const projects = [
  {
    id: 5,
    name: "RentGear",
    image: rentGearImg,
    techStack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "MongoDB", "Better Auth", "JWT", "Stripe"],
    description:
      "A full-stack equipment rental marketplace where customers find and book verified gear, owners publish and manage listings, and admins moderate users and rentals. Includes role-based dashboards, live availability, Stripe Checkout and a separate Express API.",
    features: [
      "Searchable & filterable equipment catalogue",
      "Booking with live availability & Stripe checkout",
      "Customer, owner and admin dashboards",
      "Add / edit listings with image upload",
      "Favorites, rental history & reviews",
      "Email / password and Google sign-in",
    ],
    liveLink: "https://rentgear-ivory.vercel.app",
    githubClient: "https://github.com/mdabuhanif230/Equipment-Rental-Client",
    challenges:
      "Coordinating customer, owner and admin roles, keeping booking availability and unpaid holds in sync with the API, and verifying Stripe success and cancellation server-side.", // verify
    futurePlans:
      "Add owner-renter messaging, location-based discovery and a mobile app.", // verify
  },
  {
    id: 1,
    name: "KindNest",
    image: kindnestImg, // TODO: replace src/assets/Project-img/kindnest.jpg with a real screenshot
    techStack: ["Next.js", "React", "Tailwind CSS", "DaisyUI", "MongoDB", "Better Auth", "JWT"],
    description:
      "A community service events platform where neighbours can find, create and join local drives such as blanket drives, clothes distributions and cleanups. Past events disappear automatically, so every event shown is upcoming.",
    features: [
      "Create a drive with place and date",
      "Join an event with one click",
      "Joined events list",
      "Edit or cancel your own events",
      "Login & dark mode",
    ],
    liveLink: "https://kindnest-client.vercel.app",
    githubClient: "https://github.com/mdabuhanif230/KindNest-Client",
    challenges:
      "Keeping only upcoming events visible, protecting edit and cancel actions so only the creator can use them, and handling user login securely.", // verify
    futurePlans:
      "Add event categories and location search, email reminders, volunteer count and capacity limits, and an admin dashboard.", // verify
  },
  {
    id: 2,
    name: "Wanderlust",
    image: wanderlustImg,
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "MongoDB", "Better Auth"],
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
      "Connecting the client with destination and booking data, handling login state, and building the search filters.", // verify
    futurePlans:
      "Add online payment, reviews and ratings, wishlist, and an admin dashboard to manage destinations and bookings.", // verify
  },
  {
    id: 3,
    name: "Bangla News 24",
    image: banglaNewsImg,
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "DaisyUI", "MongoDB", "Better Auth"],
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
    id: 4,
    name: "Bazar Dor",
    image: bazarDorImg,
    techStack: ["Next.js", "React", "Tailwind CSS", "HeroUI", "MongoDB", "Better Auth"],
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
];

export default projects;
