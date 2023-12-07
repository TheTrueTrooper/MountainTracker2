import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { BaseQlService } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { Region } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class RegionService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
  super(apolloProvider)
  }
  //#region queries
  protected override queryObj: string = "regionQuery"

  public getAllRegions(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Region>): Observable<Region[]>
  {
    const query = 'allRegions'
      return this.moutainTrackerApi.query<Region[]>({
      query: this.generateQuery(Region, query, selection),                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }

  public getRegionById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Region>): Observable<Region>
  {
    const queryVar = '($id: Int!)'
    const query = 'regionById'
    const queryParam = '(id: $id)'
    return this.moutainTrackerApi.query<Region>({
      query: this.generateQuery(Region, query, selection, queryVar, queryParam),
      variables:{
      id: id
    }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }

  public getRegionByCode(regionCode:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Region>): Observable<Region>
  {
    const queryVar = '($regionCode: String!)'
    const query = 'regionByCode'
    const queryParam = '(regionCode: $regionCode)'
    return this.moutainTrackerApi.query<Region>({
      query: this.generateQuery(Region, query, selection, queryVar, queryParam),
      variables:{
        regionCode: regionCode
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }

  public getProvincesOrStatesByCountry(provinceOrStateId:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, Region>): Observable<Region[]>
  {
    const queryVar = '($provinceOrStateId: Short!)'
    const query = 'regionsByProvinceOrState'
    const queryParam = '(provinceOrStateId: $provinceOrStateId)'
    return this.moutainTrackerApi.query<Region[]>({
      query: this.generateQuery(Region, query, selection, queryVar, queryParam),
      variables:{
        provinceOrStateId: provinceOrStateId
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }
  //#endregion
}