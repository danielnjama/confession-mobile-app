const data = [
  {
    id: 1,
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'John Doe',
    country: 'USA',
    likes: 50,
    dislikes: 5,
    comments: [
      { id: 1, text: 'Great photo!', user: 'Alice' },
      { id: 2, text: 'Love it!', user: 'Bob' },
      { id: 3, text: 'Love it!', user: 'Bob' },
    ],
    confession: "I confess that photography is my escape, capturing moments allows me to freeze time and share emotions with the world.",
    date: getRandomDateTime(),
  },
  {
    id: 2,
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Jane Smith',
    country: 'Canada',
    likes: 30,
    dislikes: 2,
    comments: [
      { id: 1, text: 'Beautiful!', user: 'Charlie' },
      { id: 2, text: 'Nice shot!', user: 'David' },
    ],
    confession: "Confession time: I find solace in nature, and every photo I take is a confession of my love for the outdoors.",
    date: getRandomDateTime(),
  },
  {
    id: 3,
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    name: 'Mike Johnson',
    country: 'UK',
    likes: 20,
    dislikes: 8,
    comments: [
      { id: 1, text: 'Awesome!', user: 'Eva' },
      { id: 2, text: 'Fantastic!', user: 'Frank' },
    ],
    confession: "I confess that I'm fascinated by the play of light and shadow, and it's my eternal quest to capture it in my photos.",
    date: getRandomDateTime(),
  },
  {
    id: 4,
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    name: 'Emily Brown',
    country: 'Australia',
    likes: 45,
    dislikes: 3,
    comments: [
      { id: 1, text: 'Superb!', user: 'George' },
      { id: 2, text: 'Impressive!', user: 'Hannah' },
    ],
    confession: "Confession: My camera is my storyteller, and each photo is a chapter in the visual novel of my life.",
    date: getRandomDateTime(),
  },
  {
    id: 5,
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    name: 'Chris Taylor',
    country: 'Germany',
    likes: 60,
    dislikes: 10,
    comments: [
      { id: 1, text: 'Stunning!', user: 'Ivy' },
      { id: 2, text: 'Well done!', user: 'Jack' },
    ],
    confession: "I confess that I see beauty in the ordinary, and my camera is my tool to reveal the extraordinary in everyday moments.",
    date: getRandomDateTime(),
  },
  {
    id: 6,
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    name: 'Sophia Lee',
    country: 'France',
    likes: 25,
    dislikes: 1,
    comments: [
      { id: 1, text: 'Impressive work!', user: 'Kevin' },
      { id: 2, text: 'Keep it up!', user: 'Linda' },
    ],
    confession: "Confession time: Photography is my meditation; each click is a deep breath, and every photo is a moment of clarity.",
    date: getRandomDateTime(),
  },
  {
    id: 7,
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
    name: 'Daniel Wilson',
    country: 'Brazil',
    likes: 38,
    dislikes: 4,
    comments: [
      { id: 1, text: 'Fantastic shot!', user: 'Mia' },
      { id: 2, text: 'Absolutely love it!', user: 'Noah' },
    ],
    confession: "I confess that my camera is my time machine, capturing memories today that will transport me to beautiful moments in the future.",
    date: getRandomDateTime(),
  },
  {
    id: 8,
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    name: 'Olivia Anderson',
    country: 'Spain',
    likes: 42,
    dislikes: 6,
    comments: [
      { id: 1, text: 'Brilliant!', user: 'Oscar' },
      { id: 2, text: 'Captivating!', user: 'Penelope' },
    ],
    confession: "Confession: I'm in love with the art of visual storytelling, and each photo is a chapter in the book of my experiences.",
    date: getRandomDateTime(),
  },
  {
    id: 9,
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
    name: 'Samuel White',
    country: 'India',
    likes: 28,
    dislikes: 7,
    comments: [
      { id: 1, text: 'Well captured!', user: 'Quinn' },
      { id: 2, text: 'Amazing work!', user: 'Ryan' },
    ],
    confession: "I confess that photography is my language, and each photo is a sentence expressing the beauty I see in the world.",
    date: getRandomDateTime(),
  },
  {
    id: 10,
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
    name: 'Ava Taylor',
    country: 'Italy',
    likes: 55,
    dislikes: 9,
    comments: [
      { id: 1, text: 'Absolutely stunning!', user: 'Sophie' },
      { id: 2, text: 'Incredible!', user: 'Tyler' },
      { id: 3, text: 'safi sana joh!', user: 'Kim' },
    ],
    confession: "Confession time: My camera is my accomplice, helping me steal moments of beauty and freeze them in pixels for eternity.",
    date: getRandomDateTime(),
  },
];

function getRandomDateTime() {
  const startDate = new Date(2020, 0, 1); // January 1, 2020
  const endDate = new Date(); // Current date
  const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));

  const year = randomDate.getFullYear();
  const month = String(randomDate.getMonth() + 1).padStart(2, '0');
  const day = String(randomDate.getDate()).padStart(2, '0');

  const hours = String(randomDate.getHours()).padStart(2, '0');
  const minutes = String(randomDate.getMinutes()).padStart(2, '0');
  const seconds = String(randomDate.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}


export default data;