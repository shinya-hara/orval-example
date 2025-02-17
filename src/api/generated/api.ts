/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 * OpenAPI spec version: 1.0.19
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import type {
  ApiResponse,
  FindPetsByStatusParams,
  FindPetsByTagsParams,
  GetInventory200,
  LoginUserParams,
  Order,
  Pet,
  UpdatePetWithFormParams,
  UploadFileParams,
  User
} from './model'



  /**
 * Update an existing pet by Id
 * @summary Update an existing pet
 */
export const updatePet = <TData = AxiosResponse<Pet>>(
    pet: Pet, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.put(
      `/pet`,
      pet,options
    );
  }

/**
 * Add a new pet to the store
 * @summary Add a new pet to the store
 */
export const addPet = <TData = AxiosResponse<Pet>>(
    pet: Pet, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/pet`,
      pet,options
    );
  }

/**
 * Multiple status values can be provided with comma separated strings
 * @summary Finds Pets by status
 */
export const findPetsByStatus = <TData = AxiosResponse<Pet[]>>(
    params?: FindPetsByStatusParams, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/pet/findByStatus`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }

/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @summary Finds Pets by tags
 */
export const findPetsByTags = <TData = AxiosResponse<Pet[]>>(
    params?: FindPetsByTagsParams, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/pet/findByTags`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }

/**
 * Returns a single pet
 * @summary Find pet by ID
 */
export const getPetById = <TData = AxiosResponse<Pet>>(
    petId: number, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/pet/${petId}`,options
    );
  }

/**
 * @summary Updates a pet in the store with form data
 */
export const updatePetWithForm = <TData = AxiosResponse<unknown>>(
    petId: number,
    params?: UpdatePetWithFormParams, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/pet/${petId}`,undefined,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }

/**
 * @summary Deletes a pet
 */
export const deletePet = <TData = AxiosResponse<unknown>>(
    petId: number, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.delete(
      `/pet/${petId}`,options
    );
  }

/**
 * @summary uploads an image
 */
export const uploadFile = <TData = AxiosResponse<ApiResponse>>(
    petId: number,
    uploadFileBody: Blob,
    params?: UploadFileParams, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/pet/${petId}/uploadImage`,
      uploadFileBody,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }

/**
 * Returns a map of status codes to quantities
 * @summary Returns pet inventories by status
 */
export const getInventory = <TData = AxiosResponse<GetInventory200>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/store/inventory`,options
    );
  }

/**
 * Place a new order in the store
 * @summary Place an order for a pet
 */
export const placeOrder = <TData = AxiosResponse<Order>>(
    order: Order, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/store/order`,
      order,options
    );
  }

/**
 * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 * @summary Find purchase order by ID
 */
export const getOrderById = <TData = AxiosResponse<Order>>(
    orderId: number, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/store/order/${orderId}`,options
    );
  }

/**
 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 * @summary Delete purchase order by ID
 */
export const deleteOrder = <TData = AxiosResponse<unknown>>(
    orderId: number, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.delete(
      `/store/order/${orderId}`,options
    );
  }

/**
 * This can only be done by the logged in user.
 * @summary Create user
 */
export const createUser = <TData = AxiosResponse<User>>(
    user: User, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/user`,
      user,options
    );
  }

/**
 * Creates list of users with given input array
 * @summary Creates list of users with given input array
 */
export const createUsersWithListInput = <TData = AxiosResponse<User>>(
    user: User[], options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/user/createWithList`,
      user,options
    );
  }

/**
 * @summary Logs user into the system
 */
export const loginUser = <TData = AxiosResponse<string>>(
    params?: LoginUserParams, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/user/login`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }

/**
 * @summary Logs out current logged in user session
 */
export const logoutUser = <TData = AxiosResponse<void>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/user/logout`,options
    );
  }

/**
 * @summary Get user by user name
 */
export const getUserByName = <TData = AxiosResponse<User>>(
    username: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/user/${username}`,options
    );
  }

/**
 * This can only be done by the logged in user.
 * @summary Update user
 */
export const updateUser = <TData = AxiosResponse<void>>(
    username: string,
    user: User, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.put(
      `/user/${username}`,
      user,options
    );
  }

/**
 * This can only be done by the logged in user.
 * @summary Delete user
 */
export const deleteUser = <TData = AxiosResponse<unknown>>(
    username: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.delete(
      `/user/${username}`,options
    );
  }

export type UpdatePetResult = AxiosResponse<Pet>
export type AddPetResult = AxiosResponse<Pet>
export type FindPetsByStatusResult = AxiosResponse<Pet[]>
export type FindPetsByTagsResult = AxiosResponse<Pet[]>
export type GetPetByIdResult = AxiosResponse<Pet>
export type UpdatePetWithFormResult = AxiosResponse<unknown>
export type DeletePetResult = AxiosResponse<unknown>
export type UploadFileResult = AxiosResponse<ApiResponse>
export type GetInventoryResult = AxiosResponse<GetInventory200>
export type PlaceOrderResult = AxiosResponse<Order>
export type GetOrderByIdResult = AxiosResponse<Order>
export type DeleteOrderResult = AxiosResponse<unknown>
export type CreateUserResult = AxiosResponse<User>
export type CreateUsersWithListInputResult = AxiosResponse<User>
export type LoginUserResult = AxiosResponse<string>
export type LogoutUserResult = AxiosResponse<void>
export type GetUserByNameResult = AxiosResponse<User>
export type UpdateUserResult = AxiosResponse<void>
export type DeleteUserResult = AxiosResponse<unknown>
