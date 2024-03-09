export interface AddService {
    id: string;
    svg: string;
    title: string;
    subTitle: string;
    active: boolean;
    steps : number
  }

  export const addProductTabData: AddService[] = [
    {
      id: "service-product-tab",
      svg: "product-detail",
      title: "Add Product Details",
      subTitle: "Add Product name & details",
      active: true,
      steps : 1
    },
    {
      id: "gallery-product-tab",
      svg: "product-detail",
      title: "Add Intends",
      subTitle: "Add Service Intends",
      active: false,
      steps : 2
    },
    {
      id: "pricings-tab",
      svg: "product-detail",
      title: "Add Parameter",
      subTitle: "Add Service parameter ",
      active: false,
      steps : 3
    }]