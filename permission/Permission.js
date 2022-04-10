function authRole(req, res, next) {
  const ass = req.body.assignee;
  const user = req.body.user;
  const owner = req.body.owner;
  if (owner === user || ass === user || ass === "") {
    return next();
  }
}

module.exports = { authRole };
