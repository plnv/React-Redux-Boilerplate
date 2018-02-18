import _ from 'lodash';

_.mixin({
  deeply: (map) => {
    return (obj, fn) => {
      return map(_.mapValues(obj, (v) => {
        return _.isPlainObject(v) ? _.deeply(map)(v, fn) : v;
      }), fn);
    };
  },
});

export const countNodes = (json) => {
  let nodes = 0;
  _.deeply(_.mapKeys)(json, function (val, key) {
    if (_.isPlainObject(val)) {
      nodes += 1;
    }
  });
  return nodes;
};