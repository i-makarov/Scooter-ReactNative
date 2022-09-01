/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBooked = /* GraphQL */ `
  subscription OnCreateBooked {
    onCreateBooked {
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
export const onUpdateBooked = /* GraphQL */ `
  subscription OnUpdateBooked {
    onUpdateBooked {
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
export const onDeleteBooked = /* GraphQL */ `
  subscription OnDeleteBooked {
    onDeleteBooked {
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
export const onCreateActivated = /* GraphQL */ `
  subscription OnCreateActivated {
    onCreateActivated {
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
export const onUpdateActivated = /* GraphQL */ `
  subscription OnUpdateActivated {
    onUpdateActivated {
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
export const onDeleteActivated = /* GraphQL */ `
  subscription OnDeleteActivated {
    onDeleteActivated {
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
export const onCreatePlaces = /* GraphQL */ `
  subscription OnCreatePlaces {
    onCreatePlaces {
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
export const onUpdatePlaces = /* GraphQL */ `
  subscription OnUpdatePlaces {
    onUpdatePlaces {
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
export const onDeletePlaces = /* GraphQL */ `
  subscription OnDeletePlaces {
    onDeletePlaces {
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
export const onCreateStations = /* GraphQL */ `
  subscription OnCreateStations {
    onCreateStations {
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
export const onUpdateStations = /* GraphQL */ `
  subscription OnUpdateStations {
    onUpdateStations {
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
export const onDeleteStations = /* GraphQL */ `
  subscription OnDeleteStations {
    onDeleteStations {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
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
