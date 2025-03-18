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
  });

  test("delete a Venue Type", async () => {
  });

  test("create multiple Venue Types", async () => {
  });

  test("remove non-existant Venue Type", async () => {
  });
});
