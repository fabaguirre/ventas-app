import { Component, OnInit } from '@angular/core';
import { TokenService } from '../security/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged = false;
  roles: string[];
  isAdmin = false;

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;

      this.roles = this.tokenService.getAuthorities();
      this.roles.forEach(rol => {
        if(rol === 'ROLE_ADMIN'){
          this.isAdmin = true;
        }
      });
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}
