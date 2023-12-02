import { Apollo, ApolloBase, gql } from "apollo-angular";
import { QlSelectionSet, QlSelectionSetTyped } from "../../../graphql-helpers";
import * as graphqlHelpers from '../../../graphql-helpers/graphql-helper';

export abstract class BaseQlService {
    protected moutainTrackerApi: ApolloBase;
    protected queryObj: string = "";
    constructor(protected apolloProvider: Apollo) {
      this.moutainTrackerApi = this.apolloProvider.use("MountainTracker");
     }

   protected generateQuery<
   T extends {
     new (): any;
   }
   >(classToGet: T, query:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, any>, queryVar: string = "", queryParam: string = "")
   {
    const qlQuery = `query${queryVar}
    {
      ${this.queryObj}
      {
        ${query}${queryParam}
        {
          ${graphqlHelpers.selectToQlFields(selection) ?? graphqlHelpers.ensureQlFields(classToGet.prototype.constructor)}
        }
      }
    }`
    return gql`${qlQuery}`
   }
  }