// hello.js
module.exports = (req, res, next) => {
  if (req.url.startsWith("/profiles")) {
    setTimeout(next, 2000);
  } else {
    next();
  }
};
