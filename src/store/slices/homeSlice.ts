interface HomeState {
  profile: {
    name: string;
    email: string;
    avatar: string;
  };
  stats: {
    visitors: number;
    posts: number;
    revenue: string;
    orders: number;
  };
  commission: {
    percentage: string;
    balance: string;
    cardHolder: string;
    paymentEmail: string;
  };
  linksAndCodes: {
    trackingLink: string;
    couponCode: string;
  };
  potentialEarnings: {
    amount: string;
    description: string;
  };
}

const initialState: HomeState = {
  profile: {
    name: 'Jen Nelson',
    email: 'jennelsonfitness@gmail.com',
    avatar: '/src/assets/avatar.png',
  },
  stats: {
    visitors: 416,
    posts: 16,
    revenue: '$416',
    orders: 46,
  },
  commission: {
    percentage: '20% Commission',
    balance: '$ 28.75',
    cardHolder: 'JEN NELSON',
    paymentEmail: 'Payment Email: N/A',
  },
  linksAndCodes: {
    trackingLink: 'ds&durga.trysaral.com/kimiko',
    couponCode: 'KIMAYA10',
  },
  potentialEarnings: {
    amount: '$ 0',
    description: 'How much you might earn with more posts!',
  },
};

const homeReducer = (state: HomeState = initialState, action: any): HomeState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default homeReducer;
