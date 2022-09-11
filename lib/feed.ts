import fs from "fs";
import { Feed } from "feed";
import Publications from "../data/publications";

const generateRssFeed = async () => {
  const siteURL = "https://www.sapka.me";
  const date = new Date();
  const author = {
    name: "Michał M. Sapka",
    email: "michal@sapka.pl",
    link: "https://michal.sapka.pl",
  };

  const feed = new Feed({
    title: "Michał's publications",
    description: "Michał Sapka's recent publications",
    id: siteURL,
    link: siteURL,
    //image: `${siteURL}/logo.svg`,
    //favicon: `${siteURL}/favicon.png`,
    copyright: `All rights reserved ${date.getFullYear()}, Michał M. Sapka`,
    updated: date,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
    author,

  });

  Publications.forEach((post) => {
    const url = post.url;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.summary,
      content: post.summary,
      author: [author],
      contributor: [author],
      date: new Date(post.publishedAt),
    });
  });

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
};

export default generateRssFeed
