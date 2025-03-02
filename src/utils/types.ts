export interface Product_Type {
  size: string | "";
  type: string;
  description: string;
  name: string;
  image: string;
  _id?: string;
}
export interface updateProductParamsTypes {
  data: Product_Type;
  id: string;
}
