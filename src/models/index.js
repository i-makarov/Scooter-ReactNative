// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Places, Stations, Users } = initSchema(schema);

export {
  Places,
  Stations,
  Users
};