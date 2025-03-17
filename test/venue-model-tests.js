import { assert } from "chai";
import { db } from "../src/models/db.js";
import { testVenueTypes, testVenues, theatre, pub, sadies, testUsers } from "./fixtures.js";
import { assertSubset } from "./test-utils.js";

suite("Venue Model tests", () => {

  let theatreList = null;

  setup(async () => {
    db.init("mongo");
    await db.venueTypeStore.deleteAllVenueTypes();
    await db.venueStore.deleteAllVenues();
    theatreList = await db.venueTypeStore.addVenueType(theatre);
    for (let i = 0; i < testVenues.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testVenues[i] = await db.venueStore.addVenue(theatreList._id, testVenues[i]);
    }
  });

  test("create single venue", async () => {
    const pubList = await db.venueTypeStore.addVenueType(pub);
    const venue = await db.venueStore.addVenue(pubList._id, sadies);
    assert.isNotNull(venue._id);
    assertSubset (sadies, venue);
  });

  test("get multiple venues", async () => {
    const venues = await db.venueStore.getVenuesByVenueTypeId(theatreList._id);
    assert.equal(venues.length, testVenues.length)
  });

//   test("create multiple venuesApi", async () => {
//     const venues = await db.venuTypeStore.getVenueTypeById(theatreList._id);
//     assert.equal(testVenues.length, testVenues.length);
//   });

  test("delete all venues", async () => {
    const venues = await db.venueStore.getAllVenues();
    assert.equal(testVenues.length, venues.length);
    await db.venueStore.deleteAllVenues();
    const newVenues = await db.venueStore.getAllVenues();
    assert.equal(0, newVenues.length);
  });

  test("get a venue - success", async () => {
    const pubList = await db.venueTypeStore.addVenueType(pub);
    const venue = await db.venueStore.addVenue(pubList._id, sadies)
    const newVenue = await db.venueStore.getVenueById(venue._id);
    assertSubset (sadies, newVenue);
  });

  test("delete One venue - success", async () => {
    await db.venueStore.deleteVenue(testVenues[0]._id);
    const venues = await db.venueStore.getAllVenues();
    assert.equal(venues.length, testVenueTypes.length - 1);
    const deletedVenue = await db.venueStore.getVenueById(testVenues[0]._id);
    assert.isNull(deletedVenue);
  });

  test("get a venue - bad params", async () => {
    assert.isNull(await db.venueStore.getVenueById(""));
    assert.isNull(await db.venueStore.getVenueById());
  });

  test("delete one venue - fail", async () => {
    await db.venueStore.deleteVenue("bad-id");
    const venues = await db.venueStore.getAllVenues();
    assert.equal(venues.length, testVenueTypes.length);
  });
});
