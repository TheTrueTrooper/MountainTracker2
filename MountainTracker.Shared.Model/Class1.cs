using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MountainTracker.Shared.Model
{
    internal class Class1
    {
	enum PrintType
        {
            Class,
            PartialClass,
            Interface,
        }

        enum VirtualHandler
        {
            None,
            DropKeyword,
            DropCompletely,
        }

        enum DefualtHandler
        {
            None,
            DropCompletely,
        }

        enum PrivateHandler
        {
            None,
            DropCompletely,
        }

        class CsClass
        {
            public string[] Usings { get; set; }
            public string NameSpace { get; set; }
            public string Class { get; set; }
            public string[] Properties { get; set; }
            public string[] Methods { get; set; }
        }


        void PrintFiles(string[] targetFiles)
        {
            foreach (string file in targetFiles)
                Console.Write(file + "\n");
        }

        string[] GetFileDifs(string[] targetFiles, string[] outputFiles)
        {
            return targetFiles.Where(x => x.EndsWith(".cs")).Where(x => !outputFiles.Any(y => y.EndsWith(Path.GetFileName(x)))).ToArray();
        }

        void PrintProperties(StringBuilder stringBuilder, CsClass classData, VirtualHandler virtualHandler = VirtualHandler.DropKeyword, DefualtHandler defualtHandler = DefualtHandler.DropCompletely, PrivateHandler privateHandler = PrivateHandler.DropCompletely)
        {
            const string virtualKey = "virtual ";
            const string privateKey = "private ";
            string[] properties = new string[classData.Properties.Length];
            Array.Copy(classData.Properties, properties, classData.Properties.Length);
            if (privateHandler == PrivateHandler.DropCompletely)
            {
                properties = properties.Where(x => !x.Contains(privateKey)).ToArray();
            }
            if (defualtHandler == DefualtHandler.DropCompletely)
            {
                for (int i = 0; i < properties.Length; i++)
                {
                    properties[i] = properties[i].Split('=')[0];
                }
            }
            switch (virtualHandler)
            {
                case VirtualHandler.DropKeyword:
                    for (int i = 0; i < properties.Length; i++)
                    {
                        properties[i] = properties[i].Replace(virtualKey, "");
                    }
                    break;
                case VirtualHandler.DropCompletely:
                    properties = properties.Where(x => !x.Contains(virtualKey)).ToArray();
                    break;
                default:
                    break;
            }
            stringBuilder.Append($"\n");
            foreach (string property in properties)
            {
                stringBuilder.Append($"\t\t{property}\n");
            }
        }

        void PrintMethod(StringBuilder stringBuilder, CsClass classData, VirtualHandler virtualHandler = VirtualHandler.DropKeyword, DefualtHandler defualtHandler = DefualtHandler.DropCompletely, PrivateHandler privateHandler = PrivateHandler.DropCompletely)
        {
            throw new NotImplementedException();
        }

        KeyValuePair<string, string> WriteCsObject(PrintType printType, CsClass classData, Action<StringBuilder, CsClass>? MiddleInsert = null, bool writeAsClassicSyntax = false)
        {
            StringBuilder stringBuilder = new StringBuilder();
            foreach (string included in classData.Usings)
            {
                stringBuilder.Append($"{included}\n");
            }
            stringBuilder.Append($"\n");
            if (writeAsClassicSyntax)
            {
                stringBuilder.Append($"namespace {classData.NameSpace}\n{{\n");
                string printAs;
                switch (printType)
                {
                    case PrintType.Class:
                        printAs = "public class ";
                        break;
                    case PrintType.Interface:
                        printAs = "public interface I";
                        break;
                    default:
                        printAs = "public partial class ";
                        break;
                }
                stringBuilder.Append($"\t{printAs}{classData.Class}\n\t{{\n");
                MiddleInsert?.Invoke(stringBuilder, classData);
                stringBuilder.Append($"\t}}\n");
                stringBuilder.Append($"}}");
            }
            else
            {
                stringBuilder.Append($"namespace {classData.NameSpace};\n\n");
                string printAs;
                switch (printType)
                {
                    case PrintType.Class:
                        printAs = "public class ";
                        break;
                    case PrintType.Interface:
                        printAs = "public interface I";
                        break;
                    default:
                        printAs = "public partial class ";
                        break;
                }
                stringBuilder.Append($"{printAs}{classData.Class}\n{{\n");
                MiddleInsert?.Invoke(stringBuilder, classData);
                stringBuilder.Append($"}}");
            }
            return new KeyValuePair<string, string>((printType == PrintType.Interface ? "I" : "") + classData.Class, stringBuilder.ToString());
        }

        CsClass ParseCsClass(string path)
        {
            string source = File.ReadAllText(path);
            SyntaxTree tree = CSharpSyntaxTree.ParseText(source);

            CompilationUnitSyntax root = tree.GetCompilationUnitRoot();

            //First try the classic scoped approch to the name space
            BaseNamespaceDeclarationSyntax nameSpace = (NamespaceDeclarationSyntax)root.Members.Where(x => x.Kind() == SyntaxKind.NamespaceDeclaration).FirstOrDefault()!;
            ClassDeclarationSyntax csClass;
            PropertyDeclarationSyntax[] Property;
            MethodDeclarationSyntax[] Method;
            //if the name space was null then we are probably in new file scoped namespace approach, so restart with that approch and start again
            if (nameSpace == null)
            {
                nameSpace = (FileScopedNamespaceDeclarationSyntax)root.Members.Where(x => x.Kind() == SyntaxKind.FileScopedNamespaceDeclaration).FirstOrDefault()!;
                csClass = (ClassDeclarationSyntax)nameSpace.Members.Where(x => x.Kind() == SyntaxKind.ClassDeclaration).FirstOrDefault()!;
                Property = csClass.Members.Where(x => x.Kind() == SyntaxKind.PropertyDeclaration).Cast<PropertyDeclarationSyntax>().ToArray();
                Method = csClass.Members.Where(x => x.Kind() == SyntaxKind.MethodDeclaration).Cast<MethodDeclarationSyntax>().ToArray();
            }
            //else contu with the classics
            else
            {
                csClass = (ClassDeclarationSyntax)nameSpace.Members.Where(x => x.Kind() == SyntaxKind.ClassDeclaration).FirstOrDefault()!;
                Property = csClass.Members.Where(x => x.Kind() == SyntaxKind.PropertyDeclaration).Cast<PropertyDeclarationSyntax>().ToArray();
                Method = csClass.Members.Where(x => x.Kind() == SyntaxKind.MethodDeclaration).Cast<MethodDeclarationSyntax>().ToArray();
            }

            return new CsClass
            {
                Usings = root.Usings.Select(x => x.ToString()).ToArray(),
                NameSpace = nameSpace!.Name.ToString(),
                Class = csClass.Identifier.ToString(),
                Properties = Property.Select(x => $"{x.Modifiers} {x.Type} {x.Identifier} {x.AccessorList} {x.Initializer}").ToArray(),
                Methods = Method.Select(x => x.ToFullString()).ToArray(),
            };
        }

        KeyValuePair<string, string> WriteCsObjects(PrintType printType, string path, Action<StringBuilder, CsClass> middleInsert = null, bool writeAsClassicSyntax = false)
        {
            CsClass partialClass = ParseCsClass(path);
            return WriteCsObject(printType, partialClass, middleInsert, writeAsClassicSyntax);
        }

        Dictionary<string, string> WriteCsObjects(PrintType printType, string[] paths, Action<StringBuilder, CsClass> middleInsert = null, bool print = true, bool writeAsClassicSyntax = false)
        {
            Dictionary<string, string> classesStrings = new Dictionary<string, string>();
            foreach (string path in paths)
            {
                KeyValuePair<string, string> classOutput = WriteCsObjects(printType, path, middleInsert, writeAsClassicSyntax: writeAsClassicSyntax);
                if (print)
                {
                    Console.Write($"\n{path}\n{classOutput.Value}");
                }
                classesStrings.Add(classOutput.Key, classOutput.Value);
            }
            return classesStrings;
        }

        void SaveOutputs(string outputFolder, Dictionary<string, string> toOutput)
        {
            foreach (KeyValuePair<string, string> output in toOutput)
            {
                string outputPath = $"{outputFolder}{output.Key}.cs";
                Console.Write($"\nWriten {output.Key}.cs File To: {outputPath} as \n{output.Value}");
                File.WriteAllText(outputPath, output.Value);
                //this.GenerationEnvironment.Remove(0, this.GenerationEnvironment.Length);
            }
        }

        void CreateTemplateFiles(PrintType printType, string targetPath, string outputPath, Action<StringBuilder, CsClass> MiddleInsert = null, bool printAll = false, bool rewriteAll = false, bool writeAsClassicSyntax = false)
        {
            string[] targetFiles = Directory.GetFiles(targetPath);
            string[] outputFiles = Directory.GetFiles(outputPath);
            Dictionary<string, string> Output;
            if (printAll || rewriteAll)
            {
                Output = WriteCsObjects(printType, targetFiles, MiddleInsert, print: printAll, writeAsClassicSyntax: writeAsClassicSyntax);
                if (rewriteAll)
                {
                    SaveOutputs(outputPath, Output);
                    return;
                }
            }
            string[] missingFiles = GetFileDifs(targetFiles, outputFiles);
            Output = WriteCsObjects(printType, missingFiles, MiddleInsert, print: !printAll, writeAsClassicSyntax: writeAsClassicSyntax);
            SaveOutputs(outputPath, Output);
        }
    }
}
