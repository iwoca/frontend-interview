export function contentTypeMiddleware(req, res, next) {
  if (req.method !== "POST") {
    return next();
  }

  const contentType = req.headers["content-type"];

  if (contentType === undefined || contentType !== "application/json") {
    return res.status(415).send(
      JSON.stringify({
        error: "Unsupported Content-Type",
        detail:
          'The provided Content-Type doesn\'t match the supported Content-Type of "application/json"',
      })
    );
  }

  next();
}
