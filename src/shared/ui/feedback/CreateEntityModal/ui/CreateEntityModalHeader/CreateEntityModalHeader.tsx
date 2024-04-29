import { RequestTypeDropDown } from '../RequestTypeDropDown/RequestTypeDropDown';
import * as S from './CreateEntityModalHeader.styles';
import { CreateEntityModalHeaderProps } from './CreateEntityModalHeader.types';

export const CreateEntityModalHeader: React.FC<CreateEntityModalHeaderProps> = ({
  requestButtons,
  requestType,
  setRequestType,
}) => (
  <S.Root>
    <S.Title>Create item</S.Title>

    <S.RequestType>
      <S.InputLabelText>Request type:</S.InputLabelText>

      <RequestTypeDropDown
        requestButtons={requestButtons}
        requestType={requestType}
        setRequestType={setRequestType}
      />
    </S.RequestType>
  </S.Root>
);
