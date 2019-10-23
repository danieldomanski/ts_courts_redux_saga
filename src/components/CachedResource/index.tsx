export default class CachedResource<T> {
  public isResourceCached(type: string) {
    const items = localStorage.getItem(type);
    if (!items) return false;

    return JSON.parse(items).length !== 0;
  }

  public saveToCache(type: string, data: T[]) {
    localStorage.setItem(type, JSON.stringify(data));
  }

  public feedStoreFromCache(type: string, feed: (data: T[]) => void) {
    const resource = localStorage.getItem(type);

    if (resource) {
      const items = JSON.parse(resource);
      feed(items);
    }
  }
}
