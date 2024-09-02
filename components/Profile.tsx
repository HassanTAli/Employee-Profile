import { ProfileDetails } from "@/types";
import IconComponent from "./Icon";
import Image from "next/image";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import PersonalInformation from "./PersonalInformation";
import EditDialog from "./EditDialog";

interface ProfileProps {
  data: ProfileDetails;
}

const Profile = ({ data }: ProfileProps): JSX.Element => {
  return (
    <div>
      <div className="flex items-center justify-end gap-[35px]">
        <div className="bg-[#A2A1A81A] rounded-sm p-3">
          <IconComponent icon="ph:bell-bold" height={24} width={24} />
        </div>
        <div>
          <Image
            width={60}
            height={60}
            alt="profile"
            src={data.cover}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="mx-auto w-[90%]">
        <div className="flex items-center mb-2 font-semibold text-base leading-5">
          <p>Employees</p>
          <div className="flex items-center mx-1">
            <IconComponent icon="tabler:chevron-right" />
          </div>
          <p>Profile</p>
        </div>
        <div className="pb-4 border-b border-[#A2A1A833]">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div>
                <Image
                  width={100}
                  height={100}
                  alt="profile"
                  src={data.cover}
                  className="rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-2xl leading-9">
                  {data.first_name || "Mariam"} {data.last_name || "Aly"}
                </h3>
                <div className="flex items-center gap-2">
                  <IconComponent icon="material-symbols:business-center-outline-rounded" />{" "}
                  <p className="font-light text-base leading-6">Job title</p>
                </div>
                <div className="flex items-center gap-2">
                  <IconComponent icon="uil:envelope" />
                  <p className="font-light text-base leading-6">
                    {data.email || "mariam@gmail.com"}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end justify-end">
              <EditDialog data={data} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-11/12 mt-6">
        <Tabs defaultValue="Personal Information" className="w-4/5">
          <TabsList>
            <TabsTrigger value="Personal Information" className="gap-2">
              <IconComponent icon="clarity:avatar-solid" />
              Personal Information
            </TabsTrigger>
            <TabsTrigger value="Professional Information" className="gap-2">
              <IconComponent icon="solar:case-outline" />
              Professional Information
            </TabsTrigger>
            <TabsTrigger value="Documents" className="gap-2">
              <IconComponent icon="quill:paper" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="Account Access" className="gap-2">
              <IconComponent icon="material-symbols:lock-outline" />
              Account Access
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Personal Information">
            <PersonalInformation data={data} />
          </TabsContent>
          <TabsContent value="Professional Information">
            Professional Information
          </TabsContent>
          <TabsContent value="Documents">Documents</TabsContent>
          <TabsContent value="Account Access">Account Access</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
