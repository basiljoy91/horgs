import { normalizeRuntimeStorage } from "./app/runtime-shims";

export async function register() {
  normalizeRuntimeStorage();
}
