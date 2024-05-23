import { HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';

export const demoInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('inter',req)
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer-12477889`
    }
  });
  return next(authReq).pipe(
    map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // Modify the response body here
        const modifiedResponseBody = { ...event.body, additionalProperty: 'addedValue' }; // Example modification
        return event.clone({ body: modifiedResponseBody });
      }
      return event;
    })
  );
};
