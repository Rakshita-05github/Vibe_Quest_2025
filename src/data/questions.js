const questions = [
  {
    question: "Your dream vacation?",
    options: [
      { text: "Mountain cabin", vibe: "Chill" },
      { text: "Random road trip", vibe: "Chaotic" },
      { text: "Paris with loved ones", vibe: "Romantic" },
      { text: "Visit meme museum", vibe: "MemeLord" },
      { text: "Work trip + networking", vibe: "Ambitious" },
      { text: "Backyard camp with friends", vibe: "Wholesome" },
    ],
  },
  {
    question: "Midnight craving?",
    options: [
      { text: "Herbal tea", vibe: "Chill" },
      { text: "Flaming hot chips", vibe: "Chaotic" },
      { text: "Chocolate-dipped strawberries", vibe: "Romantic" },
      { text: "Pickles & peanut butter", vibe: "MemeLord" },
      { text: "Protein bar", vibe: "Ambitious" },
      { text: "Mom’s cookies", vibe: "Wholesome" },
    ],
  },
  {
    question: "Pick a movie genre:",
    options: [
      { text: "Nature doc", vibe: "Chill" },
      { text: "Action thriller", vibe: "Chaotic" },
      { text: "Romcom", vibe: "Romantic" },
      { text: "Absurd parody", vibe: "MemeLord" },
      { text: "Startup biopic", vibe: "Ambitious" },
      { text: "Feel-good family film", vibe: "Wholesome" },
    ],
  },
  {
    question: "How do you handle stress?",
    options: [
      { text: "Deep breaths", vibe: "Chill" },
      { text: "Scream into pillow", vibe: "Chaotic" },
      { text: "Talk to someone", vibe: "Romantic" },
      { text: "Laugh at memes", vibe: "MemeLord" },
      { text: "Make a to-do list", vibe: "Ambitious" },
      { text: "Hug a pet", vibe: "Wholesome" },
    ],
  },
  {
    question: "Choose a superpower:",
    options: [
      { text: "Teleportation", vibe: "Chill" },
      { text: "Time control", vibe: "Chaotic" },
      { text: "Love aura", vibe: "Romantic" },
      { text: "Talk to animals", vibe: "MemeLord" },
      { text: "See the future", vibe: "Ambitious" },
      { text: "Heal others", vibe: "Wholesome" },
    ],
  },
  {
    question: "Go-to weekend plan?",
    options: [
      { text: "Spa day", vibe: "Chill" },
      { text: "Last-minute adventure", vibe: "Chaotic" },
      { text: "Date night", vibe: "Romantic" },
      { text: "Reddit + snacks", vibe: "MemeLord" },
      { text: "Hackathon", vibe: "Ambitious" },
      { text: "Board games with fam", vibe: "Wholesome" },
    ],
  },
  {
    question: "Favorite drink?",
    options: [
      { text: "Green tea", vibe: "Chill" },
      { text: "Energy drink", vibe: "Chaotic" },
      { text: "Wine", vibe: "Romantic" },
      { text: "Pickle juice", vibe: "MemeLord" },
      { text: "Cold brew", vibe: "Ambitious" },
      { text: "Hot cocoa", vibe: "Wholesome" },
    ],
  },
  {
    question: "What’s your vibe on a Monday?",
    options: [
      { text: "Still in bed", vibe: "Chill" },
      { text: "Running late", vibe: "Chaotic" },
      { text: "Planning dates", vibe: "Romantic" },
      { text: "Sending memes", vibe: "MemeLord" },
      { text: "Power meeting mode", vibe: "Ambitious" },
      { text: "Making pancakes", vibe: "Wholesome" },
    ],
  },
  {
    question: "Pick a song type:",
    options: [
      { text: "Acoustic chill", vibe: "Chill" },
      { text: "Hype beats", vibe: "Chaotic" },
      { text: "Love ballads", vibe: "Romantic" },
      { text: "Weird remixes", vibe: "MemeLord" },
      { text: "Motivational rap", vibe: "Ambitious" },
      { text: "Disney songs", vibe: "Wholesome" },
    ],
  },
  {
    question: "What's most you?",
    options: [
      { text: "Zen, calm, vibes only", vibe: "Chill" },
      { text: "All over the place", vibe: "Chaotic" },
      { text: "Big heart energy", vibe: "Romantic" },
      { text: "Certified goof", vibe: "MemeLord" },
      { text: "Goal chaser", vibe: "Ambitious" },
      { text: "Soft soul", vibe: "Wholesome" },
    ],
  },
  {
    question: "Pick a pet:",
    options: [
      { text: "Lazy cat", vibe: "Chill" },
      { text: "Hyperactive ferret", vibe: "Chaotic" },
      { text: "Cuddly bunny", vibe: "Romantic" },
      { text: "Memeable pug", vibe: "MemeLord" },
      { text: "Falcon in a briefcase", vibe: "Ambitious" },
      { text: "Rescue dog", vibe: "Wholesome" },
    ],
  },
  {
    question: "Favorite weather?",
    options: [
      { text: "Rainy and cozy", vibe: "Chill" },
      { text: "Thunderstorm!", vibe: "Chaotic" },
      { text: "Warm sunset", vibe: "Romantic" },
      { text: "Foggy and weird", vibe: "MemeLord" },
      { text: "Clear skies = grind time", vibe: "Ambitious" },
      { text: "Snowy magic", vibe: "Wholesome" },
    ],
  },
  {
    question: "Your texting style?",
    options: [
      { text: "Short & sweet", vibe: "Chill" },
      { text: "ALL CAPS CHAOS", vibe: "Chaotic" },
      { text: "Cute and romantic", vibe: "Romantic" },
      { text: "Weird memes + typos", vibe: "MemeLord" },
      { text: "Voice notes only", vibe: "Ambitious" },
      { text: "Pure kindness", vibe: "Wholesome" },
    ],
  },
  {
    question: "Pick a food aesthetic:",
    options: [
      { text: "Avocado toast", vibe: "Chill" },
      { text: "Spicy ramen overload", vibe: "Chaotic" },
      { text: "Heart-shaped pancakes", vibe: "Romantic" },
      { text: "Cursed food combos", vibe: "MemeLord" },
      { text: "Brain fuel salad", vibe: "Ambitious" },
      { text: "Comfort mac & cheese", vibe: "Wholesome" },
    ],
  },
  {
    question: "Biggest flex?",
    options: [
      { text: "Inner peace", vibe: "Chill" },
      { text: "I survived… somehow", vibe: "Chaotic" },
      { text: "Love hard. Always.", vibe: "Romantic" },
      { text: "I know 1000 meme formats", vibe: "MemeLord" },
      { text: "Work ethic = elite", vibe: "Ambitious" },
      { text: "Kindness > everything", vibe: "Wholesome" },
    ],
  },
];

export default questions;
