import { createContext, useContext, useState } from "react";
import { SITE } from "../config.js";

// DEMO ONLY: accounts are stored in this browser (localStorage), not on a server.
// This is fine for a portfolio/demo project but is not real security.
const AuthContext = createContext(null);
const USERS_KEY = `${SITE.storageKey}-users`;
const SESSION_KEY = `${SITE.storageKey}-session`;

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

// Don't keep the plain password in storage.
async function hash(text) {
  if (window.crypto?.subtle) {
    const buf = await window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }
  return btoa(unescape(encodeURIComponent(text)));
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => read(SESSION_KEY, null));

  const startSession = (u) => {
    const session = { name: u.name, email: u.email };
    write(SESSION_KEY, session);
    setUser(session);
  };

  // Each returns { ok: true } or { ok: false, error }
  const signup = async ({ name, email, password }) => {
    const users = read(USERS_KEY, []);
    const mail = email.trim().toLowerCase();
    if (users.some((u) => u.email === mail)) {
      return { ok: false, error: "An account with this email already exists. Please log in." };
    }
    const account = { name: name.trim(), email: mail, passwordHash: await hash(password) };
    if (!write(USERS_KEY, [...users, account])) {
      return { ok: false, error: "Could not save your account in this browser." };
    }
    startSession(account);
    return { ok: true };
  };

  const login = async ({ email, password }) => {
    const users = read(USERS_KEY, []);
    const mail = email.trim().toLowerCase();
    const account = users.find((u) => u.email === mail);
    if (!account || account.passwordHash !== (await hash(password))) {
      return { ok: false, error: "Wrong email or password." };
    }
    startSession(account);
    return { ok: true };
  };

  const logout = () => {
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch {
      /* ignore */
    }
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, signup, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
