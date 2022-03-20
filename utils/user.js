const bcrypt = require("bcryptjs");
const users = [
  {
    name: "Simiyoo",
    email: "info.simiyoo@gmail.com",
    password: bcrypt.hashSync("87654321y"),
    phone: "4548880052",
  },
  {
    name: "Helga Helon",
    email: "helon.h@gmail.com",
    password: bcrypt.hashSync("87654321x"),
    phone: "4553127448",
  },
  {
    name: "Ersin",
    email: "ersin.e@gmail.com",
    password: bcrypt.hashSync("87654321z"),
    phone: "5355552845",
  },
  {
    name: "Samuel",
    email: "samuel@gmail.com",
    password: bcrypt.hashSync("87654321o"),
    phone: "3072023590",
  },
  {
    name: 'Williams',
    email: 'williams@gmail.com',
    password: bcrypt.hashSync('87654321p'),
    phone: '714-776-3942',
  },
  {
    name: 'Gordon C. Lowery',
    email: 'gordon@gmail.com',
    password: bcrypt.hashSync('87654321l'),
    phone: '858-243-0632',
  },
  {
    name: 'Lester J. Massey',
    email: 'lester@gmail.com',
    password: bcrypt.hashSync('87654321a'),
    phone: '715-657-9865',
  },

  {
    name: 'Samuel',
    email: 'samuel@gmail.com',
    password: bcrypt.hashSync('87654321b'),
    phone: '307-202-3590',
  },
  {
    name: 'Henry M. Koch',
    email: 'henry@gmail.com',
    password: bcrypt.hashSync('87654321c'),
    phone: '912-587-2159',
  },
  {
    name: 'Kathryn J. Brown',
    email: 'kathryn@gmail.com',
    password: bcrypt.hashSync('87654321d'),
    phone: '707-275-4858',
  },

  {
    name: 'Josephine M. Peel',
    email: 'josephine@gmail.com',
    password: bcrypt.hashSync('87654321e'),
    phone: '734-256-1159',
  },
  {
    name: 'Justin J. Ruiz',
    email: 'justin@gmail.com',
    password: bcrypt.hashSync('87654321f'),
    phone: '212-512-2888',
  },
  {
    name: 'Aurora E. Amerson',
    email: 'aurora@gmail.com',
    password: bcrypt.hashSync('87654321g'),
    phone: '660-515-7629',
  },
  {
    name: 'Christopher M. Fox',
    email: 'christopher@gmail.com',
    password: bcrypt.hashSync('87654321h'),
    phone: '812-886-0550',
  },

  {
    name: 'James J. Allen',
    email: 'james@gmail.com',
    password: bcrypt.hashSync('87654321i'),
    phone: '818-356-8600',
  },
  {
    name: 'Hilary W. Becker',
    email: 'hilary@gmail.com',
    password: bcrypt.hashSync('87654321j'),
    phone: '802-516-2269',
  },

  {
    name: 'Jon B. Krueger',
    email: 'jon@gmail.com',
    password: bcrypt.hashSync('87654321k'),
    phone: '360-943-7332',
  },
  {
    name: 'Paul R. Bruns',
    email: 'paul@gmail.com',
    password: bcrypt.hashSync('87654321m'),
    phone: '715-651-7487',
  },
];

module.exports = users;
