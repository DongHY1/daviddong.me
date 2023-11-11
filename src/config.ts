import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://daviddong.me/",
  author: "David Dong",
  desc: "David Dong's Blog",
  title: "daviddong.me",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["zh-CN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/DongHY1",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:hi@daviddong.me",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/SZU_HaoYu",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCjmYFhFWGVWgNjLtF6Rpr3g/",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
];
