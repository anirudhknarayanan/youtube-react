const firstNames = [
  "Anirudh",
  "Rahul",
  "Arjun",
  "Akshay",
  "Vishnu",
  "Akhil",
  "John",
  "David",
  "Emma",
  "Sophia",
  "Mia",
  "Noah",
];

const lastNames = [
  "Kumar",
  "Nair",
  "Sharma",
  "Patel",
  "Smith",
  "Johnson",
  "Brown",
  "Wilson",
];

const messages = [
  "Awesome video 🔥",
  "Hello everyone 👋",
  "React is amazing 🚀",
  "Nice explanation 👍",
  "Learning a lot today 😍",
  "Thanks for this tutorial ❤️",
  "Can you explain Redux?",
  "This is very helpful 🙌",
  "Watching from Kerala 😎",
  "Who's here in 2026? 😂",
  "Great content bro 🔥",
  "Tailwind CSS is awesome!",
  "I love React ❤️",
  "Can you make a Node.js video?",
  "Subscribed ✅",
  "Keep going 💪",
  "Amazing explanation 👏",
  "First comment 😁",
  "Greetings from India 🇮🇳",
  "This deserves more views 🚀",
];

export const generateRandomName = () => {
  const first =
    firstNames[Math.floor(Math.random() * firstNames.length)];

  const last =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${first} ${last}`;
};

export const generateRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};