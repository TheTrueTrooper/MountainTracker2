import { ClientConfig } from "./client-config"

declare global {
    interface Window { 
        clientConfig: ClientConfig
    }
  }


export const ClientConfigFactory = function()
{ 
    return {...globalThis.window.clientConfig} as ClientConfig
}