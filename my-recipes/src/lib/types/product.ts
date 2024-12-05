type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type Product = {
  id: number;
  title: string;
  description: string;
  category: string; //'beauty';
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[]; //['beauty', 'mascara'];
  brand: string; //'Essence';
  sku: string; //'RCH45Q1A';
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string; //'1 month warranty';
  shippingInformation: string; //'Ships in 1 month';
  availabilityStatus: string; //'Low Stock';
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
};

export default Product;
