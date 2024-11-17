import {Typography} from '@mui/material';
import PageLayout from '../../components/layout/page-layout/page-layout';
import {defineMessages, useIntl} from 'react-intl';

const messages = defineMessages({
  wip: {
    defaultMessage: 'Work in progress',
    id: 'projects.wip',
  },
});

const Projects = () => {
  const intl = useIntl();
  return (
    <PageLayout>
      <Typography>{intl.formatMessage(messages.wip)}</Typography>
    </PageLayout>
  );
};

export default Projects;
