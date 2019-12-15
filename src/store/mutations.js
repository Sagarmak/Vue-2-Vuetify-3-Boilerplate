import * as MT from "./mutationTypes";

export default {
  [MT.SET_EXAMPLE_GETTERS]: (state, data) => (state.exampleGetters = data)
};
