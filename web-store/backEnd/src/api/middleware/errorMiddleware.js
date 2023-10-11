const errorMiddleware = (err, _req, res, _next) => {
  const { status, message } = err;
  if (status) return res.status(status).json({ message });
  console.log(err);
  return res.status(500).json({ message });
};

module.exports = errorMiddleware;