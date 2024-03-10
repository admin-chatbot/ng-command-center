export interface AddService {
    id: string;
    svg: string;
    title: string;
    subTitle: string;
    active: boolean;
    steps : number
    data:number;
  }

  export const addProductTabData: AddService[] = [
    {
      id: "service-product-tab",
      svg: "product-detail",
      title: "Service Details",
      subTitle: "Add Product name & details",
      active: true,
      steps : 1,
      data: 0,
    },
    {
      id: "gallery-product-tab",
      svg: "product-detail",
      title: "Intends",
      subTitle: "Add Service Intends",
      active: false,
      steps : 2,
      data: 0,
    },
    {
      id: "pricings-tab",
      svg: "product-detail",
      title: "Parameter",
      subTitle: "Add Service parameter ",
      active: false,
      steps : 3,
      data: 0,
    }]