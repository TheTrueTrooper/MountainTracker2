import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BaseQlService } from './base-ql.service';
import { Observable, map } from 'rxjs';
import { ProvinceOrState } from '../../../models';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';

@Injectable({
  providedIn: 'root'
})
export class ProvinceOrStateService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
  super(apolloProvider)
  }
  //#region queries
  protected override queryObj: string = "provinceOrStateQuery"

  public getAllprovincesOrStates(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, ProvinceOrState>): Observable<ProvinceOrState[]>
  {
    const query = 'allprovincesOrStates'
      return this.moutainTrackerApi.query<ProvinceOrState[]>({
      query: this.generateQuery(ProvinceOrState, query, selection),                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }

  public getProvinceOrStateById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, ProvinceOrState>): Observable<ProvinceOrState>
  {
    const queryVar = '($id: Short!)'
    const query = 'provinceOrStateById'
    const queryParam = '(id: $id)'
    return this.moutainTrackerApi.query<ProvinceOrState>({
      query: this.generateQuery(ProvinceOrState, query, selection, queryVar, queryParam),
      variables:{
      id: id
    }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }

  public getProvinceOrStateByCode(regionCode:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, ProvinceOrState>): Observable<ProvinceOrState>
  {
    const queryVar = '($regionCode: String!)'
    const query = 'provinceOrStateByCode'
    const queryParam = '(regionCode: $regionCode)'
    return this.moutainTrackerApi.query<ProvinceOrState>({
      query: this.generateQuery(ProvinceOrState, query, selection, queryVar, queryParam),
      variables:{
        regionCode: regionCode
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }
  //#endregion
}
