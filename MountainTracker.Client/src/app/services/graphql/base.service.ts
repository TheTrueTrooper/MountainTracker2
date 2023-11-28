import { Apollo, ApolloBase } from "apollo-angular";
import { ClientConfig } from "../../configuration";

export abstract class BaseService {
    protected moutainTrackerApi: ApolloBase;
    constructor(protected readonly clientConfig: ClientConfig,
                protected apolloProvider: Apollo) {
      this.moutainTrackerApi = this.apolloProvider.use("MountainTracker");
     }
  }