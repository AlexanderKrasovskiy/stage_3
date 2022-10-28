import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_KEY = 'key=AIzaSyCfrsMMh1eYeg9x-s39Sk9mlZoYhkQNMLk';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const [route, params] = req.url.split('?');
    const newUrl = `${route}?${API_KEY}&${params}`;

    return next.handle(
      req.clone({
        url: newUrl,
      }),
    );
  }
}
