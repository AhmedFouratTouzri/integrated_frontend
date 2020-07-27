export class Product {
    $key: string;
    productId: number;
    productName: string;
    productCategory: string;
    productPrice: number;
    productDescription: string;
    productImageUrl: string;
    productAdded: number;
    productQuatity: number;
    ratings: number;
    favourite: boolean;
    productSeller: string;


    constructor($key: string, productName: string, productPrice: number, productAdded: number, productQuatity: number) {
        this.$key = $key;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productAdded = productAdded;
        this.productQuatity = productQuatity;
    }
}
