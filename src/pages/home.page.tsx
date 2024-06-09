import PageLayout from "../components/layout/page-layout/page-layout";
import {defineMessages, useIntl} from "react-intl";

const messages = defineMessages({
  hello_world: {
    id: "hello_world",
    defaultMessage: "Hello world!",
  },
});
const HomePage = () => {
  const intl = useIntl();
  return <PageLayout>{intl.formatMessage(messages.hello_world)}</PageLayout>;
};
export default HomePage;
