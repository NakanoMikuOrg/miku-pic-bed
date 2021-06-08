module.exports = {
  base: "/",
  head: [
    [
      "meta",
      {
        name: "title",
        content: "miku-pic-bed",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        href: "Picture Bed",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1.0",
      },
    ],
    ["meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1" }],
    [
      "link",
      { rel: "stylesheet", type: "text/css", href: "/static/css/font.css" },
    ],
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "Miku's PicBed",
      description:
        "Picture bed of pictures that can be reused for Nakano Miku's related projects",
    },
  },
  themeConfig: {
    logo: "/static/svg/carrot.svg",
    displayAllHeaders: true,
    sidebar: [
      {
        isGroup: true,
        text: "Flat Circle Scenes",
        children: [
          "/flat-circle-scenes/flat-circle-scenes_1.md",
          "/flat-circle-scenes/flat-circle-scenes_2.md",
          "/flat-circle-scenes/flat-circle-scenes_3.md",
          "/flat-circle-scenes/flat-circle-scenes_4.md",
          "/flat-circle-scenes/flat-circle-scenes_5.md",
        ],
      },
    ],
    sidebarDepth: 1,
    activeHeaderLinks: false,
    lastUpdatedText: "📑 Last updated",
    contributorsText: "🎨 Contributors",
    repo: "https://github.com/NakanoMikuOrg/miku-pic-bed",
    docsDir: "docs",
    docsBranch: "main",
    repoLabel: "🍺 Github",
    editLinks: true,
    editLinkText: "📝 Edit this page",
    notFound: ["👻 Page does not exist"],
    backToHome: "🏠 Take me home",
  },
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
        },
      },
    ],
    "@vuepress/plugin-medium-zoom",
  ],
};
