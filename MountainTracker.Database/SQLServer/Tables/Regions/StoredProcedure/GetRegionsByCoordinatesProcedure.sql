CREATE PROCEDURE [dbo].[GetRegionsByCoordinates]
	@BottomLeftLat float,
	@BottomLeftLong float,
	@TopRightLat float,
	@TopRightLong float
AS
begin
	select R.ProvinceOrStateId,R.Id,R.EnglishFullName,R.RegionCode,R.LatitudeStartOrCenter,R.LongitudeStartOrCenter from dbo.Regions as R 
		where 
			(R.LatitudeStartOrCenter >= @BottomLeftLat and R.LatitudeStartOrCenter <= @TopRightLat and R.LongitudeStartOrCenter >= @BottomLeftLong and R.LongitudeStartOrCenter <= @TopRightLong) 
		or Exists(
			select RGF.Id from RegionGeoFenceNodes as RGF where RGF.RegionId = R.Id and 
				RGF.Latitude >= @BottomLeftLat and RGF.Latitude <= @TopRightLat and RGF.Longitude >= @BottomLeftLong and RGF.Longitude <= @TopRightLong) 
				or Exists(select RR.Id from Regions as RR where RR.Id = R.Id and 
					(
					(	(select min(RRGF.Latitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionId = RR.Id) <= @BottomLeftLat and 
						(select max(RRGF.Latitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionId = RR.Id) >= @BottomLeftLat and 
						(select min(RRGF.Longitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionId = RR.Id) <= @BottomLeftLong and 
						(select max(RRGF.Longitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionId = RR.Id) >= @BottomLeftLong) 
					or
					(	(select min(RRGF.Latitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionId = RR.Id) <= @TopRightLat and 
						(select max(RRGF.Latitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionId = RR.Id) >= @TopRightLat and 
						(select min(RRGF.Longitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionId = RR.Id) <= @TopRightLong and 
						(select max(RRGF.Longitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionId = RR.Id) >= @TopRightLong) 
					or
					(	(select min(RRGF.Latitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionId = RR.Id) <= @BottomLeftLat and 
						(select max(RRGF.Latitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionId = RR.Id) >= @BottomLeftLat and 
						(select min(RRGF.Longitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionId = RR.Id) <= @TopRightLong and 
						(select max(RRGF.Longitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionId = RR.Id) >= @TopRightLong) 
					or
					(	(select min(RRGF.Latitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionId = RR.Id) <= @TopRightLat and 
						(select max(RRGF.Latitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionId = RR.Id) >= @TopRightLat and 
						(select min(RRGF.Longitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionId = RR.Id) <= @BottomLeftLong and 
						(select max(RRGF.Longitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionId = RR.Id) >= @BottomLeftLong)
					)
				)
	RETURN 0
end