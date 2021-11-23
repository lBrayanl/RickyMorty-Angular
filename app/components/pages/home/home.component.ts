import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('demoYouTubePlayer')
  demoYouTubePlayer!: ElementRef<HTMLDivElement>;
  videoWidth: number | undefined;
  videoHeight: number | undefined;
 
  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }
  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    this.videoWidth = Math.min(this.demoYouTubePlayer.nativeElement.clientWidth, 1200);
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  }
  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }
  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

}
