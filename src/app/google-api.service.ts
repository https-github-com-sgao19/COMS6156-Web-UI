import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from "angular-oauth2-oidc";

const oAuthConfig: AuthConfig = {
  issuer: "https://accounts.google.com",
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: "879076271794-3rd1i9nkbhaa211brt0mlqsfrip7khb4.apps.googleusercontent.com",
  scope: "openid profile email",
  logoutUrl: "https://www.google.com/accounts/Logout"
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  constructor(private readonly oAuthService: OAuthService) {
    oAuthService.configure(oAuthConfig);
    oAuthService.loadDiscoveryDocument().then( () => {
      oAuthService.tryLoginImplicitFlow().then( () => {
        if (!oAuthService.hasValidAccessToken()) {
          oAuthService.initLoginFlow();
        } else {
          oAuthService.loadUserProfile().then( (userProfile) => {
            console.log(JSON.stringify(userProfile));
          });
        }
      });
    });
  }

  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  logOut() {
    this.oAuthService.logOut();
  }
}
