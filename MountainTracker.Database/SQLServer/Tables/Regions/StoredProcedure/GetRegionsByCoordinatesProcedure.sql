CREATE PROCEDURE [dbo].[GetRegionsByCoordinates]
	@BottomLeftLat float,
	@BottomLeftLong float,
	@TopRightLat float,
	@TopRightLong float
AS
begin
	select R.ProvinceOrStateID,R.ID,R.EnglishFullName,R.RegionCode,R.LatitudeStartOrCenter,R.LongitudeStartOrCenter from dbo.Regions as R 
		where 
			(R.LatitudeStartOrCenter >= @BottomLeftLat and R.LatitudeStartOrCenter <= @TopRightLat and R.LongitudeStartOrCenter >= @BottomLeftLong and R.LongitudeStartOrCenter <= @TopRightLong) 
		or Exists(
			select RGF.ID from RegionGeoFenceNodes as RGF where RGF.RegionID = R.ID and 
				RGF.Latitude >= @BottomLeftLat and RGF.Latitude <= @TopRightLat and RGF.Longitude >= @BottomLeftLong and RGF.Longitude <= @TopRightLong) 
				or Exists(select RR.ID from Regions as RR where RR.ID = R.ID and 
					(
					(	(select min(RRGF.Latitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionID = RR.ID) <= @BottomLeftLat and 
						(select max(RRGF.Latitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionID = RR.ID) >= @BottomLeftLat and 
						(select min(RRGF.Longitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionID = RR.ID) <= @BottomLeftLong and 
						(select max(RRGF.Longitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionID = RR.ID) >= @BottomLeftLong) 
					or
					(	(select min(RRGF.Latitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionID = RR.ID) <= @TopRightLat and 
						(select max(RRGF.Latitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionID = RR.ID) >= @TopRightLat and 
						(select min(RRGF.Longitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionID = RR.ID) <= @TopRightLong and 
						(select max(RRGF.Longitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionID = RR.ID) >= @TopRightLong) 
					or
					(	(select min(RRGF.Latitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionID = RR.ID) <= @BottomLeftLat and 
						(select max(RRGF.Latitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionID = RR.ID) >= @BottomLeftLat and 
						(select min(RRGF.Longitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionID = RR.ID) <= @TopRightLong and 
						(select max(RRGF.Longitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionID = RR.ID) >= @TopRightLong) 
					or
					(	(select min(RRGF.Latitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionID = RR.ID) <= @TopRightLat and 
						(select max(RRGF.Latitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionID = RR.ID) >= @TopRightLat and 
						(select min(RRGF.Longitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionID = RR.ID) <= @BottomLeftLong and 
						(select max(RRGF.Longitude) from RegionGeoFenceNodes as RRGF where RRGF.RegionID = RR.ID) >= @BottomLeftLong)
					)
				)
	RETURN 0
end