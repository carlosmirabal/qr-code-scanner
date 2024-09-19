module.exports = {
    semi: true,
    tabWidth: 4,
    endOfLine: "lf",
    printWidth: 180,
    singleQuote: false,
    trailingComma: "es5",

    plugins: [require.resolve("prettier-plugin-tailwindcss")],
    tailwindAttributes: ["className"],
};
