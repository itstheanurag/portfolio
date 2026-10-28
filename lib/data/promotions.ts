export const PROMO_STATS = [
  { value: "821k", label: "Impressions" },
  { value: "11.5k", label: "Engagements" },
  { value: "7,877", label: "Likes" },
  { value: "1,551", label: "Profile visits" },
];

export const PROMO_MONTHLY_IMPRESSIONS = "821k";
export const PROMO_MONTHLY_AVERAGE = "29k";
export const PROMO_MONTH_LABEL = "October 2026";

export interface PromoRate {
  name: string;
  price: string;
  unit: string;
  prefix?: string;
  description: string;
  includes: string[];
  popular?: boolean;
}

export const PROMO_RATES: PromoRate[] = [
  {
    name: "Sponsored post",
    price: "$50",
    unit: "per post",
    prefix: "From",
    description:
      "One original post about your product, written in my voice and approved by you before it goes live.",
    includes: ["One link + up to 2 images", "One round of edits", "48-hour scheduling window"],
  },
  {
    name: "Quote post",
    price: "$35",
    unit: "per quote",
    prefix: "From",
    description:
      "A quote post with my commentary on your launch, announcement, or a specific post you want amplified.",
    includes: ["Your post quoted", "My commentary + link", "One round of edits"],
  },
  {
    name: "Repost",
    price: "$25",
    unit: "per repost",
    prefix: "From",
    description:
      "A straightforward repost of your launch post to my timeline. Best when the post is already written and ready.",
    includes: ["Repost from your account", "24-hour window", "No copy changes"],
  },
  {
    name: "Bio + banner feature",
    price: "$20",
    unit: "per week",
    prefix: "From",
    description:
      "Your project in my X bio and profile banner for seven days. Seen by everyone who visits my profile.",
    includes: ["Bio link + banner", "7-day placement", "One swap per week"],
  },
  {
    name: "Launch bundle",
    price: "$100",
    unit: "package",
    prefix: "Package",
    popular: true,
    description:
      "The full launch push: an original post, a quote post, a repost, and a seven-day bio/banner feature.",
    includes: ["Post + quote + repost", "7-day bio/banner", "Priority scheduling"],
  },
];
