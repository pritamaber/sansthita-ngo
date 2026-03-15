import WorkCard from "@/components/WorkCard";

export default function WorksPage() {
  const works = [
    {
      image: "/images/all/Abused woman saved.jpeg",
      alt: "Support for abused woman",
      caption:
        "With the support of Sansthita, an abused woman was safely shifted to a secure old age home ensuring her protection, dignity and care.",
    },

    {
      image: "/images/all/Womes day celeb 02.jpg",
      alt: "Women empowerment program",
      caption:
        "Women’s Day celebration organized by Sansthita to promote empowerment, awareness and solidarity among women in the community.",
    },

    {
      image: "/images/all/Rintu khara donation.jpeg",
      alt: "Education support",
      caption:
        "Rantu Khara , a 2024 student of Goenka College received a cheque from our president , Ms Geeta Mukherjee , to support his higher studies ",
    },

    {
      image: "/images/all/Cloth distribution puja 01.jpg",
      alt: "Cloth distribution program",
      caption:
        "Distribution of clothes to underprivileged families during Durga Puja as part of Sansthita's community support initiatives.",
    },

    {
      image: "/images/all/Covid 05.jpg",
      alt: "Pandemic relief",
      caption:
        "Relief support provided during the COVID-19 pandemic including food distribution and assistance to struggling families.",
    },

    {
      image: "/images/all/Tree plant event.jpeg",
      alt: "Tree plantation drive",
      caption:
        "Tree plantation drives organized to encourage environmental awareness and community participation.",
    },

    {
      image: "/images/all/Independence day.jpeg",
      alt: "Independence day celebration",
      caption:
        "Independence Day celebration with children and community members promoting unity and patriotism.",
    },

    {
      image: "/images/all/Holi 03.jpg",
      alt: "Community celebration",
      caption:
        "Community celebrations bringing together families, volunteers and children in the spirit of togetherness.",
    },

    {
      image: "/images/works/Sewing machine donation sujit bose.jpeg",
      alt: "Sewing machine donation",
      caption:
        "Sewing machine donation program supported by Shri Sujit Bose to help women become financially independent through skill development.",
    },

    {
      image: "/images/works/Bag distribution to children.jpeg",
      alt: "School bag distribution",
      caption:
        "School bags distributed to children by Mr. Shaw, Branch Manager of SBI Kalindi Branch.",
    },

    {
      image: "/images/works/Sandhya das returned to home 2015.jpeg",
      alt: "Rehabilitation support",
      caption:
        "With the support of Sansthita, Sandhya Das was safely reunited with her family in 2015 after facing severe hardship.",
    },

    {
      image: "/images/works/Health checkup.jpeg",
      alt: "Health checkup camp",
      caption:
        "Health check-up camp organized to provide medical consultation and basic healthcare services to community members.",
    },

    {
      image: "/images/works/Opressed women 01.jpeg",
      alt: "Support for oppressed women",
      caption:
        "Sansthita working closely with oppressed women to provide emotional support, legal guidance and protection.",
    },

    {
      image: "/images/works/Chained man released.jpeg",
      alt: "Humanitarian rescue support",
      caption:
        "Humanitarian intervention helping a vulnerable man regain freedom and dignity through community assistance.",
    },

    {
      image: "/images/works/Opressed women 02.jpeg",
      alt: "Women support program",
      caption:
        "Support and counselling provided to women facing hardship and injustice in the community.",
    },
    {
      image: "/images/works/Cloth bag distribution.jpeg",
      alt: "Women support program",
      caption:
        "Cloth bags distributed among community members to encourage environmentally friendly alternatives to plastic.",
    },
  ];

  return (
    <main className="bg-white">
      {/* PAGE HEADER */}

      <section className="bg-blue-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Works</h1>

          <p className="text-lg text-gray-200">
            Sansthita works for oppressed women, children's development, relief
            activities and community support initiatives.
          </p>
        </div>
      </section>

      {/* WORK GRID */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {works.map((work, index) => (
              <WorkCard
                key={index}
                image={work.image}
                alt={work.alt}
                caption={work.caption}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
