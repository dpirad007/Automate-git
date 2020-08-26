export default {
  name: "Master",
  children: [
    {
      name: "Master Commit 1",
      pathProps: "black",
      children: [
        {
          name: "Master Commit 2",
          pathProps: "black",
          children: [
            {
              name: "Master Commit 3",
              pathProps: "black",
              children: [],
            },
          ],
        },
        {
          name: "Branch 1",
          pathProps: "black",
          children: [],
        },
      ],
    },
  ],
};
