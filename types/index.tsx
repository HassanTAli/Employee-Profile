type SubItemProps = {
  icon: string;
  label: string;
  href: string;
};

export type NavItemProps =
  | {
      label: string;
      icon: string;
      href: string;
      isNested: true;
      subItemProps: SubItemProps[];
    }
  | {
      label: string;
      icon: string;
      href: string;
      isNested: false;
      subItemProps?: never;
    };

export interface ProfileDetails {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  bio: string | null;
  is_superuser: boolean;
  is_staff: boolean;
  image: string;
  cover: string;
  message: string;
  status: number;
  is_active: boolean;
  date_joined: string;
}

export interface profileItemData {
  title: string;
  data: string | null | boolean | number;
}
