# MountainTracker2
<h1>Upgrade of mountain tracker to .NET Core and Angular 13+</h1>
<p>Features:</p>
-Web Client:<br/>
->Newest Angular 17 frame work in typescript (compiled to Javascript)<br/>
->Leaflet for Openstreetmaps (cycle map) interactive map (native js lib with a definitely typed import)<br/>
->Pannellum for panoramic views (Fully native JS (no type def in 'definitely typed' or other available) import to typescript with component)<br/>
->GraphQL as Apollo<br/>
->NgRx Store (with Entity Adapter & async Effects) for reactive state control and data management<br/>
->Some custom typescript decorators for custom reflection helpers<br/>
->Testing will be as Karma (kind of easier out of the box with truer runs) and maybe Jest for a pipeline if need</p>
<p>-Server:<br/>
->ASP.NET Core with Angular 17 intergration<br/>
->API GraphQL as GraphGL.NET<br/>
->Maybe additional API as classic REST<br/>
->SQL intergration as Entity Framework (EF) Core<br/>
->Testing will be as XUnit</p>
<p>-Database:<br/>
->Tables<br/>
->Stored Procedures<br/>
->Triggers<br/>
->Classic selects<br/>
->Pre deployment and post deployment rebuild scripts<br/>
->Versioning will be done additional though update scrips</p>
-Phone Client:<br/>
->Will be cross platform MAUI<br/>
->Testing will be as XUnit</p>
