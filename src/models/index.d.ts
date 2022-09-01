import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PlacesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StationsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Places {
  readonly id: string;
  readonly model?: string;
  readonly price?: number;
  readonly isAvailable?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Places, PlacesMetaData>);
  static copyOf(source: Places, mutator: (draft: MutableModel<Places, PlacesMetaData>) => MutableModel<Places, PlacesMetaData> | void): Places;
}

export declare class Stations {
  readonly id: string;
  readonly name?: string;
  readonly address?: string;
  readonly latitude?: number;
  readonly longitude?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Stations, StationsMetaData>);
  static copyOf(source: Stations, mutator: (draft: MutableModel<Stations, StationsMetaData>) => MutableModel<Stations, StationsMetaData> | void): Stations;
}

export declare class Users {
  readonly id: string;
  readonly email?: string;
  readonly bonuses?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}