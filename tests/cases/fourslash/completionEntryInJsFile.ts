///<reference path="fourslash.ts" />

// @allowJs: true
// @Filename: /Foo.js
//// /*global*/
////class classA {
////    /*class*/
////}
////class Test7 {
////	constructor(/*constructorParameter*/){}
////}
////function foo() {
/////*insideFunction*/
////}
const warnings = [
    { name: "classA", sortText: completion.SortText.JavascriptIdentifiers },
    { name: "Test7", sortText: completion.SortText.JavascriptIdentifiers },
    { name: "foo", sortText: completion.SortText.JavascriptIdentifiers }
];
verify.completions(
    { marker: "global", exact: completion.globalsInJsPlus(["foo", "classA", "Test7"]) },
    {
        marker: "class",
        isNewIdentifierLocation: true,
        exact: [
            ...warnings,
            ...completion.classElementInJsKeywords
        ]
    },
    {
        marker: "constructorParameter",
        isNewIdentifierLocation: true,
        exact: warnings
    },
    { marker: "insideFunction", exact: completion.globalsInJsInsideFunction(["foo", "classA", "Test7"]) },
);