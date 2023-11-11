/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/
--to do divide conserns to make more managable by pulling script apart and refernecing in other scripts.

--Adding data to the Countires table
--insert all of the data
INSERT INTO [dbo].[Countries] ([ID], [EnglishFullName], [CountryCode])
VALUES 
( 0, 'Afghanistan', 'AF'),
( 1, 'Aland Islands', 'AX'),
( 2, 'Albania', 'AL'),
( 3, 'Algeria', 'DZ'),
( 4, 'American Samoa', 'AS'),
( 5, 'Andorra', 'AD'),
( 6, 'Angola', 'AO'),
( 7, 'Anguilla', 'AI'),
( 8, 'Antarctica', 'AQ'),
( 9, 'Antigua and Barbuda', 'AG'),
( 10, 'Argentina', 'AR'),
( 11, 'Armenia', 'AM'),
( 12, 'Aruba', 'AW'),
( 13, 'Australia', 'AU'),
( 14, 'Austria', 'AT'),
( 15, 'Azerbaijan', 'AZ'),
( 16, 'Bahrain', 'BH'),
( 17, 'Bahamas', 'BS'),
( 18, 'Bangladesh', 'BD'),
( 19, 'Barbados', 'BB'),
( 20, 'Belarus', 'BY'),
( 21, 'Belgium', 'BE'),
( 22, 'Belize', 'BZ'),
( 23, 'Benin', 'BJ'),
( 24, 'Bermuda', 'BM'),
( 25, 'Bhutan', 'BT'),
( 26, 'Bolivia, Plurinational State of', 'BO'),
( 27, 'Bonaire, Sint Eustatius and Saba', 'BQ'),
( 28, 'Bosnia and Herzegovina', 'BA'),
( 29, 'Botswana', 'BW'),
( 30, 'Bouvet Island', 'BV'),
( 31, 'Brazil', 'BR'),
( 32, 'British Indian Ocean Territory', 'IO'),
( 33, 'Brunei Darussalam', 'BN'),
( 34, 'Bulgaria', 'BG'),
( 35, 'Burkina Faso', 'BF'),
( 36, 'Burundi', 'BI'),
( 37, 'Cambodia', 'KH'),
( 38, 'Cameroon', 'CM'),
( 39, 'Canada', 'CA'),
( 40, 'Cape Verde', 'CV'),
( 41, 'Cayman Islands', 'KY'),
( 42, 'Central African Republic', 'CF'),
( 43, 'Chad', 'TD'),
( 44, 'Chile', 'CL'),
( 45, 'China', 'CN'),
( 46, 'Christmas Island', 'CX'),
( 47, 'Cocos (Keeling) Islands', 'CC'),
( 48, 'Colombia', 'CO'),
( 49, 'Comoros', 'KM'),
( 50, 'Congo', 'CG'),
( 51, 'Congo, the Democratic Republic of the', 'CD'),
( 52, 'Cook Islands', 'CK'),
( 53, 'Costa Rica', 'CR'),
( 54, 'Cote d''Ivoire', 'CI'),
( 55, 'Croatia', 'HR'),
( 56, 'Cuba', 'CU'),
( 57, 'Curacao', 'CW'),
( 58, 'Cyprus', 'CY'),
( 59, 'Czech Republic', 'CZ'),
( 60, 'Denmark', 'DK'),
( 61, 'Djibouti', 'DJ'),
( 62, 'Dominica', 'DM'),
( 63, 'Dominican Republic', 'DO'),
( 64, 'Ecuador', 'EC'),
( 65, 'Egypt', 'EG'),
( 66, 'El Salvador', 'SV'),
( 67, 'Equatorial Guinea', 'GQ'),
( 68, 'Eritrea', 'ER'),
( 69, 'Estonia', 'EE'),
( 70, 'Ethiopia', 'ET'),
( 71, 'Falkland Islands (Malvinas)', 'FK'),
( 72, 'Faroe Islands', 'FO'),
( 73, 'Fiji', 'FJ'),
( 74, 'Finland', 'FI'),
( 75, 'France', 'FR'),
( 76, 'French Guiana', 'GF'),
( 77, 'French Polynesia', 'PF'),
( 78, 'French Southern Territories', 'TF'),
( 79, 'Gabon', 'GA'),
( 80, 'Gambia', 'GM'),
( 81, 'Georgia', 'GE'),
( 82, 'Germany', 'DE'),
( 83, 'Ghana', 'GH'),
( 84, 'Gibraltar', 'GI'),
( 85, 'Greece', 'GR'),
( 86, 'Greenland', 'GL'),
( 87, 'Grenada', 'GD'),
( 88, 'Guadeloupe', 'GP'),
( 89, 'Guam', 'GU'),
( 90, 'Guatemala', 'GT'),
( 91, 'Guernsey', 'GG'),
( 92, 'Guinea', 'GN'),
( 93, 'Guinea-Bissau', 'GW'),
( 94, 'Guyana', 'GY'),
( 95, 'Haiti', 'HT'),
( 96, 'Heard Island and McDonald Islands', 'HM'),
( 97, 'Holy See (Vatican City State)', 'VA'),
( 98, 'Honduras', 'HN'),
( 99, 'Hong Kong', 'HK'),
( 100, 'Hungary', 'HU'),
( 101, 'Iceland', 'IS'),
( 102, 'India', 'IN'),
( 103, 'Indonesia', 'ID'),
( 104, 'Iran, Islamic Republic of', 'IR'),
( 105, 'Iraq', 'IQ'),
( 106, 'Ireland', 'IE'),
( 107, 'Isle of Man', 'IM'),
( 108, 'Israel', 'IL'),
( 109, 'Italy', 'IT'),
( 110, 'Jamaica', 'JM'),
( 111, 'Japan', 'JP'),
( 112, 'Jersey', 'JE'),
( 113, 'Jordan', 'JO'),
( 114, 'Kazakhstan', 'KZ'),
( 115, 'Kenya', 'KE'),
( 116, 'Kiribati', 'KI'),
( 117, 'Korea, Democratic People''s Republic of', 'KP'),
( 118, 'Korea, Republic of', 'KR'),
( 119, 'Kuwait', 'KW'),
( 120, 'Kyrgyzstan', 'KG'),
( 121, 'Lao People''s Democratic Republic', 'LA'),
( 122, 'Latvia''', 'LV'),
( 123, 'Lebanon', 'LB'),
( 124, 'Lesotho', 'LS'),
( 125, 'Liberia', 'LR'),
( 126, 'Libya', 'LY'),
( 127, 'Liechtenstein', 'LI'),
( 128, 'Lithuania', 'LT'),
( 129, 'Luxembourg', 'LU'),
( 130, 'Macao', 'MO'),
( 131, 'Macedonia, the Former Yugoslav Republic of', 'MK'),
( 132, 'Madagascar', 'MG'),
( 133, 'Malawi', 'MW'),
( 134, 'Malaysia', 'MY'),
( 135, 'Maldives', 'MV'),
( 136, 'Mali', 'ML'),
( 137, 'Malta', 'MT'),
( 138, 'Marshall Islands', 'MH'),
( 139, 'Martinique', 'MQ'),
( 140, 'Mauritania', 'MR'),
( 141, 'Mauritius', 'MU'),
( 142, 'Mayotte', 'YT'),
( 143, 'Mexico', 'MX'),
( 144, 'Micronesia, Federated States of', 'FM'),
( 145, 'Moldova, Republic of', 'MD'),
( 146, 'Monaco', 'MC'),
( 147, 'Mongolia', 'MN'),
( 148, 'Montenegro', 'ME'),
( 149, 'Montserrat', 'MS'),
( 150, 'Morocco', 'MA'),
( 151, 'Mozambique', 'MZ'),
( 152, 'Myanmar', 'MM'),
( 153, 'Namibia', 'NA'),
( 154, 'Nauru', 'NR'),
( 155, 'Nepal', 'NP'),
( 156, 'Netherlands', 'NL'),
( 157, 'New Caledonia', 'NC'),
( 158, 'New Zealand', 'NZ'),
( 159, 'Nicaragua', 'NI'),
( 160, 'Niger', 'NE'),
( 161, 'Nigeria', 'NG'),
( 162, 'Niue', 'NU'),
( 163, 'Norfolk Island', 'NF'),
( 164, 'Northern Mariana Islands', 'MP'),
( 165, 'Norway', 'NO'),
( 166, 'Oman', 'OM'),
( 167, 'Pakistan', 'PK'),
( 168, 'Palau', 'PW'),
( 169, 'Palestine, State of', 'PS'),
( 170, 'Panama', 'PA'),
( 171, 'Papua New Guinea', 'PG'),
( 172, 'Paraguay', 'PY'),
( 173, 'Peru', 'PE'),
( 174, 'Philippines', 'PH'),
( 175, 'Pitcairn', 'PN'),
( 176, 'Poland', 'PL'),
( 177, 'Portugal', 'PT'),
( 178, 'Puerto Rico', 'PR'),
( 179, 'Qatar', 'QA'),
( 180, 'Reunion', 'RE'),
( 181, 'Romania', 'RO'),
( 182, 'Russian Federation', 'RU'),
( 183, 'Rwanda', 'RW'),
( 184, 'Saint Barthelemy', 'BL'),
( 185, 'Saint Helena, Ascension and Tristan da Cunha', 'SH'),
( 186, 'Saint Kitts and Nevis', 'KN'),
( 187, 'Saint Lucia', 'LC'),
( 188, 'Saint Martin (French part)', 'MF'),
( 189, 'Saint Pierre and Miquelon', 'PM'),
( 190, 'Saint Vincent and the Grenadines', 'VC'),
( 191, 'Samoa', 'WS'),
( 192, 'San Marino', 'SM'),
( 193, 'Sao Tome and Principe', 'ST'),
( 194, 'Saudi Arabia', 'SA'),
( 195, 'Senegal', 'SN'),
( 196, 'Serbia', 'RS'),
( 197, 'Seychelles', 'SC'),
( 198, 'Sierra Leone', 'SL'),
( 199, 'Singapore', 'SG'),
( 200, 'Sint Maarten (Dutch part)', 'SX'),
( 201, 'Slovakia', 'SK'),
( 202, 'Slovenia', 'SI'),
( 203, 'Solomon Islands', 'SB'),
( 204, 'Somalia', 'SO'),
( 205, 'South Africa', 'ZA'),
( 206, 'South Georgia and the South Sandwich Islands', 'GS'),
( 207, 'South Sudan', 'SS'),
( 208, 'Spain', 'ES'),
( 209, 'Sri Lanka', 'LK'),
( 210, 'Sudan', 'SD'),
( 211, 'Suriname', 'SR'),
( 212, 'Svalbard and Jan Mayen', 'SJ'),
( 213, 'Swaziland', 'SZ'),
( 214, 'Sweden', 'SE'),
( 215, 'Switzerland', 'CH'),
( 216, 'Syrian Arab Republic', 'SY'),
( 217, 'Taiwan, Province of China', 'TW'),
( 218, 'Tajikistan', 'TJ'),
( 219, 'Tanzania, United Republic of', 'TZ'),
( 220, 'Thailand', 'TH'),
( 221, 'Timor-Leste', 'TL'),
( 222, 'Togo', 'TG'),
( 223, 'Tokelau', 'TK'),
( 224, 'Tonga', 'TO'),
( 225, 'Trinidad and Tobago', 'TT'),
( 226, 'Tunisia', 'TN'),
( 227, 'Turkey', 'TR'),
( 228, 'Turkmenistan', 'TM'),
( 229, 'Turks and Caicos Islands', 'TC'),
( 230, 'Tuvalu', 'TV'),
( 231, 'Uganda', 'UG'),
( 232, 'Ukraine', 'UA'),
( 233, 'United Arab Emirates', 'AE'),
( 234, 'United Kingdom', 'GB'),
( 235, 'United States', 'US'),
( 236, 'United States Minor Outlying Islands', 'UM'),
( 237, 'Uruguay', 'UY'),
( 238, 'Uzbekistan', 'UZ'),
( 239, 'Vanuatu', 'VU'),
( 240, 'Venezuela, Bolivarian Republic of', 'VE'),
( 241, 'Viet Nam', 'VN'),
( 242, 'Virgin Islands, British', 'VG'),
( 243, 'Virgin Islands, U.S.', 'VI'),
( 244, 'Wallis and Futuna', 'WF'),
( 245, 'Western Sahara', 'EH'),
( 246, 'Yemen', 'YE'),
( 247, 'Zambia', 'ZM'),
( 248, 'Zimbabwe', 'ZW');
go

