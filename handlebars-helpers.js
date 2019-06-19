// 向 @阿全同學致敬 這方式真的好用!
const Handlebars = require("handlebars");

Handlebars.registerHelper("ifEquals", function(arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});
