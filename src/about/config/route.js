export default [
  [/^about\/(\d+)\/(\w+)$/, {
    get: "about/index/index?id=:1&:type=:2"
  }]
];