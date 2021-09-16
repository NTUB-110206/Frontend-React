import { getAuthToken, SignOUT } from 'src/utils'
import axios from 'axios'
const token = getAuthToken()
const f_SERVERURL = process.env.REACT_APP_MIDDLEWARE_SERVER
const b_SERVERURL = process.env.REACT_APP_PERMISSIONS_SERVER
const BackendURL = process.env.Backend_SERVER
export const handle_Error = (error) => {
    console.log(error)
    if (error.response) {
        // Request made and server responded
        console.log("response");
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        if (error.response.status == "401") SignOUT();
        return error.response
    } else if (error.request) {
        // The request was made but no response was received
        console.log("request");
        console.log(error.request);
        return error['status'] = 500
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error");
        console.log(error.message);
        return error['status'] = 500
    }
}

// export const fetchNews = async () => {
//     try {
//         let res = await axios.get(BackendURL + `/getheaders`, {
//             headers: {
//                 "content-type": "application/json",
//             }
//         })
//         return res
//     } catch (error) {
//         return handle_Error(error);
//     }
// };
// 登入
export const login = async (username, password) => {
    const form = {
        username,
        password,
    }
    try {
        let res = await axios.post(f_SERVERURL + `/login`, form, {
            headers: {
                "content-type": "application/json",
            }
        })
        return res
    } catch (error) {
        if (error.response && error.response.status == "401") error.response.status = 404
        return handle_Error(error)
    }
};

// 取得自己有權限的攝影機
export const fetchCameraList = async () => {
    try {
        let res = await axios.get(b_SERVERURL + `/user/me/camera/list`, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token,
            }
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};

// 取得使用者有權限的攝影機
export const UserCamera = async (user_id) => {
    try {
        let res = await axios.get(b_SERVERURL + `/user/` + user_id + `/camera/list`, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token,
            }
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};

// 取得截圖
export const Snapshot = (streamType, camerid, dateTime) => {
    let time = streamType === 'archive' ? "&time=" + dateTime : ""
    return fetch(f_SERVERURL + `/snapshot/` + streamType + `/` + camerid + `?token=` + token + time, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/png',
        },
    })
        .then((response) => response.blob())
        .then((blob) => blob);
}

