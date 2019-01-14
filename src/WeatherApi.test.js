describe('Weather API request', function(){
    it('Should make a request to the api', function(){
        const citiesData = [
            { 
                country: 'Afghanistan',
                city: 'Kabul',
                latitude: '34.28N',
                longitude: '69.11E',
            },
            { 
            country: 'Albania	',
            city: 'Tirane	',
            latitude: '41.18N	',
            longitude: '19.49E',
            },
        { 
            country: 'Algeria	',
            city: 'Algiers	',
            latitude: '36.42N	',
            longitude: '03.08E',
            },
        { 
            country: 'American ',
            city: 'Samoa	Pago Pago	',
            latitude: '14.16S	',
            longitude: '170.43W',
            },
        { 
            country: 'Andorra	',
            city: 'Andorra la Vella	',
            latitude: '42.31N	',
            longitude: '01.32E',
            },
        { 
            country: 'Angola	',
            city: 'Luanda	',
            latitude: '08.50S	',
            longitude: '13.15E',
            },
        { 
            country: 'Antigua ',
            city: 'and Barbuda	West Indies	',
            latitude: '17.20N	',
            longitude: '61.48W',
            },
        { 
            country: 'Argentina	',
            city: 'Buenos Aires	',
            latitude: '36.30S	',
            longitude: '60.00W',
            },
        { 
            country: 'Armenia	',
            city: 'Yerevan	',
            latitude: '40.10N	',
            longitude: '44.31E',
            },
        { 
            country: 'Aruba	',
            city: 'Oranjestad	',
            latitude: '12.32N	',
            longitude: '70.02W',
            },
        { 
            country: 'Australia	',
            city: 'Canberra	',
            latitude: '35.15S	',
            longitude: '149.08E',
            },
        { 
            country: 'Austria	',
            city: 'Vienna	',
            latitude: '48.12N	',
            longitude: '16.22E',
            },
        { 
            country: 'Azerbaijan	',
            city: 'Baku	',
            latitude: '40.29N	',
            longitude: '49.56E',
            },
        { 
            country: 'Bahamas	',
            city: 'Nassau	',
            latitude: '25.05N	',
            longitude: '77.20W',
            },
        { 
            country: 'Bahrain	',
            city: 'Manama	',
            latitude: '26.10N	',
            longitude: '50.30E',
            },
        { 
            country: 'Bangladesh	',
            city: 'Dhaka	',
            latitude: '23.43N	',
            longitude: '90.26E',
            },
        { 
            country: 'Barbados	',
            city: 'Bridgetown	',
            latitude: '13.05N	',
            longitude: '59.30W',
            },
        { 
            country: 'Belarus	',
            city: 'Minsk	',
            latitude: '53.52N	',
            longitude: '27.30E',
            },
        { 
            country: 'Belgium	',
            city: 'Brussels	',
            latitude: '50.51N	',
            longitude: '04.21E',
            },
        { 
            country: 'Belize	',
            city: 'Belmopan	',
            latitude: '17.18N	',
            longitude: '88.30W',
            },
        { 
            country: 'Benin	',
            city: 'Porto Novo (constitutional) / Cotonou (seat of government)	',
            latitude: '06.23N	',
            longitude: '02.42E',
            },
        { 
            country: 'Bhutan	',
            city: 'Thimphu	',
            latitude: '27.31N	',
            longitude: '89.45E',
            },
        { 
            country: 'Bolivia	',
            city: 'La Paz (administrative) / Sucre (legislative)	',
            latitude: '16.20S	',
            longitude: '68.10W',
            },
        { 
            country: 'Bosnia ',
            city: 'and Herzegovina	Sarajevo	',
            latitude: '43.52N	',
            longitude: '18.26E',
            },
        { 
            country: 'Botswana	',
            city: 'Gaborone	',
            latitude: '24.45S	',
            longitude: '25.57E',
            },
        { 
            country: 'Brazil	',
            city: 'Brasilia	',
            latitude: '15.47S	',
            longitude: '47.55W',
            },
        { 
            country: 'British ',
            city: 'Virgin Islands	Road Town	',
            latitude: '18.27N	',
            longitude: '64.37W',
            },
        { 
            country: 'Brunei ',
            city: 'Darussalam	Bandar Seri Begawan	',
            latitude: '04.52N	',
            longitude: '115.00E',
            },
        { 
            country: 'Bulgaria	',
            city: 'Sofia	',
            latitude: '42.45N	',
            longitude: '23.20E',
            },
        { 
            country: 'Burkina ',
            city: 'Faso	Ouagadougou	',
            latitude: '12.15N	',
            longitude: '01.30W',
            },
        { 
            country: 'Burundi	',
            city: 'Bujumbura	',
            latitude: '03.16S	',
            longitude: '29.18E',
            },
        { 
            country: 'Cambodia	',
            city: 'Phnom Penh	',
            latitude: '11.33N	',
            longitude: '104.55E',
            },
        { 
            country: 'Cameroon	',
            city: 'Yaounde	',
            latitude: '03.50N	',
            longitude: '11.35E',
            },
        { 
            country: 'Canada	',
            city: 'Ottawa	',
            latitude: '45.27N	',
            longitude: '75.42W',
            },
        { 
            country: 'Cape ',
            city: 'Verde	Praia	',
            latitude: '15.02N	',
            longitude: '23.34W',
            },
        { 
            country: 'Cayman ',
            city: 'Islands	George Town	',
            latitude: '19.20N	',
            longitude: '81.24W',
            },
        { 
            country: 'Central ',
            city: 'African Republic	Bangui	',
            latitude: '04.23N	',
            longitude: '18.35E',
            },
        { 
            country: 'Chad	',
            city: 'N\'Djamena',
            latitude: '12.10N	',
            longitude: '14.59E',
            },
        { 
            country: 'Chile	',
            city: 'Santiago	',
            latitude: '33.24S	',
            longitude: '70.40W',
            },
        { 
            country: 'China	',
            city: 'Beijing	',
            latitude: '39.55N	',
            longitude: '116.20E',
            },
        { 
            country: 'Colombia	',
            city: 'Bogota	',
            latitude: '04.34N	',
            longitude: '74.00W',
            },
        { 
            country: 'Comros	',
            city: 'Moroni	',
            latitude: '11.40S	',
            longitude: '43.16E',
            },
        { 
            country: 'Congo	',
            city: 'Brazzaville	',
            latitude: '04.09S	',
            longitude: '15.12E',
            },
        { 
            country: 'Costa ',
            city: 'Rica	San Jose	',
            latitude: '09.55N	',
            longitude: '84.02W',
            },
        { 
            country: 'Cote d\'Ivoire',
            city: 'Yamoussoukro',
            latitude: '06.49N	',
            longitude: '05.17W',
            },
        { 
            country: 'Croatia	',
            city: 'Zagreb	',
            latitude: '45.50N	',
            longitude: '15.58E',
            },
        { 
            country: 'Cuba	',
            city: 'Havana	',
            latitude: '23.08N	',
            longitude: '82.22W',
            },
        { 
            country: 'Cyprus	',
            city: 'Nicosia	',
            latitude: '35.10N	',
            longitude: '33.25E',
            },
        { 
            country: 'Czech ',
            city: 'Republic	Prague	',
            latitude: '50.05N	',
            longitude: '14.22E',
            },
        { 
            country: 'Democratic ',
            city: 'Republic of the Congo	Kinshasa	',
            latitude: '04.20S	',
            longitude: '15.15E',
            },
        { 
            country: 'Denmark	',
            city: 'Copenhagen	',
            latitude: '55.41N	',
            longitude: '12.34E',
            },
        { 
            country: 'Djibouti	',
            city: 'Djibouti	',
            latitude: '11.08N	',
            longitude: '42.20E',
            },
        { 
            country: 'Dominica	',
            city: 'Roseau	',
            latitude: '15.20N	',
            longitude: '61.24W',
            },
        { 
            country: 'Dominica ',
            city: 'Republic	Santo Domingo	',
            latitude: '18.30N	',
            longitude: '69.59W',
            },
        { 
            country: 'East ',
            city: 'Timor	Dili	',
            latitude: '08.29S	',
            longitude: '125.34E',
            },
        { 
            country: 'Ecuador	',
            city: 'Quito	',
            latitude: '00.15S	',
            longitude: '78.35W',
            },
        { 
            country: 'Egypt	',
            city: 'Cairo	',
            latitude: '30.01N	',
            longitude: '31.14E',
            },
        { 
            country: 'El ',
            city: 'Salvador	San Salvador	',
            latitude: '13.40N	',
            longitude: '89.10W',
            },
        { 
            country: 'Equatorial ',
            city: 'Guinea	Malabo	',
            latitude: '03.45N	',
            longitude: '08.50E',
            },
        { 
            country: 'Eritrea	',
            city: 'Asmara	',
            latitude: '15.19N	',
            longitude: '38.55E',
            },
        { 
            country: 'Estonia	',
            city: 'Tallinn	',
            latitude: '59.22N	',
            longitude: '24.48E',
            },
        { 
            country: 'Ethiopia	',
            city: 'Addis Ababa	',
            latitude: '09.02N	',
            longitude: '38.42E',
            },
        { 
            country: 'Falkland ',
            city: 'Islands (Malvinas)	Stanley	',
            latitude: '51.40S	',
            longitude: '59.51W',
            },
        { 
            country: 'Faroe ',
            city: 'Islands	Torshavn	',
            latitude: '62.05N	',
            longitude: '06.56W',
            },
        { 
            country: 'Fiji	',
            city: 'Suva	',
            latitude: '18.06S	',
            longitude: '178.30E',
            },
        { 
            country: 'Finland	',
            city: 'Helsinki	',
            latitude: '60.15N	',
            longitude: '25.03E',
            },
        { 
            country: 'France	',
            city: 'Paris	',
            latitude: '48.50N	',
            longitude: '02.20E',
            },
        { 
            country: 'French ',
            city: 'Guiana	Cayenne	',
            latitude: '05.05N	',
            longitude: '52.18W',
            },
        { 
            country: 'French ',
            city: 'Polynesia	Papeete	',
            latitude: '17.32S	',
            longitude: '149.34W',
            },
        { 
            country: 'Gabon	',
            city: 'Libreville	',
            latitude: '00.25N	',
            longitude: '09.26E',
            },
        { 
            country: 'Gambia	',
            city: 'Banjul	',
            latitude: '13.28N	',
            longitude: '16.40W',
            },
        { 
            country: 'Georgia	',
            city: 'T'bilisi	',
            latitude: '41.43N	',
            longitude: '44.50E',
            },
        { 
            country: 'Germany	',
            city: 'Berlin	',
            latitude: '52.30N	',
            longitude: '13.25E',
            },
        { 
            country: 'Ghana	',
            city: 'Accra	',
            latitude: '05.35N	',
            longitude: '00.06W',
            },
        { 
            country: 'Greece	',
            city: 'Athens	',
            latitude: '37.58N	',
            longitude: '23.46E',
            },
        { 
            country: 'Greenland	',
            city: 'Nuuk	',
            latitude: '64.10N	',
            longitude: '51.35W',
            },
        { 
            country: 'Guadeloupe	',
            city: 'Basse-Terre	',
            latitude: '16.00N	',
            longitude: '61.44W',
            },
        { 
            country: 'Guatemala	',
            city: 'Guatemala	',
            latitude: '14.40N	',
            longitude: '90.22W',
            },
        { 
            country: 'Guernsey	',
            city: 'St. Peter Port	',
            latitude: '49.26N	',
            longitude: '02.33W',
            },
        { 
            country: 'Guinea	',
            city: 'Conakry	',
            latitude: '09.29N	',
            longitude: '13.49W',
            },
        { 
            country: 'Guinea-',
            city: 'Bissau	Bissau	',
            latitude: '11.45N	',
            longitude: '15.45W',
            },
        { 
            country: 'Guyana	',
            city: 'Georgetown	',
            latitude: '06.50N	',
            longitude: '58.12W',
            },
        { 
            country: 'Haiti	',
            city: 'Port-au-Prince	',
            latitude: '18.40N	',
            longitude: '72.20W',
            },
        { 
            country: 'Heard ',
            city: 'Island and McDonald Islands	 	',
            latitude: '53.00S	',
            longitude: '74.00E',
            },
        { 
            country: 'Honduras	',
            city: 'Tegucigalpa	',
            latitude: '14.05N	',
            longitude: '87.14W',
            },
        { 
            country: 'Hungary	',
            city: 'Budapest	',
            latitude: '47.29N	',
            longitude: '19.05E',
            },
        { 
            country: 'Iceland	',
            city: 'Reykjavik	',
            latitude: '64.10N	',
            longitude: '21.57W',
            },
        { 
            country: 'India	',
            city: 'New Delhi	',
            latitude: '28.37N	',
            longitude: '77.13E',
            },
        { 
            country: 'Indonesia	',
            city: 'Jakarta	',
            latitude: '06.09S	',
            longitude: '106.49E',
            },
        { 
            country: 'Iran ',
            city: '(Islamic Republic of)	Tehran	',
            latitude: '35.44N	',
            longitude: '51.30E',
            },
        { 
            country: 'Iraq	',
            city: 'Baghdad	',
            latitude: '33.20N	',
            longitude: '44.30E',
            },
        { 
            country: 'Ireland	',
            city: 'Dublin	',
            latitude: '53.21N	',
            longitude: '06.15W',
            },
        { 
            country: 'Israel	',
            city: 'Jerusalem	',
            latitude: '31.71N	',
            longitude: '35.10W',
            },
        { 
            country: 'Italy	',
            city: 'Rome	',
            latitude: '41.54N	',
            longitude: '12.29E',
            },
        { 
            country: 'Jamaica	',
            city: 'Kingston	',
            latitude: '18.00N	',
            longitude: '76.50W',
            },
        { 
            country: 'Jordan	',
            city: 'Amman	',
            latitude: '31.57N	',
            longitude: '35.52E',
            },
        { 
            country: 'Kazakhstan	',
            city: 'Astana	',
            latitude: '51.10N	',
            longitude: '71.30E',
            },
        { 
            country: 'Kenya	',
            city: 'Nairobi	',
            latitude: '01.17S	',
            longitude: '36.48E',
            },
        { 
            country: 'Kiribati	',
            city: 'Tarawa	',
            latitude: '01.30N	',
            longitude: '173.00E',
            },
        { 
            country: 'Kuwait	',
            city: 'Kuwait	',
            latitude: '29.30N	',
            longitude: '48.00E',
            },
        { 
            country: 'Kyrgyzstan	',
            city: 'Bishkek	',
            latitude: '42.54N	',
            longitude: '74.46E',
            },
        { 
            country: 'Lao ',
            city: 'People's Democratic Republic	Vientiane	',
            latitude: '17.58N	',
            longitude: '102.36E',
            },
        { 
            country: 'Latvia	',
            city: 'Riga	',
            latitude: '56.53N	',
            longitude: '24.08E',
            },
        { 
            country: 'Lebanon	',
            city: 'Beirut	',
            latitude: '33.53N	',
            longitude: '35.31E',
            },
        { 
            country: 'Lesotho	',
            city: 'Maseru	',
            latitude: '29.18S	',
            longitude: '27.30E',
            },
        { 
            country: 'Liberia	',
            city: 'Monrovia	',
            latitude: '06.18N	',
            longitude: '10.47W',
            },
        { 
            country: 'Libyan ',
            city: 'Arab Jamahiriya	Tripoli	',
            latitude: '32.49N	',
            longitude: '13.07E',
            },
        { 
            country: 'Liechtenstein	',
            city: 'Vaduz	',
            latitude: '47.08N	',
            longitude: '09.31E',
            },
        { 
            country: 'Lithuania	',
            city: 'Vilnius	',
            latitude: '54.38N	',
            longitude: '25.19E',
            },
        { 
            country: 'Luxembourg	',
            city: 'Luxembourg	',
            latitude: '49.37N	',
            longitude: '06.09E',
            },
        { 
            country: 'Macao,',
             city: 'China	Macau	',
            latitude: '22.12N	',
            longitude: '113.33E',
            },
        { 
            country: 'Madagascar	',
            city: 'Antananarivo	',
            latitude: '18.55S	',
            longitude: '47.31E',
            },
        { 
            country: 'Macedonia ',
            city: '(Former Yugoslav Republic)	Skopje	',
            latitude: '42.01N	',
            longitude: '21.26E',
            },
        { 
            country: 'Malawi	',
            city: 'Lilongwe	',
            latitude: '14.00S	',
            longitude: '33.48E',
            },
        { 
            country: 'Malaysia	',
            city: 'Kuala Lumpur	',
            latitude: '03.09N	',
            longitude: '101.41E',
            },
        { 
            country: 'Maldives	',
            city: 'Male	',
            latitude: '04.00N	',
            longitude: '73.28E',
            },
        { 
            country: 'Mali	',
            city: 'Bamako	',
            latitude: '12.34N	',
            longitude: '07.55W',
            },
        { 
            country: 'Malta	',
            city: 'Valletta	',
            latitude: '35.54N	',
            longitude: '14.31E',
            },
        { 
            country: 'Martinique	',
            city: 'Fort-de-France	',
            latitude: '14.36N	',
            longitude: '61.02W',
            },
        { 
            country: 'Mauritania	',
            city: 'Nouakchott	',
            latitude: '20.10S	',
            longitude: '57.30E',
            },
        { 
            country: 'Mayotte	',
            city: 'Mamoudzou	',
            latitude: '12.48S	',
            longitude: '45.14E',
            },
        { 
            country: 'Mexico	',
            city: 'Mexico	',
            latitude: '19.20N	',
            longitude: '99.10W',
            },
        { 
            country: 'Micronesia ',
            city: '(Federated States of)	Palikir	',
            latitude: '06.55N	',
            longitude: '158.09E',
            },
        { 
            country: 'Moldova,',
             city: 'Republic of	Chisinau	',
            latitude: '47.02N	',
            longitude: '28.50E',
            },
        { 
            country: 'Mozambique	',
            city: 'Maputo	',
            latitude: '25.58S	',
            longitude: '32.32E',
            },
        { 
            country: 'Myanmar	',
            city: 'Yangon	',
            latitude: '16.45N	',
            longitude: '96.20E',
            },
        { 
            country: 'Namibia	',
            city: 'Windhoek	',
            latitude: '22.35S	',
            longitude: '17.04E',
            },
        { 
            country: 'Nepal	',
            city: 'Kathmandu	',
            latitude: '27.45N	',
            longitude: '85.20E',
            },
        { 
            country: 'Netherlands	',
            city: 'Amsterdam / The Hague (seat of Government)	',
            latitude: '52.23N	',
            longitude: '04.54E',
            },
        { 
            country: 'Netherlands ',
            city: 'Antilles	Willemstad	',
            latitude: '12.05N	',
            longitude: '69.00W',
            },
        { 
            country: 'New ',
            city: 'Caledonia	Noumea	',
            latitude: '22.17S	',
            longitude: '166.30E',
            },
        { 
            country: 'New ',
            city: 'Zealand	Wellington	',
            latitude: '41.19S	',
            longitude: '174.46E',
            },
        { 
            country: 'Nicaragua	',
            city: 'Managua	',
            latitude: '12.06N	',
            longitude: '86.20W',
            },
        { 
            country: 'Niger	',
            city: 'Niamey	',
            latitude: '13.27N	',
            longitude: '02.06E',
            },
        { 
            country: 'Nigeria	',
            city: 'Abuja	',
            latitude: '09.05N	',
            longitude: '07.32E',
            },
        { 
            country: 'Norfolk ',
            city: 'Island	Kingston	',
            latitude: '45.20S	',
            longitude: '168.43E',
            },
        { 
            country: 'North ',
            city: 'Korea	Pyongyang	',
            latitude: '39.09N	',
            longitude: '125.30E',
            },
        { 
            country: 'Northern ',
            city: 'Mariana Islands	Saipan	',
            latitude: '15.12N	',
            longitude: '145.45E',
            },
        { 
            country: 'Norway	',
            city: 'Oslo	',
            latitude: '59.55N	',
            longitude: '10.45E',
            },
        { 
            country: 'Oman	',
            city: 'Masqat	',
            latitude: '23.37N	',
            longitude: '58.36E',
            },
        { 
            country: 'Pakistan	',
            city: 'Islamabad	',
            latitude: '33.40N	',
            longitude: '73.10E',
            },
        { 
            country: 'Palau	',
            city: 'Koror	',
            latitude: '07.20N	',
            longitude: '134.28E',
            },
        { 
            country: 'Panama	',
            city: 'Panama	',
            latitude: '09.00N	',
            longitude: '79.25W',
            },
        { 
            country: 'Papua ',
            city: 'New Guinea	Port Moresby	',
            latitude: '09.24S	',
            longitude: '147.08E',
            },
        { 
            country: 'Paraguay	',
            city: 'Asuncion	',
            latitude: '25.10S	',
            longitude: '57.30W',
            },
        { 
            country: 'Peru	',
            city: 'Lima	',
            latitude: '12.00S	',
            longitude: '77.00W',
            },
        { 
            country: 'Philippines	',
            city: 'Manila	',
            latitude: '14.40N	',
            longitude: '121.03E',
            },
        { 
            country: 'Poland	',
            city: 'Warsaw	',
            latitude: '52.13N	',
            longitude: '21.00E',
            },
        { 
            country: 'Portugal	',
            city: 'Lisbon	',
            latitude: '38.42N	',
            longitude: '09.10W',
            },
        { 
            country: 'Puerto ',
            city: 'Rico	San Juan	',
            latitude: '18.28N	',
            longitude: '66.07W',
            },
        { 
            country: 'Qatar	',
            city: 'Doha	',
            latitude: '25.15N	',
            longitude: '51.35E',
            },
        { 
            country: 'Republic ',
            city: 'of Korea	Seoul	',
            latitude: '37.31N	',
            longitude: '126.58E',
            },
        { 
            country: 'Romania	',
            city: 'Bucuresti	',
            latitude: '44.27N	',
            longitude: '26.10E',
            },
        { 
            country: 'Russian ',
            city: 'Federation	Moskva	',
            latitude: '55.45N	',
            longitude: '37.35E',
            },
        { 
            country: 'Rawanda	',
            city: 'Kigali	',
            latitude: '01.59S	',
            longitude: '30.04E',
            },
        { 
            country: 'Saint ',
            city: 'Kitts and Nevis	Basseterre	',
            latitude: '17.17N	',
            longitude: '62.43W',
            },
        { 
            country: 'Saint ',
            city: 'Lucia	Castries	',
            latitude: '14.02N	',
            longitude: '60.58W',
            },
        { 
            country: 'Saint ',
            city: 'Pierre and Miquelon	Saint-Pierre	',
            latitude: '46.46N	',
            longitude: '56.12W',
            },
        { 
            country: 'Saint ',
            city: 'Vincent and the Greenadines	Kingstown	',
            latitude: '13.10N	',
            longitude: '61.10W',
            },
        { 
            country: 'Samoa	',
            city: 'Apia	',
            latitude: '13.50S	',
            longitude: '171.50W',
            },
        { 
            country: 'San ',
            city: 'Marino	San Marino	',
            latitude: '43.55N	',
            longitude: '12.30E',
            },
        { 
            country: 'Sao ',
            city: 'Tome and Principe	Sao Tome	',
            latitude: '00.10N	',
            longitude: '06.39E',
            },
        { 
            country: 'Saudi ',
            city: 'Arabia	Riyadh	',
            latitude: '24.41N	',
            longitude: '46.42E',
            },
        { 
            country: 'Senegal	',
            city: 'Dakar	',
            latitude: '14.34N	',
            longitude: '17.29W',
            },
        { 
            country: 'Sierra ',
            city: 'Leone	Freetown	',
            latitude: '08.30N	',
            longitude: '13.17W',
            },
        { 
            country: 'Slovakia	',
            city: 'Bratislava	',
            latitude: '48.10N	',
            longitude: '17.07E',
            },
        { 
            country: 'Slovenia	',
            city: 'Ljubljana	',
            latitude: '46.04N	',
            longitude: '14.33E',
            },
        { 
            country: 'Solomon ',
            city: 'Islands	Honiara	',
            latitude: '09.27S	',
            longitude: '159.57E',
            },
        { 
            country: 'Somalia	',
            city: 'Mogadishu	',
            latitude: '02.02N	',
            longitude: '45.25E',
            },
        { 
            country: 'South ',
            city: 'Africa	Pretoria (administrative) / Cape Town (legislative) / Bloemfontein (judicial)	',
            latitude: '25.44S	',
            longitude: '28.12E',
            },
        { 
            country: 'Spain	',
            city: 'Madrid	',
            latitude: '40.25N	',
            longitude: '03.45W',
            },
        { 
            country: 'Sudan	',
            city: 'Khartoum	',
            latitude: '15.31N	',
            longitude: '32.35E',
            },
        { 
            country: 'Suriname	',
            city: 'Paramaribo	',
            latitude: '05.50N	',
            longitude: '55.10W',
            },
        { 
            country: 'Swaziland	',
            city: 'Mbabane (administrative)	',
            latitude: '26.18S	',
            longitude: '31.06E',
            },
        { 
            country: 'Sweden	',
            city: 'Stockholm	',
            latitude: '59.20N	',
            longitude: '18.03E',
            },
        { 
            country: 'Switzerland	',
            city: 'Bern	',
            latitude: '46.57N	',
            longitude: '07.28E',
            },
        { 
            country: 'Syrian ',
            city: 'Arab Republic	Damascus	',
            latitude: '33.30N	',
            longitude: '36.18E',
            },
        { 
            country: 'Tajikistan	',
            city: 'Dushanbe	',
            latitude: '38.33N	',
            longitude: '68.48E',
            },
        { 
            country: 'Thailand	',
            city: 'Bangkok	',
            latitude: '13.45N	',
            longitude: '100.35E',
            },
        { 
            country: 'Togo	',
            city: 'Lome	',
            latitude: '06.09N	',
            longitude: '01.20E',
            },
        { 
            country: 'Tonga	',
            city: 'Nuku'alofa	',
            latitude: '21.10S	',
            longitude: '174.00W',
            },
        { 
            country: 'Tunisia	',
            city: 'Tunis	',
            latitude: '36.50N	',
            longitude: '10.11E',
            },
        { 
            country: 'Turkey	',
            city: 'Ankara	',
            latitude: '39.57N	',
            longitude: '32.54E',
            },
        { 
            country: 'Turkmenistan	',
            city: 'Ashgabat	',
            latitude: '38.00N	',
            longitude: '57.50E',
            },
        { 
            country: 'Tuvalu	',
            city: 'Funafuti	',
            latitude: '08.31S	',
            longitude: '179.13E',
            },
        { 
            country: 'Uganda	',
            city: 'Kampala	',
            latitude: '00.20N	',
            longitude: '32.30E',
            },
        { 
            country: 'Ukraine	',
            city: 'Kiev (Russia)	',
            latitude: '50.30N	',
            longitude: '30.28E',
            },
        { 
            country: 'United ',
            city: 'Arab Emirates	Abu Dhabi	',
            latitude: '24.28N	',
            longitude: '54.22E',
            },
        { 
            country: 'United ',
            city: 'Kingdom of Great Britain and Northern Ireland	London	',
            latitude: '51.36N	',
            longitude: '00.05W',
            },
        { 
            country: 'United ',
            city: 'Republic of Tanzania	Dodoma	',
            latitude: '06.08S	',
            longitude: '35.45E',
            },
        { 
            country: 'United ',
            city: 'States of America	Washington DC	',
            latitude: '39.91N	',
            longitude: '77.02W',
            },
        { 
            country: 'United ',
            city: 'States of Virgin Islands	Charlotte Amalie	',
            latitude: '18.21N	',
            longitude: '64.56W',
            },
        { 
            country: 'Uruguay	',
            city: 'Montevideo	',
            latitude: '34.50S	',
            longitude: '56.11W',
            },
        { 
            country: 'Uzbekistan	',
            city: 'Tashkent	',
            latitude: '41.20N	',
            longitude: '69.10E',
            },
        { 
            country: 'Vanuatu	',
            city: 'Port-Vila	',
            latitude: '17.45S	',
            longitude: '168.18E',
            },
        { 
            country: 'Venezuela	',
            city: 'Caracas	',
            latitude: '10.30N	',
            longitude: '66.55W',
            },
        { 
            country: 'Viet ',
            city: 'Nam	Hanoi	',
            latitude: '21.05N	',
            longitude: '105.55E',
            },
        { 
            country: 'Yugoslavia	',
            city: 'Belgrade	',
            latitude: '44.50N	',
            longitude: '20.37E',
            },
        { 
            country: 'Zambia	',
            city: 'Lusaka	',
            latitude: '15.28S	',
            longitude: '28.16E',
            },
        { 
            country: 'Zimbabwe	',
            city: 'Harare	',
            latitude: '17.43S	',
            longitude: '31.02E',
            },
        ];
    });
});