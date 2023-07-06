function mixZnakow(length) {
   let result = '';
   let znaki = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let znakiLength = znaki.length;
   for (let i = 0; i < length; i++) {
      result += znaki.charAt(Math.floor(Math.random() * znakiLength));
   }
   return result;
}

console.log(mixZnakow(10));

module.exports = {
   mixZnakow: mixZnakow
}