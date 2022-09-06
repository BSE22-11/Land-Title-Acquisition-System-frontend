import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.findName(),
  nin: sample([
    'CF00000YHGV7823', 
    'CF0000FSYIV7323',
    'CJ000002SAG7279'
    ]),
  idn: sample([
    'UFS156', 
    'DUB250',
    'RG8266'
    ]),
  district: sample([
    'Kampala North', 
    'Wakiso',
    'Lira'
    ]),
  role: sample([
    'Area Land Committe',
    'District Land Board',
    'District Land Officer',
    'Land Registrar',
    'Ministry Zonal Office',
  ]),
}));

export default users;
