export enum codeId {
  id1 = '123',
  id2 = '124',
  id3 = '125',
}

export declare type parcelStatus = 'intransit' | 'delivered' | 'outForDelivery';

export interface parcelInfo {
  title: string;
  id: string;
  status: parcelStatus;
  deliveryTime: string;
  currentLocation?: string;
  targetLocation?: string;
  sender: string;
}

export const parcelsInfos: {
  id: codeId;
  data: parcelInfo;
}[] = [
  {
    id: codeId.id1,
    data: {
      id: '12345678',
      status: 'outForDelivery',
      sender: 'senderName',
      title: 'Apple Watch',
      currentLocation: 'South Africa',
      targetLocation: 'Egypt',
      deliveryTime: 'Thu Jan 2 at 4:00 PM',
    },
  },
  {
    id: codeId.id2,
    data: {
      id: '12345679',
      status: 'delivered',
      sender: 'senderName',
      title: 'Samsung TV',
      targetLocation: 'Egypt',
      deliveryTime: 'Thu Jan 2 at 4:00 PM',
    },
  },
  {
    id: codeId.id3,
    data: {
      id: '123456710',
      status: 'intransit',
      sender: 'senderName',
      title: 'I phone',
      currentLocation: 'South Africa',
      targetLocation: 'Egypt',
      deliveryTime: 'Thu Jan 2 at 4:00 PM',
    },
  },
];
