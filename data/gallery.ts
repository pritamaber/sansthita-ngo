export type GalleryImage = {
  file: string;
  caption: string;
};

export type GalleryGroup = {
  title: string;
  images: GalleryImage[];
};

// NOTE: newest events go at the top of this list — when adding a new
// event's photos, insert a new group right after this comment block.
export const galleryGroups: GalleryGroup[] = [
  {
    title: "International Yoga Day 2026",
    images: [
      { file: "Yoga day 01.jpg", caption: "International yoga day 2026 conducted by Sansthita" },
      { file: "Yoga day 02.jpg", caption: "International yoga day 2026 conducted by Sansthita" },
      { file: "Yoga day 03.jpg", caption: "International yoga day 2026 conducted by Sansthita" },
      { file: "Yoga day 04.jpg", caption: "International yoga day 2026 conducted by Sansthita" },
      { file: "Yoga day 05.jpg", caption: "International yoga day 2026 conducted by Sansthita" },
      { file: "Yoga day 06.jpg", caption: "International yoga day 2026 conducted by Sansthita" },
      { file: "Yoga day 07.jpg", caption: "International yoga day 2026 conducted by Sansthita" },
      { file: "Yoga day 08.jpg", caption: "International yoga day 2026 conducted by Sansthita" },
    ],
  },
  {
    title: "World Environment Day 2026",
    images: [
      { file: "World env day 01.jpg", caption: "World Environment Day (5th June 2026) organised by Sansthita" },
      { file: "World env day 02.jpg", caption: "World Environment Day (5th June 2026) organised by Sansthita" },
      { file: "World env day 03.jpg", caption: "World Environment Day (5th June 2026) organised by Sansthita" },
      { file: "World env day 04.jpg", caption: "World Environment Day (5th June 2026) organised by Sansthita" },
      { file: "World env day 05.jpg", caption: "World Environment Day (5th June 2026) organised by Sansthita" },
      { file: "World env day 06.jpg", caption: "World Environment Day (5th June 2026) organised by Sansthita" },
    ],
  },
  {
    title: "Christmas Celebrations",
    images: [
      { file: "sans_new_mla_2.jpeg", caption: "Sri Mriganka Bhattacharya Christmas Event" },
      {
        file: "keya-basak-christmas.jpeg",
        caption: "Mrs Keya Basak distributing Christmas gifts among children",
      },
    ],
  },
  {
    title: "MLA Visits & Programs",
    images: [
      {
        file: "sans_new_mla_1.jpeg",
        caption: "Sri Mriganka Bhattacharya Rabindra Jayanti Celebration",
      },
      {
        file: "sans_new_mla_3.jpeg",
        caption: "Sri Mriganka Bhattacharya in Drawing Competition in Sansthita",
      },
    ],
  },
  {
    title: "Children's Drawing Competition",
    images: [
      { file: "Children draw compet 01.jpg", caption: "Children Drawing Competition" },
      { file: "Children draw compet 02.jpg", caption: "Children Drawing Competition" },
      { file: "Children draw compet 09.jpg", caption: "Children Drawing Competition" },
      { file: "Children draw compet 10.jpg", caption: "Children Drawing Competition" },
      { file: "Children draw compet 11.jpg", caption: "Children Drawing Competition" },
      { file: "Children draw compet 12.jpg", caption: "Children Drawing Competition" },
      { file: "Children draw compet 13.jpg", caption: "Children Drawing Competition" },
      { file: "Children draw compet 14.jpg", caption: "Children Drawing Competition" },
    ],
  },
  {
    title: "Children's Recreational Activities",
    images: [
      { file: "Children play 01.jpg", caption: "Children Recreational Activities" },
      { file: "Children play 02.jpg", caption: "Children Recreational Activities" },
      { file: "Children play 03.jpg", caption: "Children Recreational Activities" },
      { file: "Children play 04.jpg", caption: "Children Recreational Activities" },
      { file: "Children play 05.jpg", caption: "Children Recreational Activities" },
      { file: "Children play 06.jpg", caption: "Children Recreational Activities" },
      { file: "Children play 07.jpg", caption: "Children Recreational Activities" },
      { file: "Children play 08.jpg", caption: "Children Recreational Activities" },
      { file: "Children play 09.jpg", caption: "Children Recreational Activities" },
    ],
  },
  {
    title: "COVID-19 Relief Support",
    images: [
      { file: "Covid 01.jpg", caption: "COVID Relief Support" },
      { file: "Covid 02.jpg", caption: "COVID Relief Support" },
      { file: "Covid 03.jpg", caption: "COVID Relief Support" },
      { file: "Covid 04.jpg", caption: "COVID Relief Support" },
      { file: "Covid 05.jpg", caption: "COVID Relief Support" },
      { file: "Covid 07.jpg", caption: "COVID Relief Support" },
      { file: "Covid 08.jpg", caption: "COVID Relief Support" },
      { file: "Covid 09.jpg", caption: "COVID Relief Support" },
      { file: "Covid 10.jpg", caption: "COVID Relief Support" },
      { file: "Covid 11.jpg", caption: "COVID Relief Support" },
    ],
  },
  {
    title: "Holi Celebration",
    images: [
      { file: "Holi 01.jpg", caption: "Holi Celebration with Community" },
      { file: "Holi 02.jpg", caption: "Holi Celebration with Community" },
      { file: "Holi 03.jpg", caption: "Holi Celebration with Community" },
      { file: "Holi 04.jpg", caption: "Holi Celebration with Community" },
      { file: "Holi 05.jpg", caption: "Holi Celebration with Community" },
      { file: "Holi 06.jpg", caption: "Holi Celebration with Community" },
    ],
  },
  {
    title: "Community Outreach Programs",
    images: [
      { file: "Isisar prog 01.jpg", caption: "Community Outreach Program" },
      { file: "Isisar prog 02.jpg", caption: "Community Outreach Program" },
      { file: "Isisar prog 03.jpg", caption: "Community Outreach Program" },
      { file: "Isisar prog 04.jpg", caption: "Community Outreach Program" },
      { file: "Isisar prog 05.jpg", caption: "Community Outreach Program" },
      { file: "Isisar prog 06.jpg", caption: "Community Outreach Program" },
      { file: "Isisar prog 07.jpg", caption: "Community Outreach Program" },
      { file: "Isisar prog 08.jpg", caption: "Community Outreach Program" },
    ],
  },
  {
    title: "Rakhi Celebration",
    images: [
      { file: "Rakhi celeb 01.jpg", caption: "Rakhi Celebration Program" },
      { file: "Rakhi celeb 02.jpg", caption: "Rakhi Celebration Program" },
      { file: "Rakhi celeb 03.jpg", caption: "Rakhi Celebration Program" },
      { file: "Rakhi celeb 04.jpg", caption: "Rakhi Celebration Program" },
      { file: "Rakhi celeb 05.jpg", caption: "Rakhi Celebration Program" },
    ],
  },
  {
    title: "Women's Day Celebration",
    images: [
      { file: "Womes day celeb 01.jpg", caption: "Women's Day Celebration" },
      { file: "Womes day celeb 02.jpg", caption: "Women's Day Celebration" },
      { file: "Womes day celeb 03.jpg", caption: "Women's Day Celebration" },
      { file: "Womes day celeb 04.jpg", caption: "Women's Day Celebration" },
      { file: "Womes day celeb 05.jpg", caption: "Women's Day Celebration" },
    ],
  },
  {
    title: "Teacher's Day Celebration",
    images: [
      { file: "Teacher day celeb 01.jpg", caption: "Teacher's Day Celebration" },
      { file: "Teacher day celeb 02.jpg", caption: "Teacher's Day Celebration" },
    ],
  },
  {
    title: "Cloth Distribution",
    images: [
      { file: "Cloth distribution puja 01.jpg", caption: "Cloth Distribution for Families" },
      { file: "Cloth distribution puja 02.jpg", caption: "Cloth Distribution for Families" },
    ],
  },
  {
    title: "Tree Plantation Drive",
    images: [
      { file: "Tree plant event.jpeg", caption: "Tree Plantation Drive" },
    ],
  },
  {
    title: "Other Activities",
    images: [
      { file: "Abused woman saved.jpeg", caption: "Support for Domestic Violence Survivor" },
      { file: "Child help 01.jpeg", caption: "Helping Children in Need" },
      { file: "Independence day.jpeg", caption: "Independence Day Celebration" },
      { file: "Picnic 01.jpeg", caption: "Community Recreation Event" },
      { file: "Rintu khara donation.jpeg", caption: "Education Support for Student" },
      {
        file: "Sansthita office and members 01.jpg",
        caption: "Sansthita Members Meeting",
      },
      { file: "Group-Gathering.jpeg", caption: "Sansthita Community Activity" },
      {
        file: "young_girl_helping.jpg",
        caption:
          "Two compassionate young minds extended their hands to support those in need",
      },
      {
        file: "santosh_cheque.jpg",
        caption: "Mr. Santosh Kumar Mitra presenting a cheque to someone in need",
      },
      {
        file: "member_green_earth1.jpg",
        caption: "Members take part in the Green Earth Movement drive",
      },
      {
        file: "member_green_earth2.jpg",
        caption: "Members take part in the Green Earth Movement drive",
      },
      {
        file: "late_founder.jpg",
        caption: "We pay homage to our founder Late Santosh Kumar Mitra",
      },
    ],
  },
];
