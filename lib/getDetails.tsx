import { API_URL } from "@/constants";
import { ProfileDetails } from "@/types";

export default async function getProfileDetails(
  token: string | undefined
): Promise<ProfileDetails> {
  const headers: Record<string, string> = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(`${API_URL}/api/profile/`, {
    headers,
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch profile details");
  }

  return res.json();
}
