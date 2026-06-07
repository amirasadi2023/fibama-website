import type { AccordionItem } from "~/types/accordion.types";
import { toPersianDigits } from "~/utils/persianDigits";

export interface FooterLinkItem {
  label: string;
  href: string;
  target?: string;
  ariaLabel?: string;
  rel?: string;
}

export interface FooterSocialLink extends FooterLinkItem {
  icon: "instagram" | "whatsapp" | "telegram";
}

export interface FooterDownloadLink extends FooterLinkItem {
  image: string;
  imageAlt: string;
}

export interface FooterTrustSeal {
  label: string;
  href?: string;
  target?: string;
  ariaLabel?: string;
  rel?: string;
  tag?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  referrerPolicy?: string;
}

export interface FooterBrandLink extends FooterLinkItem {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface HeaderContent {
  brand: FooterBrandLink;
  actionLink: FooterLinkItem;
}

export interface LandingHeroContent {
  title: string;
  subtitle: string;
  contactButton: FooterLinkItem;
  startButton: FooterLinkItem;
  images: {
    background: {
      src: string;
      alt: string;
    };
    phoneMockup: {
      src: string;
      alt: string;
    };
  };
  notes: {
    left: string;
    right: string;
    bottom: string;
  };
}

export interface FooterContactItem {
  label: string;
  icon: "phone" | "email" | "location" | "clock";
  href?: string;
  links?: FooterContactValue[];
  dir?: "ltr" | "rtl";
}

export interface FooterContactValue {
  label: string;
  href: string;
  ariaLabel?: string;
  dir?: "ltr" | "rtl";
}

export interface FooterContent {
  intro: string;
  copyright: string;
  sectionTitles: {
    contact: string;
    trustSeals: string;
    downloads: string;
  };
}

export interface SupportContactInfo {
  phone: {
    label: string;
    href: string;
    ariaLabel: string;
    dir: "ltr" | "rtl";
  };
}

export const brandName = "فی باما";

export const siteBrandLink: FooterBrandLink = {
  label: brandName,
  href: "/",
  ariaLabel: brandName,
  logo: {
    src: "/images/logo-2.svg",
    alt: brandName,
    width: 208,
    height: 68,
  },
};

export const headerContent: HeaderContent = {
  brand: siteBrandLink,
  actionLink: {
    label: "ورود / ثبت نام",
    href: "https://app.fibama.ir",
    target: "_blank",
    ariaLabel: "ورود یا ثبت نام",
  },
};

export const landingHeroContent: LandingHeroContent = {
  title: brandName,
  subtitle: "خداحافظی با آشفتگی؛ هوشمندانه‌تر خرید کنید!",
  contactButton: {
    label: "راه‌های ارتباطی با ما",
    href: "#site-footer",
  },
  startButton: {
    label: "همین حالا شروع کنید!",
    href: "https://app.fibama.ir",
    target: "_blank",
  },
  images: {
    background: {
      src: "/images/hero/hero-back-bgi.svg",
      alt: "",
    },
    phoneMockup: {
      src: "/images/hero/mockup-img-mobile-1.png",
      alt: "نمایی از اپلیکیشن فی باما",
    },
  },
  notes: {
    left: "تمامی برندهای مورد نیازتان در یک لیست قیمت، کاتالوگ‌ها و جزئیات محصول همیشه و همه‌جا در دسترس شماست.",
    right: "بازار در جیب شما: دسترسی سریع به کاتالوگ تمام برندها",
    bottom:
      "⏳ جستجو کنید، پیدا کنید و همیشه به‌روز باشید. مدیریت محصولات به ساده‌ترین شکل ممکن.",
  },
};

export const landingPageSeo = {
  title: `${brandName} | مرجع قیمت ابزار`,
  description:
    "فی باما دسترسی سریع به لیست قیمت، کاتالوگ و جزئیات محصولات برندهای ابزار را در یک فضای منظم و همیشه به‌روز فراهم می‌کند.",
  keywords: [
    brandName,
    "لیست قیمت ابزار",
    "کاتالوگ ابزار",
    "قیمت روز ابزار",
    "بازرگانی ابزار",
    "فی باما",
  ],
  canonicalPath: "/",
  robots: "index, follow",
  themeColor: "#55AA35",
  favicon: {
    href: "/favicon.png",
    type: "image/svg+xml",
    sizes: "32x32",
  },
  openGraph: {
    title: `${brandName} | مرجع قیمت ابزار`,
    description:
      "با فی باما، لیست قیمت، کاتالوگ و جزئیات محصولات برندهای ابزار را سریع، منظم و به‌روز ببینید.",
    type: "website",
    locale: "fa_IR",
    siteName: brandName,
    url: "/",
    image: "/images/logo-2.svg",
    imageAlt: `لوگوی ${brandName}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandName} | مرجع قیمت ابزار`,
    description:
      "دسترسی سریع و منظم به لیست قیمت و کاتالوگ برندهای ابزار در فی باما.",
    image: "/images/logo-2.svg",
    imageAlt: `لوگوی ${brandName}`,
  },
};

export const supportContactInfo: SupportContactInfo = {
  phone: {
    label: toPersianDigits("05191012736"),
    href: "tel:05191012736",
    ariaLabel: "تماس با پشتیبانی ۰۵۱۹۱۰۱۲۷۳۶",
    dir: "ltr",
  },
};

export const landingFaqItems: AccordionItem[] = [
  {
    id: "catalog-prices",
    badge: toPersianDigits(1),
    title: "آیا اطلاعات کاتالوگ‌ها و لیست قیمت‌ها همیشه به‌روز هستند؟",
    content:
      "بله، سیستم ما به‌صورت لحظه‌ای با منابع اصلی برندها در ارتباط است و هرگونه تغییر در قیمت یا جزئیات محصول، بلافاصله در اپلیکیشن به‌روزرسانی می‌شود.",
    defaultOpen: true,
  },
  {
    id: "offline-access",
    badge: toPersianDigits(2),
    title: "آیا برای دسترسی به کاتالوگ‌ها نیاز به اینترنت همیشگی دارم؟",
    content:
      "برای دریافت تازه‌ترین قیمت‌ها اتصال اینترنت پیشنهاد می‌شود، اما نسخه‌های مشاهده‌شده می‌توانند به‌صورت موقت در دسترس بمانند.",
  },
];

export const footerBrandLink: FooterBrandLink = siteBrandLink;

export const footerContent: FooterContent = {
  intro:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزار",
  copyright: "© تمامی حقوق مادی و معنوی برای فی باما محفوظ است.",
  sectionTitles: {
    contact: "اطلاعات تماس",
    trustSeals: "نمادهای اعتماد",
    downloads: "لینک های دانلود",
  },
};

export const footerHelpfulLinks: FooterLinkItem[] = [
  {
    label: "قوانین و مقررات",
    href: "/",
  },
  {
    label: "حریم خصوصی",
    href: "/",
  },
  {
    label: "سوالات متداول",
    href: "#faq",
  },
];

export const footerContactLinks: FooterLinkItem[] = [
  {
    label: "تماس با ما",
    href: "/",
  },
  {
    label: "درباره ما",
    href: "/",
  },
  {
    label: "همکاری با ما",
    href: "/",
  },
];

export const footerContactItems: FooterContactItem[] = [
  {
    label: "شماره تماس",
    icon: "phone",
    links: [
      {
        label: toPersianDigits("09157791456"),
        href: "tel:09157791456",
        ariaLabel: "تماس با شماره ثابت ۰۹۱۵۷۷۹۱۴۵۶",
        dir: "ltr",
      },
      {
        label: toPersianDigits("05191012736"),
        href: "tel:05191012736",
        ariaLabel: "تماس با شماره ثابت ۰۵۱۹۱۰۱۲۷۳۶",
        dir: "ltr",
      },
    ],
  },
  {
    label: "info@fibama.ir",
    href: "mailto:info@fibama.ir",
    icon: "email",
    dir: "ltr",
  },
  {
    label: "خراسان رضوی، مشهد، بلوار پیروزی، مقابل پیروزی ۳۰، بازرگانی اسدی",
    icon: "location",
  },
  {
    label: toPersianDigits("شنبه تا پنجشنبه، از ساعت 9 الی 18"),
    icon: "clock",
  },
];

export const footerDownloadLinks: FooterDownloadLink[] = [
  {
    label: "Google Play",
    href: "https://app.fibama.ir",
    target: "_blank",
    rel: "noopener noreferrer",
    image: "/images/footer/google-play.png",
    imageAlt: "دانلود از گوگل پلی",
    ariaLabel: "دانلود اپلیکیشن از گوگل پلی",
  },
  {
    label: "App Store",
    href: "https://app.fibama.ir",
    target: "_blank",
    rel: "noopener noreferrer",
    image: "/images/footer/AppStore1.png",
    imageAlt: "دانلود از اپ استور",
    ariaLabel: "دانلود اپلیکیشن از اپ استور",
  },
  {
    label: "Bazaar",
    href: "https://app.fibama.ir",
    target: "_blank",
    rel: "noopener noreferrer",
    image: "/images/footer/bazaar.png",
    imageAlt: "دانلود از بازار",
    ariaLabel: "دانلود اپلیکیشن از بازار",
  },
];

export const footerTrustSeals: FooterTrustSeal[] = [
  {
    label: "اینماد",
    href: "https://trustseal.enamad.ir/?id=734862&Code=cOtz0IlI53sNTYngZYYy6VsAlnejtsYL",
    target: "_blank",
    tag: "<a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=734862&Code=cOtz0IlI53sNTYngZYYy6VsAlnejtsYL'></a>",
    image: "/images/footer/enamad.svg",
    imageAlt: "نماد اعتماد الکترونیک فی باما",
    imageWidth: 120,
    imageHeight: 120,
    ariaLabel: "مشاهده نماد اعتماد الکترونیک فی باما",
    referrerPolicy: "origin",
  },
  // {
  //   label: "نماد اعتماد دوم",
  //   href: "/",
  //   target: "_blank",
  //   rel: "noopener noreferrer",
  //   image: "/images/footer/trust-seal-2.png",
  //   imageAlt: "نماد اعتماد فی باما",
  //   imageWidth: 120,
  //   imageHeight: 120,
  //   ariaLabel: "مشاهده نماد اعتماد فی باما",
  // },
  // {
  //   label: "نماد اعتماد سوم",
  //   href: "/",
  //   target: "_blank",
  //   rel: "noopener noreferrer",
  //   image: "/images/footer/trust-seal-3.png",
  //   imageAlt: "نماد اعتماد فی باما",
  //   imageWidth: 120,
  //   imageHeight: 120,
  //   ariaLabel: "مشاهده نماد اعتماد فی باما",
  // },
];

export const footerSocialLinks: FooterSocialLink[] = [
  {
    label: "اینستاگرام",
    href: "/",
    ariaLabel: "اینستاگرام فی باما",
    icon: "instagram",
  },
  {
    label: "واتساپ",
    href: "/",
    ariaLabel: "واتساپ فی باما",
    icon: "whatsapp",
  },
  {
    label: "تلگرام",
    href: "/",
    ariaLabel: "تلگرام فی باما",
    icon: "telegram",
  },
];
