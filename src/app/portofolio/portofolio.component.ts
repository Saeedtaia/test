import { Component } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css'],
})
export class PortofolioComponent {
  // imgsrc: string = '';

  // getsrc(src: string): string {
  //   console.log(src);
  //   return src;
  // }
  // imagedata: string[] = [
  //   './assets/images/poert1.png',
  //   './assets/images/port2.png',
  //   './assets/images/port3.png',
  //   './assets/images/poert1.png',
  //   './assets/images/port2.png',
  //   './assets/images/port3.png',
  // ];
  // data: boolean = false;
  // imgappear(value: boolean): void {
  //   this.data = value;
  //   console.log(this.data);
  // }
  // src: string = '';

  imagedata: string[] = [
    './assets/images/poert1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
    './assets/images/poert1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
  ];
  selectedImage: string = '';
  selectImage(src: string) {
    this.selectedImage = src;
  }

  divClicked: boolean = true;

  toggleVisibility() {
    // If the inner div was clicked, do nothing
    if (this.divClicked) {
      this.divClicked = false;
      return;
    }

    // Toggle the visibility of the inner div
    this.divClicked = !this.divClicked;
  }

  onDivClick(event: MouseEvent) {
    // Set the flag to true when the inner div is clicked
    this.divClicked = true;
    event.stopPropagation();
  }
}
