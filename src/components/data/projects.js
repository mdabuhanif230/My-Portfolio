import bazarDorImg from "../../assets/Project-img/bazar-dor.jpg";
import banglaNewsImg from "../../assets/Project-img/bangla-news-24.jpg";
import wanderlustImg from "../../assets/Project-img/wanderlust.jpg";
import fitlogImg from "../../assets/Project-img/fitlog.jpg";

// Edit this file to add / change projects. Replace the screenshots in
// src/assets/Project-img/ and fill in the GitHub (client) repository links.
// Fields marked "verify" are written conservatively — update them once you
// have checked the real code.
const GITHUB = "https://github.com/mdabuhanif230"; // TODO: replace each with the client repo link

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
    githubClient: GITHUB,
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
    githubClient: GITHUB,
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
      "An e-commerce web application for browsing products by category, built with Next.js and Tailwind CSS with a responsive, user-friendly interface.",
    features: ["Product & category listing", "Responsive UI", "Authentication"], // verify
    liveLink: "https://bazar-dor-mh.vercel.app",
    githubClient: GITHUB,
    challenges: "API integration, authentication and building a responsive UI.", // verify
    futurePlans: "Fully working authentication, better user experience and deployment refinement.",
  },
  {
    id: 4,
    name: "FitLog",
    image: fitlogImg,
    techStack: [], // TODO: add the technologies used
    description: "A web application project. Add a short description of what FitLog does.", // TODO
    features: [], // TODO
    liveLink: "", // TODO: add the live website link
    githubClient: GITHUB,
    challenges: "",
    futurePlans: "",
  },
];

export default projects;
