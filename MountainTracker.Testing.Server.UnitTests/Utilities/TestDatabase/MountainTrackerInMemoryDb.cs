using Microsoft.EntityFrameworkCore;

using MountainTracker.Server.Contexts.MountainTrackerContext;
using MountainTracker.Testing.Server.UnitTests.Utilities.TestDatabase.TestData;

namespace MountainTracker.Testing.Server.UnitTests.Utilities.DbMocking;

internal static class MountainTrackerInMemoryDb
{
    private static readonly object dbNumLock = new object();
    static int dbNum = 0;
    public static MountainTrackerDatabase1Context GetInMemoryDatabase(Action<MountainTrackerDatabase1Context>? additionalSeed = null, bool defaultSeed = true)
    {
        MountainTrackerDatabase1Context db;
        DbContextOptions<MountainTrackerDatabase1Context> options;
        //lock Num for db options creation until it is done so that we don't get shared names when running in parallel
        lock (dbNumLock)
        {
            dbNum += 1;
            options = new DbContextOptionsBuilder<MountainTrackerDatabase1Context>()
                .UseInMemoryDatabase(databaseName: $"MountainTrackerDatabase{dbNum}")
                .Options;
        }
        db = new MountainTrackerDatabase1Context(options);
        if (defaultSeed)
        {
            MountainTrackerInMemoryDb.defaultSeed(db);
        }
        if (additionalSeed != null)
        {
            additionalSeed(db);
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
