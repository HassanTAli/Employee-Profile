import Profile from "@/components/Profile";
import getProfileDetails from "@/lib/getDetails";
import { cookies } from "next/headers";

const page = async () => {
  const cookieStore = cookies();
  const dataCookie = cookieStore.get("access_token");
  const token = dataCookie?.value;

  try {
    const detailsData = await getProfileDetails(token);

    return (
      <main className="w-3/4 my-4 mr-16 ml-4">
        <Profile data={detailsData} />
      </main>
    );
  } catch (error) {
    // Handle error case
    return (
      <main className="w-3/4 my-4 mr-16 ml-4 flex justify-center items-center">
        <p className="text-red-500">Failed to load profile details.</p>
      </main>
    );
  }
};

export default page;
