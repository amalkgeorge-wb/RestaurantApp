const DATA_ACTIONS = {
  SET_JSON: "SET_JSON",

  setJson: (data) => {
    return {
      type: DATA_ACTIONS.SET_JSON,
      data
    };
  },
};
export default DATA_ACTIONS;
