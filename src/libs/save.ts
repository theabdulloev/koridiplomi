import axios from "axios";
export default async function PostVacancies(data: any) {
    console.log(data, "from server");
    const result = await axios.post(
        "https://ruznomatj.vercel.app/products",
        data,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    return result;
}
