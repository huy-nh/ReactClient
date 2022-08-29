export default class StorageManager {
  static AuthContextKey: string = 'AuthContext';

  static getOrAdd(key: string, data?: any) {
    const cachedData = localStorage.getItem(key);

    if (!cachedData) {
      const newData = typeof data === 'function' ? data() : data;
      localStorage.setItem(key, JSON.stringify(newData));

      return newData;
    }

    return JSON.parse(cachedData);
  }

  static get(key: string) {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : null;
  }

  static update(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static clear() {
    localStorage.clear();
  }

  static removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
