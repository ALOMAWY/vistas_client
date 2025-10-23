export interface IProduct {
  size: string | "";
  type: string;
  description: string;
  name: string;
  image: string;
  _id?: string;
}
export interface updateProductParamsTypes {
  data: IProduct;
  id: string;
}
