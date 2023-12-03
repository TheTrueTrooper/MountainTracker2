import { Injectable } from '@angular/core';
import { BaseQlService } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { Observable, map } from 'rxjs';
import { Zone } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class ZoneService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
  super(apolloProvider)
  }

  //#region queries
  protected override queryObj: string = "zoneQuery"

  public getAllZones(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Zone>): Observable<Zone[]>
  {
    const query = 'allZones'
      return this.moutainTrackerApi.query<Zone[]>({
      query: this.generateQuery(Zone, query, selection),                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }

  public getZoneById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Zone>): Observable<Zone>
  {
    const queryVar = '($id: Int!)'
    const query = 'zoneById'
    const queryParam = '(id: $id)'
    return this.moutainTrackerApi.query<Zone>({
      query: this.generateQuery(Zone, query, selection, queryVar, queryParam),
      variables:{
      id: id
    }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }

  public getZoneByCode(zoneCode:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Zone>): Observable<Zone>
  {
    const queryVar = '($zoneCode: String!)'
    const query = 'zoneByCode'
    const queryParam = '(zoneCode: $zoneCode)'
    return this.moutainTrackerApi.query<Zone>({
      query: this.generateQuery(Zone, query, selection, queryVar, queryParam),
      variables:{
        zoneCode: zoneCode
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }
  //#endregion
}