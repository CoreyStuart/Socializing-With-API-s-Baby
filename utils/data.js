const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Grace',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const commentDescriptions = [
  'Mood',
  'Feelings',
  'Vibes',
  'A lot to say',
  'Little to say',
  'Curious',
  'Interested',
  'Say hi',
  'Compliments',
  'Hater',
  'Just here',
  'Observing',
];

const possibleReactions = [
  'Happy',
  'Sad',
  'Angry',
  'Surprised',
  'Crying',
  'Commentless',
  'No reaction',
  'Uncertain',
  'What',
  'Wow',
  'Whoa',
  'Straight Faced',
  'Big eyes',
  'Irritated',
  'Laughing',
];

const users = [];


const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];


const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;


const getRandomComments = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      published: Math.random() < 0.5,
      description: getRandomArrItem(commentDescriptions),
      buildSuccess: Math.random() < 0.5,
      tags: [...getApplicationTags(3)],
    });
  }
  return results;
};


const getRandomReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleReactions);
  }
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      tagBody: getRandomArrItem(possibleReactions),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomComments, getRandomReactions };
