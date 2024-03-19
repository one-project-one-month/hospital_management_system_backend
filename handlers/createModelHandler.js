import { toTitle } from "../utils/index.js";

export const createModelHandler = (body) => {
  const model = {};
  for (const key in body) {
    const element = body[key];
    if (Array.isArray(element)) {
      let newKey = toTitle(key);
      model[newKey] = { connect: [] };
      element.forEach((e) => {
        model[newKey]["connect"].push(createModelHandler(e));
      });
    } else {
      model[toTitle(key)] = element;
    }
  }
  console.log("Model ", model);
  return model;
};
