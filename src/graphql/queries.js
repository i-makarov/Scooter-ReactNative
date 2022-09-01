/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBooked = /* GraphQL */ `
  query GetBooked($id: ID!) {
    getBooked(id: $id) {
      id
      date_add
      Place {
        id
        model
        price
        isAvailable
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      User {
        id
        email
        bonuses
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      bookedPlaceId
      bookedUserId
    }
  }
`;
export const listBookeds = /* GraphQL */ `
  query ListBookeds(
    $filter: ModelBookedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date_add
        Place {
          id
          model
          price
          isAvailable
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        User {
          id
          email
          bonuses
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        bookedPlaceId
        bookedUserId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBookeds = /* GraphQL */ `
  query SyncBookeds(
    $filter: ModelBookedFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBookeds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date_add
        Place {
          id
          model
          price
          isAvailable
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        User {
          id
          email
          bonuses
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        bookedPlaceId
        bookedUserId
      }
      nextToken
      startedAt
    }
  }
`;
export const getActivated = /* GraphQL */ `
  query GetActivated($id: ID!) {
    getActivated(id: $id) {
      id
      Place {
        id
        model
        price
        isAvailable
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      User {
        id
        email
        bonuses
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      date_add
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      activatedPlaceId
      activatedUserId
    }
  }
`;
export const listActivateds = /* GraphQL */ `
  query ListActivateds(
    $filter: ModelActivatedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivateds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Place {
          id
          model
          price
          isAvailable
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        User {
          id
          email
          bonuses
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        date_add
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        activatedPlaceId
        activatedUserId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncActivateds = /* GraphQL */ `
  query SyncActivateds(
    $filter: ModelActivatedFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncActivateds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Place {
          id
          model
          price
          isAvailable
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        User {
          id
          email
          bonuses
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        date_add
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        activatedPlaceId
        activatedUserId
      }
      nextToken
      startedAt
    }
  }
`;
export const getPlaces = /* GraphQL */ `
  query GetPlaces($id: ID!) {
    getPlaces(id: $id) {
      id
      model
      price
      isAvailable
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPlaces = /* GraphQL */ `
  query ListPlaces(
    $filter: ModelPlacesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        model
        price
        isAvailable
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPlaces = /* GraphQL */ `
  query SyncPlaces(
    $filter: ModelPlacesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlaces(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        model
        price
        isAvailable
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getStations = /* GraphQL */ `
  query GetStations($id: ID!) {
    getStations(id: $id) {
      id
      name
      address
      latitude
      longitude
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listStations = /* GraphQL */ `
  query ListStations(
    $filter: ModelStationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        latitude
        longitude
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStations = /* GraphQL */ `
  query SyncStations(
    $filter: ModelStationsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        address
        latitude
        longitude
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      email
      bonuses
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        bonuses
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        bonuses
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
