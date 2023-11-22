namespace MountainTracker.Server.Helpers
{
    internal static class GraphHelpers
    {
        private static string SetQlName(Type typeToName)
        {
            return nameof(typeToName)
                .Replace("GraphType", "");
        }

        internal static string SetQlName<T>()
        {
            return SetQlName(typeof(T));
        }
    }
}
