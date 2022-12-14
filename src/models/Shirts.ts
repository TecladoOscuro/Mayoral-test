export interface ShirtProps {
  id: string;
  imageUrl: string;
  description: string;
  price: number;
  hasDiscounts: boolean;
  hasMoreColours: boolean;
  discount: number;
  morecolours: number;
}

export class Shirt {
  private _id: string;
  private _description: string;
  private _price: number;
  private _discount: number;
  private _morecolours: Array<string>;
  private _imageUrl: string;

  constructor(data) {
    this._id = data.id;
    this._description = data.description;
    this._price = data.price;
    this._discount = data.discount;
    this._morecolours = data.morecolours;
    this._imageUrl = data.imageUrl;
  }

  get id() {
    return this._id;
  }
  get description() {
    return this._description;
  }
  get price() {
    return this._price;
  }
  get discount() {
    return this._discount;
  }
  get morecolours() {
    return this._morecolours;
  }
  get imageUrl() {
    return this._imageUrl;
  }

  get hasDiscounts() {
    return this._discount != 0;
  }
  get hasMoreColours() {
    return this._morecolours.length != 0;
  }
}
