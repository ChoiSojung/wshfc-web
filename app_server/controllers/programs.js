/* GET 'home' page */
const homelist = (req, res) => {
  res.render('programs-list', {title: 'Home'});
};

/* GET 'program info' page */
const programInfo = (req, res) => {
  res.render('program-info', {title: 'Program info'});
};

/* GET 'add review' page */
const addReview = (req, res) => {
  res.render('program-review-form', {title: 'Add review'});
};

module.exports = {
  homelist,
  programInfo,
  addReview
};
