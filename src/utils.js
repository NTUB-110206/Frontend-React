// 將 News 存到 localStorage
export const setNews = (News) => {
    localStorage.setItem("News", News);
};

// 從 localStorage 讀取 News
export const getNews = () => {
    return localStorage.getItem("News");
};

export const clear = () => localStorage.clear();