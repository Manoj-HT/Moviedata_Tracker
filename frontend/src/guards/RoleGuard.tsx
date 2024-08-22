import { InaccessibleRoute } from "../pages/InaccessibleRoute";
import { ChildrenTypeProps } from "../types/types";

export const AdminGuard = (adminProps: ChildrenTypeProps) => {
  const role = localStorage.getItem("role");
  const { children } = adminProps;
  return role == "admin" ? children : <InaccessibleRoute type="Admin" />;
};
export const ReviewerGuard = (reviewerProps: ChildrenTypeProps) => {
  const role = localStorage.getItem("role");
  const { children } = reviewerProps;
  return role == "reviewer" ? children : <InaccessibleRoute type="Reviewer" />;
};
export const ContributorGuard = (contributorProps: ChildrenTypeProps) => {
  const role = localStorage.getItem("role");
  const { children } = contributorProps;
  return role == "contributor" ? children : <InaccessibleRoute type="Contributor" />;
};
