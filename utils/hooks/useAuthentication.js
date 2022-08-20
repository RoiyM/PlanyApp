import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();

export function useAuthentication() {
  const [user, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return { user };
}
