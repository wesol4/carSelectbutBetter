import {Car} from "./Car.ts";

export let cars: Car[];

cars = [
	{
		name: "Suzuki Vitara",
		engine: "1.5H",
		power: 130,
		price: "105,000",
		comments: "Klasycznie wygląda :) Fajne auto",
		otomotoUrl: "https://www.otomoto.pl/osobowe/suzuki/vitara?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/5SGiB2CPuSbgXDk78",
		imageUrls: ["/src/assets/vitara.jpeg", "src/assets/vitaraInt.jpeg", "src/assets/vitaraBack.jpeg", "src/assets/vitaraBack2.jpeg"],
		wymiary: "4175 x 1775 x 1610 mm"
	},
	{
		name: "Ford Puma",
		engine: "1.0",
		power: 125		,
		price: "110,000",
		comments: "Mega dynamicznem, nowoczesne",
		otomotoUrl: "https://www.otomoto.pl/osobowe/ford/puma/od-2024?search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://www.google.com/search?sca_esv=5bb96e0579041c84&sxsrf=ADLYWIIZquffq54TGTqC3tPClXx5Ev8mNw:1729939588276&q=ford+puma+2024&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J_86uWOeqwdnV0yaSF-x2jon2iao6KWCaVjfn7ahz_sf_uPKlBgHiXUTxuTOrBgkEHAZKBArNMIg_JaUOYCTVNreNhAlJbFKEmzPuAQkoiBtIhrPYKQR3WHGzgZYwxf2NkHIa-s&sa=X&ved=2ahUKEwiilJGV76uJAxUOGhAIHbmjJQEQtKgLegQIFBAB&biw=1800&bih=945&dpr=2#vhid=aOpQEABZl-iuSM&vssid=mosaic",
		imageUrls: ["/src/assets/puma.jpeg", "src/assets/puma2.jpeg", "src/assets/puma3.jpeg", "src/assets/pumaInt.jpeg", "src/assets/pumaInt2.jpeg"],
		wymiary: "4186 × 1805 × 1550 mm"
	},
	{
		name: "Renault Capture",
		engine: "1.3/1.6H",
		power: 145,
		price: "111,000",
		comments: "idealna wielkość, super nowocześnie wygląda, ma hybrydę, brak na razie promocji na koniec roku",
		otomotoUrl: "https://www.otomoto.pl/osobowe/renault/captur/od-2024?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/32oMny2CFxVru9ta6",
		imageUrls: ["/src/assets/capture.jpeg", "src/assets/captureInt2.jpeg"],
		wymiary: "4239 × 1797 × 1575 mm"
	},
	{
		name: "Hyundai Kona",
		engine: "1.0",
		power: 120,
		price: "112,000",
		comments: "Hybryda od 117,000",
		otomotoUrl: "https://www.otomoto.pl/osobowe/hyundai/kona?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/cx6CwWHHVMep2wxA6",
		imageUrls: ["/src/assets/kona.jpeg", "src/assets/konaInt2.jpeg", "src/assets/konaBack.jpeg" ],
		wymiary: "4355 × 1825 × 1575 mm"
	},
	{
		name: "Mitsubishi ASX",
		engine: "1.3",
		power: 158,
		price: "117,000",
		comments: "5 lat gwarancji, mild hibrid",
		otomotoUrl: "https://www.otomoto.pl/osobowe/mitsubishi/asx/od-2024?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://www.google.com/search?sca_esv=31fc9eb8bb598b81&sxsrf=ADLYWIJtQsf5sgfEcOAjn2_0D0u1q1YQuQ:1729592537749&q=Mitsubishi+ASX+2024&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J_86uWOeqwdnV0yaSF-x2jon2iao6KWCaVjfn7ahz_sf_uPKlBgHiXUTxuTOrBgkEHAZKBArNMIg_JaUOYCTVNreNhAlJbFKEmzPuAQkoiBtIhrPYKQR3WHGzgZYwxf2NkHIa-s&sa=X&ved=2ahUKEwiy-cWm4qGJAxUXgv0HHeN_FvMQtKgLegQIHRAB&biw=1909&bih=1925&dpr=1",
		imageUrls: ["/src/assets/asx.jpeg", "src/assets/asxInt.jpeg"],
		wymiary: "4227 × 1797 × 1567 mm"
	},
	{
		name: "Toyota CHR",
		engine: "1.8H",
		power: 140,
		price: "120,000",
		comments: "Jakościowe, klimatyzacja automatyczna (dwustrefowa), 17 felgi, slabe klamki",
		otomotoUrl: "https://www.otomoto.pl/osobowe/toyota/c-hr?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/t9sbBjjfVKXTdoVr5",
		imageUrls: ["/src/assets/chr.jpg", "/src/assets/chrInt2.jpeg"],
		wymiary: "4360 × 1830 × 1570 mm"
	},
	{
		name: "Dacia Duster",
		engine: "1.6H",
		power: 140,
		price: "117,000",
		comments: "Duży, masywny, bezpieczny, hybryda",
		otomotoUrl: "https://www.otomoto.pl/osobowe/dacia/duster?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_enum_generation%5D=gen-iii-2024&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/NoabLVEm31uSr9AVA",
		imageUrls: ["/src/assets/duster.jpeg", "src/assets/dasterInt.jpeg"],
		wymiary: "4344 × 1813 × 1656 mm"
	},
	{
		name: "MG HS",
		engine: "1.5H",
		power: 170,
		price: "109,900",
		comments: "Tanio, ale chińśczyk",
		otomotoUrl: "https://www.otomoto.pl/osobowe/mg/hs?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "",
		imageUrls: ["/src/assets/mghs_2.jpg", "/src/assets/mghs_1.webp"],
		wymiary: "4670 × 1890 × 1663 mm"
	},
	{
		name: "Nissan Qashqai",
		engine: "1.3",
		power: 158,
		price: "125,000",
		comments: "Mega fajnie w środku, dobry feeling",
		otomotoUrl: "https://www.otomoto.pl/osobowe/nissan/qashqai?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_enum_generation%5D=gen-iii-2021&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/Gotkx6i3az5LyugEA",
		imageUrls: ["/src/assets/qashqai.jpeg", "src/assets/qashqaiInt.jpeg", "src/assets/qashqaiBack.jpeg"],
		wymiary: "4425 × 1838 × 1635 mm"
	},
	{
		name: "MG ZS",
		engine: "1.5h",
		power: 0,
		price: "105,000",
		comments: "Będzie w listopadzie, 7 lat gwarancji, chińczyk",
		otomotoUrl: "https://www.otomoto.pl/osobowe/mg/zs?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://www.youtube.com/watch?app=desktop&v=z_kZuv5GnN8",
		imageUrls: ["/src/assets/zs.jpeg", "src/assets/zsInt.jpeg"],
		wymiary: "4430 × 1818 × 1635 mm "
	},
{
		name: "Volvo XC60",
		engine: "B4 mild hybrid",
		power: 197,
		price: "230,000",
		comments: "Komfortowy, skandynawski styl, świetne zawieszenie",
		otomotoUrl: "https://www.otomoto.pl/osobowe/volvo/xc60/od-2024?search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://www.google.com/search?q=volvo+xc60+2024",
		imageUrls: ["/src/assets/xc60.jpeg", "/src/assets/xc60_2.jpeg", "/src/assets/xc60_3.jpeg", "/src/assets/xc60_int.jpeg", "/src/assets/xc60_int2.jpeg"],
		wymiary: "4708 × 1902 × 1658 mm"
	},
	{
		name: "Audi Q5",
		engine: "40 TDI / 45 TFSI",
		power: 204,
		price: "240,000",
		comments: "Precyzyjne prowadzenie, klasyczne wnętrze Audi",
		otomotoUrl: "https://www.otomoto.pl/osobowe/audi/q5/od-2024",
		wwwExample: "https://www.google.com/search?q=audi+q5+2024",
		imageUrls: ["/src/assets/q5.jpeg", "/src/assets/q5_2.jpeg", "/src/assets/q5_3.jpeg", "/src/assets/q5_int.jpeg", "/src/assets/q5_int2.jpeg"],
		wymiary: "4682 × 1893 × 1662 mm"
	},
	{
		name: "BMW X3",
		engine: "xDrive20i / 20d",
		power: 184,
		price: "245,000",
		comments: "Sportowy charakter, świetna dynamika",
		otomotoUrl: "https://www.otomoto.pl/osobowe/bmw/x3/od-2024",
		wwwExample: "https://www.google.com/search?q=bmw+x3+2024",
		imageUrls: ["/src/assets/x3.jpeg", "/src/assets/x3_2.jpeg", "/src/assets/x3_3.jpeg", "/src/assets/x3_int.jpeg", "/src/assets/x3_int2.jpeg"],
		wymiary: "4708 × 1891 × 1676 mm"
	},
	{
		name: "Mercedes-Benz GLC",
		engine: "GLC 200 mild hybrid",
		power: 204,
		price: "260,000",
		comments: "Luksusowy, cichy, bardzo dopracowany system MBUX",
		otomotoUrl: "https://www.otomoto.pl/osobowe/mercedes-benz/glc/od-2024",
		wwwExample: "https://www.google.com/search?q=mercedes+glc+2024",
		imageUrls: ["/src/assets/glc.jpeg", "/src/assets/glc_2.jpeg", "/src/assets/glc_3.jpeg", "/src/assets/glc_int.jpeg", "/src/assets/glc_int2.jpeg"],
		wymiary: "4716 × 1890 × 1640 mm"
	},
	{
		name: "Lexus NX",
		engine: "350h (pełna hybryda)",
		power: 243,
		price: "230,000",
		comments: "Bezawaryjność, świetna hybryda, komfort",
		otomotoUrl: "https://www.otomoto.pl/osobowe/lexus/nx/od-2024",
		wwwExample: "https://www.google.com/search?q=lexus+nx+2024",
		imageUrls: ["/src/assets/nx.jpeg", "/src/assets/nx_2.jpeg", "/src/assets/nx_3.jpeg", "/src/assets/nx_int.jpeg", "/src/assets/nx_int2.jpeg"],
		wymiary: "4660 × 1865 × 1670 mm",
		yt: "https://www.youtube.com/watch?v=kmlyHoSRmdw"
	},
];
