import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
    selector: 'app-gallery-two-column-page',
    templateUrl: './gallery-two-column-page.component.html',
    styleUrls: ['./gallery-two-column-page.component.scss']
})
export class GalleryTwoColumnPageComponent implements OnInit {

    public _album: Array<any> = [];
    constructor(public _lightbox: Lightbox) {
        for (let i = 1; i <= 6; i++) {
            const src = 'assets/img/gallery/gallery-img' + i + '.jpg';
            const thumb = 'assets/img/gallery/gallery-img' + i + '.jpg';
            const album = {
                src: src,
                thumb: thumb
            };
            this._album.push(album);
        }
    }
    
    open(index: number): void {
        // open lightbox
        this._lightbox.open(this._album, index);
    }
    
    close(): void {
        // close lightbox programmatically
        this._lightbox.close();
    }

    ngOnInit(): void {
    }

}