if(exists(select ID from Countries where [EnglishFullName] = 'Zimbabwe' and [CountryCode] = 'ZW'))
	print 'Countries successfully populated'
else
begin
	print 'Countries unsuccessfully populated'
	raiserror('Countries unsuccessfully populated', 20, -1) with log
end
go

--Add [ProvincesOrStates]
--Add Provinces for Canada
Declare @CountryCode as TinyInt
select @CountryCode = ID from Countries where CountryCode = 'CA'
INSERT INTO [ProvincesOrStates] ([ID], [EnglishFullName], [RegionCode], [CountryID])
VALUES 
( 0, 'Alberta', 'AB', @CountryCode),
( 1, 'British Columbia', 'BC', @CountryCode),
( 2, 'Manitoba', 'MB', @CountryCode),
( 3, 'New Brunswick', 'NB', @CountryCode),
( 4, 'Newfoundland and Labrador', 'NL', @CountryCode),
( 5, 'Nova Scotia', 'NS', @CountryCode),
( 6, 'Ontario', 'ON', @CountryCode),
( 7, 'Prince Edward Island', 'PE', @CountryCode),
( 8, 'Quebec', 'QC', @CountryCode),
( 9, 'Saskatchewan', 'SK', @CountryCode),
( 10, 'Northwest Territories', 'NT', @CountryCode),
( 11, 'Nunavut', 'NU', @CountryCode),
( 12, 'Yukon', 'YT', @CountryCode);

if(exists(select ID from [ProvincesOrStates] where [EnglishFullName] = 'Nunavut' and [RegionCode] = 'NU' and @CountryCode = [CountryID]))
	print 'Canadain Prov successfully populated'
else
begin
	print 'Canadain Prov unsuccessfully populated'
	raiserror('Canadain Prov unsuccessfully populated', 20, -1) with log
end
go

--Add States for US
Declare @CountryCode as TinyInt
select @CountryCode = ID from Countries where CountryCode = 'US'
INSERT INTO [ProvincesOrStates] ([ID], [EnglishFullName], [RegionCode], [CountryID])
VALUES 
( 13, 'Alabama', 'AL', @CountryCode),
( 14, 'Alaska', 'AK', @CountryCode),
( 15, 'Arizona', 'AZ', @CountryCode),
( 16, 'Arkansas', 'AR', @CountryCode),
( 17, 'California', 'CA', @CountryCode),
( 18, 'Colorado', 'CO', @CountryCode),
( 19, 'Connecticut', 'CT', @CountryCode),
( 20, 'Delaware', 'DE', @CountryCode),
( 21, 'Florida', 'FL', @CountryCode),
( 22, 'Georgia', 'GA', @CountryCode),
( 23, 'Hawaii', 'HI', @CountryCode),
( 24, 'Idaho', 'ID', @CountryCode),
( 25, 'Illinois', 'IL', @CountryCode),
( 26, 'Indiana', 'IN', @CountryCode),
( 27, 'Iowa', 'IA', @CountryCode),
( 28, 'Kansas', 'KS', @CountryCode),
( 29, 'Kentucky', 'KY', @CountryCode),
( 30, 'Louisiana', 'LA', @CountryCode),
( 31, 'Maine', 'ME', @CountryCode),
( 32, 'Maryland', 'MD', @CountryCode),
( 33, 'Massachusetts', 'MA', @CountryCode),
( 34, 'Michigan', 'MI', @CountryCode),
( 35, 'Minnesota', 'MN', @CountryCode),
( 36, 'Mississippi', 'MS', @CountryCode),
( 37, 'Missouri', 'MO', @CountryCode),
( 38, 'Montana', 'MT', @CountryCode),
( 39, 'Nebraska', 'NE', @CountryCode),
( 40, 'Nevada', 'NV', @CountryCode),
( 41, 'New Hampshire', 'NH', @CountryCode),
( 42, 'New Jersey', 'NJ', @CountryCode),
( 43, 'New Mexico', 'NM', @CountryCode),
( 44, 'New York', 'NY', @CountryCode),
( 45, 'North Carolina', 'NC', @CountryCode),
( 46, 'North Dakota', 'ND', @CountryCode),
( 47, 'Ohio', 'OH', @CountryCode),
( 48, 'Oklahoma', 'OK', @CountryCode),
( 49, 'Oregon', 'OR', @CountryCode),
( 50, 'Pennsylvania', 'PA', @CountryCode),
( 51, 'Rhode Island', 'RI', @CountryCode),
( 52, 'South Carolina', 'SC', @CountryCode),
( 53, 'South Dakota', 'SD', @CountryCode),
( 54, 'Tennessee', 'TN', @CountryCode),
( 55, 'Texas', 'TX', @CountryCode),
( 56, 'Utah', 'UT', @CountryCode),
( 57, 'Vermont', 'VT', @CountryCode),
( 58, 'Virginia', 'VA', @CountryCode),
( 59, 'Washington', 'WA', @CountryCode),
( 60, 'West Virginia', 'WV', @CountryCode),
( 61, 'Wisconsin', 'WI', @CountryCode),
( 62, 'Wyoming', 'WY', @CountryCode);

if(exists(select ID from [ProvincesOrStates] where [EnglishFullName] = 'Wyoming' and [RegionCode] = 'WY' and @CountryCode = [CountryID]))
	print 'US States successfully populated'
else
begin
	print 'US States unsuccessfully populated'
	raiserror('US States unsuccessfully populated', 20, -1) with log
end
go
--------------------------------------------------------------------------------Add Prov or states for Countries here

--Climbing types Populating
INSERT INTO [ClimbingTypes] ([ID], [EnglishFullName])
VALUES 
( 0, 'Trad Climbing'),
( 1, 'Sport Climbing'),
( 2, 'Mixed Climbing');

if(exists(select ID from [ClimbingTypes] where [EnglishFullName] = 'Trad Climbing'))
	print '[ClimbingTypes] successfully populated'
else
begin
	print '[ClimbingTypes] unsuccessfully populated'
	raiserror('[ClimbingTypes] unsuccessfully populated', 20, -1) with log
end
go

--Gear Populating

--Gear
INSERT INTO [Gear] ([ID], [EnglishFullName])
VALUES 
( 0, 'Rope'),
( 1, 'Quick Draw'),
( 2, 'Anchor'),
( 3, 'Hex Stopper'),
( 4, 'Wire Stopper Standard'),
( 5, 'Wire Stopper Micro'),
( 6, 'Offset Stopper'),
( 7, 'Tricam'),
( 8, 'Cam'),
( 9, 'Standard Rack'),
( 10, 'Alpine Rack'),
( 11, 'Bongs/Chocks');

if(exists(select ID from [Gear] where [EnglishFullName] = 'Bongs/Chocks'))
	print '[Gear] successfully populated'
else
begin
	print '[Gear] unsuccessfully populated'
	raiserror('[Gear] unsuccessfully populated', 20, -1) with log
end
go
Declare @RopeCode as TinyInt, @QuickDrawCode as TinyInt, @AnchorCode as TinyInt, @HexStopperCode as TinyInt,
@WireStopperStandardCode as TinyInt, @WireStopperMicroCode as TinyInt, @OffsetStopperCode as TinyInt, 
@TricamCode as TinyInt, @CamCode as TinyInt, @StandardRackCode as TinyInt,
@AlpineRackCode as TinyInt, @BongAndChocksCode as TinyInt
select @RopeCode = ID from [Gear] where [EnglishFullName] = 'Rope'
select @QuickDrawCode = ID from [Gear] where [EnglishFullName] = 'Quick Draw'
select @AnchorCode = ID from [Gear] where [EnglishFullName] = 'Anchor'
select @HexStopperCode = ID from [Gear] where [EnglishFullName] = 'Hex Stopper'
select @WireStopperStandardCode = ID from [Gear] where [EnglishFullName] = 'Wire Stopper Standard'
select @WireStopperMicroCode = ID from [Gear] where [EnglishFullName] = 'Wire Stopper Micro'
select @OffsetStopperCode = ID from [Gear] where [EnglishFullName] = 'Offset Stopper'
select @TricamCode = ID from [Gear] where [EnglishFullName] = 'Tricam'
select @CamCode = ID from [Gear] where [EnglishFullName] = 'Cam'
select @StandardRackCode = ID from [Gear] where [EnglishFullName] = 'Standard Rack'
select @AlpineRackCode = ID from [Gear] where [EnglishFullName] = 'Alpine Rack'
select @BongAndChocksCode = ID from [Gear] where [EnglishFullName] = 'Bongs/Chocks'

