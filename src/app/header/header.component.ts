import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  collapseHeader$ = fromEvent(window, 'scroll', { passive: true })
  .pipe(
    startWith(false),
    map(e => window.scrollY >= 200),
    distinctUntilChanged()
  );

  constructor() { }

  ngOnInit(): void {
  }

}
