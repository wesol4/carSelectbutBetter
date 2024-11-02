import {Car} from "./Car.ts";

export let cars: Car[];

cars = [
	{
		name: "Hyundai Bayon",
		engine: "1.0",
		power: 100,
		price: "88,000",
		comments: "TANIE i nowoczesne, rabat 18,000",
		otomotoUrl: "https://www.otomoto.pl/osobowe/hyundai/bayon?search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/JJ485GRCRyySRSuJ9",
		imageUrls: ["/src/assets/bayon.jpeg", "src/assets/bayon2.jpeg", "src/assets/bayon3.jpeg", "src/assets/bayonInt.jpeg", "src/assets/bayonBack.jpeg"]
	},
	{
		name: "Volkswagen T-Cross",
		engine: "1.0",
		power: 115,
		price: "105,000",
		comments: "Klasyczne i ładne, rabat 20,000",
		otomotoUrl: "https://www.otomoto.pl/osobowe/volkswagen/t-cross/od-2004?search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/UNwjYvWP2uqwYkH3A",
		imageUrls: ["/src/assets/tcross0.jpg", "src/assets/tcross3.jpg", "/src/assets/tcross.jpeg", "src/assets/tcross2.jpeg", "src/assets/tcrossInt.jpeg", "src/assets/tcrossBack.jpeg"]
	},
	{
		name: "Volkswagen Taigo",
		engine: "1.0",
		power: 115,
		price: "105,000",
		comments: "Duże, ladne, dla ludu, rabat 20,000",
		otomotoUrl: "https://www.otomoto.pl/osobowe/volkswagen/taigo/od-2024?search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/X9YGms6BaSKye6DLA",
		imageUrls: ["/src/assets/taigo.jpeg", "src/assets/taigo2.jpeg",  "src/assets/taigo3.jpeg", "src/assets/taigoInt.jpeg", "src/assets/taigoBack.jpeg"]
	},
	{
		name: "Skoda Kamiq",
		engine: "1.0",
		power: 115,
		price: "106,000",
		comments: "Jak Taigo, zaczynają się rabaty. Ciut staro wygląda",
		otomotoUrl: "https://www.otomoto.pl/osobowe/skoda/kamiq/od-2024?search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/yn6zCVocSdbY8rrB9",
		imageUrls: ["/src/assets/kamiq.jpg", "src/assets/kamiq2.jpg", "src/assets/kamiqInt.jpeg", "src/assets/kamiqBack.jpeg"]
	},
	{
		name: "Kia Stonic",
		engine: "1.0",
		power: 100,
		price: "94,000",
		comments: "Super auto kompaktowe, Cene OK.",
		otomotoUrl: "https://www.otomoto.pl/osobowe/kia/stonic?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://www.google.com/search?q=kia+stonic+2024&sca_esv=dcbcef83952848e4&udm=2&biw=1916&bih=1925&sxsrf=ADLYWIKJm90PWQtQnz7LCJC3jIsJuMY3AQ%3A1729712009195&ei=iU8ZZ4nIC4i39u8Pio61-Qw&ved=0ahUKEwjJsPyun6WJAxWIm_0HHQpHLc8Q4dUDCBA&uact=5&oq=kia+stonic+2024&gs_lp=EgNpbWciD2tpYSBzdG9uaWMgMjAyNDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIrQZQ9ANYqQVwAXgAkAEAmAFZoAGlAaoBATK4AQPIAQD4AQGYAgOgArEBwgIGEAAYBxgewgIEECMYJ5gDAIgGAZIHATOgB8UL&sclient=img#vhid=R7AQCcvniZsUxM&vssid=mosaic",
		imageUrls: ["/src/assets/stonic.jpeg", "src/assets/stonic2.jpeg", "src/assets/stonicInt.jpeg", "src/assets/stonicInt2.jpeg"]
	},
	{
		name: "Renault Clio",
		engine: "1.0",
		power: 90,
		price: "79,000",
		comments: "Male fajne, Renault, dobra cena",
		otomotoUrl: "https://www.otomoto.pl/osobowe/renault/clio/od-2024?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://www.google.com/search?sca_esv=31fc9eb8bb598b81&sxsrf=ADLYWIIi6l8qk-0PsQ7xbOgqXXzudNHhyg:1729592218144&q=Renault+Clio+2024&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J_86uWOeqwdnV0yaSF-x2jon2iao6KWCaVjfn7ahz_sf_uPKlBgHiXUTxuTOrBgkEHAZKBArNMIg_JaUOYCTVNreNhAlJbFKEmzPuAQkoiBtIhrPYKQR3WHGzgZYwxf2NkHIa-s&sa=X&ved=2ahUKEwjH55KO4aGJAxWHh_0HHZUpDEwQtKgLegQIGhAB&biw=1909&bih=1925&dpr=1#vhid=GGmP4zVrC26ojM&vssid=mosaic",
		imageUrls: ["/src/assets/clio.jpeg", "src/assets/clioInt.jpeg", "src/assets/clioBack.jpeg"]
	},
	{
		name: "Nissan Juke",
		engine: "1.0",
		power: 114,
		price: "99,000",
		comments: "Jakość wykonania jedna z lepszych",
		otomotoUrl: "https://www.otomoto.pl/osobowe/nissan/juke?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/zuEAUtpPiqkHPExa7",
		imageUrls: ["/src/assets/juke.jpeg", "/src/assets/juke2.jpeg", "src/assets/jukeInt.jpeg", "src/assets/jukeInt2.jpeg","src/assets/jukeInt3.jpeg", "/src/assets/jukeBack.jpeg"]
	},
	{
		name: "Suzuki Vitara",
		engine: "1.5H",
		power: 130,
		price: "105,000",
		comments: "Klasycznie wygląda :) Fajne auto",
		otomotoUrl: "https://www.otomoto.pl/osobowe/suzuki/vitara?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/5SGiB2CPuSbgXDk78",
		imageUrls: ["/src/assets/vitara.jpeg", "src/assets/vitaraInt.jpeg", "src/assets/vitaraBack.jpeg", "src/assets/vitaraBack2.jpeg"]
	},
	{
		name: "Dacia Stepway",
		engine: "0.9",
		power: 90,
		price: "83,200",
		comments: "Tanie, dobre, do negocjacji!!",
		otomotoUrl: "https://www.dacia.pl/katalog-nci.html?CAMPAIGN=pl-pl-d-l-def-brand-all_products-ice-go-classic-aTAGnHHs-&ORIGIN=paid_search&gad_source=1&gclid=Cj0KCQjw99e4BhDiARIsAISE7P8NUUXiK6yMB6cAlVbTp39Ve5xUwDRn6OlJ-j79rPj_u-7AIXZPE8IaAr5JEALw_wcB&gclsrc=aw.ds&model.code=BI1&sortKey=prices.discountedPriceWithTaxes&sortOrder=%2B&transmission.group=AUTOMATIC&utm_campaign=pl-pl-d-l-def-brand-all_products-ice-go-classic-aTAGnHHs-&utm_id=17630383397&utm_medium=cpc&utm_source=google",
		wwwExample: "https://images.app.goo.gl/MnokgV49SN6644ds5",
		imageUrls: ["/src/assets/stepway.png", "/src/assets/stepwayInt2.jpeg", "/src/assets/stepwayBack.jpeg"]
	},
	{
		name: "Toyota Yaris Cross",
		engine: "1.5H",
		power: 130,
		price: "103,000",
		comments: "Fajne kompaktowe SUVidełko, super hybryda",
		otomotoUrl: "https://www.otomoto.pl/osobowe/toyota/yaris-cross?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/e4dF3x2Ujg4qMSbX9",
		imageUrls: ["/src/assets/yarisCross.jpeg", "src/assets/yarisCrossInt.jpeg", "src/assets/yarisCrossBack.jpeg"]
	},
	{
		name: "Toyota Yaris",
		engine: "1.5",
		power: 125,
		price: "88,000",
		comments: "Fajne ale male, hybryda",
		otomotoUrl: "https://www.otomoto.pl/osobowe/toyota/yaris?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/TUFmCK7HyhHNJ7Cg9",
		imageUrls: ["/src/assets/yaris.jpg", "src/assets/yarisInt.jpeg"]
	},
	{
		name: "Ford Puma",
		engine: "1.0",
		power: 125		,
		price: "110,000",
		comments: "Mega dynamicznem, nowoczesne",
		otomotoUrl: "https://www.otomoto.pl/osobowe/ford/puma/od-2024?search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://www.google.com/search?sca_esv=5bb96e0579041c84&sxsrf=ADLYWIIZquffq54TGTqC3tPClXx5Ev8mNw:1729939588276&q=ford+puma+2024&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J_86uWOeqwdnV0yaSF-x2jon2iao6KWCaVjfn7ahz_sf_uPKlBgHiXUTxuTOrBgkEHAZKBArNMIg_JaUOYCTVNreNhAlJbFKEmzPuAQkoiBtIhrPYKQR3WHGzgZYwxf2NkHIa-s&sa=X&ved=2ahUKEwiilJGV76uJAxUOGhAIHbmjJQEQtKgLegQIFBAB&biw=1800&bih=945&dpr=2#vhid=aOpQEABZl-iuSM&vssid=mosaic",
		imageUrls: ["/src/assets/puma.jpeg", "src/assets/puma2.jpeg", "src/assets/puma3.jpeg", "src/assets/pumaInt.jpeg", "src/assets/pumaInt2.jpeg"]
	},
	{
		name: "Hyundai i30",
		engine: "1.0",
		power: 120,
		price: "96,000",
		comments: "Fajne, proste, dobry silnik",
		otomotoUrl: "https://www.otomoto.pl/osobowe/hyundai/i30?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/3cLPec8HZTpCL3zL9",
		imageUrls: ["/src/assets/i30.jpeg", "src/assets/i30Int.jpeg", "src/assets/i30Back.jpeg"]
	},
	{
		name: "Seat Arona",
		engine: "1.0",
		power: 115	,
		price: "96,600",
		comments: "Fajne, kompaktowe, ciut stare",
		otomotoUrl: "https://www.otomoto.pl/osobowe/seat/arona/od-2024?search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/8MVSdHwkPYdwUJ7g7",
		imageUrls: ["/src/assets/arona.jpeg", "src/assets/arona2.jpeg", "src/assets/aronaInt.jpeg", "src/assets/aronaInt2.jpeg", "src/assets/aronaBack.jpeg"]
	},
	{
		name: "Kia Niro",
		engine: "1.6H",
		power: 105,
		price: "122,900",
		comments: "Super w środku",
		otomotoUrl: "https://www.otomoto.pl/osobowe/kia?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D=hybrid&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://www.google.com/search?q=kia+niro+2024+&sca_esv=f3c510255100d4e3&udm=2&biw=1921&bih=1925&sxsrf=ADLYWILis8jXBKCMmMzEC-gnmXpDVd5DCQ%3A1729626325906&ei=1QAYZ_KEN7vSwPAP09KB0Ak&ved=0ahUKEwiyw_-V4KKJAxU7KRAIHVNpAJoQ4dUDCBA&uact=5&oq=kia+niro+2024+&gs_lp=EgNpbWciDmtpYSBuaXJvIDIwMjQgMgQQIxgnMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESJMGUK8DWKkEcAF4AJABAJgBPaABeKoBATK4AQPIAQD4AQGYAgOgAoIBwgIGEAAYCBgewgIEEAAYHpgDAIgGAZIHATOgB8wO&sclient=img",
		imageUrls: ["/src/assets/niro.jpeg", "src/assets/niro2.jpeg", "src/assets/niroInt.jpeg", "src/assets/niroInt2.jpeg"]
	},
	{
		name: "Renault Capture",
		engine: "1.3/1.6H",
		power: 145,
		price: "111,000",
		comments: "idealna wielkość, super nowocześnie wygląda, ma hybrydę, brak na razie promocji na koniec roku",
		otomotoUrl: "https://www.otomoto.pl/osobowe/renault/captur/od-2024?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/32oMny2CFxVru9ta6",
		imageUrls: ["/src/assets/capture.jpeg", "src/assets/captureInt2.jpeg"]
	},
	{
		name: "Kia Xceed",
		engine: "1.5",
		power: 140,
		price: "110,000",
		comments: "Solidny silnik",
		otomotoUrl: "https://www.otomoto.pl/osobowe/kia/xceed?search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://www.google.com/search?sca_esv=db4abae39b6385be&sxsrf=ADLYWIK8XdRk3chvFkJwg1VsavaAGPKerg:1729938272104&q=kia+xceed+2024&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J_86uWOeqwdnV0yaSF-x2jon2iao6KWCaVjfn7ahz_sf_uPKlBgHiXUTxuTOrBgkEHAZKBArNMIg_JaUOYCTVNreNhAlJbFKEmzPuAQkoiBtIhrPYKQR3WHGzgZYwxf2NkHIa-s&sa=X&sqi=2&ved=2ahUKEwjnpsSh6quJAxUnAtsEHTOUIW4QtKgLegQIHBAB&biw=1800&bih=945&dpr=2#vhid=sguKWh8G573B6M&vssid=mosaic",
		imageUrls: ["/src/assets/xceed.jpeg", "src/assets/xceed2.jpeg", "src/assets/xceedInt.jpeg", "src/assets/xceedBack.jpeg"]
	},
	{
		name: "Hyundai Kona",
		engine: "1.0",
		power: 120,
		price: "112,000",
		comments: "Hybryda od 117,000",
		otomotoUrl: "https://www.otomoto.pl/osobowe/hyundai/kona?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/cx6CwWHHVMep2wxA6",
		imageUrls: ["/src/assets/kona.jpeg", "src/assets/konaInt2.jpeg", "src/assets/konaBack.jpeg" ]
	},
	{
		name: "Mitsubishi ASX",
		engine: "1.3",
		power: 158,
		price: "117,000",
		comments: "5 lat gwarancji, mild hibrid",
		otomotoUrl: "https://www.otomoto.pl/osobowe/mitsubishi/asx/od-2024?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://www.google.com/search?sca_esv=31fc9eb8bb598b81&sxsrf=ADLYWIJtQsf5sgfEcOAjn2_0D0u1q1YQuQ:1729592537749&q=Mitsubishi+ASX+2024&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J_86uWOeqwdnV0yaSF-x2jon2iao6KWCaVjfn7ahz_sf_uPKlBgHiXUTxuTOrBgkEHAZKBArNMIg_JaUOYCTVNreNhAlJbFKEmzPuAQkoiBtIhrPYKQR3WHGzgZYwxf2NkHIa-s&sa=X&ved=2ahUKEwiy-cWm4qGJAxUXgv0HHeN_FvMQtKgLegQIHRAB&biw=1909&bih=1925&dpr=1",
		imageUrls: ["/src/assets/asx.jpeg", "src/assets/asxInt.jpeg"]
	},
	{
		name: "Toyota CHR",
		engine: "1.8H",
		power: 140,
		price: "120,000",
		comments: "Jakościowe, klimatyzacja automatyczna (dwustrefowa), 17 felgi, slabe klamki",
		otomotoUrl: "https://www.otomoto.pl/osobowe/toyota/c-hr?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/t9sbBjjfVKXTdoVr5",
		imageUrls: ["/src/assets/chr.jpg", "/src/assets/chrInt2.jpeg"]
	},
	{
		name: "Dacia Duster",
		engine: "1.6H",
		power: 140,
		price: "117,000",
		comments: "Duży, masywny, bezpieczny, hybryda",
		otomotoUrl: "https://www.otomoto.pl/osobowe/dacia/duster?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_enum_generation%5D=gen-iii-2024&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/NoabLVEm31uSr9AVA",
		imageUrls: ["/src/assets/duster.jpeg", "src/assets/dasterInt.jpeg"]
	},
	{
		name: "Hyundai i20",
		engine: "1.0",
		power: 100,
		price: "85,000",
		comments: "Kompaktowy, prosty w użyciu",
		otomotoUrl: "https://www.otomoto.pl/osobowe/hyundai/i20/od-2024?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_enum_generation%5D=gen-iii-2020&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/kK5Nhvgi429xzZKV8",
		imageUrls: ["/src/assets/i20.jpeg", "src/assets/i20Int.jpeg", "src/assets/i202.jpg"]
	},
	{
		name: "Suzuki Swift",
		engine: "1.2",
		power: 83,
		price: "84,000",
		comments: "Fajnie się siedzi, dobrze wysiada",
		otomotoUrl: "https://www.otomoto.pl/osobowe/suzuki/swift?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_enum_generation%5D=gen-vii-2024&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/MnokgV49SN6644ds5",
		imageUrls: ["/src/assets/swift.jpeg", "src/assets/swiftInt.jpg", "src/assets/swiftBack.jpeg"]
	},
	{
		name: "MG MG3",
		engine: "1.5H",
		power: 195,
		price: "94,000",
		comments: "Tanio, ale chińśczyk, full wersja 103,000",
		otomotoUrl: "https://www.otomoto.pl/osobowe/mg/mg3?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/BCEVV8UTKFfmKiVr5",
		imageUrls: ["/src/assets/mg3.jpeg", "src/assets/mg3Int.jpeg", "src/assets/mg3Int2.jpg"]
	},
	{
		name: "Nissan Qashqai",
		engine: "1.3",
		power: 158,
		price: "125,000",
		comments: "Mega fajnie w środku, dobry feeling",
		otomotoUrl: "https://www.otomoto.pl/osobowe/nissan/qashqai?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_enum_generation%5D=gen-iii-2021&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/Gotkx6i3az5LyugEA",
		imageUrls: ["/src/assets/qashqai.jpeg", "src/assets/qashqaiInt.jpeg", "src/assets/qashqaiBack.jpeg"]
	},
	{
		name: "MG ZS",
		engine: "1.5h",
		power: 0,
		price: "105,000",
		comments: "Będzie w listopadzie, 7 lat gwarancji, chińczyk",
		otomotoUrl: "https://www.otomoto.pl/osobowe/mg/zs?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://www.youtube.com/watch?app=desktop&v=z_kZuv5GnN8",
		imageUrls: ["/src/assets/zs.jpeg", "src/assets/zsInt.jpeg"]
	},
];
