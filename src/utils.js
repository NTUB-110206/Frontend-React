// 將 UserName 存到 sessionStorage
export const setUserName = (username) => {
  sessionStorage.setItem("umbrellaNumber", username);
};

// 從 sessionStorage 讀取 UserName
export const getUserName = () => {
  return sessionStorage.getItem("umbrellaNumber");
};
// 將 AuthLevel 存到 sessionStorage
export const setAuthLevel = (level) => {
  sessionStorage.setItem("au", level);
};

// 從 sessionStorage 讀取 AuthLevel
export const getAuthLevel = () => {
  return sessionStorage.getItem("au");
};
// 將 token 存到 sessionStorage
export const setAuthToken = (token) => {
  sessionStorage.setItem("token", token);
};

// 從 sessionStorage 讀取 token
export const getAuthToken = () => {
  return sessionStorage.getItem("token");
};
// 將 ExpireTime 存到 sessionStorage
export const setExpireTime = (min) => {
  sessionStorage.setItem("et", Date.parse(new Date()) + 1000 * 60 * min);
};

// 從 sessionStorage 讀取 ExpireTime
export const getExpireTime = () => {
  return sessionStorage.getItem("et");
};

// 將 CameraList 存到 sessionStorage
export const setCameraList = (list) => {
  sessionStorage.setItem("CameraList", list);
};
// 從 sessionStorage 讀取 CameraList
export const getCameraList = () => {
  return sessionStorage.getItem("CameraList");
};

// 將 FactoryList 存到 sessionStorage
export const setFactoryList = (list) => {
  sessionStorage.setItem("FactoryList", list);
};
// 從 sessionStorage 讀取 FactoryList
export const getFactoryList = () => {
  return sessionStorage.getItem("FactoryList");
};

// 將 AreaList 存到 sessionStorage
export const setAreaList = (list) => {
  sessionStorage.setItem("AreaList", list);
};
// 從 sessionStorage 讀取 AreaList
export const getAreaList = () => {
  return sessionStorage.getItem("AreaList");
};
// 將 NVRList 存到 sessionStorage
export const setNVRList = (list) => {
  sessionStorage.setItem("NVRList", list);
};
// 從 sessionStorage 讀取 NVRList
export const getNVRList = () => {
  return sessionStorage.getItem("NVRList");
};
export const cleanAllSession = () => {
  setUserName("");
  setAuthToken("");
  setCameraList("");
  setFactoryList("");
  setAreaList("");
  setNVRList("");
}

export const SignOUT = () => {
  // cleanAllSession();
  // alert("請重新登入");
  // window.location.reload();
}