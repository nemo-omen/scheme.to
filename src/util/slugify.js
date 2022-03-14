const slugify = function (string) {
   return string.toLowerCase().split(' ').join(',', '-');
};

export {slugify};