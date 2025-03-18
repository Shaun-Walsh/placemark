import { EventEmitter } from "events";
import { assert } from "chai";
import { placemarkService } from "./placemark-service.js";
import { assertSubset } from "../test-utils.js";
import { maggie, pub, testVenueTypes } from "../fixtures.js";

EventEmitter.setMaxListeners(25);

suite("Venue Type API tests", () => {

    let user = null;

    setup(async () => {
        await placemarkService.deleteAllVenueTypes();
        await placemarkService.deleteAllUsers();
        user = await placemarkService.createUser(maggie);
        pub.userid = user._id;
      });

  teardown(async () => {});

  test("create Venue Type", async () => {
    const returnedVenueType = await placemarkService.createVenueType(pub);
    assert.isNotNull(returnedVenueType);
    assertSubset(pub, returnedVenueType);
  });

  test("delete a Venue Type", async () => {
    const venueType = await placemarkService.createVenueType(pub);
    const response = await placemarkService.deleteVenueType(venueType._id);
    assert.equal(response.status, 204);
    try {
      const returnedVenueType = await placemarkService.getVenueType(venueType.id);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No Venue Type with this id", "Incorrect Response Message");
    }
  });

  test("create multiple Venue Types", async () => {
        for (let i = 0; i < testVenueTypes.length; i += 1) {
          testVenueTypes[i].userid = user._id;
          // eslint-disable-next-line no-await-in-loop
          await placemarkService.createVenueType(testVenueTypes[i]);
        }
        let returnedLists = await placemarkService.getAllVenueTypes();
        assert.equal(returnedLists.length, testVenueTypes.length);
        await placemarkService.deleteAllVenueTypes();
        returnedLists = await placemarkService.getAllVenueTypes();
        assert.equal(returnedLists.length, 0);
      });

  test("remove non-existant Venue Type", async () => {
    try {
      const response = await placemarkService.deleteVenueType("not an id");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No Venue Type with this id", "Incorrect Response Message");
    }
  });
});
