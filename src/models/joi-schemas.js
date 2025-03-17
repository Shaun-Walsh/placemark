import Joi from "joi";

export const UserSpec = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const UserCredentialsSpec = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const venueTypeSpec = {
  title: Joi.string().required(),
};

export const venueSpec = {
  title: Joi.string().required(),
  type: Joi.string().required(),
  contact: Joi.number().required(),
  location: Joi.string().required(),
  description: Joi.string().required(),
};