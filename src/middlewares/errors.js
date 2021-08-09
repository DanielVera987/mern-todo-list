import createError from 'http-errors';

export const handlerError404 = (req, res, next) => {
  next(createError(404));
};

export const handlerError = (err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.ENV === 'dev' ? err : {};

  res.status(err.status || 500);
  res.json({ message: err.message });
};
