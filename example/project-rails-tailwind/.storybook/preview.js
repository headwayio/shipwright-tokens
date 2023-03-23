export const parameters = {
  server: {
    url: `${location.protocol}${location.hostname}${
      location.port !== "" ? ":3000" : ""
    }/rails/view_components`,
  },
  controls: { expanded: true },
  options: {
    storySort: {
      order: ["Tokens", "Atoms", "Molecules", "Components", "*"],
    },
  },
};
