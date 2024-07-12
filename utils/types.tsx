export type Details = {
  type: string;
  title: string;
  desc: string;
  src: string;
  address: string;
  space: {
    title: string;
    value: string;
  };
  floor: {
    title: string;
    value: string;
  };
  rooms: {
    title: string;
    value: string;
    bedrooms: string;
    bathrooms: string;
  };
  parking: {
    title: string;
    value: string;
    much: string;
  };
  payment: {
    title: string;
    value: string;
    price: string;
  };
};
