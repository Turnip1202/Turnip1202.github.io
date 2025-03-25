//获取localstroage中的数据
export const getLocalStorageByKey = <T>(key: string) => {
  return JSON.parse(localStorage.getItem(key) || '[]') as T;
};

//设置localstroage中的数据
export const setLocalStorageByKey = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};