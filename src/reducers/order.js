const instialState = {
  city: "",
  numOfDays: "",
  hotel: "",
  destination: "",
  touristGuide: "",
  flight: "",
  transportation: "",
};

const setOrder = (state = instialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SETHOTEL":
      const { hotel } = payload;
      return { ...state, hotel };
    case "SETCITY":
      const { city } = payload;
      return { ...state, city };
    case "SETNUMOFDAYS":
      const { numOfDays } = payload;
      return { ...state, numOfDays };
    case "SETDESTINATION":
      const { destination } = payload;
      return { ...state, destination };
    case "SETTOUISTGUIDE":
      const { touristGuide } = payload;
      return { ...state, touristGuide };
    case "SETFLIGHT":
      const { flight } = payload;
      return { ...state, flight };
    case "SETTRANSPORTATION":
      const { transportation } = payload;
      return { ...state, transportation };

    default:
      return state;
  }
};

export default setOrder;

export const cityRedux = (data) => {
  return {
    type: "SETCITY",
    payload: data,
  };
};
export const numOfDaysRedux = (data) => {
  return {
    type: "SETNUMOFDAYS",
    payload: data,
  };
};

export const hotelRedux = (data) => {
  return {
    type: "SETHOTEL",
    payload: data,
  };
};

export const transportationRedux = (data) => {
  return {
    type: "SETTRANSPORTATION",
    payload: data,
  };
};

export const flightRedux = (data) => {
  return {
    type: "SETFLIGHT",
    payload: data,
  };
};

export const touristGuideRedux = (data) => {
  return {
    type: "SETTOUISTGUIDE",
    payload: data,
  };
};
export const destinationRedux = (data) => {
  return {
    type: "SETDESTINATION",
    payload: data,
  };
};
