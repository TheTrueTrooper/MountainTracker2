import { ClientConfig } from "./client-config"

declare global {
    interface Window { 
        clientConfig: ClientConfig
    }
  }

export interface Window { 
    clientConfig: ClientConfig
}