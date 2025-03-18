import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkService } from "./placemark-service.js";
import { maggie, pub, testVenueTypes, testVenues, sadies } from "../fixtures.js";

suite("Venue API tests", () => {
  let user = null;
  let theatreList = null;

  setup(async () => {
    await placemarkService.deleteAllVenueTypes();
    await placemarkService.deleteAllUsers();
    await placemarkService.deleteAllVenues();
    user = await placemarkService.createUser(maggie);
    pub.userid = user._id;
    theatreList = await placemarkService.createVenueType(pub);
  });

  teardown(async () => {});

  test("create venue", async () => {
    const returnedVenue = await placemarkService.createVenue(theatreList._id, sadies);
    assertSubset(sadies, returnedVenue);
  });

  test("create Multiple Venues", async () => {
    for (let i = 0; i < testVenues.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createVenue(theatreList._id, testVenues[i]);
    }
    const returnedVenues = await placemarkService.getAllVenues();
    assert.equal(returnedVenues.length, testVenues.length);
    for (let i = 0; i < returnedVenues.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const venue = await placemarkService.getVenue(returnedVenues[i]._id);
      assertSubset(venue, returnedVenues[i]);
    }
  });

  test("Delete VenueApi", async () => {
    for (let i = 0; i < testVenues.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createVenue(theatreList._id, testVenues[i]);
    }
    let returnedVenues = await placemarkService.getAllVenues();
    assert.equal(returnedVenues.length, testVenues.length);
    for (let i = 0; i < returnedVenues.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const track = await placemarkService.deleteVenue(returnedVenues[i]._id);
    }
    returnedVenues = await placemarkService.getAllVenues();
    assert.equal(returnedVenues.length, 0);
  });

  test("denormalised playlist", async () => {
    for (let i = 0; i < testVenues.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createVenue(theatreList._id, testVenues[i]);
    }
    const returnedVenueType = await placemarkService.getVenueType(theatreList._id);
    assert.equal(returnedVenueType.venues.length, testVenues.length);
    for (let i = 0; i < testVenues.length; i += 1) {
      assertSubset(testVenues[i], returnedVenueType.venues[i]);
    }
  });
});