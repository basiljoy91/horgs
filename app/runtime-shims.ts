type StorageShape = {
  getItem?: (key: string) => string | null;
  setItem?: (key: string, value: string) => void;
  removeItem?: (key: string) => void;
  clear?: () => void;
  key?: (index: number) => string | null;
  length?: number;
};

function createMemoryStorage(): StorageShape {
  const memory = new Map<string, string>();
  const storage: StorageShape = {};

  storage.getItem = (key: string) => {
    return memory.has(key) ? memory.get(key)! : null;
  };

  storage.setItem = (key: string, value: string) => {
    memory.set(String(key), String(value));
    storage.length = memory.size;
  };

  storage.removeItem = (key: string) => {
    memory.delete(String(key));
    storage.length = memory.size;
  };

  storage.clear = () => {
    memory.clear();
    storage.length = 0;
  };

  storage.key = (index: number) => {
    return Array.from(memory.keys())[index] ?? null;
  };

  storage.length = memory.size;

  return storage;
}

export function normalizeRuntimeStorage() {
  if (typeof window !== "undefined") {
    return;
  }

  const globalScope = globalThis as typeof globalThis & {
    localStorage?: StorageShape;
    sessionStorage?: StorageShape;
  };

  const storages: Array<"localStorage" | "sessionStorage"> = [
    "localStorage",
    "sessionStorage",
  ];

  storages.forEach((name) => {
    const current = globalScope[name];

    if (!current || typeof current.getItem !== "function") {
      const storage = createMemoryStorage();

      Object.defineProperty(globalScope, name, {
        value: storage,
        writable: true,
        configurable: true,
      });
    }
  });
}

normalizeRuntimeStorage();
