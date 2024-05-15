import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, computed, inject, signal } from '@angular/core';

export interface postData {
  UserId: Number;
  body: String;
  tittle: String;
  id: Number;
}

@Injectable({
  providedIn: 'root',
})
export class SharedserviceService {
  private readonly http = inject(HttpClient);
  public saveres = signal<{ fact: string; length: number }>({
    fact: '',
    length: 0,
  });
  public posts = signal<postData[]>([
    {
      UserId: 0,
      body: '',
      tittle: '',
      id: 0,
    },
  ]);
  public _postsValue = computed(() => {
    return this.posts().map((x:any) => {
      if (x.id == 1) {
        return x
      }
    }).filter(Boolean);
  });
  constructor() {}

  getChartDetails() {
    this.http.get('https://catfact.ninja/fact').subscribe((res: any) => {
      this.saveres.set(res);
    });
  }

  getPosts() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res: any) => {
        this.posts.set(res);
      });
  }
}
