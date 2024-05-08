import ProfileCompanent from "@/components/profil";

export default async function Page({ params }: { params: { slug: string } }) {
    const data = {
        username: "theabdulloev",
        vip: true,
        fullName: "Ismoiljon Abdulloev",
        description: "Бонкдор - коршиноси қарз дар шаҳри Хуҷанд",
        watch: "1025",
        salary: "5 000",
        contacts: "+992 92 999 99 99",
        email: "email@email.com",
        location: "Худжанд",
    };
    const profile = {
        username: params.slug,
        fullname: "Ismoiljon Abdulloev",
        spets: [
            "Front-end developer",
            "Back-end developer",
            "UX - UI designer",
        ],
        info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum,
        laborum natus error beatae quaerat omnis autem sit, doloremque, sed
        voluptates sapiente blanditiis iste inventore explicabo quam ab enim
        eaque similique earum esse nemo? Reprehenderit rem aut iusto, saepe
        neque molestias fugiat a rerum nesciunt nostrum nobis nihil
        perferendis tempore temporibus sit earum molestiae architecto harum
        officiis vel recusandae fugit repellendus provident. Dolores facere
        explicabo provident consequuntur blanditiis natus laudantium.`,
    };
    return <ProfileCompanent profile={profile} data={data}></ProfileCompanent>;
}
