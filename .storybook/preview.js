export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: "light",
    clearable: false,
    list: [
      { name: "light", class: "light", color: "#ffffff" },
      { name: "dark", class: "dark", color: "#000000" },
    ],
  },
};
