import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './assets/img/logo.png';

// const parent = React.createElement('div', {id: 'parent'}, [
//     React.createElement('div', {id: 'child'}, [
//         React.createElement('p', {id: 'child3'}, "react"),
//         React.createElement('button', {onClick: () => console.log("You clicked the button")}, "Click me!")
//     ]),
//     React.createElement('div', {id: 'child1'}, [
//         React.createElement('h2', {id: 'child4'}, "This is another child"),
//         React.createElement('p', {id: 'child2'}, 'Hello World')
//     ])
// ])

const resList = [
    {
    "info": {
    "id": "256893",
    "name": "McDonald's",
    "cloudinaryImageId": "f62564e14944753903849c4ef673af4d",
    "locality": "Hyderabad Kondapur LG",
    "areaName": "Forest Dept Colony",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Beverages",
    "Cafe",
    "Desserts"
    ],
    "avgRating": 4.3,
    "parentId": "630",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 67,
    "lastMileTravel": 9,
    "serviceability": "SERVICEABLE",
    "slaString": "65-70 mins",
    "lastMileTravelString": "9.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-07 23:15:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/mcdonalds-kondapur-lg-forest-dept-colony-hyderabad-256893",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "345899",
    "name": "Theobroma",
    "cloudinaryImageId": "63dd75492c47fcec191132b8eb299ea5",
    "locality": "Gachibowli",
    "areaName": "Gachibowli",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Desserts"
    ],
    "avgRating": 4.5,
    "parentId": "1040",
    "avgRatingString": "4.5",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 57,
    "lastMileTravel": 5.6,
    "serviceability": "SERVICEABLE",
    "slaString": "55-60 mins",
    "lastMileTravelString": "5.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-07 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/theobroma-gachibowli-hyderabad-345899",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "354937",
    "name": "KFC",
    "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
    "locality": "Nanakramguda",
    "areaName": "Kapil Tower",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Biryani",
    "American",
    "Snacks",
    "Fast Food"
    ],
    "avgRating": 4,
    "parentId": "547",
    "avgRatingString": "4.0",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 1.9,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "1.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-07 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹179"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/kfc-nanakramguda-kapil-tower-hyderabad-354937",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "376101",
    "name": "Harley's Fine Baking",
    "cloudinaryImageId": "c3be1a7587dc2ece5b869adf63903a33",
    "locality": "Hitech City",
    "areaName": "Nanakramguda",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Bakery",
    "Desserts"
    ],
    "avgRating": 4.6,
    "parentId": "11126",
    "avgRatingString": "4.6",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-08 02:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
    "shortDescription": "Perfect Cake Delivery",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
    "shortDescription": "Perfect Cake Delivery"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "30% OFF",
    "subHeader": "UPTO ₹75"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/harleys-fine-baking-hitech-city-nanakramguda-hyderabad-376101",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "28767",
    "name": "Domino's Pizza",
    "cloudinaryImageId": "cx8fwaz0ej79yahbcacc",
    "locality": "Lake View Mall",
    "areaName": "Gachibowli",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Pizzas",
    "Italian",
    "Pastas",
    "Desserts"
    ],
    "avgRating": 4.4,
    "parentId": "2456",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 25,
    "serviceability": "SERVICEABLE",
    "slaString": "25 mins",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-08 02:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "30% OFF",
    "subHeader": "UPTO ₹75"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/dominos-pizza-lake-view-mall-gachibowli-hyderabad-28767",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "251587",
    "name": "Euphoria",
    "cloudinaryImageId": "umpn427t5s25iaqpaok5",
    "locality": "Tngos Colony",
    "areaName": "Gachibowli",
    "costForTwo": "₹600 for two",
    "cuisines": [
    "Desserts",
    "Bakery"
    ],
    "avgRating": 4.7,
    "parentId": "8132",
    "avgRatingString": "4.7",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 29,
    "lastMileTravel": 4.1,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "4.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-07 22:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "newg.png",
    "description": "Gourmet"
    }
    ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Gourmet",
    "imageId": "newg.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/euphoria-tngos-colony-gachibowli-hyderabad-251587",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "17165",
    "name": "Subway",
    "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
    "locality": "Gachibowli",
    "areaName": "Financial District",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Salads",
    "Snacks",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.2,
    "parentId": "2",
    "avgRatingString": "4.2",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 42,
    "lastMileTravel": 1.3,
    "serviceability": "SERVICEABLE",
    "slaString": "40-45 mins",
    "lastMileTravelString": "1.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-07 22:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/subway-gachibowli-financial-district-hyderabad-17165",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "324362",
    "name": "Tossin Pizza",
    "cloudinaryImageId": "313485a665bd0f4958fdc14ead8afade",
    "locality": "Gachibowli",
    "areaName": "Gachibowli",
    "costForTwo": "₹600 for two",
    "cuisines": [
    "Pizzas",
    "Italian",
    "Beverages",
    "Desserts"
    ],
    "avgRating": 4.1,
    "parentId": "1778",
    "avgRatingString": "4.1",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 5.8,
    "serviceability": "SERVICEABLE",
    "slaString": "25-35 mins",
    "lastMileTravelString": "5.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-08 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/tossin-pizza-gachibowli-hyderabad-324362",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "193576",
    "name": "Faasos - Wraps, Rolls & Shawarma",
    "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
    "locality": "Near Hanuman Temple",
    "areaName": "Nanakaramguda",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Kebabs",
    "Fast Food",
    "Snacks",
    "American",
    "Healthy Food",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4,
    "parentId": "21809",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 35,
    "lastMileTravel": 1.8,
    "serviceability": "SERVICEABLE",
    "slaString": "35-40 mins",
    "lastMileTravelString": "1.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-07 23:59:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹129"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-near-hanuman-temple-nanakaramguda-hyderabad-193576",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "47120",
    "name": "Istah - The Mediterranean Way",
    "cloudinaryImageId": "67d4a416bf932f850b0a15ad33aae762",
    "locality": "Indira Nagar",
    "areaName": "Gachibowli",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Mediterranean",
    "Snacks",
    "Biryani",
    "Grill",
    "Kebabs",
    "Arabian",
    "Lebanese",
    "Beverages",
    "Desserts",
    "Italian",
    "Turkish"
    ],
    "avgRating": 4.4,
    "parentId": "3518",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 3.5,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "3.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-08 03:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
    "description": "OnlyOnSwiggy"
    }
    ],
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "OnlyOnSwiggy",
    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹110"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-indira-nagar-gachibowli-hyderabad-47120",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "124726",
    "name": "Baskin Robbins - Ice Cream Desserts",
    "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
    "locality": "Nanakramguda",
    "areaName": "Gachibowli",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Desserts",
    "Ice Cream"
    ],
    "avgRating": 4.5,
    "veg": true,
    "parentId": "5588",
    "avgRatingString": "4.5",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-08 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "30% OFF",
    "subHeader": "UPTO ₹75"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-nanakramguda-gachibowli-hyderabad-124726",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "227381",
    "name": "CakeZone Patisserie",
    "cloudinaryImageId": "be330f6d8f109c8eee9ea0e3bea704f4",
    "locality": "Rangareddi",
    "areaName": "VATTINAGULAPALLI",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Bakery",
    "Desserts",
    "Sweets",
    "Ice Cream"
    ],
    "avgRating": 4.2,
    "parentId": "7003",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 33,
    "lastMileTravel": 2.5,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "2.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-08 02:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/cakezone-patisserie-rangareddi-vattinagulapalli-hyderabad-227381",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "193587",
    "name": "Sweet Truth - Cake and Desserts",
    "cloudinaryImageId": "81cf6bfe2760a45a0caf2e28716ca4d7",
    "locality": "Near Hanuman Temple",
    "areaName": "Nanakaramguda",
    "costForTwo": "₹450 for two",
    "cuisines": [
    "Snacks",
    "Bakery",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.4,
    "parentId": "4444",
    "avgRatingString": "4.4",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 36,
    "lastMileTravel": 1.8,
    "serviceability": "SERVICEABLE",
    "slaString": "35-40 mins",
    "lastMileTravelString": "1.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-07 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹119"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-near-hanuman-temple-nanakaramguda-hyderabad-193587",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "193588",
    "name": "The Good Bowl",
    "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
    "locality": "Near Hanuman Temple",
    "areaName": "Nanakaramguda",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Pastas",
    "Punjabi",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4,
    "parentId": "7918",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 36,
    "lastMileTravel": 1.8,
    "serviceability": "SERVICEABLE",
    "slaString": "35-40 mins",
    "lastMileTravelString": "1.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-07 23:59:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹110"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/the-good-bowl-near-hanuman-temple-nanakaramguda-hyderabad-193588",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "335329",
    "name": "Natural Ice Cream",
    "cloudinaryImageId": "varz2fav6s8igmhhbrxt",
    "locality": "Narsingi FC",
    "areaName": "Narsingi",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "Ice Cream",
    "Desserts"
    ],
    "avgRating": 4.6,
    "veg": true,
    "parentId": "2093",
    "avgRatingString": "4.6",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 36,
    "lastMileTravel": 4.3,
    "serviceability": "SERVICEABLE",
    "slaString": "35-40 mins",
    "lastMileTravelString": "4.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-07 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/natural-ice-cream-fc-narsingi-hyderabad-335329",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "193578",
    "name": "Oven Story Pizza - Standout Toppings",
    "cloudinaryImageId": "b39e4312ae2e9f65c3b58faaed83f488",
    "locality": "Near Hanuman Temple",
    "areaName": "Nanakaramguda",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Pizzas",
    "Pastas",
    "Italian",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 3.8,
    "parentId": "3534",
    "avgRatingString": "3.8",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 32,
    "lastMileTravel": 1.8,
    "serviceability": "SERVICEABLE",
    "slaString": "27-37 mins",
    "lastMileTravelString": "1.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-07 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-near-hanuman-temple-nanakaramguda-hyderabad-193578",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "418492",
    "name": "Pizza Hut",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "locality": "Kokapet",
    "areaName": "Narsingi & Kokapet",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Pizzas"
    ],
    "avgRating": 4,
    "parentId": "721",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 49,
    "lastMileTravel": 4.6,
    "serviceability": "SERVICEABLE",
    "slaString": "45-50 mins",
    "lastMileTravelString": "4.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-07 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/pizza-hut-kokapet-narsingi-and-kokapet-hyderabad-418492",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "487816",
    "name": "Shoyu",
    "cloudinaryImageId": "htihgh01jvclpaznbv88",
    "locality": "Madhapur",
    "areaName": "Madhapur",
    "costForTwo": "₹1200 for two",
    "cuisines": [
    "Asian",
    "Japanese"
    ],
    "avgRating": 4.4,
    "parentId": "255090",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 75,
    "lastMileTravel": 9.3,
    "serviceability": "SERVICEABLE",
    "slaString": "70-75 mins",
    "lastMileTravelString": "9.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-07 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹899",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/shoyu-madhapur-hyderabad-487816",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "129541",
    "name": "Burger King",
    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "locality": "Capital Mall",
    "areaName": "Forest Dept Colony",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Burgers",
    "American"
    ],
    "avgRating": 4,
    "parentId": "166",
    "avgRatingString": "4.0",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 80,
    "lastMileTravel": 9,
    "serviceability": "SERVICEABLE",
    "slaString": "80-85 mins",
    "lastMileTravelString": "9.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-07 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-king-capital-mall-forest-dept-colony-hyderabad-129541",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "193589",
    "name": "LunchBox - Meals and Thalis",
    "cloudinaryImageId": "kleiduaw3gqkff0zuu3y",
    "locality": "Near Hanuman Temple",
    "areaName": "Nanakaramguda",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Punjabi",
    "Healthy Food",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.1,
    "parentId": "4925",
    "avgRatingString": "4.1",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 35,
    "lastMileTravel": 1.8,
    "serviceability": "SERVICEABLE",
    "slaString": "35-40 mins",
    "lastMileTravelString": "1.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-03-07 23:59:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹159"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-near-hanuman-temple-nanakaramguda-hyderabad-193589",
    "type": "WEBLINK"
    }
    }
];

