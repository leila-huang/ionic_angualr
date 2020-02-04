export interface Home {
    srcList: Array<string>;
    productList: Array<Product>;
}

export interface Product {
    yield: string;
    productId: string;
    productName: string;
}
