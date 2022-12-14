module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "component",
      {
        libraryName: "@sagittariuana/element_project",
        /**
         * styleLibraryName: 'theme-chalk' 等价于下面，不过会要求有base.css
         */
        styleLibrary: {
          name: "theme-chalk", // same with styleLibraryName
          base: false, // if theme package has a base.css
        },
      },
    ],
  ]
}
