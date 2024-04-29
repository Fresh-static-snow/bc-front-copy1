import { useParams } from 'react-router-dom';

import { UpdateUser } from '@/features/user';
import { SlicedContentLayout } from '@/shared/ui/layouts';

const UsersSubContentUser: React.FC = () => {
  const { userId } = useParams();

  return (
    <SlicedContentLayout.Section width="608px" borderRight>
      <UpdateUser userId={userId} deleteBackPath="/management/users" />
    </SlicedContentLayout.Section>
  );
};

export default UsersSubContentUser;
