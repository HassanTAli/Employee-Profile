import { ProfileDetails } from "@/types";
import ProfileItem from "./ProfileItem";

interface ProfileProps {
  data: ProfileDetails;
}

const PersonalInformation = ({ data }: ProfileProps): JSX.Element => {
  return (
    <div className="w-full flex flex-wrap gap-x-8 gap-y-2">
      <ProfileItem title="First Name" data={data.first_name || "Mariam"} />
      <ProfileItem title="First Name" data={data.last_name || "Aly"} />
      <ProfileItem
        title="Email Address"
        data={data.email || "mariam@gmail.com"}
      />
      <ProfileItem title="Mobile Number" data={data.phone || "010567240256"} />
      <ProfileItem title="Bio" data={data.bio} />
      <ProfileItem title="Marital Status" data={data.status || "Single"} />
      <ProfileItem title="Is Staff" data={data.is_staff ? "True" : "False"} />
      <ProfileItem title="Is Active" data={data.is_active ? "True" : "False"} />
      <ProfileItem
        title="Is Superstar"
        data={data.is_superuser ? "True" : "False"}
      />
      <ProfileItem title="Date Joined" data={data.date_joined.split("T")[0]} />
    </div>
  );
};

export default PersonalInformation;
