import { DetailsImg } from "./detailsImg";
import { FrontImg } from "./frontImg";
import { Review } from "./review";

export class Product {
    id!: number;
    title!: string;
    slug!: string;
    currencyType!: string;
    oldPrice!: number;
    currentPrice!: number;
    sku!: string;
    vendor!: string; 
    vendor_url!: string; 
    category!: string;
    category_url!: string;
    type!: string;
    type_url!: string;           
    shortDesc!: string;
    LongDesc!: string;
    quantity!: number; 
    inStock!: boolean; 
    outOfStock!: boolean; 
    onSell!: boolean;
    hot!: boolean;
    frontImg!: FrontImg;
    detailsImgs!: DetailsImg[];
    reviews!: Review[];
    updatedAt!: string;
}