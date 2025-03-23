export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret"
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret"
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret"
    }
  },
  venueTypes: {
    _model: "VenueType",
    pub: {
      title: "Public House",
      userid: "->users.bart"
    },
    theatre: {
      title: "Theatre",
      userid: "->users.homer"
    },
    church: {
      title: "Catholic Church",
      userid: "->users.marge"
    }
  },
  venues: {
    _model : "Venue",
    sadies: {
      title: "Sadies Bar",
      type: "Public House",
      contact: 1234567890,
      lat: 123.456,
      long: 123.456,
      description: "Famous local pub",
      venuetypeid: "->venueTypes.pub"
    },
    theatre: {
      title: "Theatre Royal",
      type: "Theatre",
      contact: 1234567890,
      lat: 123.456,
      long: 123.456,
      description: "Famous local theatre",
      venuetypeid: "->venueTypes.theatre"
    },
    church: {
      title: "St. Mary's",
      type: "Catholic Church",
      contact: 1234567890,
      lat: 123.456,
      long: 123.456,
      description: "Famous local church",
      venuetypeid: "->venueTypes.church"
    },
  }
};

  