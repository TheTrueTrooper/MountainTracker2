import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ClientConfig } from '../../../configuration';
import { BaseQlService } from './base-ql.service';
import { Observable, map } from 'rxjs';
import { ProvinceOrState } from '../../../models';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';

@Injectable({
  providedIn: 'root'
})
export class ProvinceOrStateService extends BaseQlService {

  constructor(protected override readonly clientConfig: ClientConfig,
      protected override apolloProvider: Apollo) {
  super(clientConfig, apolloProvider)
  }

  protected override queryObj: string = "provinceOrStateQuery"

  public getAllprovincesOrStates(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, ProvinceOrState>): Observable<ProvinceOrState[]>
  {
    const query = 'allprovincesOrStates'
      return this.moutainTrackerApi.query<ProvinceOrState[]>({
      query: this.generateQuery(ProvinceOrState, query, selection),                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }

  public getProvinceOrStateServiceById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, ProvinceOrState>): Observable<ProvinceOrState>
  {
    const queryVar = '($id: Byte!)'
    const query = 'provinceOrStateServiceById'
    const queryParam = '(id: $id)'
    return this.moutainTrackerApi.query<ProvinceOrState>({
      query: this.generateQuery(ProvinceOrState, `${query}${queryParam}`, selection, queryVar),
      variables:{
      id: id
    }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result[this.queryObj][query]))
  }

  // not implemented yet
  // public countryByCode(countryCode:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, ProvinceOrState>): Observable<ProvinceOrState>
  // {
  //   const queryParam = '($countryCode: String!)'
  //   const query = 'provinceOrStateServiceByCode(countryCode: $countryCode)'
  //   return this.moutainTrackerApi.query<ProvinceOrState>({
  //     query: this.generateQuery(ProvinceOrState, query, selection, queryParam),
  //     variables:{
  //     countryCode: countryCode
  //   }                                                                                                                                                                                                                                
  //   }).pipe(map((result: any) => result.data.countryQuery.countryByCode))
  // }
}