const Header  = () => {
    return (
        <header className="bg-white shadow">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo-wrapper">
                    <img className="logo" src={logo} alt="Logo" height="50" />
                </div>
                <nav className="d-flex">
                    <ul className="list-unstyled d-flex justify-content-between mb-0">
                        <li className="ps-4">Home</li>
                        <li className="ps-4">About Us</li>
                        <li className="ps-4">Contact Us</li>
                        <li className="ps-4">cart</li>
                    </ul>
                </nav>
            </div>
        </header>
        )
}

const RestrauntsCard = (props) =>  {
    const { resData } = props;
    console.log(resData);
    return (
        <div className="col-12 col-md-6 col-lg-3 px-3 py-4">
            <img height="100" width="100%" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} />
            <h6>{resData?.info?.name}</h6>
        </div>
        );
};  

const Body = () => {
    return (
        <div className="container py-3 my-4">
            <div className="d-flex col-12">
                <input className="col border border-secondary px-3 py-2" type="search" placeholder="Search Restraunts or Food" />
                <button type="button" className="btn btn-sm bg-primary text-white px-4  ms-3 rounded-0">Search</button>
            </div>
            <div className="row d-flex flex-wrap">
                {
                    resList.map((restaurant) => <RestrauntsCard resData = {restaurant} />)
                }
            </div>

        </div>
    );
} 

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);