--Gear sizes
INSERT INTO [GearSizes] ([ID], [EnglishFullName], [GearID])
VALUES 
( 0, '50 Meter Rope', @RopeCode),
( 1, '60 Meter Rope', @RopeCode),
( 2, '70 Meter Rope', @RopeCode),
( 3, 'Double 50 Meter Rope', @RopeCode),
( 4, 'Double 60 Meter Rope', @RopeCode),
( 5, 'Double 70 Meter Rope', @RopeCode),
( 6, 'Standard Quick Draw', @QuickDrawCode),
( 7, 'Extendable Quick Draw', @QuickDrawCode),
( 8, 'Two Bolt Anchor', @AnchorCode),
( 9, 'Two Bolt Anchor With Rap Rings', @AnchorCode),
( 10, 'Three Bolt Anchor', @AnchorCode),
( 12, 'Three Bolt Anchor With Rap Rings', @AnchorCode),
( 13, 'Hexcentrics - 0.25', @HexStopperCode),
( 14, 'Hexcentrics - 0.5', @HexStopperCode),
( 15, 'Hexcentrics - 0.75', @HexStopperCode),
( 16, 'Hexcentrics - 1', @HexStopperCode),
( 17, 'Hexcentrics - 1.25', @HexStopperCode),
( 18, 'Hexcentrics - 1.5', @HexStopperCode),
( 19, 'Hexcentrics - 1.75', @HexStopperCode),
( 20, 'Hexcentrics - 2', @HexStopperCode),
( 21, 'Hexcentrics - 2.5', @HexStopperCode),
( 22, 'Hexcentrics - 3', @HexStopperCode),
( 23, 'Hexcentrics - 3.5', @HexStopperCode),
( 24, 'Wire Stopper - 0.25', @WireStopperStandardCode),
( 25, 'Wire Stopper - 0.5', @WireStopperStandardCode),
( 26, 'Wire Stopper - 0.75', @WireStopperStandardCode),
( 27, 'Wire Stopper - 1', @WireStopperStandardCode),
( 28, 'Wire Stopper - 1.25', @WireStopperStandardCode),
( 29, 'Wire Stopper - 1.5', @WireStopperStandardCode),
( 30, 'Wire Stopper - 1.75', @WireStopperStandardCode),
( 31, 'Wire Stopper - 2', @WireStopperStandardCode),
( 32, 'Wire Stopper - 2.5', @WireStopperStandardCode),
( 33, 'Wire Stopper - 3', @WireStopperStandardCode),
( 34, 'Wire Stopper - 3.5', @WireStopperStandardCode),
( 35, 'Wire Stopper - 4', @WireStopperStandardCode),
( 36, 'Wire Stopper - 4.5', @WireStopperStandardCode),
( 37, 'Micro Stopper - 0.14', @WireStopperMicroCode),
( 38, 'Micro Stopper - 0.16', @WireStopperMicroCode),
( 39, 'Micro Stopper - 0.18', @WireStopperMicroCode),
( 40, 'Micro Stopper - 0.2', @WireStopperMicroCode),
( 41, 'Micro Stopper - 0.22', @WireStopperMicroCode),
( 42, 'Micro Stopper - 0.25', @WireStopperMicroCode),
( 43, 'Offset Stoper - 0.25', @OffsetStopperCode),
( 44, 'Offset Stoper - 0.5', @OffsetStopperCode),
( 45, 'Offset Stoper - 0.75', @OffsetStopperCode),
( 46, 'Offset Stoper - 1', @OffsetStopperCode),
( 47, 'Offset Stoper - 1.25', @OffsetStopperCode),
( 48, 'Offset Stoper - 1.5', @OffsetStopperCode),
( 49, 'Offset Stoper - 1.75', @OffsetStopperCode),
( 51, 'Offset Stoper - 2', @OffsetStopperCode),
( 52, 'Offset Stoper - 2.5', @OffsetStopperCode),
( 53, 'Offset Stoper - 3', @OffsetStopperCode),
( 54, 'Offset Stoper - 3.5', @OffsetStopperCode),
( 55, 'Tricam - 0.5', @TricamCode),
( 56, 'Tricam - 0.75', @TricamCode),
( 57, 'Tricam - 1', @TricamCode),
( 58, 'Tricam - 1.5', @TricamCode),
( 59, 'Tricam - 2', @TricamCode),
( 60, 'Tricam - 2.5', @TricamCode),
( 61, 'Tricam - 3', @TricamCode),
( 62, 'Tricam - 3.5', @TricamCode),
( 63, 'Cam Size - 0.25', @CamCode),
( 64, 'Cam Size - 0.5', @CamCode),
( 65, 'Cam Size - 0.75', @CamCode),
( 66, 'Cam Size - 1', @CamCode),
( 67, 'Cam Size - 1.25', @CamCode),
( 68, 'Cam Size - 1.5', @CamCode),
( 69, 'Cam Size - 1.75', @CamCode),
( 70, 'Cam Size - 2', @CamCode),
( 71, 'Cam Size - 2.5', @CamCode),
( 72, 'Cam Size - 3', @CamCode),
( 73, 'Cam Size - 3.5', @CamCode),
( 74, 'Cam Size - 4', @CamCode),
( 75, 'Cam Size - 4.5', @CamCode),
( 76, 'Cam Size - 5', @CamCode),
( 77, 'Cam Size - 5.5', @CamCode),
( 78, 'Cam Size - 6', @CamCode),
( 79, 'Cam Size - 6.5', @CamCode),
( 80, 'Cam Size - 7', @CamCode),
( 81, 'Cam Size - 7.5', @CamCode),
( 82, 'Cam Size - 8', @CamCode),
( 83, 'Cam Size - 8.5', @CamCode),
( 84, 'Cam Size - 9', @CamCode),
( 85, 'Cam Size - 9.5', @CamCode),
( 86, 'Cam Size - 10', @CamCode),
( 87, 'Standard Rack - 1', @StandardRackCode),
( 88, 'Standard Rack - 1.5', @StandardRackCode),
( 89, 'Standard Rack - 2', @StandardRackCode),
( 90, 'Standard Rack - 2.5', @StandardRackCode),
( 91, 'Standard Rack - 3', @StandardRackCode),
( 92, 'Standard Rack - 3.5', @StandardRackCode),
( 93, 'Standard Rack - 4', @StandardRackCode),
( 94, 'Standard Rack - 4.5', @StandardRackCode),
( 95, 'Standard Rack - 5', @StandardRackCode),
( 96, 'Standard Rack - 5.5', @StandardRackCode),
( 97, 'Standard Rack - 6', @StandardRackCode),
( 98, 'Standard Rack - 6.5', @StandardRackCode),
( 99, 'Standard Rack - 7', @StandardRackCode),
( 100, 'Standard Rack - 7.5', @StandardRackCode),
( 101, 'Standard Rack - 8', @StandardRackCode),
( 102, 'Standard Rack - 8.5', @StandardRackCode),
( 103, 'Standard Rack - 9', @StandardRackCode),
( 104, 'Standard Rack - 9.5', @StandardRackCode),
( 105, 'Standard Rack - 10', @StandardRackCode),
( 106, 'Standard Rack - 10.5', @StandardRackCode),
( 107, 'Standard Rack - 11', @StandardRackCode),
( 108, 'Alpine Rack - 1', @AlpineRackCode),
( 109, 'Alpine Rack - 1.5', @AlpineRackCode),
( 110, 'Alpine Rack - 2', @AlpineRackCode),
( 111, 'Alpine Rack - 2.5', @AlpineRackCode),
( 112, 'Alpine Rack - 3', @AlpineRackCode),
( 113, 'Alpine Rack - 3.5', @AlpineRackCode),
( 114, 'Alpine Rack - 4', @AlpineRackCode),
( 115, 'Alpine Rack - 4.5', @AlpineRackCode),
( 116, 'Alpine Rack - 5', @AlpineRackCode),
( 117, 'Alpine Rack - 5.5', @AlpineRackCode),
( 118, 'Alpine Rack - 6', @AlpineRackCode),
( 119, 'Alpine Rack - 6.5', @AlpineRackCode),
( 120, 'Alpine Rack - 7', @AlpineRackCode),
( 121, 'Alpine Rack - 7.5', @AlpineRackCode),
( 122, 'Alpine Rack - 8', @AlpineRackCode),
( 123, 'Alpine Rack - 8.5', @AlpineRackCode),
( 124, 'Alpine Rack - 9', @AlpineRackCode),
( 125, 'Alpine Rack - 9.5', @AlpineRackCode),
( 126, 'Bong/Chock - 1', @BongAndChocksCode),
( 127, 'Bong/Chock - 2', @BongAndChocksCode),
( 128, 'Bong/Chock - 3', @BongAndChocksCode),
( 129, 'Bong/Chock - 4', @BongAndChocksCode),
( 130, 'Bong/Chock - 5', @BongAndChocksCode),
( 131, 'Bong/Chock - 6', @BongAndChocksCode),
( 132, 'Bong/Chock - 7', @BongAndChocksCode);

if(exists(select ID from [GearSizes] where [EnglishFullName] = 'Bong/Chock - 7'))
	print '[GearSizes] successfully populated'
else
begin
	print '[GearSizes] unsuccessfully populated'
	raiserror('[GearSizes] unsuccessfully populated', 20, -1) with log
end
go
--get Climing types
Declare @TradClimbingCode as TinyInt
select @TradClimbingCode = ID from [ClimbingTypes] where [EnglishFullName] = 'Trad Climbing'