// 取得有權限的User
export const fetchUserList = async () => {
    try {
        let res = await axios.get(b_SERVERURL + `/user/list`, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token,
                "Access-Control-Allow-Origin": "*/*"
            },
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};

export const createUser = async (display_name, user_name, user_pwd, auth_level, time_Limit, comment) => {
    const form = {
        "user_name": user_name,
        "display_name": display_name,
        "password": user_pwd,
        "auth_level": auth_level,
        "allow_access_min": time_Limit,
        "comment": comment,
        "enable": "t"
    }
    try {
        let res = await axios.post(b_SERVERURL + `/user`, form, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token,
            }
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};
// 取得User資訊
export const getUser = async (user_id) => {
    try {
        let res = await axios.get(b_SERVERURL + `/user/` + user_id, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token,
                "Access-Control-Allow-Origin": "*/*"
            }
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
}

export const updateUser = async (user_id, display_name, user_name, user_pwd, auth_level, time_Limit, comment) => {
    const form = {
        "user_name": user_name,
        "display_name": display_name,
        "auth_level": auth_level,
        "allow_access_min": time_Limit,
        "comment": comment
    }
    if (user_pwd != "") form['password'] = user_pwd;
    try {
        let res = await axios.put(b_SERVERURL + `/user/` + user_id, form, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token,
            }
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};
export const delUser = async (user_id) => {
    try {
        let res = await axios.delete(b_SERVERURL + `/user/` + user_id, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token,
            }
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};
/**
 * Nesl
 */

/**
 * 創建廠區
 * @param {*} factoryName 
 * @returns {JSON} { tag_id }
 */
export const createFactory = async (factoryName) => {
    const tag = {
        key: '廠區',
        value: factoryName,
    }
    try {
        let res = await axios.post(b_SERVERURL + `/tag`, tag, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token
            },
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};

/**
 * 查詢廠區清單
 * @returns {Array} { key, value, tag_id, order }
 */
export const getFactorys = async () => {
    try {
        let res = await axios.get(b_SERVERURL + `/tag/list?key=廠區`, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token
            },
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};

/**
 * 創建區域
 * @param {*} areaName 
 * @returns {JSON} { tag_id }
 */
export const createArea = async (areaName) => {
    const tag = {
        key: '區域',
        value: areaName,
    }
    try {
        let res = await axios.post(b_SERVERURL + `/tag`, tag, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token
            },
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};

/**
 * 查詢區域清單
 * @returns {Array} { key, value, tag_id, order }
 */
export const getAreas = async () => {
    try {
        let res = await axios.get(b_SERVERURL + `/tag/list?key=區域`, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token
            },
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};

/**
 * 修改 廠區及區域
 */
export const updateTags = async (tags) => {
    const form = { tags }
    try {
        let res = await axios.put(b_SERVERURL + `/tag/list`, form, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token,
            }
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};
/**
 * 查詢 NVR 清單
 * @returns {Array} { nvr_id, nav_name, nav_ip }
 */
export const getNvrs = async () => {
    try {
        let res = await axios.get(b_SERVERURL + `/nvr/list`, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token
            },
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};

/**
 * 新增 NVR 
 */
export const addNVR = async (nvr_ip, nvr_name, party) => {
    const form = { nvr_name, nvr_ip, party }
    try {
        let res = await axios.post(b_SERVERURL + `/nvr`, form, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token,
            }
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};
/**
 * 修改 NVR 
 */
export const updateNVR = async (nvr_id, nvr_ip, nvr_name, party) => {
    const form = { nvr_name, nvr_ip, party }
    try {
        let res = await axios.put(b_SERVERURL + `/nvr/` + nvr_id, form, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token,
            }
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};
/**
 * 刪除 NVR 
 */
export const delNVR = async (nvr_id) => {
    try {
        let res = await axios.delete(b_SERVERURL + `/nvr/` + nvr_id, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token,
            }
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};
/**
 * 查詢 Camera 
 */
export const getCamera = async (camera_id) => {
    try {
        let res = await axios.get(b_SERVERURL + `/camera/` + camera_id, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token
            }
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
}

/**
 * 修改 Camera 
 */
export const updateCamera = async (camera_id, camera_name, stream_source, camera_type, nvr_id) => {
    const form = {
        "camera_name": camera_name,
        "stream_source": stream_source,
        "camera_type": camera_type,
        // "nvr_id": nvr_id
    }
    try {
        let res = await axios.put(b_SERVERURL + `/camera/` + camera_id, form, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token,
            }
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};
/**
 * 刪除 Camera 
 */
export const delCamera = async (camera_id) => {
    try {
        let res = await axios.delete(b_SERVERURL + `/camera/` + camera_id, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token
            }
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
}
/**
 * 刪除 Cameras
 */
export const delCameraList = async (camera_ids) => {
    console.log({camera_ids})
    try {
        let res = await axios.delete(b_SERVERURL + `/camera/list`, {
            data: { camera_ids },
            headers: {
                "content-type": "application/json",
                "x-access-token": token
            }
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
}
/**
 * del Camera tag relation
 */
export const delTagRelation = async (camera_id, tag_ids) => {
    try {
        let res = await axios.delete(b_SERVERURL + `/camera/` + camera_id + "/tag/list", {
            data: { tag_ids },
            headers: {
                "content-type": "application/json",
                "x-access-token": token,
            }
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};
/**
 * add Camera tag relation
 */
export const addTagRelation = async (camera_id, tag_ids) => {
    const form = {
        "tag_ids": tag_ids
    }
    try {
        let res = await axios.post(b_SERVERURL + `/camera/` + camera_id + "/tag/list", form, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token,
            }
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};
/**
 * 創建相機
 * @param {*} nvr_id
 * @param {*} camera_name 
 * @param {*} stream_source 
 * @param {*} camera_type 
 * @param {*} order 
 * @returns {JSON} { camera_id }
 */
export const createCamera = async (nvr_id, camera_name, stream_source, camera_type, order) => {
    const camera = { nvr_id, camera_name, stream_source, camera_type, order }
    try {
        let res = await axios.post(b_SERVERURL + `/camera`, camera, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token
            },
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};

/**
 * 將相機加入區域或廠區
 * @param {*} camera_id
 */
export const addCameraTag = async (camera_id, tag_id) => {
    const tag = { tag_id }
    try {
        let res = await axios.post(b_SERVERURL + `/camera/${camera_id}/tag`, tag, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token
            },
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};

/**
 * 將相機加入 NVR
 * @param {*} camera_id
 */
export const addNvrCamera = async (camera_id, nvr_id) => {
    const camera = { camera_id }
    try {
        let res = await axios.post(b_SERVERURL + `/nvr/${nvr_id}/camera`, camera, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token
            },
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};


/**
 * 將相機加給User
 */
export const addUserCameras = async (user_id, camerasForm) => {
    // variable naming BY nesl & kkkevin
    try {
        let res = await axios.post(b_SERVERURL + `/user/` + user_id + `/camera/list`, { permissions: camerasForm }, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token
            },
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};

/**
 * 將User有的Camera更新操作權限
 */
export const updateUserCameras = async (user_id, camerasForm) => {
    try {
        let res = await axios.put(b_SERVERURL + `/user/` + user_id + `/camera/list`, { permissions: camerasForm }, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token
            },
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};

/**
 * 將User有的Camera刪除
 */
export const delUserCameras = async (user_id, delCamera_ids) => {
    try {
        let res = await axios.delete(b_SERVERURL + `/user/` + user_id + `/camera/list`, {
            data: { camera_ids: delCamera_ids },
            headers: {
                "content-type": "application/json",
                "x-access-token": token
            }
        })

        return res
    } catch (error) {
        return handle_Error(error);
    }
};


export const fetchArchiveList = async (camera_id) => {
    return await axios.get(f_SERVERURL + `/export/${camera_id}/list`, {
        headers: {
            "content-type": "application/json",
            "x-access-token": token
        }
    })
}

/**
 * 手動匯入Camera
 */
export const ImportCamera = async () => {
    try {
        let res = await axios.post(b_SERVERURL + `/action/import_cameras`, {
            headers: {
                "content-type": "application/json",
                "x-access-token": token
            },
        })
        return res
    } catch (error) {
        return handle_Error(error);
    }
};