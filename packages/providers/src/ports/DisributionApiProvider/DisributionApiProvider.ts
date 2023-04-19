import { CreateDropInput, DropResponse, UpdateDropInput } from './Types';

export interface DisributionApiProvider {
  mintLinkStatus(input: CreateDropInput): Promise<DropResponse>;
  claimMintLink(input: UpdateDropInput): Promise<DropResponse>;
}