--get gear codes
Declare @RopeCode as TinyInt, @QuickDrawCode as TinyInt, @AnchorCode as TinyInt, @HexStopperCode as TinyInt,
@WireStopperStandardCode as TinyInt, @WireStopperMicroCode as TinyInt, @OffsetStopperCode as TinyInt, 
@TricamCode as TinyInt, @CamCode as TinyInt, @StandardRackCode as TinyInt,
@AlpineRackCode as TinyInt, @BongAndChocksCode as TinyInt
select @RopeCode = ID from [Gear] where [EnglishFullName] = 'Rope'
select @QuickDrawCode = ID from [Gear] where [EnglishFullName] = 'Quick Draw'
select @AnchorCode = ID from [Gear] where [EnglishFullName] = 'Anchor'
select @HexStopperCode = ID from [Gear] where [EnglishFullName] = 'Hex Stopper'
select @WireStopperStandardCode = ID from [Gear] where [EnglishFullName] = 'Wire Stopper Standard'
select @WireStopperMicroCode = ID from [Gear] where [EnglishFullName] = 'Wire Stopper Micro'
select @OffsetStopperCode = ID from [Gear] where [EnglishFullName] = 'Offset Stopper'
select @TricamCode = ID from [Gear] where [EnglishFullName] = 'Tricam'
select @CamCode = ID from [Gear] where [EnglishFullName] = 'Cam'
select @StandardRackCode = ID from [Gear] where [EnglishFullName] = 'Standard Rack'
select @AlpineRackCode = ID from [Gear] where [EnglishFullName] = 'Alpine Rack'
select @BongAndChocksCode = ID from [Gear] where [EnglishFullName] = 'Bongs/Chocks'

--Link Gear types to gear
INSERT INTO [GearToGearTypeLinks] ([ClimbingTypeID], [GearID])
VALUES 
--Used for all 
(@TradClimbingCode, @RopeCode),--0,0
-- end of use for all
-- For Trad Climb Type
(@TradClimbingCode, @QuickDrawCode),--0,1
(@TradClimbingCode, @AnchorCode),
(@TradClimbingCode, @HexStopperCode),
(@TradClimbingCode, @WireStopperStandardCode),
(@TradClimbingCode, @WireStopperMicroCode),
(@TradClimbingCode, @OffsetStopperCode),
(@TradClimbingCode, @TricamCode),
(@TradClimbingCode, @CamCode),
(@TradClimbingCode, @StandardRackCode),
(@TradClimbingCode, @AlpineRackCode),
(@TradClimbingCode, @BongAndChocksCode);

if(exists(select [ClimbingTypeID], [GearID] from [GearToGearTypeLinks] where [ClimbingTypeID] = @TradClimbingCode and [GearID] = @BongAndChocksCode))
	print '[GearToGearTypeLinks] successfully populated'
else
begin
	print '[GearToGearTypeLinks] unsuccessfully populated'
	raiserror('[GearToGearTypeLinks] unsuccessfully populated', 20, -1) with log
end
go

--Add Rock Climbing Difficulties
INSERT INTO [RockClimbingDifficulties] ([ID], [EnglishCode])
VALUES 
(0, '5.1'),
(1, '5.2'),
(2, '5.3'),
(3, '5.4'),
(4, '5.5'),
(5, '5.6'),
(6, '5.7'),
(7, '5.8'),
(8, '5.9'),
(9, '5.10a'),
(10, '5.10b'),
(11, '5.10c'),
(12, '5.10d'),
(13, '5.11a'),
(14, '5.11b'),
(15, '5.11c'),
(16, '5.11d'),
(17, '5.12a'),
(18, '5.12b'),
(19, '5.12c'),
(20, '5.12d'),
(21, '5.13a'),
(22, '5.13b'),
(23, '5.13c'),
(24, '5.13d'),
(25, '5.14a'),
(26, '5.14b'),
(27, '5.14c'),
(28, '5.14d'),
(29, '5.15a'),
(30, '5.15b'),
(31, '5.15c'),
(32, '5.15d');

if(exists(select [ID] from [RockClimbingDifficulties] where [EnglishCode] = '5.15d'))
	print '[RockClimbingDifficulties] successfully populated'
else
begin
	print '[RockClimbingDifficulties] unsuccessfully populated'
	raiserror('[RockClimbingDifficulties] unsuccessfully populated', 20, -1) with log
end
go

--Add BusyRatings
INSERT INTO [BusyRatings] ([ID], [EnglishName])
VALUES 
(0, 'Unkown'),
(1, 'Not Rated'),
(2, 'Not Busy At All'),
(3, 'Sparsely Busy'),
(4, 'Busy'),
(5, 'Very Busy'),
(6, 'Exceptionally Busy')


if(exists(select [ID] from [BusyRatings] where [EnglishName] = 'Exceptionally Busy'))
	print '[BusyRatings] successfully populated'
else
begin
	print '[BusyRatings] unsuccessfully populated'
	raiserror('[BusyRatings] unsuccessfully populated', 20, -1) with log
end
go

--Add ClimbingQualityRatings
INSERT INTO [ClimbingQualityRatings] ([ID], [EnglishName])
VALUES 
(0, 'Unkown'),
(1, 'Not Rated'),
(2, 'Unclimbable Danger'),
(3, 'Slightly Dangerous'),
(4, 'Very Difficult'),
(5, 'Difficult'),
(6, 'Average'),
(7, 'Easy'),
(9, 'Very Easy')

if(exists(select [ID] from [BusyRatings] where [EnglishName] = 'Exceptionally Busy'))
	print '[BusyRatings] successfully populated'
else
begin
	print '[BusyRatings] unsuccessfully populated'
	raiserror('[BusyRatings] unsuccessfully populated', 20, -1) with log
end
go

INSERT INTO [UserAccessLevels] ([ID], [EnglishName])
VALUES 
(0, 'Unrestricted Admin'),
(1, 'Admin'),
(2, 'Moderater'),
(3, 'Guide'),
(4, 'PayedUser'),
(5, 'User');

if(exists(select [ID] from [UserAccessLevels] where [EnglishName] = 'User'))
	print '[UserAccessLevels] successfully populated'
else
begin
	print '[UserAccessLevels] unsuccessfully populated'
	raiserror('[UserAccessLevels] unsuccessfully populated', 20, -1) with log
end
go

print '<<<Reseeding Users'
DBCC CHECKIDENT ('Users', RESEED, 0)
print '>>>Reseeded Users'
print '<<<Recalling Users'
INSERT INTO Users
SELECT 
[FirstName],
[MiddleName],
[LastName],
[UserName],
[PrimaryPersonalEmail],
[EmailValidated],
[PrimaryPhone],
[PhoneValidated],
[KeepPrivate],
[MetricOverImperial],
[CountryID],
[ProvinceID],
[AccessLevelID],
[HashedPassword],
[Salt],
[ProfilePictureBytes],
[BannerPictureBytes],
[Bio],
[ProfileURL] FROM TempSavedUsers
print '>>>Users Recalled'
print '<<<Dropping Users Temp'
IF EXISTS(SELECT 1 FROM sys.Objects WHERE  Object_id = OBJECT_ID(N'dbo.TempSavedUsers') AND Type = N'U')
	drop table TempSavedUsers
print '>>>Users Temp Dropped'

--Reseed
declare @reseed bit = 1
if(@reseed = 1)
begin
DBCC CHECKIDENT ('Regions', RESEED, 0)
DBCC CHECKIDENT ('Districts', RESEED, 0)
DBCC CHECKIDENT ('DistrictZones', RESEED, 0)
DBCC CHECKIDENT ('ZoneAreas', RESEED, 0)
DBCC CHECKIDENT ('RockClimbingWalls', RESEED, 0)
DBCC CHECKIDENT ('RockClimbingRoutes', RESEED, 0)
end

	--Populate Regions
INSERT INTO [Regions] 
	(ProvinceOrStateID, EnglishFullName, RegionCode, LatitudeStartOrCenter, LongitudeStartOrCenter, ThumbPictureBytes, Info)
VALUES 
	(1,	'East Kootenays', 'EK', NULL, NULL, NULL, NULL)

	--Populate Districts
INSERT INTO [Districts] 
	(RegionID, EnglishFullName, DistrictCode, LatitudeStartOrCenter, LongitudeStartOrCenter, ThumbPictureBytes, Info)
VALUES 
	(1, 'Cranbrook',					'CB',	NULL, NULL, NULL, NULL),
	(1, 'Canal Flats',					'CF',   NULL, NULL, NULL, NULL),
	(1, 'Kimberley',					'KM',   NULL, NULL, NULL, NULL),
	(1, 'Mount Fischer Boulder Creek',	'MFB',  NULL, NULL, NULL, NULL),
	(1, 'Sulphur Creek Fernie',			'SCF',  NULL, NULL, NULL, NULL),
	(1, 'Windermere',					'WD',   NULL, NULL, NULL, NULL)

	--Populate DistrictZones
INSERT INTO [DistrictZones] 
	(DistrictID, EnglishFullName, ZoneCode, LatitudeStartOrCenter, LongitudeStartOrCenter, ThumbPictureBytes, Info)
VALUES 
	(1, 'Lumberton Moyie Canyon',	'LMC',  	NULL,	NULL,	NULL,	NULL),
	(1, 'Wycliff',					'WYC',  	NULL,	NULL,	NULL,	NULL),
	(1, 'Pedley',					'PD',   	NULL,	NULL,	NULL,	NULL),
	(2, 'Mount Sabine',				'MSB',  	NULL,	NULL,	NULL,	NULL),
	(2, 'Doctor Creek',				'DC',   	NULL,	NULL,	NULL,	NULL),
	(3, 'Kimberley Nature Park',	'KNP',  	NULL,	NULL,	NULL,	NULL),
	(3, 'St Marys Lake',			'SML',  	NULL,	NULL,	NULL,	NULL),
	(4, 'Fort Steele',				'FS',   	NULL,	NULL,	NULL,	NULL),
	(5, 'Sulphur Creek',			'SC',   	NULL,	NULL,	NULL,	NULL),
	(5, 'Fernie',					'FR',   	NULL,	NULL,	NULL,	NULL),
	(5, 'Elko',						'EL',   	NULL,	NULL,	NULL,	NULL),
	(5, 'Jaffray',					'JA',   	NULL,	NULL,	NULL,	NULL)

	--Populate Walls
INSERT INTO [RockClimbingWalls] 
	(AreaID, EnglishFullName, WallCode, Approach, LatitudeStartOrCenter, LongitudeStartOrCenter, LatitudeParking, LongitudeParking, ThumbPictureBytes, Info, 
	JanSeasonalClimbingQualityRatingID, FebSeasonalClimbingQualityRatingID, MarSeasonalClimbingQualityRatingID, AprSeasonalClimbingQualityRatingID, MaySeasonalClimbingQualityRatingID, 
	JunSeasonalClimbingQualityRatingID, JulSeasonalClimbingQualityRatingID, AugSeasonalClimbingQualityRatingID, SepSeasonalClimbingQualityRatingID, OctSeasonalClimbingQualityRatingID, 
	NovSeasonalClimbingQualityRatingID, DecSeasonalClimbingQualityRatingID, 
	JanSeasonalBusyRatingID, FebSeasonalBusyRatingID, MarSeasonalBusyRatingID, AprSeasonalBusyRatingID, MaySeasonalBusyRatingID, JunSeasonalBusyRatingID, 
	JulSeasonalBusyRatingID, AugSeasonalBusyRatingID, SepSeasonalBusyRatingID, OctSeasonalBusyRatingID, NovSeasonalBusyRatingID, DecSeasonalBusyRatingID)
