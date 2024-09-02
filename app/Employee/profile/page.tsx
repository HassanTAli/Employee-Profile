import Profile from "@/components/Profile";
import getProfileDetails from "@/lib/getDetails";
import { cookies } from "next/headers";

const page = async () => {
  const cookieStore = cookies();
  const dataCookie = cookieStore.get("access_token");
  const token = dataCookie?.value;

  const detailsData = getProfileDetails(token);
  const data = await detailsData;
  return (
    <main className="w-3/4 my-4 mr-16 ml-4">
      <Profile data={data} />
    </main>
  );
};

export default page;
