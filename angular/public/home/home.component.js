(function () {
	"use strict";
	angular
		.module('homeModule')
        .component('homePage', {
            templateUrl: 'public/home/home.template.html',
            controller: function($scope) {
                $scope.board = [
                    {
                        name : 'KLM Hotel and Suits',
                        type : 'Hotel (7 stars)',
                        rating : '5.4',
                        visits : '22',
                        location : {
                            add : 'Location before my house at the end of my nei',
                            geo : {
                                long : '1.4453',
                                lat : '1.43534355'
                            }
                        },
                        offer : 'best Valentine discount',
                        discription : 'KLM your satisfaction is our delight',
                        img : 'sample1.jpg',
                        siteUrl : 'klm.kr.com',
                        facility : {
                            wifi : true,
                            airport_shuttle : true,
                            pool : false,
                            air_conditioned : true,
                            room_service : true,
                            breakfast : true,
                            restaurant : true,
                            local_bar : true,
                            security : false,
                            Speakers : false,
                        }
                    },
                    {
                        name : 'Majestic Event Center',
                        type : 'Event Center',
                        rating : '4.2',
                        visits : '34',
                        location : {
                            add : 'Location is majestic event center',
                            geo : {
                                long : '1.4453',
                                lat : '1.43534355'
                            }
                        },
                        offer : '',
                        discription : 'Majectic simply for you',
                        img : 'sample1.jpg',
                        siteUrl : 'majestic.kr.com',
                        facility : {
                            wifi : false,
                            airport_shuttle : false,
                            pool : false,
                            air_conditioned : true,
                            room_service : false,
                            breakfast : false,
                            restaurant : false,
                            local_bar : true,
                            security : true,
                            Speakers : true,
                        }
                    },
                    {
                        name : 'Happy Hotel and Suits',
                        type : 'Hotel (General)',
                        rating : '5.4',
                        visits : '22',
                        location : {
                            add : 'Location before my house at the end of my nei',
                            geo : {
                                long : '1.4453',
                                lat : '1.43534355'
                            }
                        },
                        offer : 'best Valentine discount',
                        discription : 'KLM your satisfaction is our delight',
                        img : 'sample1.jpg',
                        siteUrl : 'klm.kr.com',
                        facility : {
                            wifi : true,
                            airport_shuttle : false,
                            pool : false,
                            air_conditioned : true,
                            room_service : true,
                            breakfast : true,
                            restaurant : false,
                            local_bar : true,
                            security : false,
                            Speakers : false,
                        }
                    },
                    {
                        name : 'J and jays Event Planner',
                        type : 'Event Planner',
                        rating : '5.4',
                        visits : '18',
                        location : {
                            add : 'Location before my house at the end of my nei',
                            geo : {
                                long : '1.4453',
                                lat : '1.43534355'
                            }
                        },
                        offer : 'best Valentine discount',
                        discription : 'KLM your satisfaction is our delight',
                        img : 'sample1.jpg',
                        siteUrl : 'klm.kr.com',
                        facility : {
                            wifi : true,
                            airport_shuttle : true,
                            pool : false,
                            air_conditioned : true,
                            room_service : true,
                            breakfast : true,
                            restaurant : true,
                            local_bar : true,
                            security : false,
                            Speakers : false,
                        }
                    },
                    {
                        name : 'Roses Decorator',
                        type : 'Vendor',
                        rating : '5.4',
                        visits : '10',
                        location : {
                            add : 'Location before my house at the end of my nei',
                            geo : {
                                long : '1.4453',
                                lat : '1.43534355'
                            }
                        },
                        offer : '',
                        discription : 'KLM your satisfaction is our delight',
                        img : 'sample1.jpg',
                        siteUrl : 'klm.kr.com',
                        facility : {
                            wifi : true,
                            airport_shuttle : true,
                            pool : false,
                            air_conditioned : true,
                            room_service : true,
                            breakfast : true,
                            restaurant : true,
                            local_bar : true,
                            security : false,
                            Speakers : false,
                        }
                    }
                ];

                $scope.show_on_map =function (geo) {
                    console.log(geo);
                }
            }
        });
}());