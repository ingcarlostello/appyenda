export interface IService {
    serviceId?: string;
    name: string;
    description: string;
    duration: number;
    category: string;
    price: number;
    $id?: string;
    $createdAt?: string;
    $updatedAt?: string;
    $permissions?: any[];
    // provider?: Provider
    provider?: string;
    $databaseId?: string;
    $collectionId?: string;
}

export interface Provider {
    providerId: string;
    businessName: string;
    userName: string;
    address: string;
    city: string;
    country: string;
    description: string;
    userType: string;
    email: string;
    businessCategory: string;
    phone: string;
    $id: string;
    $createdAt: string;
    $updatedAt: string;
    $permissions: any[];
    services: any;
    $databaseId: string;
    $collectionId: string;
}