VALUES 
	(1,		'Woodpecker Acidophilus Arete Wall',	'W1',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(1,		'Woodpecker Crag Left',					'W2',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(1,		'Woodpecker Crag Right',				'W3',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(1,		'Osprey Wall',							'W4',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(1,		'Canadian Corner Wall',					'W5',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(1,		'Cracker Crag Wall',					'W6',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(1,		'Rose Garden Wall',						'W7',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(1,		'The Lifebait Wall',					'W8',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(1,		'Orange Wall',							'W9',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(2,		'The Bowling Alley Wall',				'W1',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(2,		'Bumpy Meadows Tower',					'W2',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(2,		'Bumpy Meadows Slab',					'W3',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(2,		'Mount Aeneas East Face',				'W4',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(3,		'Slabhedrals Left Wall',				'W1',   	'15-20min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(3,		'Slabhedrals Right Wall',				'W2',   	'15-20min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(3,		'Sharkfin Wall',						'W3',   	'15-20min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(3,		'Giddyup Wall',							'W4',   	'15-20min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(3,		'Show Us Ya Badge Wall',				'W5',   	'15-20min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(3,		'Baby Bum Wall',						'W6',   	'15-20min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(3,		'Take It Or Leave It Wall Left',		'W7',   	'15-20min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(3,		'Take It Or Leave It Wall Right',		'W8',   	'15-20min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(3,		'The Big Wall Left',					'W9',   	'15-20min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(3,		'The Big Wall Right',					'W10',  	'15-20min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(3,		'The Old And The Restless',				'W11',  	'15-20min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(3,		'The Right Side Routes',				'W12',  	'15-20min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(3,		'The Loft Routes Left',					'W13',  	'15-20min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(3,		'The Loft Routes Right',				'W14',  	'15-20min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(3,		'Statistics Left Wall',					'W15',  	'15-20min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(3,		'Statisics Right Wall',					'W16',  	'15-20min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(3,		'Qualitative Variable Wall',			'W17',  	'15-20min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(3,		'The Shady Side Wall',					'W18',  	'15-20min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(3,		'SPF 30 Wall',							'W19',  	'15-20min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(4,		'Cabin Crag Wall',						'W1',   	'15min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(4,		'Beautiful Wall Left',					'W2',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(4,		'Beautiful Wall Middle',				'W3',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(4,		'Beautiful Wall Right',					'W4',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(4,		'Lakeside Ridge',						'W5',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(5,		'Bird Wall',							'W1',   	'3min',		NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(6,		'Red Wall',								'W1',   	'40min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(6,		'Red Wall Upper',						'W2',   	'40min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(6,		'Rat Wall',								'W3',   	'40min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(7,		'South Face',							'W1',   	'45-60min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(7,		'Asimov',								'W2',   	'45-60min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(8,		'Tora Bora Left',						'W1',   	'20-30min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(8,		'Tora Bora Right',						'W2',   	'20-30min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(9,		'Lowside House of Leith',				'W1',   	'30-40min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(9,		'Lowside Kia Kaha',						'W2',   	'30-40min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(9,		'Lowside Corvid Delux',					'W3',   	'30-40min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(9,		'Lowside Gumboot Alley',				'W4',   	'30-40min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(9,		'Highside Blind Pig',					'W5',   	'30-40min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(9,		'Highside Killervision',				'W6',   	'30-40min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(9,		'Highside Ravages',						'W7',   	'30-40min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(9,		'Highside Alpha Gal',					'W8',   	'30-40min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(10,	'The Basement',							'W1',   	'1 min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(10,	'Prie Real Estate & Crusaders',			'W2',   	'1 min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(11,	'Santa Maria',							'W1',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(12,	'House Of Cards',						'W1',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(12,	'Angels On A Matchstick',				'W2',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(12,	'Shiverman',							'W3',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(13,	'Trailside Spy',						'W1',   	'5 min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(13,	'Trailside Tinker',						'W2',   	'5 min',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(13,	'Command Central',						'W3',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(13,	'The Bunker',							'W4',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(13,	'The Post Office Left',					'W5',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(13,	'The Post Office Middle Left',			'W6',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(13,	'The Post Office Middle Right',			'W7',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(13,	'The Post Office Right',				'W8',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(13,	'Hillbilly Haven Left',					'W9',   	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(13,	'Hillbilly Haven Right',				'W10',  	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(13,	'Broke Back Alley',						'W11',  	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0),
	(13,	'Steep And Shady',						'W12',  	'Unknown',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0)

	--Populate ZoneAreas
INSERT INTO [ZoneAreas] 
	(ClimbingWallID, TypeID, DifficultyID, EnglishFullName, RouteCode, Rating, HieghtInMeters, NumberOfPitchs, FirstAscent, FirstFreeAscent, 
	SunAM, SunPM, FilteredSun, Sunny, Shady, DriesFast, DryInRain, Windy, ClimbAnglesHaveSlabs, ClimbAnglesHaveVerticals, ClimbAnglesHaveOverHangs, ClimbAnglesHaveRoofs, 
	RockFalls, Seepage, StickClip, Runout, Reachy, Dyno, Pumpy, Techy, Power, PockSlashHole, Crimpy, Slopey, SeatStart, 
	Info, ThumbPictureBytes)
VALUES 
	(1,		4,	9,	'I camp, therefore I litter',				1,	5,	12,		1,	'Andrew McLeod',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(1,		4,	14,	'lady fingers',								2,	5,	15,		1,	'Ryan Tarves',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(1,		4,	19,	'Acidophilus Arete Direct',					3,	5,	20,		1,	'Unknown',										'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(1,		4,	12,	'Acidophilus Arete',						4,	5,	20,		1,	'Ryan Tarves/Andrew McLeod',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(1,		4,	17,	'Alpine Route #7',							5,	5,	18,		1,	'Tay Hanson',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,  '', NULL),
	(1,		4,	20,	'Return to arms',							6,	5,	15,		1,	'Tay Hanson',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(1,		4,	12,	'the dog logger',							7,	5,	20,		1,	'Andrew McLeod',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0, 'Optional Boulder Start',	NULL),
	(1,		4,	9,	'Beaners and Weins',						8,	5,	20,		1,	'Andrew McLeod/Rob veg',						'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(2,		4,	12,	'The Cyclops',								1,	5,	20,		1,	'Ryan Tarves/Andrew McLeod',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(2,		4,	13,	'Lack it',									2,	5,	20,		1,	'Ryan Tarves/Andrew McLeod',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(2,		4,	10,	'Bluebell',									3,	5,	20,		1,	'Ryan Tarves/Andrew McLeod',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(3,		3,	7,	'Wodpecker Crack',							1,	5,	20,		1,	'Unknown',										'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(3,		3,	9,	'Zee Crack',								2,	5,	20,		1,	'Unknown',										'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(3,		4,	11,	'Kimberley Platzl',							3,	5,	18,		1,	'Ryan Tarves/Andrew McLeod',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(3,		4,	9,	'Cranbrook strip',							4,	5,	18,		1,	'Andrew McLeod',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(3,		4,	13,	'Borat does lumberton',						5,	5,	20,		1,	'Ryan Tarves/Andrew McLeod',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(3,		4,	15,	'Tornado bait',								6,	5,	20,		1,	'Ryan Tarves/Andrew McLeod',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(3,		4,	9,	'Marysville Pub',							7,	5,	18,		1,	'Andrew McLeod/Tara Szkorupa',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(4,		5,	13,	'Qanqon',									1,	5,	45,		3,	'Ryan Tarves/Andrew McLeod',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(4,		5,	12,	'Colonel Bakers Nuts',						2,	5,	45,		3,	'Ryan Tarves/Andrew McLeod',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(5,		4,	10,	'Dipping Hippies',							1,	5,	8,		1,	'Ryan Tarves',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(5,		4,	13,	'Miners Delight',							2,	5,	8,		1,	'Ryan Tarves',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(5,		3,	15,	'Miners Crack',								3,	5,	8,		1,	'Ryan Tarves',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(5,		4,	10,	'Canadian Crack',							4,	5,	7,		1,	'Ryan Tarves',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(5,		4,	10,	'Hang Ten',									5,	5,	7,		1,	'Ryan Tarves',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(6,		4,	14,	'Afternoon Arete',							1,	5,	12,		1,	'Ryan Tarves',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(6,		3,	16,	'Butterfinger Crack',						2,	5,	12,		1,	'Ryan Tarves',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(6,		3,	10,	'Gumboots and a Loincloth',					3,	5,	12,		1,	'Ryan Tarves',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(6,		3,	11,	'Twelve Pound Tooter',						4,	5,	12,		1,	'Ryan Tarves',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(7,		3,	10,	'Tin Can Corner',							1,	5,	12,		1,	'Ryan Tarves',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(7,		3,	10,	'Begging your pardon',						2,	5,	12,		1,	'Ryan Tarves',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(7,		3,	11,	'Backwards italy',							3,	5,	12,		1,	'Ryan Tarves',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(7,		3,	5,	'Logans Chimney',							4,	5,	12,		1,	'Ryan Tarves',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(8,		4,	11,	'Keelhauling',								1,	5,	12,		1,	'Ryan Tarves',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(8,		3,	10,	'Sail Away',								2,	5,	10,		1,	'Ryan Tarves',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(9,		5,	11,	'Orange Crush',								1,	5,	15,		1,	'Ryan Tarves',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(9,		3,	11,	'Purple Wimple',							2,	5,	15,		1,	'Ryan Tarves',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(10,	3,	8,	'Lane 1',									1,	5,	100,	3,	'Kirk Mauthner/Samantha Mauthner/Pat Morrow',	'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(10,	3,	8,	'Lane 2',									2,	5,	100,	3,	'Kirk Mauthner/Company',						'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(10,	3,	8,	'Lane 3',									3,	5,	100,	3,	'Kirk Mauthner/Company',						'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(10,	3,	8,	'Lane 4',									4,	5,	100,	3,	'Kirk Mauthner/Heather Milligan',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(11,	3,	8,	'The goat Carcass',							1,	5,	300,	3,	'Steve Tersmette/Shawn Emmett',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Pitch description required to upload! Rappell route as well',	NULL),
	(11,	3,	8,	'McAllister/Sellers',						2,	5,	300,	3,	'Tim McAllister/Kirt Sellers',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Pitch description required to upload! Rappell route as well',	NULL),
	(12,	3,	9,	'Meat in the freezer',						1,	5,	100,	3,	'Steve Tersmette/Dave Gillen',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Pitch description required to upload! Rappell route as well',	NULL),
	(13,	3,	10,	'Crack of Aeneas',							1,	5,	300,	3,	'Kirk Mauthner/Roslyn Johnson',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Pitch description required to upload! Rappell route as well',	NULL),
	(13,	3,	9,	'Firm Specimen',							2,	5,	375,	3,	'Steve Tersmette/Matt Honeyman',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Pitch description required to upload! Rappell route as well',	NULL),
	(14,	5,	14,	'Wolverine',								1,	5,	20,		1,	'Ryan Tarves/Orion Bennett',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(14,	4,	10,	'Left Hand Slab',							2,	5,	25,		1,	'Dan Madell',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(14,	4,	10,	'The Route That Goes By No Name',			3,	5,	25,		1,	'Bryce Cox',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(14,	4,	7,	'Lady Slipper',								4,	5,	25,		1,	'Bryce Cox',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(14,	5,	10,	'Crab',										5,	5,	25,		1,	'Andrew McLeod/Ryan Tarves',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(14,	3,	7,	'Corner',									6,	5,	30,		1,	'Kelly Bidder',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(14,	4,	8,	'Right Hand Slab',							7,	5,	30,		1,	'Dan Madell',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(14,	5,	12,	'The Slackarete',							8,	5,	30,		1,	'Ryan Tarves/Orion Bennett',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(14,	3,	9,	'Bat-man',									9,	5,	30,		1,	'Dan Madell',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(14,	4,	12,	'Sporty Roof',								10,	5,	30,		1,	'Dan Madell',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(14,	3,	12,	'Trad Roof',								11,	5,	30,		1,	'Chris Ferguson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(14,	4,	7,	'Getting Started',							12,	5,	30,		1,	'Dan Madell',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(15,	4,	10,	'Split In The Trees',						1,	5,	12,		1,	'Dan Madell',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(15,	5,	7,	'Unnamed',									2,	5,	12,		1,	'J Goulker',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(16,	4,	21,	'A Farewell To Arms',						1,	5,	15,		1,	'Tay Hanson',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(16,	4,	19,	'Freedom',									2,	5,	12,		1,	'Ryan Tarves',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(17,	4,	10,	'Giddy Up',									1,	5,	18,		1,	'Becky Beats',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(18,	4,	9,	'Show us ya badge',							1,	5,	18,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(19,	4,	9,	'Gluteus Minimus',							1,	5,	18,		1,	'Andrew McLeod',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(19,	4,	9,	'Diaper Rash',								2,	5,	20,		1,	'Andrew McLeod',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(19,	4,	12,	'Plumbers Crack',							3,	5,	20,		1,	'Andrew McLeod',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(19,	4,	16,	'Talcum Powder',							4,	5,	18,		1,	'Becky Bates',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(19,	4,	24,	'Pressure And Time',						5,	5,	18,		1,	'Brett Ehlers',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(19,	4,	19,	'More Dreddies, Less Reddies',				6,	5,	22,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(19,	4,	17,	'Yellow Country Teeth',						7,	5,	22,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(19,	5,	20,	'Girl With The Chocolate Tattoo',			8,	5,	22,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(19,	4,	13,	'Sting In The Tail',						9,	5,	25,		1,	'Bryce Cox/Ryan Tarves/James Madden',			'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(19,	3,	21,	'10lbs Of Crack In A 5lb Bag',				10,	5,	15,		1,	'Brett Ehlers',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(20,	4,	11,	'So You Think You Can Dance',				1,	5,	25,		1,	'Andrew McLeod/David Dancer',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(20,	4,	9,	'Take It Or Leave It',						2,	5,	25,		1,	'Becky Bates',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(20,	4,	16,	'The Guy Line',								3,	5,	28,		1,	'Unknown',										'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(20,	4,	19,	'The Club',									4,	5,	30,		1,	'Jonathan Dean Urness',							'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(21,	3,	11,	'Yosemite Can Wait',						1,	5,	28,		1,	'Chris Ferguson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(21,	4,	11,	'Always Something Different',				2,	5,	28,		1,	'Dan Madell',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(21,	4,	12,	'Desperate Housewife',						3,	5,	28,		1,	'Andrew McLeod/Chris Ferguson',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(21,	4,	16,	'Fair Trade',								4,	5,	28,		1,	'Becky Bates',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(22,	4,	9,	'Root Beer Float',							1,	5,	65,		3,	'Andrew McLeod/Rob veg',						'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(22,	4,	17,	'12lbs Of Hate',							2,	5,	15,		2,	'Becky Bates/Ian Binnie',						'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(22,	4,	16,	'Henry Furbag',								3,	5,	15,		2,	'Becky Bates/Ian Binnie',						'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(22,	4,	15,	'Shortcake',								4,	5,	15,		2,	'Becky Bates/Ian Binnie',						'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(22,	4,	13,	'20c Mixture',								5,	5,	40,		2,	'Ian Binnie',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(22,	3,	12,	'Whos Your Caddy',							6,	5,	40,		2,	'Becky Bates',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(22,	4,	11,	'Cream Soda',								7,	5,	40,		2,	'Pat Bates',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(22,	3,	15,	'Dr Pepper',								8,	5,	60,		2,	'Chris Ferguson/Andrew McLeod/Gehart',			'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(23,	4,	9,	'Orange Crush',								1,	5,	25,		2,	'Hugh Ackroyd',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(23,	4,	18,	'Raspberry Smoothie',						2,	5,	25,		2,	'Ian Binnie',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(23,	4,	10,	'Ponderosa',								3,	5,	15,		2,	'Becky Bates/Ian Binnie',						'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(23,	4,	18,	'Happy Fits Rage',							4,	5,	15,		2,	'Ian Binnie',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(23,	3,	15,	'Thunder Buster',							5,	5,	15,		2,	'Ryan Tarves/Ian Binnie',						'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(24,	4,	16,	'The Old And The Restless',					1,	5,	15,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(25,	4,	14,	'Arms Aloft',								1,	5,	12,		1,	'Andrew McLeod',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(25,	4,	9,	'Singing In The Rain',						2,	5,	12,		1,	'Andrew McLeod/Rob veg',						'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(25,	5,	13,	'Dick Cheneys Private Hunting Lesson',		3,	5,	22,		1,	'Ryan Tarves/Andrew McLeod',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(25,	4,	9,	'Ronald Dumsfeld And The Known Unknowns',	4,	5,	20,		1,	'Andrew McLeod/Tara Szkorupa',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(26,	4,	17,	'Spice Rack',								1,	5,	15,		1,	'Gaby Hernandez',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(26,	5,	13,	'Spice Crack',								2,	5,	15,		1,	'Gaby Hernandez',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(27,	4,	16,	'Coca De Mate',								1,	5,	18,		1,	'Ian Binnie/Andrew McLeod',						'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(27,	3,	10,	'Kootenay Jame Session',					2,	5,	18,		1,	'Chris Ferguson/Andrew McLeod',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(27,	4,	12,	'Big Jugs, Smooth Face',					3,	5,	18,		1,	'Dan Madell',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(27,	4,	13,	'Osama Jug Ladderin',						4,	5,	18,		1,	'Ryan Tarves/Orion Bennett',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(27,	4,	12,	'Don''t stop',								5,	5,	15,		1,	'Dan Madell',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(28,	4,	11,	'Scatterplot',								1,	5,	15,		1,	'Becky Bates',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(28,	4,	10,	'Random Noise',								2,	5,	15,		1,	'Becky Bates',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(28,	4,	13,	'Pocket Rocket',							3,	5,	12,		1,	'Becky Bates',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(28,	4,	18,	'Wanking In A Whirlwind',					4,	5,	12,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(28,	4,	16,	'Grumplestiltskin',							5,	5,	18,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(28,	4,	16,	'Sweet As',									6,	5,	18,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(28,	4,	19,	'Super Organism',							7,	5,	20,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(29,	4,	20,	'Curve Belle',								1,	5,	22,		1,	'Tay Hanson',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(29,	4,	17,	'standard Deviation',						2,	5,	22,		1,	'Andrew McLeod/Tay Hanson',						'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(29,	4,	12,	'Logistic Regression',						3,	5,	20,		1,	'Andrew McLeod/Tay Hanson',						'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(30,	4,	14,	'Qualitative Variable',						1,	5,	25,		1,	'Andrew McLeod',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(31,	4,	9,	'Bobs Your Uncle',							1,	5,	15,		1,	'Jonathen Dean Urness',							'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(31,	4,	19,	'Uncle Bert',								2,	5,	15,		1,	'Brett Ehlers',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(31,	4,	10,	'Shady Deal',								3,	5,	15,		1,	'Jonathen Dean Urness',							'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(31,	4,	7,	'Black Sunrise',							4,	5,	15,		1,	'Becky Bates',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(31,	4,	10,	'Crouching Chipmunks',						5,	5,	15,		1,	'Becky Bates',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(31,	4,	7,	'Seven Stiches',							6,	5,	20,		1,	'Brett Ehlers',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(32,	4,	21,	'Oatcakes',									1,	5,	12,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(32,	3,	17,	'G12',										2,	5,	12,		3,	'Gaby Hernandez',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(32,	4,	19,	'Marmite',									3,	5,	12,		3,	'Ian Binnie',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(32,	4,	18,	'Fred',										4,	5,	12,		3,	'Ian Binnie',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(33,	4,	9,	'Dr Maybe',									1,	5,	15,		1,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(33,	4,	11,	'Dr Yes',									2,	5,	30,		1,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(33,	3,	9,	'Dr Everything',							3,	5,	60,		2,	'Brunno-Pierre Couture',						'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(33,	4,	12,	'Dr I am Coming',							4,	5,	20,		1,	'Brunno-Pierre Couture',						'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(33,	3,	6,	'Dr Ridge',									5,	5,	60,		2,	'Brunno-Pierre Couture',						'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(33,	4,	8,	'Dr Easy',									6,	5,	60,		2,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(33,	4,	14,	'Dr Devious',								7,	5,	15,		1,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(33,	4,	10,	'Dr Nass Fuss',								8,	5,	15,		1,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(34,	4,	13,	'Tomcat',									1,	5,	150,	5,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(35,	3,	11,	'Unknown',									1,	5,	25,		1,	'Unknown',										'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(35,	4,	13,	'Long Black Veil',							2,	5,	30,		1,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(35,	3,	12,	'Malpractice',								3,	5,	30,		1,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(36,	4,	12,	'Blackbeard',								1,	5,	150,	4,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(36,	5,	9,	'Dr Beautiful',								2,	5,	150,	4,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(37,	3,	7,	'Lakeside Ridge',							1,	5,	180,	6,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(38,	4,	9,	'Dirty Duck',								1,	5,	15,		1,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(38,	4,	9,	'Cloacal Kiss',								2,	5,	15,		1,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(39,	5,	15,	'Left Of dragonfly',						1,	5,	18,		1,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(39,	4,	14,	'Dragonfly',								2,	5,	18,		1,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(39,	4,	12,	'Frustrated Housewife',						3,	5,	18,		1,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(40,	4,	10,	'D44',										1,	5,	15,		1,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(41,	4,	12,	'Ben',										1,	5,	20,		1,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(41,	4,	13,	'Basil',									2,	5,	18,		1,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(42,	3,	10,	'Sobool/Berger',							1,	5,	250,	8,	'Sobool/Berger',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(42,	3,	12,	'Another Mans Treasure',					2,	5,	250,	7,	'Dan Shoemaker/Mark Read',						'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Pitch description required to upload! Rappell route as well',	NULL),
	(42,	4,	10,	'Funny Bunny',								3,	5,	90,		3,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Pitch description required to upload! Rappell route as well',	NULL),
	(42,	4,	12,	'Easy Honey',								4,	5,	150,	5,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Pitch description required to upload! Rappell route as well',	NULL),
	(42,	3,	10,	'Limestone Cowboy',							5,	5,	200,	8,	'Pat Morrow/Bernhard Ehmann',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Pitch description required to upload! Rappell route as well',	NULL),
	(42,	4,	13,	'Quickdraw McGraw',							6,	5,	150,	6,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Pitch description required to upload! Rappell route as well',	NULL),
	(42,	3,	11,	'Ehman/Lowe',								7,	5,	150,	5,	'Bernhard Ehmann/Lowe',							'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Pitch description required to upload! Rappell route as well',	NULL),
	(42,	5,	14,	'Palliser Route',							8,	5,	150,	6,	'Waltraud Thornton/Mitch Thornton',				'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'A0 diff?; Pitch description required to upload! Rappell route as well',	NULL),
	(42,	3,	8,	'Sellers Route',							9,	5,	140,	6,	'Kirt Sellers/company',							'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Pitch description required to upload! Rappell route as well',	NULL),
	(43,	5,	13,	'Calves Of Steel',							1,	5,	20,		1,	'Ryan Tarves/Orion Bennett',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(43,	4,	15,	'Aurora',									2,	5,	25,		1,	'Dan Madell',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(43,	4,	15,	'Atomic Powered Gravity Boots',				3,	5,	25,		1,	'Bryce Cox',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(43,	4,	10,	'Spacers',									4,	5,	25,		1,	'Bryce Cox',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(43,	5,	11,	'Psychic Probe',							5,	5,	25,		1,	'Andrew McLeod/Ryan Tarves',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(43,	3,	11,	'Gladias Delight',							6,	5,	30,		1,	'Kelly Bidder',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(43,	4,	12,	'Roboticide',								7,	5,	30,		1,	'Dan Madell',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(43,	5,	13,	'Seldom Crisis',							8,	5,	30,		1,	'Ryan Tarves/Orion Bennett',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(44,	4,	15,	'Geo Time',									1,	5,	0,		1,	'Marc Trudeau',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'A rare lichen grows here, no future development is permitted and climb only established routes',	NULL),
	(44,	4,	9,	'Lichen It',								2,	5,	0,		1,	'Bruce Hart',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'A rare lichen grows here, no future development is permitted and climb only established routes',	NULL),
	(44,	0,	0,	'Closed Project 1',							3,	5,	0,		1,	'Unknown',										'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'A rare lichen grows here, no future development is permitted and climb only established routes',	NULL),
	(44,	3,	8,	'Dr Ks Delight',							4,	5,	0,		1,	'Pat Bates',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'A rare lichen grows here, no future development is permitted and climb only established routes',	NULL),
	(44,	4,	9,	'Rope Gum',									5,	5,	0,		1,	'Pat Bates',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'A rare lichen grows here, no future development is permitted and climb only established routes',	NULL),
	(44,	4,	9,	'No Green Bananas',							6,	5,	0,		1,	'Ken Wilkinson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'A rare lichen grows here, no future development is permitted and climb only established routes',	NULL),
	(44,	4,	11,	'Happy Hipster',							7,	5,	27,		1,	'Kevin Blades',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'A rare lichen grows here, no future development is permitted and climb only established routes',	NULL),
	(44,	4,	10,	'Tora Bora',								8,	5,	27,		1,	'Pat Bates',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'A rare lichen grows here, no future development is permitted and climb only established routes',	NULL),
	(44,	0,	0,	'Closed Project 2',							9,	5,	0,		1,	'Unknown',										'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'A rare lichen grows here, no future development is permitted and climb only established routes',	NULL),
	(45,	4,	12,	'Caspers Edge',								1,	5,	0,		1,	'Pat Bates',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'A rare lichen grows here, no future development is permitted and climb only established routes',	NULL),
	(45,	4,	9,	'Not 2B',									2,	5,	0,		1,	'Becky Bates',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'A rare lichen grows here, no future development is permitted and climb only established routes',	NULL),
	(45,	4,	12,	'82 Trips',									3,	5,	0,		1,	'Becky Bates',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'A rare lichen grows here, no future development is permitted and climb only established routes',	NULL),
	(46,	4,	12,	'Nylon Smile',								1,	5,	20,		1,	'Becky Bates/Ian Binnie',						'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(46,	4,	10,	'Stone In Your Shoe',						2,	5,	20,		1,	'Becky Bates/Ian Binnie',						'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(46,	3,	12,	'House Of Leith',							3,	5,	12,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(47,	4,	12,	'Dial The Creator',							1,	5,	12,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(47,	4,	21,	'Stone In Your Shoe',						2,	5,	32,		1,	'Ian Binnie/Tay Hanson',						'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(47,	3,	22,	'Ritenga',									3,	5,	32,		1,	'Brett Ehlers',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'An extension from Ritenga (not shown)',	NULL),
	(47,	3,	24,	'Wehiwehi',									4,	5,	35,		1,	'Brett Ehlers',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(47,	3,	16,	'Ape To Angel',								5,	5,	32,		1,	'Ian Binnie/Ryan Tar',							'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(47,	3,	13,	'Dust To Dust',								6,	5,	30,		1,	'Chris Ferguson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(47,	3,	13,	'Hellroaring',								7,	5,	34,		1,	'Becky Bates/Ian Binnie',						'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(48,	4,	16,	'Corvid Deluxe',							1,	5,	20,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(48,	3,	12,	'Rave''N',									2,	5,	20,		1,	'Chris Ferguson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(48,	4,	19,	'Chocoloate Coated Razorblades',			3,	5,	18,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(48,	4,	15,	'Pull The catch',							4,	5,	35,		2,	'Ian Binnie',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(49,	4,	11,	'Gumboot Alley',							1,	5,	20,		1,	'Becky Bates',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(49,	4,	16,	'Gumboot Burgers',							2,	5,	23,		1,	'Jonathen Dean Urness/Ian Binnie',				'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(49,	4,	15,	'Logger Burger',							3,	5,	20,		1,	'Colin Squirrel/Ian Binnie',					'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(49,	4,	11,	'Killar Pillar',							4,	5,	18,		1,	'Becky Bates',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(50,	5,	11,	'Blind pig',								1,	5,	70,		2,	'Kevin Blades/Marc Trudeau',					'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(50,	4,	16,	'Flatten the curve',						2,	5,	25,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(50,	4,	15,	'Zoonosis',									3,	5,	25,		1,	'Becky Bates',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(51,	4,	16,	'Killer Vision',							1,	5,	25,		1,	'Ian Binnie/Chris Ferguson',					'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(51,	4,	12,	'Killer Vision 2',							2,	5,	25,		1,	'Ian Binnie/Chris Ferguson',					'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(51,	0,	16,	'Project',									3,	5,	0,		1,	'Unknown',										'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(51,	4,	12,	'Corona With Lyme',							4,	5,	60,		2,	'Becky Bates',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(52,	4,	18,	'Ravages Of Time',							1,	5,	43,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(53,	4,	16,	'Alpha Gal',								1,	5,	33,		1,	'Becky Bates/Ian Binnie',						'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(53,	4,	16,	'Questing',									2,	5,	33,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(54,	4,	11,	'Bombs away',								1,	5,	10,		1,	'Amy Toyota',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(54,	3,	10,	'cracker jack',								2,	5,	12,		1,	'Pat Morrow',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(54,	4,	12,	'Whammo',									3,	5,	12,		1,	'Unknown',										'Amy Toyota',	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(54,	4,	9,	'Nine Nine',								4,	5,	11,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(54,	3,	5,	'Tope rope tater',							5,	5,	5,		1,	'Unknown',										'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(54,	4,	15,	'a wee bit rumpy pumpy',					6,	5,	11,		1,	'Ken Wilkinson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(54,	4,	9,	'old school',								7,	5,	11,		1,	'James Down',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(54,	4,	8,	'pardon my french',							8,	5,	11,		1,	'Jesse Cuthill',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(54,	4,	12,	'In your face',								9,	5,	10,		1,	'Kerri Garner',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(54,	4,	9,	'Lightnen pantz',							10,	5,	11,		1,	'Kerri Garner',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	5,	8,	'Pilgrams Progress',						1,	5,	30,		1,	'Jonathen Dean Urness/Elise Urness',			'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	11,	'Bonzai',									2,	5,	25,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	14,	'Walls End',								3,	5,	25,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	3,	11,	'Heaven Bound',								4,	5,	25,		1,	'Jonathen Dean Urness/Elise Urness',			'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	13,	'Sledge Hammer',							5,	5,	32,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	9,	'Climbers Hands And Hardboiled Eggs',		6,	5,	30,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	16,	'Jacobs Ladder',							7,	5,	35,		1,	'Jonathen Dean Urness',							'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	22,	'Climbers Crusade',							8,	5,	33,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	23,	'The Last Crusade',							9,	5,	33,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	21,	'The Last Boiled Egg',						10,	5,	30,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	13,	'The Story',								11,	5,	30,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	3,	15,	'The Never Ending Story',					12,	5,	35,		1,	'James Down',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	11,	'Unforseen Spice',							13,	5,	25,		1,	'Amy Toyota',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	3,	11,	'Old Boys Way',								14,	5,	25,		1,	'Pat Morrow/Bernhard Ehmann',					'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	13,	'Spice Up Your Life',						15,	5,	35,		1,	'Jesse Cuthill',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	20,	'Geit Er Done',								16,	5,	27,		1,	'Amy Toyota',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	18,	'Prime Realestate',							17,	5,	27,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	17,	'Streaker',									18,	5,	25,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	3,	10,	'Pats Crack',								19,	5,	25,		1,	'Pat Morrow',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	12,	'Square One',								20,	5,	25,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	19,	'Lightning Bolt',							21,	5,	25,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	15,	'The Chump Show',							22,	5,	25,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	13,	'Expose Yourself',							23,	5,	25,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	16,	'Divinity',									24,	5,	30,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	15,	'Maximum Exposure',							25,	5,	30,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(55,	4,	7,	'The Swan',									26,	5,	25,		1,	'Lewis Jones',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'',	NULL),
	(56,	4,	10,	'Sinister Minister',						1,	5,	30,		1,	'Ryan Tarves',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(56,	3,	9,	'Loose And Dirty',							2,	5,	25,		1,	'Pat Morrow',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(56,	4,	11,	'French Free',								3,	5,	31,		1,	'Herve Durand/Marc Trudeau',					'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(56,	5,	9,	'Duel Of The Iron Mic',						4,	5,	20,		1,	'Ben Stanley/David Weiler',						'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(56,	3,	10,	'4th Chamber',								5,	5,	15,		1,	'Ben Stanley/Bryce Cox',						'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(57,	4,	15,	'House Of Cards',							1,	5,	28,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(57,	5,	13,	'Snivilization',							2,	5,	25,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(57,	4,	14,	'Purcell Puller',							3,	5,	28,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(57,	4,	19,	'Flight Path',								4,	5,	32,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(58,	4,	15,	'Polished Grit',							1,	5,	37,		1,	'Chris McKim',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(58,	4,	13,	'Angels On A Matchstick',					2,	5,	40,		1,	'Bruce Hart',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(58,	4,	14,	'BFG',										3,	5,	40,		1,	'Matt Honeyman',								'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(59,	4,	18,	'Shiverman',								1,	5,	15,		1,	'Ian Binnie',									'Unknown',		0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'',	NULL),
	(60,	4,	13,	'Spy Catcher',								1,	5,	15,		1,	'Andrew McLeod',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(61,	4,	10,	'Tinker Tailor',							1,	5,	15,		1,	'Andrew McLeod',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(62,	4,	8,	'Boot Camp',								1,	5,	12,		1,	'Ken Wilkonson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(62,	4,	12,	'Secret Agent Man',							2,	5,	15,		1,	'Dave Peabody',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(62,	4,	22,	'Immunity Mutnity',							3,	5,	18,		1,	'Ken Wilkonson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(62,	4,	0,	'Perpetual Apathy Project',					4,	5,	0,		1,	'Unknown',										'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(62,	4,	19,	'007',										5,	5,	15,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(62,	4,	24,	'NOC Agent',								6,	5,	20,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(62,	4,	12,	'GI Joe',									7,	5,	15,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(62,	4,	22,	'Special Forces',							8,	5,	20,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(62,	4,	22,	'Operation Dust Muffin',					9,	5,	18,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(62,	4,	16,	'Illicit Engagement',						10,	5,	25,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(62,	4,	17,	'Code Yellow',								11,	5,	15,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(62,	4,	21,	'Code Red',									12,	5,	25,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(62,	4,	23,	'Mayday',									13,	5,	35,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(62,	4,	22,	'Napalm',									14,	5,	25,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(63,	4,	19,	'Full Metal Jacket',						1,	5,	15,		1,	'Ken Wilkonson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(63,	4,	19,	'Suicide Bomber',							2,	5,	15,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(63,	4,	13,	'Kamikaze',									3,	5,	15,		1,	'Ken Wilkonson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(63,	4,	16,	'Seppuku',									4,	5,	25,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(63,	4,	14,	'Body Count',								5,	5,	12,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(63,	4,	13,	'Trench Warfare',							6,	5,	12,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(63,	4,	14,	'Heat Seeker',								7,	5,	15,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(64,	4,	13,	'The Pony Express',							1,	5,	15,		1,	'Kerri Garner',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(64,	4,	18,	'FedEx',									3,	5,	17,		1,	'Ken Wilkonson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(64,	4,	14,	'Prepaid Postage',							4,	5,	25,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(64,	4,	13,	'Stick It In the Slot',						5,	5,	25,		1,	'Kelsey Powell',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(64,	4,	17,	'COD',										6,	5,	25,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(65,	4,	10,	'Special Delivery',							1,	5,	20,		1,	'Ken Wilkonson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(65,	4,	16,	'Bubble Wrap',								2,	5,	20,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(65,	4,	17,	'Letter Bomb',								3,	5,	20,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(65,	4,	19,	'Air Mail',									4,	5,	15,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(66,	4,	14,	'Short Pants',								1,	5,	15,		1,	'Ken Wilkonson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(66,	4,	17,	'Lick It And Stick It',						2,	5,	15,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(66,	4,	19,	'The Mailmans Your Daddy',					3,	5,	15,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(67,	4,	18,	'Return To Sender',							1,	5,	20,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(67,	4,	16,	'Singing Telegram',							2,	5,	20,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(67,	4,	15,	'More Postage Required',					3,	5,	20,		1,	'Kerri Garner',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(68,	4,	13,	'Going postal',								1,	5,	20,		1,	'Kerri Garner',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(68,	4,	15,	'Hillbilly Lovin In The Hay',				2,	5,	10,		1,	'Jesse Cuthill',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(68,	4,	15,	'The Righteous Redneck',					3,	5,	10,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(68,	4,	25,	'Redneck Rampage',							4,	5,	22,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(68,	4,	22,	'Skyman',									5,	5,	30,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(68,	4,	14,	'Boot Scoot''n Boogie',						6,	5,	15,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(68,	4,	15,	'Giggin Frogs',								7,	5,	15,		1,	'Kerri Garner',									'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(68,	4,	24,	'Stompin Hippies',							8,	5,	25,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(69,	4,	21,	'Moonshine',								1,	5,	25,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(69,	4,	24,	'Firewater',								2,	5,	25,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(69,	4,	15,	'Moustache Stampede',						3,	5,	15,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(69,	4,	23,	'Mullet Madness',							4,	5,	25,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(69,	4,	20,	'M Bucktooth',								5,	5,	25,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(70,	4,	9,	'Bromance',									1,	5,	15,		1,	'Monte Johnson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(70,	4,	16,	'The Reacharound',							2,	5,	15,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(70,	4,	19,	'Bent Over The Barrel',						3,	5,	15,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(71,	4,	19,	'Batman And The Stroker',					1,	5,	22,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(71,	4,	22,	'The Dark Side',							2,	5,	20,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(71,	4,	20,	'Lock It Down',								3,	5,	15,		1,	'Kevin Wilkinson',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL),
	(71,	4,	11,	'Vert And Sunny',							4,	5,	15,		1,	'Jesse Cuthill',								'Unknown',		0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	'Only climnb on routes indicated, no further development is allowed. Do not touch or climb over pictographs. These are protected by Provincial and federal law, is a UNESCO heritage protected area. Climbing over or touching these sensitive areas will close this area for everyone',	NULL)
	

--Quick Test Data build
declare @Testing bit = 0
if(@Testing = 1)
begin
INSERT INTO [ProvincesOrStates] ([ID], [EnglishFullName], [RegionCode], [CountryID])
VALUES 
( 63, 'Test1', 'T1', 0),
( 64, 'Test2', 'T2', 0);
INSERT INTO [Regions] ([ProvinceOrStateID], [EnglishFullName], [RegionCode])
VALUES (63, 'Test1', 'T1')
INSERT INTO [Districts] ([RegionID], [EnglishFullName], [DistrictCode])
VALUES (1, 'Test1', 'T1')
INSERT INTO [DistrictZones] ([DistrictID], [EnglishFullName], [ZoneCode])
VALUES (1, 'Test1', 'T1')
INSERT INTO [ZoneAreas] ([DistrictZoneID], [EnglishFullName], [AreaCode])
VALUES (1, 'Test1', 'T1')
INSERT INTO [ClimbingWalls] ([AreaID], [EnglishFullName], [WallCode])
VALUES (1, 'Test1', 'T1')
INSERT INTO [RockClimbingRoutes] 
([ClimbingWallID],
	[TypeID],
	[DifficultyID],
	[EnglishFullName],
	[RouteCode],
	[Rating],
	[HieghtInMeters],
	[NumberOfPitchs],
	[FirstAscent],
	[FirstFreeAscent],
	[SunAM],
	[SunPM],
	[FilteredSun],
	[Sunny],
	[Shady],
	[DriesFast],
	[DryInRain],
	[Windy],
	[ClimbAnglesHaveSlabs],
	[ClimbAnglesHaveVerticals],
	[ClimbAnglesHaveOverHangs],
	[ClimbAnglesHaveRoofs],
	[RockFalls],
	[Seepage],
	[StickClip],
	[Runout],
	[Reachy],
	[Dyno],
	[Pumpy],
	[Techy],
	[Power],
	[PockSlashHole],
	[Crimpy],
	[Slopey],
	[SeatStart],
	[Info],
	[ThumbPictureBytes])
VALUES 
(0,
	0,
	0,
	'The Test Climing Route',
	'cha',
	2,
	15,
	2,
	'The Test Climber',
	'The Test Climber',
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	'test',
	null)
end
go