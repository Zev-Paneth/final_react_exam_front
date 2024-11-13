import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  const isActivityPresent = activities.includes(activity);
  const isRolePresent = roles.includes(role);

  const activityPosition = activities.indexOf(activity);
  const rolePosition = roles.indexOf(role);

  return isActivityPresent && isRolePresent && rolePosition >= activityPosition;
};


export default useIsVerified;
