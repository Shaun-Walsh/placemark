import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
  firstName: Joi.string().example("Homer").required(),
  lastName: Joi.string().example("Simpson").required(),
}).label("UserDetails");

export const UserSpecPlus = UserSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserDetailsPlus");

export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");

export const VenueSpec = Joi.object()
  .keys({
    title: Joi.string().required().example("Sadies"),
    type: Joi.string().required().example("Public House"),
    contact: Joi.number().required().example(1234567890),
    location: Joi.string().required().example("127, 254"),
    description: Joi.string().required().example("A great place to get good music and drinks"),
    venuetypeid: IdSpec,
  })
  .label("Venue");

export const VenueSpecPlus = VenueSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("VenuePlus");

export const VenueArraySpec = Joi.array().items(VenueSpecPlus).label("VenueArray");

export const VenueTypeSpec = Joi.object()
  .keys({
    title: Joi.string().required().example("Public House"),
    userid: IdSpec,
    venues: VenueArraySpec,
  })
  .label("Venue Type");

export const VenueTypeSpecPlus = VenueTypeSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("VenueTypePlus");

export const VenueTypeArraySpec = Joi.array().items(VenueTypeSpecPlus).label("VenueTypeArray");

export const JwtAuth = Joi.object()
  .keys({
    success: Joi.boolean().example("true").required(),
    token: Joi.string().example("eyJhbGciOiJND.g5YmJisIjoiaGYwNTNjAOhE.gCWGmY5-YigQw0DCBo").required(),
  })
  .label("JwtAuth");

