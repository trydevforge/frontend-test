import { Dimensions, Meta, ProductFromApi, Review } from "./type";

class Product {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: Dimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: Review[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: Meta
  images: string[]
  thumbnail: string

  constructor(data: ProductFromApi) {
    this.id = data.id ?? 0;
    this.title = data.title ?? '';
    this.description = data.description ?? '';
    this.category = data.category ?? '';
    this.price = data.price ?? 0;
    this.discountPercentage = data.discountPercentage ?? 0;
    this.rating = data.rating ?? 0;
    this.stock = data.stock ?? 0;
    this.tags = data.tags ?? [];
    this.brand = data.brand ?? '';
    this.sku = data.sku ?? '';
    this.weight = data.weight ?? 0;
    this.dimensions = data.dimensions ?? { width: 0, height: 0, depth: 0 };
    this.warrantyInformation = data.warrantyInformation ?? '';
    this.shippingInformation = data.shippingInformation ?? '';
    this.availabilityStatus = data.availabilityStatus ?? '';
    this.reviews = data.reviews ?? [];
    this.returnPolicy = data.returnPolicy ?? '';
    this.minimumOrderQuantity = data.minimumOrderQuantity ?? 0;
    this.meta = data.meta ?? { createdAt: '', updatedAt: '', barcode: '', qrCode: '' };
    this.images = data.images ?? [];
    this.thumbnail = data.thumbnail ?? '';
  }
}

export default Product;