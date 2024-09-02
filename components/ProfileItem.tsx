import { profileItemData } from "@/types";

const ProfileItem = ({ data, title }: profileItemData): JSX.Element => {
  console.log({ data, title });
  return (
    <div className="w-2/5  my-1 border-b border-b-[#A2A1A81A] pb-3">
      <p className="font-light text-sm leading-5 text-[#A2A1A8]">{title}</p>
      <p className="font-light text-base leading-6 text-[#16151C] line-clamp-1">
        {data}
      </p>
    </div>
  );
};

export default ProfileItem;
