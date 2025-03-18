import { assert } from "chai";
import { EventEmitter } from "events";
import { db } from "../../src/models/db.js";
import { testVenueTypes, pub } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

EventEmitter.setMaxListeners(25);

suite("Venue Type Model tests", () => {

  setup(async () => {
    db.init("mongo");
    await db.venueTypeStore.deleteAllVenueTypes();
    for (let i = 0; i < testVenueTypes.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testVenueTypes[i] = await db.venueTypeStore.addVenueType(testVenueTypes[i]);
    }
  });

  test("create a venue type", async () => {
    const venueType = await db.venueTypeStore.addVenueType(pub);
    assertSubset(pub, venueType);
    assert.isDefined(venueType._id);
  });

  test("delete all venue types", async () => {
    let returnedVenueTypes = await db.venueTypeStore.getAllVenueTypes();
    assert.equal(returnedVenueTypes.length, 3);
    await db.venueTypeStore.deleteAllVenueTypes();
    returnedVenueTypes = await db.venueTypeStore.getAllVenueTypes();
    assert.equal(returnedVenueTypes.length, 0);
  });

  test("get a venue type - success", async () => {
    const venueType = await db.venueTypeStore.addVenueType(pub);
    const returnedVenueType = await db.venueTypeStore.getVenueTypeById(venueType._id);
    assertSubset(pub, venueType);
  });

  test("delete One venue type - success", async () => {
    const id = testVenueTypes[0]._id;
    await db.venueTypeStore.deleteVenueTypeById(id);
    const returnedVenueTypes = await db.venueTypeStore.getAllVenueTypes();
    assert.equal(returnedVenueTypes.length, testVenueTypes.length - 1);
    const deletedVenueType = await db.venueTypeStore.getVenueTypeById(id);
    assert.isNull(deletedVenueType);
  });

  test("get a venue Type - bad params", async () => {
    assert.isNull(await db.venueTypeStore.getVenueTypeById(""));
    assert.isNull(await db.venueTypeStore.getVenueTypeById());
  });

  test("delete One Venue Type - fail", async () => {
    await db.venueTypeStore.deleteVenueTypeById("bad-id");
    const getAllVenueTypes = await db.venueTypeStore.getAllVenueTypes();
    assert.equal(testVenueTypes.length, getAllVenueTypes.length);
  });
});
