import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes("riotgames")) {
      const modifiedReq = req.clone({
        headers: req.headers
          .set('X-Riot-Token', environment.lolApiKey)
          .set('Content-Type', 'application/json'),
      });
      console.log("jo")
      return next.handle(modifiedReq);
    }
    else
      return next.handle(req);

  
  }
}
