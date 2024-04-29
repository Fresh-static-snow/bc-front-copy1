import { CounterCard, useGetDashboardCounts } from '@/entities/management';
import { SlicedContentLayout } from '@/shared/ui/layouts';

import { Notifications } from './ui/Notifications/Notifications';
import * as S from './UsersSubContentDashboard.styles';

const UsersSubContentDashboard: React.FC = () => {
  const { data: countersData, isLoading: isLoadingCounters } = useGetDashboardCounts();

  return (
    <>
      <SlicedContentLayout.Section
        width="608px"
        borderRight
        borderRightType="solid"
        scrollActive={false}
      >
        <Notifications />
      </SlicedContentLayout.Section>

      <SlicedContentLayout.Section width="340px" backgroundColor="transparent">
        <S.DashboardCounters>
          {countersData && !isLoadingCounters && (
            <CounterCard title="Total users" count={countersData?.users_count} />
          )}
        </S.DashboardCounters>
      </SlicedContentLayout.Section>
    </>
  );
};

export default UsersSubContentDashboard;
