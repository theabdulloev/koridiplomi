async function getData() {
  const res = await fetch("https://ruznomatj.vercel.app/products");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Mongo() {
  const data = await getData();
  console.log(data);
  return (
    <main>
      <span>Hello mongo db</span>
      {data.map((i: any) => (
        <span key={i.username}>i.name</span>
      ))}
    </main>
  );
}
