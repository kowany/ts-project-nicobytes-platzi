import _ from 'lodash';

const data = [
  {
    username: 'kowany',
    role: 'admin'
  },
  {
    username: 'rosy',
    role: 'seller'
  },
  {
    username: 'vanessa',
    role: 'seller'
  },
  {
    username: 'jorgito',
    role: 'customer'
  }
];

const byRole = _.groupBy(data, (item) => item.role);
console.log(byRole);
