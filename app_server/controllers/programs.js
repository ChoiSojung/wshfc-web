/* GET 'home' page */
const homelist = (req, res) => {
  res.render('programs-list', {
    title: 'Washington State Housing Finance Commission',
    pageHeader: {
        title: 'WSHFC',
        strapline: 'Opening doors to a better life'
    },

    sidebar: 'Making affordable homes and healthy communities a reality for everyone.',
    programs: [{
        name: '9% Housing Credit',
        address: '1000 Second Ave, Seattle, WA 98122',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '100m'
    },{
        name: '4% Housing Credit',
        address: '1000 Second Ave, Seattle, WA 98122',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '100m'
    },{
        name: 'Nonprofit Housing',
        address: '1000 Second Ave, Seattle, WA 98122',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '100m'
    }]
  });
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
