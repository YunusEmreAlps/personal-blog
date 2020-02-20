export const getPosts = () => {
  return [
     {
      title: "October",
      slug: "med",
      details: require("./posts/med.md").default,
      date: "7 Aralık 2019"
    },
    {
      title: "Awards",
      slug: "yarisma",
      details: require("./posts/yarisma.md").default,
      date: "5 Aralık 2019"
    },
    {
      title: "Who Am I",
      slug: "ornek-yazi",
      details: require("./posts/ornek-yazi.md").default,
      date: "3 Aralık 2019"
    },
    {
      title: "Hello World!",
      slug: "htmltutorial",
      details: require("./posts/htmltutorial.md").default,
      date: "1 Aralık 2019"
    }
   
  ];
};
