using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Shared.Model;
using MountainTracker.Testing.Server.UnitTests.Utilities.DbMocking;
using MountainTracker.Testing.Server.UnitTests.Utilities.TestDatabase.TestData;

namespace MountainTracker.Server.Services.LocalServices.Services;

public class CountryService_Should
{
    List<Countries> FullList;
    public CountryService_Should()
    {
        FullList = Seed.GetDefaultCountries();
    }

    [Fact]
    public async Task Get_All_Countries_On_GetAllCountries_Call()
    {
        var stableExpectList = new List<Countries>(FullList);
        using (MountainTrackerDatabase1Context databaseContext = MountainTrackerInMemoryDb.GetInMemoryDatabase())
        {
            CountryService sut_countryService = new CountryService(databaseContext);

            IEnumerable<Countries> result = await sut_countryService.GetAllCountries();
            
            Assert.Equivalent(stableExpectList, result);
        }
    }

    [Theory]
    //edge cases
    [InlineData("")]  // should be not found
    [InlineData("Not Findable")]  // should be not found
    //normal function
    [InlineData("CA")]
    [InlineData("US")]
    [InlineData("BI")]
    [InlineData("BN")]
    public async void Get_Country_Based_On_Code_On_GetCountryByCode_Call(string countryCode)
    {
        var stableExpectList = new List<Countries>(FullList);
        Countries? country = stableExpectList.FirstOrDefault(x=>x.CountryCode == countryCode);
        using (MountainTrackerDatabase1Context databaseContext = MountainTrackerInMemoryDb.GetInMemoryDatabase())
        {
            CountryService sut_countryService = new CountryService(databaseContext);

            Countries? result = await sut_countryService.GetCountryByCode(countryCode);
            
            Assert.Equivalent(country, result);
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
    public async void Get_Country_Based_On_Id_On_GetCountryById_Call(byte id)
    {
        var stableExpectList = new List<Countries>(FullList);
        Countries? country = stableExpectList.FirstOrDefault(x => x.Id == id);
        using (MountainTrackerDatabase1Context databaseContext = MountainTrackerInMemoryDb.GetInMemoryDatabase())
        {
            CountryService sut_countryService = new CountryService(databaseContext);

            Countries? result = await sut_countryService.GetCountryById(id);

            Assert.Equivalent(country, result);
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
    public async void Get_Countries_Based_On_Ids_On_GetCountriesByIds_Call(byte[] id)
    {
        var stableExpectList = new List<Countries>(FullList);
        stableExpectList = stableExpectList.Where(x=>id.ToList().Contains(x.Id)).ToList();
        using (MountainTrackerDatabase1Context databaseContext = MountainTrackerInMemoryDb.GetInMemoryDatabase())
        {
            CountryService sut_countryService = new CountryService(databaseContext);

            IDictionary<byte, Countries> result = await sut_countryService.GetCountriesByIds(id);

            Assert.Equivalent(stableExpectList.ToDictionary(k=>k.Id, v=>v), result);
        }
    }
}
