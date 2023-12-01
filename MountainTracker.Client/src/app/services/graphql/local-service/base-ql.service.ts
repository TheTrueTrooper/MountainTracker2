import { Apollo, ApolloBase, gql } from "apollo-angular";
import { ClientConfig } from "../../../configuration";
import { QlSelectionSet, QlSelectionSetTyped } from "../../../graphql-helpers";
import * as graphqlHelpers from '../../../graphql-helpers/graphql-helper';

export abstract class BaseQlService {
    protected moutainTrackerApi: ApolloBase;
    protected queryObj: string = "";
    constructor(protected readonly clientConfig: ClientConfig,
                protected apolloProvider: Apollo) {
      this.moutainTrackerApi = this.apolloProvider.use("MountainTracker");
     }

   protected generateQuery<
   T extends {
     new (): any;
   }
   >(classToGet: T, query:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, any>, queryParam: string = "")
   {
    return gql`
    query${queryParam}
    {
      ${this.queryObj}
      {
        ${query}
        {
          ${graphqlHelpers.selectToQlFields(selection) ?? graphqlHelpers.ensureQlFields(classToGet.prototype.constructor)}
        }
      }
    }
    `
   }
  }