const save = async () => {
    const data = {
      username: "test",
      vip: true,
      fullName: "Ismoiljon Abdulloev",
      description:
        "Мутахассис оид ба тасдиқи амалиёти бонкӣ, филиал дар ш.Хуҷанд",
      watch: 189,
      salary: 12000,
      contacts: "+992 97 809 23 23",
      email: "ismoiljon.abdulloev.ibt@gmail.com",
      location: "Хуҷанд",
      verification: true,
    };
    try {
      const res = await fetch("https://ruznomatj.vercel.app/products", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await res.json();
  
      return Response.json(result);
    } catch (error) {
      console.log(error);
    }
  };
  export default save