import { Component, OnInit, AfterViewInit  } from '@angular/core';
import * as $ from 'jquery';

// declare var jquery:any;
// declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public ngOnInit() {
    $('.toggle-menu').click(function(){
        $('.menu-overlay').fadeIn();
        $('.menu').addClass('active');
        $('body').addClass('inactive');
    });

    $('.menu-overlay').click(function(){
        $(this).fadeOut();
        $('.menu').removeClass('active');
        $('body').removeClass('inactive');
    });
  }

  // ngAfterViewInit() {
  //   $('.toggle-menu').click(function(){
  //       $('.menu-overlay').fadeIn();
  //       $('.menu').addClass('active');
  //       $('body').addClass('inactive');
  //   });
  //
  //   $('.menu-overlay').click(function(){
  //       $(this).fadeOut();
  //       $('.menu').removeClass('active');
  //       $('body').removeClass('inactive');
  //   });
  // }
}
