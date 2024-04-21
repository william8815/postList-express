const handleError = (res, err) => {
  let message = err.message ? err.message : "欄位未填寫正確或無此";
  res.status(400).send({
    status: false,
    message: message,
  });
  res.end();
};
module.exports = handleError;
