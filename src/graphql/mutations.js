/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBooked = /* GraphQL */ `
  mutation CreateBooked(
    $input: CreateBookedInput!
    $condition: ModelBookedConditionInput
  ) {
    createBooked(input: $input, condition: $condition) {
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
export const updateBooked = /* GraphQL */ `
  mutation UpdateBooked(
    $input: UpdateBookedInput!
    $condition: ModelBookedConditionInput
  ) {
    updateBooked(input: $input, condition: $condition) {
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
export const deleteBooked = /* GraphQL */ `
  mutation DeleteBooked(
    $input: DeleteBookedInput!
    $condition: ModelBookedConditionInput
  ) {
    deleteBooked(input: $input, condition: $condition) {
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
export const createActivated = /* GraphQL */ `
  mutation CreateActivated(
    $input: CreateActivatedInput!
    $condition: ModelActivatedConditionInput
  ) {
    createActivated(input: $input, condition: $condition) {
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
export const updateActivated = /* GraphQL */ `
  mutation UpdateActivated(
    $input: UpdateActivatedInput!
    $condition: ModelActivatedConditionInput
  ) {
    updateActivated(input: $input, condition: $condition) {
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
export const deleteActivated = /* GraphQL */ `
  mutation DeleteActivated(
    $input: DeleteActivatedInput!
    $condition: ModelActivatedConditionInput
  ) {
    deleteActivated(input: $input, condition: $condition) {
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
export const createPlaces = /* GraphQL */ `
  mutation CreatePlaces(
    $input: CreatePlacesInput!
    $condition: ModelPlacesConditionInput
  ) {
    createPlaces(input: $input, condition: $condition) {
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
export const updatePlaces = /* GraphQL */ `
  mutation UpdatePlaces(
    $input: UpdatePlacesInput!
    $condition: ModelPlacesConditionInput
  ) {
    updatePlaces(input: $input, condition: $condition) {
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
export const deletePlaces = /* GraphQL */ `
  mutation DeletePlaces(
    $input: DeletePlacesInput!
    $condition: ModelPlacesConditionInput
  ) {
    deletePlaces(input: $input, condition: $condition) {
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
export const createStations = /* GraphQL */ `
  mutation CreateStations(
    $input: CreateStationsInput!
    $condition: ModelStationsConditionInput
  ) {
    createStations(input: $input, condition: $condition) {
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
export const updateStations = /* GraphQL */ `
  mutation UpdateStations(
    $input: UpdateStationsInput!
    $condition: ModelStationsConditionInput
  ) {
    updateStations(input: $input, condition: $condition) {
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
export const deleteStations = /* GraphQL */ `
  mutation DeleteStations(
    $input: DeleteStationsInput!
    $condition: ModelStationsConditionInput
  ) {
    deleteStations(input: $input, condition: $condition) {
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
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
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
