const bcrypt = require('bcryptjs');
const admins = [
  {
    name: 'Manager Wromo',
    image: 'https://i.ibb.co/Hh3krb5/team-2.jpg',
    email: 'support@wromo.com',
    password: bcrypt.hashSync('Wwromo2$'),
    phone: '08800802773',
    role: 'Manager',
    joiningData: new Date(),
  },
  {
    name: 'Wromo Security IT',
    image: 'https://i.ibb.co/vhg8JGg/team-6.jpg',
    email: 'admin@wromo.com',
    password: bcrypt.hashSync('Wwromo6$'),
    phone: '08800802773',
    role: 'Security IT',
    joiningData: new Date(),
  },
  {
    name: 'Wromo IT',
    image: 'https://i.ibb.co/TMrtsTG/team-5.jpg',
    email: 'info@wromo.com',
    password: bcrypt.hashSync('Wwromo5$'),
    phone: '08800802773',
    role: 'IT',
    joiningData: new Date(),
  },
  {
    name: 'Accountant Wromo',
    image: 'https://i.ibb.co/CVSjcw9/team-4.jpg',
    email: 'info.simiyoo@gmail.com',
    password: bcrypt.hashSync('Wwromo4$'),
    phone: '08800802773',
    role: 'Accountant',
    joiningData: new Date(),
  },
    {
    name: 'CEO Wromo',
    image: 'https://i.ibb.co/hcxW8ms/team-3.jpg',
    email: 'julian.gheny@gmail.com',
    password: bcrypt.hashSync('Wwromo3$'),
    phone: '08800802773',
    role: 'CEO',
    joiningData: new Date(),
  },
  {
    name: 'Admin Wromo',
    image: 'https://i.ibb.co/QFyN79P/team-1.jpg',
    email: 'info.wromo@gmail.com',
    password: bcrypt.hashSync('Wwromo1$'),
    phone: '06606336832',
    role: 'Admin',
    joiningData: new Date(),
  },
];

module.exports = admins;
