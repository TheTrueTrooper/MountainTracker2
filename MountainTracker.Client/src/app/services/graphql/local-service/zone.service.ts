import { Injectable } from '@angular/core';
import { BaseQlService } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { Observable, map } from 'rxjs';
import { Zone } from '../../../models/service-models/zones';

@Injectable({
  providedIn: 'root'
})
export class ZoneService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
  super(apolloProvider)
  }

  //#region queries
  protected override queryObj: string = "allZones"

  public getAllRegions(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Zone>): Observable<Zone[]>
  {
    const query = 'allRockClimbingWall'
      return this.moutainTrackerApi.query<Zone[]>({
      query: this.generateQuery(Zone, query, selection),                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }

  public getRegionById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Zone>): Observable<Zone>
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

  public provinceOrStateByCode(zoneCode:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Zone>): Observable<Zone>
  {
    const queryVar = '($zoneCode: String!)'
    const query = 'zoneByCode'
    const queryParam = '(zoneCode: $wallCode)'
    return this.moutainTrackerApi.query<Zone>({
      query: this.generateQuery(Zone, query, selection, queryVar, queryParam),
      variables:{
        zoneCode: zoneCode
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }
  //#endregion
}