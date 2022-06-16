export interface Product {
    id: number;
    title: string;
    currencyType: string;
    oldPrice: number;
    currentPrice: number;
    shortDesc: string;
    sku: string;
    vendor: string;
    inStock: boolean;
    LongDesc: string;
    addInfo: string;
    frontImg: {
        url: string;
    };
    detailsImg: {
        url: string;
    };
    slug: string;
    reviews: string;
    category: string;
    onSell: boolean;
    outOfStock: boolean;
    hot: boolean;
    quantity: number;
}