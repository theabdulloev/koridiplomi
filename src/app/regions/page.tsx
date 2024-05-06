import RegionCompanent from "@/components/regions";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "BEKOR TJ - Портали ҷойҳои кории холӣ",
    description:
        "Кори дипломии Абдуллоев Исмоилчон Комилчонович 2020-2024, Донишгохи Давлатии Хучанд ба номи академик Бобочон Гафуров",
    authors: [
        { name: "Ismoiljon Abdulloev", url: "instagram.com/theabdulloev" },
    ],
    appleWebApp: {
        capable: true,
        title: "BEKOR TJ",
        statusBarStyle: "black-translucent",
    },
    category: "Vacancies Web-App",
    applicationName: "BEKOR TJ ваканция",
    openGraph: {
        type: "website",
        url: "https://bekor.vercel.app",
        title: "BEKOR TJ - Кор дар минтакахои гуногун",
        description:
            "BEKOR TJ - Кори дипломии Абдуллоев Исмоилчон Комилчонович 2020-2024 - Донишгоҳи давлатии Хуҷанд ба номи академик Бобоҷон Ғафуров",
        siteName: "BEKOR TJ - Кор дар минтакахои гуногун",
        countryName: "TAJIKISTAN DUSHANBE",
        images: [
            {
                url: "https://bekor.vercel.app/logoAbdulloev.jpg",
            },
        ],
        alternateLocale: "TAJIKISTAN KHUJAND",
        emails: "ismoiljon.abdulloev.ibt@gmail.com",
        determiner: "the",
    },
    keywords: ["vacancies", "ваканция", "вакансия", "кор"],
};
export default function Categories() {
    return <RegionCompanent />;
}
