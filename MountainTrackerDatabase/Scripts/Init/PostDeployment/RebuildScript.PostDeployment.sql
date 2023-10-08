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

print '>>>Reseeding Users'
DBCC CHECKIDENT ('Users', RESEED, 0)
print '<<<Reseeded Users'
print '>>>Recalling Users'
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
print '<<<Users Recalled'
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

	--Populate ZoneAreas
INSERT INTO [ZoneAreas] 
	(DistrictZoneID, EnglishFullName, AreaCode, LatitudeStartOrCenter, LongitudeStartOrCenter, ThumbPictureBytes, Info)
VALUES 
	(1,	'Lumberton',		'A1',   	NULL,	NULL,	NULL,	NULL),
	(3,	'Pedley Pass',		'A1',   	NULL,	NULL,	NULL,	NULL),
	(2,	'Perry Creek',		'A1',   	NULL,	NULL,	NULL,	NULL),
	(5,	'Doctor Lake Area',	'A1',   	NULL,	NULL,	NULL,	NULL),
	(4,	'Bird',				'A1',   	NULL,	NULL,	NULL,	NULL),
	(4,	'Red Rat',			'A2',   	NULL,	NULL,	NULL,	NULL),
	(4,	'South Face',		'A3',   	NULL,	NULL,	NULL,	NULL),
	(6,	'Tora Bora',		'A1',   	NULL,	NULL,	NULL,	NULL),
	(6,	'Bootleg Mountain',	'A2',   	NULL,	NULL,	NULL,	NULL),
	(7,	'Saint',			'A1',   	NULL,	NULL,	NULL,	NULL),
	(7,	'Santa Maria',		'A2',   	NULL,	NULL,	NULL,	NULL),
	(7,	'Riverside',		'A3',   	NULL,	NULL,	NULL,	NULL),
	(8,	'Lakit Lake',		'A1',   	NULL,	NULL,	NULL,	NULL)


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