type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, 'errors'>;

const params: Params = {
  email: 'example@gmail.com',
  firstName: 'Sara',
  lastName: 'Cat',
  phone: '6475349652',
};

console.log(params);