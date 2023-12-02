import { Injectable } from '@angular/core';
import { BaseQlService } from './base-ql.service';
import { Apollo } from 'apollo-angular';
import { QlSelectionSet, QlSelectionSetTyped } from '../../../graphql-helpers';
import { Observable, map } from 'rxjs';
import { RockClimbingWall } from '../../../models/service-models/rock-climbing-wall';

@Injectable({
  providedIn: 'root'
})
export class RockClimbingWallService extends BaseQlService {

  constructor(protected override apolloProvider: Apollo) {
  super(apolloProvider)
  }

  //#region queries
  protected override queryObj: string = "rockClimbingWallQuery"

  public getAllRegions(selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingWall>): Observable<RockClimbingWall[]>
  {
    const query = 'allRockClimbingWall'
      return this.moutainTrackerApi.query<RockClimbingWall[]>({
      query: this.generateQuery(RockClimbingWall, query, selection),                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }

  public getRegionById(id:number, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingWall>): Observable<RockClimbingWall>
  {
    const queryVar = '($id: Int!)'
    const query = 'rockClimbingWallById'
    const queryParam = '(id: $id)'
    return this.moutainTrackerApi.query<RockClimbingWall>({
      query: this.generateQuery(RockClimbingWall, query, selection, queryVar, queryParam),
      variables:{
      id: id
    }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }

  public provinceOrStateByCode(wallCode:string, selection?: QlSelectionSet | QlSelectionSetTyped<undefined, RockClimbingWall>): Observable<RockClimbingWall>
  {
    const queryVar = '($wallCode: String!)'
    const query = 'rockClimbingWallByCode'
    const queryParam = '(wallCode: $wallCode)'
    return this.moutainTrackerApi.query<RockClimbingWall>({
      query: this.generateQuery(RockClimbingWall, query, selection, queryVar, queryParam),
      variables:{
        wallCode: wallCode
      }                                                                                                                                                                                                                                
    }).pipe(map((result: any) => result.data[this.queryObj][query]))
  }
  //#endregion
}
