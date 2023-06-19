export function timeStampMiddleware(req, res, next) {
  if (req.method !== "POST") {
    return next();
  }

  const created_date = new Date();
  const expiry_date = new Date();
  expiry_date.setDate(expiry_date.getDate() + 30);

  req.body.date_created = created_date;
  req.body.expiry_date = expiry_date;

  next();
}
