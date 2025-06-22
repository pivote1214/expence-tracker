import type { UserResponse } from "../types";

export async function getUsers(): Promise<UserResponse[]> {
  try {
    const apiUrl = "http://localhost:8000/api/users/";
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const users = await response.json();
    console.log("Users fetched:", users);
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
