// Zod schema for FullNameOfUser
import { z } from "zod";

const FullNameOfUserValidationSchema = z.object({
  firstName: z.string({ required_error: "First name is required" }),
  lastName: z.string({ required_error: "Last name is required" }),
});

// Zod schema for UserAddress
const UserAddressValidationSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

// Zod schema for UserOrder
const UserOrderValidationSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});

// Zod schema for Users
export const UsersValidationSchema = z.object({
  userId: z.number({ required_error: "User ID is required" }),
  username: z.string({ required_error: "User name is required" }),
  password: z.string({ required_error: "Password is required" }),
  fullName: FullNameOfUserValidationSchema,
  age: z.number(),
  email: z.string({ required_error: "Email is required" }),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: UserAddressValidationSchema,
  orders: z.array(UserOrderValidationSchema).optional(),
});

export default UsersValidationSchema;
