import axios, { AxiosInstance, AxiosPromise, AxiosResponse, ResponseType } from 'axios';
import { createReadStream, ReadStream } from 'fs';
import { parse } from 'path';

const defaultBaseUrl: string = 'https://storage.bunnycdn.com'

export default class BunnyCDNStorage {
  private client: AxiosInstance;

  constructor(apiKey: string, storageZoneName: string, region?: string) {
    const baseURL: string = region ? `https://${region}.storage.bunnycdn.com` : defaultBaseUrl;

    this.client = axios.create({
      baseURL: `${baseURL}/${storageZoneName}/`,
      headers: {
        AccessKey: apiKey
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    })

  }

  list(path?: string) : AxiosPromise<any> {
    return this.client({
      method: 'GET',
      url: path
    })
  }

  delete(path?: string) : AxiosPromise<any> {
    return this.client({
      method: 'DELETE',
      url: path
    })
  }

  async upload(file: Buffer, remotePath?: string) : Promise<AxiosResponse>;
  async upload(filePath: string, remotePath?: string) : Promise<AxiosResponse>;

  async upload(fileOrPath: Buffer | string, remotePath?: string) : Promise<AxiosResponse> {
    let file: (Buffer | ReadStream);
    if (!Buffer.isBuffer(fileOrPath)) {
      if (typeof remotePath === 'undefined') {
        remotePath = parse(fileOrPath).base;
      }
      file = createReadStream(fileOrPath);
    } else {
      file = fileOrPath;
    }

    const response = await this.client({
      method: 'PUT',
      url: remotePath,
      data: file
    })

    return response;
  }

  download(filePath: string, responseType?: ResponseType) : AxiosPromise<any> {
    return this.client({
      method: 'GET',
      url: filePath,
      responseType: responseType || 'arraybuffer' 
    })
  }

}
