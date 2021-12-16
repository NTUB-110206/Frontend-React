// 將 News 存到 localStorage
export const setNews = (News) => {
    localStorage.setItem("News", News);
};

// 從 localStorage 讀取 News
export const getNews = () => {
    return localStorage.getItem("News");
};



export const clear = () => localStorage.clear();

export const arrUnique = (arr, key) => {
    const result = arr.filter((thing, index, self) =>
        index === self.findIndex((t) => (
            t[key] === thing[key]
        ))
    )
    return result
};
