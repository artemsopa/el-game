import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
    selector: 'app-gallery-four-column-page',
    templateUrl: './gallery-four-column-page.component.html',
    styleUrls: ['./gallery-four-column-page.component.scss']
})
export class GalleryFourColumnPageComponent implements OnInit {

    public _album: Array<any> = [];
    constructor(public _lightbox: Lightbox) {
        for (let i = 1; i <= 8; i++) {
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