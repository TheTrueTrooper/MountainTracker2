import { Injectable } from '@angular/core';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { Observable, map } from 'rxjs';
import { BaseQlService } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { District } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class DistrictService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
    super(apolloProvider)
   }
  //#region queries
   protected override queryObj: string = "districtQuery"

   public getAllDistricts(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, District>): Observable<District[]>
   {
    const query = 'allDistricts'
    return this.moutainTrackerApi.query<District[]>({
      query: this.generateQuery(District, query, selection),                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }

  public getDistrictById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, District>): Observable<District>
  {
    const queryVar = '($id: Int!)'
    const query = 'districtById'
    const queryParam = '(id: $id)'
    return this.moutainTrackerApi.query<District>({
      query: this.generateQuery(District, query, selection, queryVar, queryParam),
      variables:{
        id: id
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }

  public getDistrictByCode(districtCode:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, District>): Observable<District>
  {
    const queryVar = '($districtCode: String!)'
    const query = 'districtByCode'
    const queryParam = '(districtCode: $districtCode)'
    return this.moutainTrackerApi.query<District>({
      query: this.generateQuery(District, query, selection, queryVar, queryParam),
      variables:{
        districtCode: districtCode
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }

  public getDistrictsByRegion(regionId:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, District>): Observable<District[]>
  {
    const queryVar = '($regionId: Int!)'
    const query = 'zonesByRegion'
    const queryParam = '(regionId: $regionId)'
    return this.moutainTrackerApi.query<District[]>({
      query: this.generateQuery(District, query, selection, queryVar, queryParam),
      variables:{
        regionId: regionId
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }
  //#endregion
}