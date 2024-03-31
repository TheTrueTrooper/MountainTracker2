using Microsoft.EntityFrameworkCore;
using MountainTracker.Shared.Model;
using System.Reflection.Emit;
//using MountainTracker.Shared.Model;

namespace MountainTracker.Server.Contexts.MountainTrackerContext;

public partial class MountainTrackerDatabase1Context : DbContext
{

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder)
    {
    }

}

