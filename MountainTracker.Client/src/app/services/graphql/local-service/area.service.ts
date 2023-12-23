import { Injectable } from '@angular/core';
import { BaseQlService } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { Observable, map } from 'rxjs';
import { Area } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class AreaService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
    super(apolloProvider)
   }
  //#region queries
   public getAllAreas(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Area>): Observable<Area[]>
   {
    const query = 'allAreas'
    return this.moutainTrackerApi.query<Area[]>({
      query: this.generateQuery(Area, query, selection),                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[query]))
  }

  public getAreaById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Area>): Observable<Area>
  {
    const queryVar = '($id: Int!)'
    const query = 'areaById'
    const queryParam = '(id: $id)'
    return this.moutainTrackerApi.query<Area>({
      query: this.generateQuery(Area, query, selection, queryVar, queryParam),
      variables:{
        id: id
      }                                                                                                                                                                                                                            
    }).pipe(map((result: any) => result.data[query]))
  }

  public getAreaByCode(areaCode:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Area>): Observable<Area>
  {
    const queryVar = '($areaCode: String!)'
    const query = 'areaByCode'
    const queryParam = '(areaCode: $areaCode)'
    return this.moutainTrackerApi.query<Area>({
      query: this.generateQuery(Area, query, selection, queryVar, queryParam),
      variables:{
        areaCode: areaCode
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[query]))
  }

  public getAreaByZone(zoneId:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Area>): Observable<Area[]>
  {
    const queryVar = '($zoneId: Int!)'
    const query = 'areaByZone'
    const queryParam = '(zoneId: $zoneId)'
    return this.moutainTrackerApi.query<Area[]>({
      query: this.generateQuery(Area, query, selection, queryVar, queryParam),
      variables:{
        zoneId: zoneId
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[query]))
  }
  //#endregion
}