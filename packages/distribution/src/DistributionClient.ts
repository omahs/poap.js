import { DropApiProvider } from '@poap-xyz/providers';
import { Drop } from './domain/Drop';
import { CreateDropsInput } from './types';

/**
 * Represents a client for working with POAP drops.
 *
 * @class DropsClient
 */
export class DistributionClient {
  /**
   * Creates a new DropsClient object.
   *
   * @constructor
   * @param {DropApiProvider} DropApiProvider - The provider for the POAP drop API.
   */
  constructor(private DropApiProvider: DropApiProvider) {}

  // async claim(input: CreateDropsInput): Promise<Drop> {
  //   const repsonse = await this.DropApiProvider.createDrop(input);
  //   console.log(repsonse);
  //   return this.formatDrop(repsonse);
  // }
}
