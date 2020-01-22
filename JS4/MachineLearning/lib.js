const groups = {
  MEAT: [],
  STORE: [],
  VEGGIE: [],
};

const data = lib.getDataFromExcel('./provision.xls');

data.forEach((e, i) => {
  if (e.length < 2 || !Number.isInteger(parseInt(e[0]))) {
    return lib.pushAll(groups, e);
  }
  let brainData = model.run(lib.tokenize(e[2]));
  const val = lib.getMostLikely(brainData);
  if (!val) {
    return lib.pushAll(groups, e);
  }
  if (!groups[val]) groups[val] = [];
  groups[val].push([...e]);
});

Object.entries(groups).forEach(arr => {
  lib.createExcel(arr[0], arr[1]);
});
