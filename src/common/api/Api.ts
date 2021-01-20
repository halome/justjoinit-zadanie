import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { snakeToCamel } from '../utils/snakeToCamel';

export class ApiService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  public async get<T>(url: string): Promise<AxiosResponse<T>> {
    const result = await this.axiosInstance.get<T>(url);
    return {
      ...result,
      data: JSON.parse(snakeToCamel(JSON.stringify(result.data))),
    };
  }
}
