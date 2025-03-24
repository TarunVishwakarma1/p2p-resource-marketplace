export interface Resource {
    id: string;
    type: 'storage' | 'compute' | 'bandwidth' | 'gpu';
    amount: string;
    price: string;
    location: string;
    owner: string;
    availability: string;
  }
  
  export interface ResourceFormData {
    type: 'storage' | 'compute' | 'bandwidth' | 'gpu';
    amount: string;
    price: string;
    location: string;
    availability: string;
  }