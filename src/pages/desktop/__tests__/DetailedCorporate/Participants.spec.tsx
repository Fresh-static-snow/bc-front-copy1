import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { Participants } from '../../ui/DetailedCorporate/ui/MainContent/ui/Participants/Participants';

describe('pages/desktop/DetailedCorporate/Participants', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render Participants', () => {
    const oneParticipant = {
      avatar: { url: '' },
      display_name: 'Lorem',
      first_name: '',
      id: 1,
      last_name: '',
      nick: '',
    };

    const { getByText } = render(
      <TestProvider>
        <Participants mainParticipant={[oneParticipant]} participants={[oneParticipant]} />
      </TestProvider>,
    );

    expect(getByText('Participants')).toBeVisible();
  });
});
