import { LandingConfig } from "./landing-config";

export class ClientConfig
{
    public BaseEndpoint: string = "";
    public GraphQlApiEndpoint: string | null = null;
    public GraphQlApiName: string | null = "MountainTracker";

    public LandingPage: LandingConfig | null = null;
}