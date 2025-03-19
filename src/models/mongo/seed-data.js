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
      location: "123, 741",
      description: "Famous local pub",
      venueTypeid: "->venueType.pub"
    },
    theatre: {
      title: "Theatre",
      type: "Theatre",
      contact: 1234567890,
      location: "123, 741",
      description: "Famous local theatre",
      venueTypeid: "->venueType.theatre"
    },
    church: {
      title: "St. Mary's",
      type: "Catholic Church",
      contact: 1234567890,
      location: "123, 741",
      description: "Famous local church",
      venueTypeid: "->venueType.church"
    },
  }
};

  