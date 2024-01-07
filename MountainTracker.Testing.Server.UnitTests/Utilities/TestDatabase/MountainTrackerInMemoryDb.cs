using Microsoft.EntityFrameworkCore;

using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Testing.Server.UnitTests.Utilities.TestDatabase.TestData;

namespace MountainTracker.Testing.Server.UnitTests.Utilities.DbMocking;

internal static class MountainTrackerInMemoryDb
{
    static int dbNum = 0;
    public static MountainTrackerDatabase1Context GetInMemoryDatabase(Action<MountainTrackerDatabase1Context> seed = null, bool defaultSeed = true)
    {
        dbNum += 1;
        var options = new DbContextOptionsBuilder<MountainTrackerDatabase1Context>()
            .UseInMemoryDatabase(databaseName: $"MountainTrackerDatabase{dbNum}")
            .Options;
        var db = new MountainTrackerDatabase1Context(options);
        if (defaultSeed)
        {
            MountainTrackerInMemoryDb.defaultSeed(db);
        }
        if (seed != null)
        {
            seed(db);
        }
        return db;
    }

    private static void defaultSeed(MountainTrackerDatabase1Context context)
    {
        context.Countries.AddRange(Seed.GetDefaultCountries());
        context.ProvincesOrStates.AddRange(Seed.GetDefaultProvinceOrState());
        context.SaveChanges();
    }
}
