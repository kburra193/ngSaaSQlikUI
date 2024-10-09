import { Injectable } from '@angular/core';
import { auth, spaces } from '@qlik/api';
import { HostConfig } from '@qlik/api/auth';

@Injectable({
  providedIn: 'root',
})
export class QlikApiService {
  qlikConfig: HostConfig = {
    authType: 'oauth2', // The type of authentication to use
    host: 'karthikburra93.us.qlikcloud.com', // The host of the Qlik cloud tenant
    clientId: '5b7dfa0121e8ef0e3a5b17c50e41c23b', // The client ID for OAuth2 authentication
    redirectUri: 'https://localhost:4200/assets/oauth-redirect.html', // The redirect URI after successful authentication
    accessTokenStorage: 'session', // Where to store the access token
  };
  constructor() {
    this.initQlik();
  }
  private initQlik(): void {
    auth.setDefaultHostConfig(this.qlikConfig);
  }

  async getSpaces() {
    try {
      const { data: mySpaces } = await spaces.getSpaces({});
      return mySpaces;
    } catch (error) {
      console.error('Error fetching spaces:', error);
      throw error;
    }
  }
}
