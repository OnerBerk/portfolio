import Box from "@mui/material/Box";
import "./page-layout.scss";

import {ReactNode} from "react";
const PageLayout = ({children}: {children: ReactNode}) => (
  <Box width='100%' className="page-layout-main">{children}</Box>
);
export default PageLayout;
