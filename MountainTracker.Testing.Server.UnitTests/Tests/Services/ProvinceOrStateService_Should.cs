using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;
using MountainTracker.Testing.Server.UnitTests.Utilities.DbMocking;
using MountainTracker.Testing.Server.UnitTests.Utilities.TestDatabase.TestData;

namespace MountainTracker.Server.Services.LocalServices.Services;


public class ProvinceOrStateService_Should
{
    List<ProvincesOrStates> FullList;
    public ProvinceOrStateService_Should()
    {
        FullList = Seed.GetDefaultProvinceOrState();
    }

    [Fact]
    public async Task Get_All_ProvincesOrStates_On_GetAllProvincesOrStates_Call()
    {
        var stableExpectList = new List<ProvincesOrStates>(FullList);
        using (MountainTrackerDatabase1Context databaseContext = MountainTrackerInMemoryDb.GetInMemoryDatabase())
        {
            ProvinceOrStateService sut_countryService = new ProvinceOrStateService(databaseContext);

            IEnumerable<ProvincesOrStates> result = await sut_countryService.GetAllProvincesOrStates();
            
            Assert.Equivalent(stableExpectList, result);
        }
    }

    [Theory]
    //edge cases
    [InlineData("", null)]  // should be not found
    [InlineData("Not Findable", null)]  // should be not found
    [InlineData("US", null)]
    [InlineData("US-AB", null)]
    [InlineData("CA-AB-MM", null)]
    //normal function
    [InlineData("CA-AB", (short)0)]
    [InlineData("CA-BC", (short)1)]
    [InlineData("US-ND", (short)45)]
    [InlineData("US-OH", (short)46)]
    public async void Get_ProvinceOrState_Based_On_Code_On_GetProvinceOrStateByCode_Call(string regionCode, short? expectedId)
    {
        var codes = regionCode.Split('-');
        using (MountainTrackerDatabase1Context databaseContext = MountainTrackerInMemoryDb.GetInMemoryDatabase())
        {
            ProvinceOrStateService sut_provinceOrStateServiceService = new ProvinceOrStateService(databaseContext);
            var stableExpectList = new List<ProvincesOrStates>(await sut_provinceOrStateServiceService.GetAllProvincesOrStates());

            ProvincesOrStates? provincesOrStates = expectedId != null ? await sut_provinceOrStateServiceService.GetProvinceOrStateById(expectedId.Value) : null;

            ProvincesOrStates? result = await sut_provinceOrStateServiceService.GetProvinceOrStateByCode(regionCode);
            
            Assert.Equivalent(provincesOrStates, result);
        }
    }

    [Theory]
    //edge cases
    [InlineData(255)] // should be not found
    //normal function
    [InlineData(1)]
    [InlineData(2)]
    [InlineData(39)]
    [InlineData(235)]
    public async void Get_ProvinceOrState_Based_On_Id_On_GetProvinceOrStateById_Call(short id)
    {
        var stableExpectList = new List<ProvincesOrStates>(FullList);
        ProvincesOrStates? provincesOrStates = stableExpectList.FirstOrDefault(x => x.Id == id);
        using (MountainTrackerDatabase1Context databaseContext = MountainTrackerInMemoryDb.GetInMemoryDatabase())
        {
            ProvinceOrStateService sut_countryService = new ProvinceOrStateService(databaseContext);

            ProvincesOrStates? result = await sut_countryService.GetProvinceOrStateById(id);

            Assert.Equivalent(provincesOrStates, result);
        }
    }

    [Theory]
    //edge cases
    [InlineData(255)] // should be not found
    //normal function
    [InlineData(1)]
    [InlineData(2)]
    [InlineData(39)]
    [InlineData(235)]
    public async void Get_ProvinceOrState_Based_On_Country_On_GetProvincesOrStatesByCountry_Call(byte countryId)
    {
        var stableExpectList = new List<ProvincesOrStates>(FullList);
        IEnumerable<ProvincesOrStates> provincesOrStates = stableExpectList.Where(x => x.CountryId == countryId);
        using (MountainTrackerDatabase1Context databaseContext = MountainTrackerInMemoryDb.GetInMemoryDatabase())
        {
            ProvinceOrStateService sut_countryService = new ProvinceOrStateService(databaseContext);

            IEnumerable<ProvincesOrStates> result = await sut_countryService.GetProvincesOrStatesByCountry(countryId);

            Assert.Equivalent(provincesOrStates, result);
        }
    }

    [Theory]
    //edge cases
    [InlineData(new short[] { })]  // should return empty
    [InlineData(new short[] { 255 })]  // 255 should be not found
    [InlineData(new short[] { 3, 2, 6, 255 })]  // 255 should be not found
    //normal function
    [InlineData(new short[] { 1, 2, 3 })]
    [InlineData(new short[] { 3, 2 })]
    [InlineData(new short[] { 0 })]
    [InlineData(new short[] { 3, 2, 6 })]
    public async void Get_ProvincesOrStates_Based_On_Ids_On_GetProvincesOrStatesByIds_Call(short[] id)
    {
        var stableExpectList = new List<ProvincesOrStates>(FullList);
        stableExpectList = stableExpectList.Where(x=>id.ToList().Contains(x.Id)).ToList();
        using (MountainTrackerDatabase1Context databaseContext = MountainTrackerInMemoryDb.GetInMemoryDatabase())
        {
            ProvinceOrStateService sut_countryService = new ProvinceOrStateService(databaseContext);

            IDictionary<short, ProvincesOrStates> result = await sut_countryService.GetProvincesOrStatesByIds(id);

            Assert.Equivalent(stableExpectList.ToDictionary(k=>k.Id, v=>v), result);
        }
    }

    [Theory]
    //edge cases
    [InlineData(new byte[] { })]  // should return empty
    [InlineData(new byte[] { 255 })]  // 255 should be not found
    [InlineData(new byte[] { 3, 2, 6, 255 })]  // 255 should be not found
    //normal function
    [InlineData(new byte[] { 1, 2, 3 })]
    [InlineData(new byte[] { 3, 2 })]
    [InlineData(new byte[] { 0 })]
    [InlineData(new byte[] { 3, 2, 6 })]
    public async void Get_ProvincesOrStates_Based_On_Countries_On_GetProvincesOrStatesByCountries_Call(byte[] id)
    {
        var stableExpectList = new List<ProvincesOrStates>(FullList);
        stableExpectList = stableExpectList.Where(x => id.ToList().Contains(x.CountryId)).ToList();
        using (MountainTrackerDatabase1Context databaseContext = MountainTrackerInMemoryDb.GetInMemoryDatabase())
        {
            ProvinceOrStateService sut_countryService = new ProvinceOrStateService(databaseContext);

            ILookup<byte, ProvincesOrStates> result = await sut_countryService.GetProvincesOrStatesByCountries(id);

            Assert.Equivalent(stableExpectList.ToDictionary(k => k.Id, v => v), result);
        }
    }
}
