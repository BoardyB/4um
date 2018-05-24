import {isFunction} from 'lodash';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Entity} from "./entity";
import {deserializeFromList} from "../util/util";

export class Repository<T extends Entity<ID>, ID> {
  public static BASE_URL_PREFIX = 'http://localhost:8080/api/';

  protected baseUrl: string;
  protected httpClient: HttpClient;
  protected type: any;

  constructor(baseUrl: string, httpClient: HttpClient, type: any) {
    this.baseUrl = Repository.BASE_URL_PREFIX + baseUrl;
    this.httpClient = httpClient;
    this.type = type;
  }

  private static getJsonContentTypeHeader(): HttpHeaders {
    return new HttpHeaders({'Content-Type': 'application/json'});
  }

  public findOne(id: ID): Observable<T> {
    return this.httpClient.get(this.baseUrl + '/' + id) as Observable<T>;
  }

  public findAll(filters: any): Observable<T[]> {
    return this.httpClient
      .post(this.baseUrl + '/all', filters, {headers: Repository.getJsonContentTypeHeader()}) as Observable<T[]>;
  }

  public deserializeFromList(result: any): T[] {
    return deserializeFromList(result, this.type);
  }

  public save(entity: T): Observable<T> {
    const entityString: string = this.stringifyEntity(entity);

    let observable: Observable<T>;

    if (entity.isNew()) {
      observable = this.create(entityString);
    } else {
      observable = this.update(entityString);
    }

    return observable as Observable<T>;
  }

  protected stringifyEntity(entity: T | T[]): string {
    if (isFunction((entity as any).serverView)) {
      return JSON.stringify((entity as any).serverView());
    }
    return JSON.stringify(entity);
  }

  private create(entityString: string): Observable<T> {
    return this.httpClient.post(this.baseUrl, entityString, {headers: Repository.getJsonContentTypeHeader()}) as Observable<T>;
  }

  private update(entityString: string): Observable<T> {
    return this.httpClient.put(this.baseUrl, entityString, {headers: Repository.getJsonContentTypeHeader()}) as Observable<T>;
  }

  public delete(entity: T): Observable<any> {
    return this.httpClient.delete(this.baseUrl + '/' + entity.getId());
  }

  public getType(): any {
    return this.type;
  }
}
