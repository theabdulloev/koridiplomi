export async function GET() {
  const data = [
    {
      userName: "user54381",
      vip: true,
      fullName: "John Doe",
      description:
        "Backend developer and data science enthusiast. Let's explore the world of algorithms together!",
      watch: "1025",
      salary: "5 000",
      contacts: "+992 92 999 99 99",
      email: "email@email.com",
      location: "Khujand",
    },
    {
      userName: "user90243",
      vip: true,
      fullName: "Alice Smith",
      description:
        "Mobile app developer and technology geek. Join me in the world of mobile innovation!",
      watch: "1897",
      salary: "12 000",
      contacts: "+992 92 999 99 99",
      email: "email@email.com",
      location: "Khujand",
    },
    {
      userName: "user17653",
      vip: false,
      fullName: "Emma Johnson",
      description:
        "Game developer and virtual reality explorer. Embark on an epic gaming journey with me!",
      watch: "3245",
      salary: "2 700",
      contacts: "+992 92 999 99 99",
      email: "email@email.com",
      location: "Khujand",
    },
    {
      userName: "user17652",
      vip: false,
      fullName: "Emma Johnson",
      description:
        "Game developer and virtual reality explorer. Embark on an epic gaming journey with me!",
      watch: "3245",
      salary: "42 700",
      contacts: "+992 92 999 99 99",
      email: "email@email.com",
      location: "Khujand",
    },
    {
      userName: "user17651",
      vip: false,
      fullName: "Emma Johnson",
      description:
        "Game developer and virtual reality explorer. Embark on an epic gaming journey with me!",
      watch: "3245",
      salary: "1 700",
      contacts: "+992 92 999 99 99",
      email: "email@email.com",
      location: "Khujand",
    },
  ];

  return Response.json(data);
}
