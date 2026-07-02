export type WorkItem = {
  image: string;
  alt: string;
  caption: string;
};

export type WorkGroup = {
  title: string;
  items: WorkItem[];
};

// NOTE: newest events go at the top of this list — when adding a new
// event's photos, insert a new group right after this comment block.
export const workGroups: WorkGroup[] = [
  {
    title: "International Yoga Day 2026",
    items: [
      { image: "/images/all/Yoga day 01.jpg", alt: "International Yoga Day", caption: "International yoga day 2026 conducted by Sansthita." },
      { image: "/images/all/Yoga day 02.jpg", alt: "International Yoga Day", caption: "International yoga day 2026 conducted by Sansthita." },
      { image: "/images/all/Yoga day 03.jpg", alt: "International Yoga Day", caption: "International yoga day 2026 conducted by Sansthita." },
      { image: "/images/all/Yoga day 04.jpg", alt: "International Yoga Day", caption: "International yoga day 2026 conducted by Sansthita." },
      { image: "/images/all/Yoga day 05.jpg", alt: "International Yoga Day", caption: "International yoga day 2026 conducted by Sansthita." },
      { image: "/images/all/Yoga day 06.jpg", alt: "International Yoga Day", caption: "International yoga day 2026 conducted by Sansthita." },
      { image: "/images/all/Yoga day 07.jpg", alt: "International Yoga Day", caption: "International yoga day 2026 conducted by Sansthita." },
      { image: "/images/all/Yoga day 08.jpg", alt: "International Yoga Day", caption: "International yoga day 2026 conducted by Sansthita." },
    ],
  },
  {
    title: "World Environment Day 2026",
    items: [
      { image: "/images/all/World env day 01.jpg", alt: "World Environment Day", caption: "World Environment Day (5th June 2026) organised by Sansthita." },
      { image: "/images/all/World env day 02.jpg", alt: "World Environment Day", caption: "World Environment Day (5th June 2026) organised by Sansthita." },
      { image: "/images/all/World env day 03.jpg", alt: "World Environment Day", caption: "World Environment Day (5th June 2026) organised by Sansthita." },
      { image: "/images/all/World env day 04.jpg", alt: "World Environment Day", caption: "World Environment Day (5th June 2026) organised by Sansthita." },
      { image: "/images/all/World env day 05.jpg", alt: "World Environment Day", caption: "World Environment Day (5th June 2026) organised by Sansthita." },
      { image: "/images/all/World env day 06.jpg", alt: "World Environment Day", caption: "World Environment Day (5th June 2026) organised by Sansthita." },
    ],
  },
  {
    title: "Green Earth Movement",
    items: [
      {
        image: "/images/all/member_green_earth1.jpg",
        alt: "Green Earth Movement",
        caption: "Members take part in the Green Earth Movement drive.",
      },
      {
        image: "/images/all/member_green_earth2.jpg",
        alt: "Green Earth Movement",
        caption: "Members take part in the Green Earth Movement drive.",
      },
    ],
  },
  {
    title: "Community Initiatives",
    items: [
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
        image: "/images/works/Bag distribution to children.jpeg",
        alt: "School bag distribution",
        caption:
          "School bags distributed to children by Mr. Brij Kishore Shaw, Branch Manager of SBI Kalindi Branch.",
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
      {
        image: "/images/all/young_girl_helping.jpg",
        alt: "Helping those in need",
        caption:
          "Two compassionate young minds extended their hands to support those in need.",
      },
      {
        image: "/images/all/santosh_cheque.jpg",
        alt: "Cheque donation support",
        caption:
          "Mr. Santosh Kumar Mitra presenting a cheque to someone in need.",
      },
    ],
  },
];
