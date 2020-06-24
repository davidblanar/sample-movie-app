module.exports = {
  root: true,
  extends: ["@react-native-community"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "no-only-tests"],
  rules: {
    quotes: "off",
    "comma-dangle": "off",
    radix: "off",
    "no-only-tests/no-only-tests": "error"
  },
  env: {
    jest: true
  }
};
