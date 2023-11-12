import "./page-layout.scss";
import {ReactNode} from "react";
const PageLayout = ({children}: {children: ReactNode}) => (
  <div className="page-layout-main">{children}</div>
);
export default PageLayout;
