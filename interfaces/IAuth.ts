export interface IUser {
    name: string;
    username: string;
    email: string;
    usertype: string;
    password?: string;
    checkbox?: boolean | undefined;
    userId: string;
}

export interface Account {
    $createdAt?: string;
    $id: string;
    $updatedAt?: string;
    accessedAt?: string;
    email: string;
    emailVerification?: boolean;
    labels?: any[];
    name: string;
    passwordUpdate?: string;
    phone?: string;
    phoneVerification?: boolean;
    prefs?: Prefs;
    registration?: string;
    status?: boolean;
}

export interface Prefs { }

export interface Session {
    $createdAt: string;
    $id: string;
    clientCode: string;
    clientEngine: string;
    clientEngineVersion: string;
    clientName: string;
    clientType: string;
    clientVersion: string;
    countryCode: string;
    countryName: string;
    current: boolean;
    deviceBrand: string;
    deviceModel: string;
    deviceName: string;
    expire: string;
    ip: string;
    osCode: string;
    osName: string;
    osVersion: string;
    provider: string;
    providerAccessToken: string;
    providerAccessTokenExpiry: string;
    providerRefreshToken: string;
    providerUid: string;
    userId: string;
}
