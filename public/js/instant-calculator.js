"use strict";

console.log('good');

ga('send', 'event', 'Instant Calculator', 'View');

var quiz = {
    hourly: 150,
    low_spread: .60,
    high_spread: 3.5,
    hoursPerWeek: 30,
    title: 'Application Calculator',
    contactInformation: {
        fullname: '',
        email_address: '',
        phone_number: '',
        company_name: '',
        agreement: '',
        website: '',
        timeframe: '',
        quoted_price: 0.00,
        quoted_hours: 0.00,
        quoted_date: '',
        message: ''
    },
    contactInformationSubmitted: false,
    questions: [
        // {
        //     text: "What type of application is this?",
        //     type: "single",
        //     multipliers:[1],
        //     response: [],
        //     responses: [
        //         {
        //             checked: false,
        //             id: 1,
        //             text: 'Internal Company Application',
        //             description: "An application mean't to be used by either company employees or partners of your company.",
        //             icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnAY4pilqO3GtWcJfC_9iYaMzKnW_msrn8qvZbT0KfssAlMIhn',
        //             recommend: [],
        //             value: {
        //                 description: 'Testing',
        //                 hours: 60,
        //                 price: 100
        //             }
        //         },
        //         {
        //             checked: false,
        //             id: 2,
        //             text: 'Social Network',
        //             icon: 'https://png.icons8.com/ultraviolet/288/network.png',
        //             recommend: [],
        //             value: {
        //                 hours: 100,
        //                 price: 100
        //             }
        //         }
        //         ,
        //         {
        //             checked: false,
        //             id: 3,
        //             text: 'Dating Platform',
        //             icon: 'https://png.icons8.com/metro/2x/date.png',
        //             recommend: [],
        //             value: {
        //                 hours: 80,
        //                 price: 100
        //             }
        //         }
        //         ,
        //         {
        //             checked: false,
        //             id: 4,
        //             text: 'Blockchain Platform',
        //             icon: 'https://png.icons8.com/ultraviolet/288/blockchain-technology.png',
        //             recommend: [],
        //             value: {
        //                 hours: 120,
        //                 price: 100
        //             }
        //         }
        //         ,
        //         {
        //             checked: false,
        //             id: 5,
        //             text: 'E-Commerce Application',
        //             icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdw4Rwx51g-CfBlcaySSsEtepIYocCtf-KkUYCve9rR5usG2DMQ',
        //             recommend: [],
        //             value: {
        //                 hours: 40,
        //                 price: 100
        //             }
        //         },
        //         {
        //             checked: false,
        //             id: 6,
        //             text: 'Other Consumer Application',
        //             icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdw4Rwx51g-CfBlcaySSsEtepIYocCtf-KkUYCve9rR5usG2DMQ',
        //             recommend: [],
        //             value: {
        //                 hours: 60,
        //                 price: 100
        //             }
        //         }
        //     ]
        // },
        {
            text: "How complete of an application are you looking to create?",
            subtitle: "Applications can be designed with multiple effort levels.",
            type: "single",
            calculate: false,
            response: [],
            responses: [{
                    checked: false,
                    id: 1,
                    text: 'Minimal Viable Product (MVP)',
                    description: 'This is the best application to create a Proof of Concept, get your idea to market, and begin on boarding users. You will use the information collected and continually expand the application based off your users realistic and most highly sought after functionality and reduce the "bloat".',
                    icon: '/img/illustrations/undraw_On_the_way_re_swjt.svg',
                    value: {
                        hours: 150,
                        price: 150,
                        low_spread: .50,
                        high_spread: 3,
                        multiplier: .75,
                    }
                },

                {
                    checked: false,
                    id: 2,
                    text: 'Market Ready Application w/o Optimization',
                    description: 'A feature rich application with a clean and beautiful interface with optimization that is to come.',
                    icon: '/img/illustrations/undraw_street_food_hm5i.svg',
                    recommend: [],
                     value: {
                        hours: 600,
                        price: 150,
                        low_spread: .70,
                        high_spread: 5,
                        multiplier: 1.2,
                    }
                },
                {
                    checked: false,
                    id: 3,
                    text: 'Fully Optimized Market Ready Application',
                    description: 'Our desing teams create an clean and modern interface, along with an intuitive workflow with 100% user optimization in mind. Your application will be feature rich and will be ready to scale to the needs of your users.',
                    icon: '/img/illustrations/undraw_order_a_car_3tww.svg',
                    recommend: [],
                    value: {
                        hours: 3500,
                        price: 150,
                        low_spread: .80,
                        high_spread: 6,
                        multiplier: 3
                    }
                }


            ]

        },
        {
            text: "What platform are you targeting?",
            subtitle: "We can develop for Desktop, Web, iOS, Android, and Windows UWP",
            type: "multiple",
            response: [],
            responses: [{
                    checked: false,
                    id: 1,
                    text: 'Android',
                    platform_multiplier: .5,
                    value: {
                        hours: 40,
                        hosting: 300,
                        platform_multiplier: .5
                    },
                    icon: 'https://cdn4.iconfinder.com/data/icons/social-papercut/512/android.png',
                },
                {
                    checked: false,
                    id: 2,
                    text: 'iOS',
                    platform_multiplier: .5,
                    value: {
                        hours: 40,
                        hosting: 300,
                        platform_multiplier: .5
                    },
                    icon: 'https://exquisitesoftware.sfo2.cdn.digitaloceanspaces.com/images/platform-icons/ios-logo.png'
                },
                {
                    checked: false,
                    id: 3,
                    text: 'Windows Classic',
                     value: {
                        hours: 10,
                        platform_multiplier: 1
                    },
                    icon: 'https://exquisitesoftware.sfo2.cdn.digitaloceanspaces.com/images/platform-icons/windows-logo.png'
                },
                                {
                    checked: false,
                    id: 3,
                    text: 'Windows UWP',
                     value: {
                        hours: 15,
                        platform_multiplier: 1
                    },
                    icon: 'https://exquisitesoftware.sfo2.cdn.digitaloceanspaces.com/images/platform-icons/windows-uwp.png'
                },
                                {
                    checked: false,
                    id: 3,
                    text: 'Mac OS X',
                     value: {
                        hours: 15,
                        platform_multiplier: 1
                    },
                    icon: 'https://exquisitesoftware.sfo2.cdn.digitaloceanspaces.com/images/platform-icons/mac-osx.png'
                },
                {
                    checked: false,
                    id: 4,
                    text: 'Progressive Web App (PWA)',
                    description: '',
                    benefits: '',
                    value: {
                        hours: 15,
                        platform_multiplier: 1
                    },
                    icon: 'https://exquisitesoftware.sfo2.cdn.digitaloceanspaces.com/images/platform-icons/pwa-logo.png'
                }
            ]
        },
        // {
        //     text: "Do you want to build a public API?",
        //     type: "single",
        //     responses: [{
        //             checked: false,
        //             id: 1,
        //             text: 'Yes',
        //             icon: '/img/yes.svg',
        //             value: {
        //                 hours: 120,
        //                 hours_min: 70,
        //                 hours_max: 160,
        //                 price: 100
        //             }
        //         },
        //         {
        //             checked: false,
        //             id: 2,
        //             text: 'No',
        //             icon: '/img/no.svg',
        //             value: {
        //                 hours: 0,
        //                 price: 100
        //             },
        //             recommend: []
        //         }
        //     ]
        // },
        // {
        //     text: "Do you want to implement a payment processor?",
        //     type: "single",
        //     responses: [{
        //             checked: false,
        //             id: 1,
        //             text: 'Yes',
        //             icon: '/img/yes.svg',
        //             value: {
        //                 hours: 40,
        //                 price: 100,
        //                 name: 'Internal',
        //                 'title': 'How should people login to the application?'
        //             }
        //         },
        //         {
        //             checked: false,
        //             id: 2,
        //             text: 'No',
                    
        //             icon: '/img/no.svg',
        //             value: {
        //                 hours: 0,
        //                 price: 100,
        //                 name: 'Internal',
        //                 'title': 'How should people login to the application?'
        //             },
        //             recommend: []
        //         }
        //     ]
        // },
        {
            name: 'subscription-based',
            text: "Will this be a subscription based platform?",
            type: "single",
            visible: false, /* Makes this part of a follow up question or recommendation only */
            responses: [{
                    checked: false,
                    id: 1,
                    text: 'Yes',
                    icon: '/img/yes.svg',
                    value: {
                        hours: 20,
                        price: 100
                    }
                },
                {
                    checked: false,
                    id: 2,
                    text: 'No',
                    
                    icon: '/img/no.svg',
                    value: {
                        hours: 0
                    },
                    recommend: []
                }
            ]
        },
        // {
        //     text: "How large of a user group do you need your application to support?",
        //     type: "single",
        //     responses: [{
        //             checked: false,
        //             id: 1,
        //             text: 'Under 1000 Users',
        //             value: {
        //                 hours: 0,
        //                 price: 100,
        //                 monthly: 40,
        //                 setup: 10,
        //                 hosting: 20,
        //                 hosting_min: 20,
        //                 hosting_max: 200,
        //                 name: 'Internal',
        //                 'title': 'How should people login to the application?'
        //             }
        //         },
        //         {
        //             checked: false,
        //             id: 2,
        //             text: 'Between 1,000 and 10,000 Users',
        //             value: {
        //                 hours: 0,
        //                 price: 100,
        //                 hosting: 1000,
        //                 hosting_min: 500,
        //                 hosting_max: 1500,
        //                 name: 'Internal',
        //                 'title': 'How should people login to the application?'
        //             },
        //             recommend: []
        //         },
        //         {
        //             checked: false,
        //             id: 3,
        //             text: 'Between 10,000 and 100,000 Users',
        //             value: {
        //                 hours: 0,
        //                 price: 100,
        //                 hosting: 2500,
        //                 hosting_min: 2500,
        //                 hosting_max: 5000,
        //                 name: 'Internal',
        //                 'title': 'How should people login to the application?'
        //             }
        //         },
        //         {
        //             checked: false,
        //             id: 4,
        //             text: '100,000+ Users',
        //             value: {
        //                 hours: 0,
        //                 price: 100,
        //                 monthly: 4000,
        //                 hosting: 4000,
        //                 hosting_min: 5000,
        //                 hosting_max: 10000,
        //                 name: 'Internal',
        //                 'title': 'How should people login to the application?'
        //             }
        //         }
        //     ]
        // },
        // {
        //     text: "How should people login to the application?",
        //     type: "multiple",
        //     name: "auth",
        //     response: [],
        //     responses: [
        //       {
        //             id: 1,
        //             checked: false,
        //             text: 'Managaed',
        //             icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnAY4pilqO3GtWcJfC_9iYaMzKnW_msrn8qvZbT0KfssAlMIhn',
        //             value: {
        //                 hours: 20,
        //                 price: 40,
        //                 name: 'Internal',
        //                 'title': 'How should people login to the application?'
        //             }
        //         },
        //         {
        //             id: 2,
        //             checked: false,
        //             text: 'OAuth',
        //             icon: 'https://cdn-images-1.medium.com/max/1200/0*QWNG5EAnPSaUSAHH.png',
        //             value: {
        //                 hours: 20,
        //                 price: 40,
        //                 name: 'Internal',
        //                 'title': 'How should people login to the application?'
        //             },
        //             recommend: []
        //         },
        //         {
        //             id: 3,
        //             checked: false,
        //             text: 'Single Sign On (SSO)',
        //             icon: 'https://everything1know.files.wordpress.com/2018/05/sso-logo.png',
        //             value: {
        //                 hours: 20,
        //                 price: 40,
        //                 name: 'Internal',
        //                 'title': 'How should people login to the application?'
        //             }
        //         }
        //     ]
        // },
        // {
        //     text: "Do you want to implement monitoring and DevOps tools?",
        //     type: "multiple",
        //     response: [],
        //     responses: [{
        //             checked: false,
        //             id: 1,
        //             text: 'AppKnowledge',
        //             value: {
        //                 text: 'Android',
        //                 hours: 80,
        //                 monthly: 99,
        //                 setup: 0,
        //                 multiply: .5,
        //                 'title': 'What platform are you targeting?'
        //             },
        //             icon: 'https://cdn4.iconfinder.com/data/icons/social-papercut/512/android.png',
        //         },
        //         {
        //             checked: false,
        //             id: 2,
        //             text: 'AppStatus',
        //             value: {
        //                 text: 'Android',
        //                 hours: 20, 
        //                 monthly: 99, /* Need to add option for other packages based on App Size */
        //                 setup: 0,
        //                 multiply: .5,
        //                 'title': 'What platform are you targeting?'
        //             },
        //             icon: 'http://icons-for-free.com/free-icons/png/512/386450.png'
        //         },
        //         {
        //             checked: false,
        //             id: 3,
        //             text: 'AppAuthenticate',
        //              value: {
        //                 text: 'Android',
        //                 hours: 20,
        //                 monthly: 99, /* Need to add option for other packages based on App Size */
        //                 setup: 0,
        //                 multiply: .5,
        //                 'title': 'What platform are you targeting?'
        //             },
        //             icon: 'http://icons-for-free.com/free-icons/png/512/386450.png'
        //         },
        //         {
        //             checked: false,
        //             id: 4,
        //             text: 'AppMonitor',
        //             value: {
        //                 text: 'Android',
        //                 hours: 20,
        //                 monthly: 99, /* Need to add option for other packages based on App Size */
        //                 setup: 0,
        //                 multiply: .5,
        //                 'title': 'What platform are you targeting?'
        //             },
        //             icon: 'http://icons-for-free.com/free-icons/png/512/386450.png'
        //         }
        //     ]
        // },
         
        // {
        //     text: "Are you looking to integrate with any external providers using an API?",
        //     type: "single",
        //     responses: [
        //         //{
        //     //         checked: false,
        //     //         icon: '/img/yes.svg',
        //     //         text: 'Yes, 1 Provider.',
        //     //         value: {
        //     //             hours: 50,
        //     //             price: 100,
        //     //             name: 'Internal',
        //     //             'title': 'How should people login to the application?'
        //     //         }
        //     //     },
        //         // {
        //         //     checked: false,
        //         //     icon: '/img/yes.svg',
        //         //     text: 'Yes, 2 Providers.',
        //         //     value: {
        //         //         hours: 30,
        //         //         price: 100,
        //         //         name: 'Internal',
        //         //         'title': 'How should people login to the application?'
        //         //     }
        //         // },
        //         // {
        //         //     checked: false,
        //         //     icon: '/img/yes.svg',
        //         //     text: 'Yes, 3+ Providers.',
        //         //     value: {
        //         //         hours: 45,
        //         //         price: 100,
        //         //         name: 'Internal',
        //         //         'title': 'How should people login to the application?'
        //         //     }
        //         // },
        //         {
        //             checked: false,
                    
        //             icon: '/img/no.svg',
        //             text: 'No',
        //             value: 'OAuth',
        //             recommend: []
        //         }
        //     ]
        // },
        {
            text: "Have you already designed the User-Interface of the application?",
            type: "single",
            responses: [{
                    checked: false,
                    icon: '/img/yes.svg',
                    text: 'Yes',
                    value: {
                        hours: 0,
                        price: 100
                    }
                },
                {
                    checked: false,
                    text: 'No',
                    
                    icon: '/img/no.svg',
                    value: {
                        hours: 100,
                        price: 100
                    },
                    recommend: []
                }
            ]
        },
        // {
        //     text: "How much focus do you want to put on User-Experience for the first revision?",
        //     type: "single",
        //     responses: [{
        //         checked: false,
        //         icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPbnOgSyBdZZ4YCRBDlWwCrzAE4RePHGdTpzO46H-iYEwv2VDj&s',
        //         text: 'Not Focused',
        //         value: {
        //             hours: 40,
        //             price: 100
        //         }
        //     },
        //     {
        //         checked: false,
        //         icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJb7YUQreqQgCx1oDz2cwvwiwVpf9vCuEWICQVGR-7d1a9uGm&s',
        //         text: 'Not my primary focused, but we care about the feel.',
        //         value: {
        //             hours: 100,
        //             price: 100
        //         }
        //     },
        //     {
        //         checked: false,
        //         text: 'Very Focused',
        //         icon: 'https://www.oliversigns.com/wp-content/uploads/2016/05/five-stars-1170x528.png',
        //         value: {
        //             hours: 200,
        //             price: 100
        //         }
        //     },
                
        //     ]
        // },
        {
            text: "Do you have a specification for the software already written?",
            type: "single",
            responses: [{
                    checked: false,
                    icon: '/img/yes.svg',
                    text: 'Yes',
                    value: {
                        hours: 0,
                        price: 100
                    }
                },
                {
                    checked: false,
                    text: 'No, I need one created.',
                    
                    icon: '/img/no.svg',
                    value: {
                        hours: 60,
                        price: 100
                    }
                } 
            ]
        },
        {
            text: "Do you need us to prioritise the development and delivery of this application?",
            type: "single",
            response_visible: false,
            responses: [{
                icon: '/img/stopwatch.svg',
                    text: 'Yes, it\'s urgent!',
                    description: 'We will finish this application 25% quicker then normal for an increased rate.',
                    value: {
                        rate: 150 * 1.25,
                        hoursPerWeek: 60
                    }
                },
                {
                    icon: '/img/quick-response.svg',
                    text: 'Normal development time is okay.',
                    description: 'We will finish this application on a normal delivery schedule.',
                    value: {
                        rate: 150,
                        hoursPerWeek: 40
                    }
                },
                {
                    
                    icon: '/img/snails.svg',
                    text: 'No, this project is not urgent.',
                    description: 'We will finish this application 25% slower then normal for a reduced rate.',
                    value: {
                      rate: 150 * .80,
                      hoursPerWeek: 20
                    },
                    recommend: []
                }
            ]
        },
        {
            text: "Do you want to include a long-term maintaince and support plan?",
            type: "single",
            responses: [{
                icon: '/img/yes.svg',
                    text: 'Yes - 20 Hours Per Month',
                    value: {
                        type: 'monthly',
                        hours: 20,
                        monthly_hours: 20,
                    }
                },
                {
                    icon: '/img/yes.svg',
                    text: 'Yes - 40 Hours Per Month',
                    value: {
                        type: 'monthly',
                        hours: 40,
                        monthly_hours: 40
                    }
                },
                {
                    
                    icon: '/img/no.svg',
                    text: 'No',
                    value: {
                        type: 'monthly',
                        hours: 0,
                        monthly: 0
                    },
                    recommend: []
                }
            ]
        }
    ]
};


window.onload = function() {
      Vue.filter('toCurrency', function(value) {
        if (typeof value !== "number") {
            return value;
        }
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        });
        return formatter.format(value);
    });
    
    var vueApp = new Vue({
        el: '#app',
        data: {
            errors: [],
            quiz: quiz,
            questionIndex: 0,
            counter: 0,
            userResponses: []
        },
        methods: {
            validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
            },
            // Go to next question
            contactMe: function() {
                // alert('contacting you...');
                
            },
            saveQuote: function() {
                // alert('saving the quote');
                
            },
            next: function() {
                // this.questionIndex = quiz.questions.length - 1;
                // alert('yeahh');
                this.errors = [];

                if(this.questionIndex === quiz.questions.length) {
                    
                    
                    if (!quiz.contactInformation.fullname) {
                        this.errors.push('A contact name is required.');
                    }

                    if (!quiz.contactInformation.company_name) {
                        this.errors.push('A company name is required.');
                    }

                    if (!quiz.contactInformation.phone_number) {
                        this.errors.push('A phone number is required.');
                    }

                    if (!quiz.contactInformation.email_address) {
                        this.errors.push('An email address is required.');
                    } else if (!this.validEmail(quiz.contactInformation.email_address)) {
                        this.errors.push('Valid email required.');
                    }

                    if (!quiz.contactInformation.timeframe) {
                        this.errors.push('A timeframe to complete the project is required.');
                    }

                    
                    if (!quiz.contactInformation.message) {
                        this.errors.push('Please provide some details about your project.');
                    }
                    else if (quiz.contactInformation.message.length < 100) {
                        this.errors.push('Please provide more than 100 characters in the details of your project.');
                    }
                                        
                    if (!quiz.contactInformation.agreement || quiz.contactInformation.agreement == '') {
                        this.errors.push('You must agree to our Terms of Service and Privacy Policy.');
                    }

                    // if(this.errors.length > 0) {
                    //     alert('The contact form has errors. Please check and correct these issues, then try again.');
                    //     return;
                    // }

                    // alert('okay');
                    ga('send', 'event', 'Instant Calculator', 'Quote Request', 'Quote Request', 1 )

                    // alert('Sending quote' + quiz.contactInformation.company_name);
                    // console.log('Sending Quote!');
                    let hours = 0;
                    let cost = 0;
    
                    hours = 0;
                    var question = quiz.questions.forEach(function(question) {
                      var responses = question.responses;
                      if(typeof(question.response) !== 'undefined') {
                        if(typeof(question.response) == 'number' && typeof(responses[question.response].value.hours) == 'number') {
                           
                           if(typeof(question.calculate) == 'undefined' || question.calculate) hours += responses[question.response].value.hours;
                        } else if (typeof(question.response) == 'object') { 
                           question.response.forEach(function(index) {
                            if(typeof(responses[index].value.hours) == 'number') {
                                if(typeof(question.calculate) == 'undefined' || question.calculate) hours += responses[index].value.hours;
                            }
                          });
                        }
                        else {
                            // hours += responses[question.response].value.price;
                        }
                    }});
    

                    Date.prototype.addHours = function(hoursPerWeek, h) {   
                  
                        var totalWeeks = h / hoursPerWeek;
                        this.setTime(this.getTime() + ( 7 * totalWeeks * 24 * 60 * 60 *1000)); 
                        return this;   
                    }
    
                    var date = new Date().addHours(quiz.hoursPerWeek, quiz.contactInformation.quoted_hours);
                    var days = ['Sunday','Monday','Tuesday','Wednsday','Thursday','Friday','Saturday']
                    var monthNames = ["January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November", "December" ];
                    var weekDay = days[date.getDay()];
                    var month = monthNames[date.getMonth()]
                    
                    quiz.contactInformation.quoted_date = weekDay + ", " + month + " " + date.getDate() + ", " + date.getFullYear();
                    quiz.contactInformation.quoted_price = hours * quiz.hourly;
                    quiz.contactInformation.quoted_hours = hours;

                    // console.log(quiz.contactInformation.quoted_date);
                    // console.log(quiz.contactInformation.quoted_price );
                    // console.log(quiz.hourly);
                    
                    $.ajax
                    ({
                        type: "POST",
                        url: '/quote/', 
                        dataType: 'json',
                        contentType: 'application/json',
                        data: JSON.stringify(quiz)
                    }).then((response) => {
                        //console.log(response);
                    });

                    quiz.contactInformationSubmitted=true;
                }
                else if(typeof(this.quiz.questions[this.questionIndex].response) !== "number" 
                        && typeof(this.quiz.questions[this.questionIndex].response) == 'undefined' || 
                        this.quiz.questions[this.questionIndex].response.length == 0 ) {
                    // alert('Please make at least one selection.');
                    $('.error').show();
                    
                  return false;
                }
                
                $('.error').hide();
                // alert('next');
                this.questionIndex++;
            },
            // Go to previous question
            prev: function() {
                this.questionIndex--;
            },
            formatPrice(value) {
                let val = (value / 1).toFixed(2).replace('.', ',')
                return val.toString().replace(/\\B(?=(\d{3})+(?!\d))/g, ".")
            },
            visible: function(question, responses) {
                for (id in question.response) {
                    console.log(id, responses.id)
                    if (id == responses.id - 1) return true;
                }
                if (question.response == responses.id) return true;
                return false;
            },
            responses: function() {
                console.log("returning responses");
                return this.userResponses;
            }, 
            isVisible: function(item) {
                if(typeof(item.response_visible) == "undefined") return true;
                
                if(item.response_visible == true) return true;
                
                return false;
            

            },
            hourlyPrice: function() {
                let price = quiz.hourly;

                var question = quiz.questions.forEach(function(question) {
                  var responses = question.responses;
                  if(typeof(question.response) !== 'undefined') {

                    if(typeof(question.response) == 'number' && typeof(responses[question.response].value.low_spread) == 'number') {
                        quiz.low_spread = responses[question.response].value.low_spread;
                        quiz.high_spread = responses[question.response].value.high_spread;
                    }

                    if(typeof(question.response) == 'number' && typeof(responses[question.response].value.rate) == 'number') {
                       price = responses[question.response].value.rate;
                       quiz.hourly = responses[question.response].value.rate;
                    } else if (typeof(question.response) == 'object') { 
                       question.response.forEach(function(index) {
                        if(typeof(responses[index].value.rate) == 'number') {
                          price = responses[index].value.rate;
                          quiz.hourly = responses[index].value.rate;
                        }

                        if(typeof(responses[index].value.low_spread) == 'number') {
                            quiz.low_spread = responses[index].value.low_spread;
                            quiz.high_spread = responses[index].value.high_spread;
                        }

                      });
                    }
                    else {
                        // hours += responses[question.response].value.price;
                    }

                    

                    if(typeof(question.response) == 'number' && typeof(responses[question.response].value.hoursPerWeek) == 'number') {
                        quiz.hoursPerWeek = responses[question.response].value.hoursPerWeek;
                         // alert(' : ' + quiz.hoursPerWeek);
                     } else if (typeof(question.response) == 'object') { 
                        question.response.forEach(function(index) {
                         if(typeof(responses[index].value.hoursPerWeek) == 'number') {
                           quiz.hoursPerWeek = responses[index].value.hoursPerWeek;
                           // alert('hours per week: ' + quiz.hoursPerWeek);
                         }
                       });
                     }
                }});
 
               // quiz.hoursPerWeek = responses[question.response].value.hoursPerWeek;
              //  alert('hours per week: ' + quiz.hoursPerWeek);
                 
                /*console.log('price iss', price);*/
                // console.log('hourly rate is', quiz.hourly);
                quiz.hourly = price;
                
                return price;
            },
            totalMonthlyCost: function() {
                let monthly = 0;

                monthly = 0;
                var question = quiz.questions.forEach(function(question) {
                  var responses = question.responses;
                  if(typeof(question.response) !== 'undefined') {
                    if(typeof(question.response) == 'number' && typeof(responses[question.response].value.monthly) == 'number') {
                       monthly += responses[question.response].value.monthly;
                    } else if(typeof(question.response) == 'number' && typeof(responses[question.response].value.monthly_hours) == 'number') {
                       monthly += responses[question.response].value.monthly_hours * quiz.hourly;
                    } else if (typeof(question.response) == 'object') { 
                       question.response.forEach(function(index) {
                        if(typeof(responses[index].value.monthly) == 'number') {
                          monthly += responses[index].value.monthly;
                        }
                       else if(typeof(responses[index].value.monthly_hours) == 'number') {
                          monthly += responses[index].value.monthly_hours * quiz.hourly;
                        }
                      });
                    }
                    else {
                        // monthly += responses[question.response].value.monthly;
                    } 
                }}); 
                return monthly;
            },
            totalSetupCosts: function() {
                let setup = 0;
                let cost = 0;

                setup = 0;
                var question = quiz.questions.forEach(function(question) {
                  var responses = question.responses;
                  if(typeof(question.response) !== 'undefined') {
                    if(typeof(question.response) == 'number' && typeof(responses[question.response].value.setup) == 'number') {
                       setup += responses[question.response].value.setup;
                    } else if (typeof(question.response) == 'object') { 
                       question.response.forEach(function(index) {
                        if(typeof(responses[index].value.setup) == 'number') {
                          setup += responses[index].value.setup;
                        }
                      });
                    }
                    else {
                        // setup += responses[question.response].value.setup;
                    } 
                }});
 
                return setup;
            },
            totalSetupHours: function() {
                let setup = 0;
                let cost = 0;

                setup = 0;
                var question = quiz.questions.forEach(function(question) {
                  var responses = question.responses;
                  if(typeof(question.response) !== 'undefined') {
                    if(typeof(question.response) == 'number' && typeof(responses[question.response].value.setup) == 'number') {
                       setup += responses[question.response].value.setup;
                    } else if (typeof(question.response) == 'object') { 
                       question.response.forEach(function(index) {
                        if(typeof(responses[index].value.setup) == 'number') {
                          setup += responses[index].value.setup;
                        }
                      });
                    }
                    else {
                        // setup += responses[question.response].value.setup;
                    } 
                }});
 
                return setup;
            },
            totalHostingCost: function() {
                let hosting = 0;

                hosting = 0;
                var question = quiz.questions.forEach(function(question) {
                  var responses = question.responses;
                  if(typeof(question.response) !== 'undefined') {
                    if(typeof(question.response) == 'number' && typeof(responses[question.response].value.hosting) == 'number') {
                       hosting += responses[question.response].value.hosting;
                    } else if (typeof(question.response) == 'object') { 
                       question.response.forEach(function(index) {
                        if(typeof(responses[index].value.hosting) == 'number') {
                          hosting += responses[index].value.hosting;
                        }
                      });
                    }
                    else {
                        // setup += responses[question.response].value.setup;
                    } 
                }});
 
                return hosting;
            },
            totalHours: function() {
                let hours = 0;
                let cost = 0;
                let platform_multiplier = 0;
                var count = 0;
            
               
                var question = quiz.questions.forEach(function(question) {
                  var responses = question.responses;
                  if(typeof(question.response) !== 'undefined') {
                    
                    platform_multiplier = 1;
                  
                    if(typeof(question.response) == 'number' && typeof(responses[question.response].value.multiplier) == 'number') {
                        multiplier = responses[question.response].value.multiplier;
                        // console.log('multiplier is now ' + multiplier);
                    }

                    
                    if(typeof(question.response) == 'number' && typeof(responses[question.response].value.hours) == 'number') {
                        if(typeof(question.calculate) == 'undefined' || question.calculate) hours += responses[question.response].value.hours;
                    } else if (typeof(question.response) == 'object') { 
                        count = 0;

                        question.response.forEach(function(index) { 
                            if(typeof(responses[index].value.platform_multiplier) == 'number') {
                                count = count + 1;
                            }
                        }); 

                        question.response.forEach(function(index) {
                            if(typeof(responses[index].value.hours) == 'number') {
                                if(count >= 2 && index > 0) {
                                    // console.log('totalHours - pair found and discounted applied! ' + (responses[index].value.hours * responses[index].value.platform_multiplier));
                                    if(typeof(question.calculate) == 'undefined' || question.calculate) hours += (responses[index].value.hours * responses[index].value.platform_multiplier);
                                }
                                else {
                                    if(typeof(question.calculate) == 'undefined' || question.calculate) hours += responses[index].value.hours;
                                }

                            }
                        });
                    }
                    else {
                        // hours += responses[question.response].value.price;
                    }
                }});

                var multiplier = 1;
                if(typeof(quiz.questions[0].response) != 'undefined' && typeof(quiz.questions[0].responses[quiz.questions[0].response]) != 'undefined') multiplier = quiz.questions[0].responses[quiz.questions[0].response].value.multiplier;
                hours = hours * multiplier;

                // console.log('multiplier = ' + multiplier);
                // console.log('totalHours = ' + hours);
                // console.log('totalHours = ' + hours);
                return hours;
            },
            totalCost: function() {
                let hours = 0;
                let cost = 0;
                let multiplier = 1;
                let platform_multiplier = 0;
                var count = 0;

                var question = quiz.questions.forEach(function(question) {
                    var responses = question.responses;
                    if(typeof(question.response) !== 'undefined') {
                    
                    platform_multiplier = 1;
                    
                    
                    if(typeof(question.response) == 'number' && typeof(responses[question.response].value.hours) == 'number') {
                        if(typeof(question.calculate) == 'undefined' || question.calculate) hours += responses[question.response].value.hours;
                    } else if (typeof(question.response) == 'object') { 

                        count = 0; 
                        question.response.forEach(function(index) { 
                            if(typeof(responses[index].value.platform_multiplier) == 'number') {
                                count = count + 1;
                            }
                        }); 

                        question.response.forEach(function(index) {
                            
                            if(typeof(responses[index].value.hours) == 'number') {
                                platform_multiplier = responses[index].value.platform_multiplier;
                                if(count >= 2) {
                                    // alert('pair found and discounted applied! ' + (responses[index].value.hours * responses[index].value.platform_multiplier));
                                    multiplier = quiz.questions[0].responses[quiz.questions[0].response].value.multiplier;
                                    if(index == 0) {
                                        if(typeof(question.calculate) == 'undefined' || question.calculate) hours += responses[index].value.hours;  
                                    }
                                    else {
                                        if(typeof(question.calculate) == 'undefined' || question.calculate) hours += responses[index].value.hours * platform_multiplier;
                                    }

                                }
                                else {
                                    hours += responses[index].value.hours;
                                }
                            }
                        });

                    }
                    else {
                        // hours += responses[question.response].value.price;
                    }
                };
            });

            if(typeof(quiz.questions[0].response) != 'undefined' && typeof(quiz.questions[0].responses[quiz.questions[0].response]) != 'undefined') { 
               // alert(quiz.questions[0].response.length);
                //if(quiz.questions[0].responses.length > 1) {
                   // alert('more than 1 os selected');
                    // multiplier = quiz.questions[0].responses[quiz.questions[0].response].value.multiplier;
                //}  
            }
            
            hours = hours * multiplier;
            // if(hours>0)alert(hours + ' - ' + quiz.hourly + ' - ' + multiplier);
            
            Date.prototype.addHours = function(hoursPerWeek, h) {   
                  
                // console.log('hours in: ' + h);
                // console.log('hours per week: ' + hoursPerWeek);
                
                var totalWeeks = h / hoursPerWeek;
                this.setTime(this.getTime() + ( 7 * totalWeeks * 24 * 60 * 60 *1000)); 
                return this;   
            }

            var date = new Date().addHours(quiz.hoursPerWeek, hours);
            var days = ['Sunday','Monday','Tuesday','Wednsday','Thursday','Friday','Saturday']
            var monthNames = ["January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November", "December" ];
            var weekDay = days[date.getDay()];
            var month = monthNames[date.getMonth()]
            
            quiz.contactInformation.quoted_date = weekDay + ", " + month + " " + date.getDate() + ", " + date.getFullYear();

          
            return hours * quiz.hourly;   


                // let hours = 0;
                // let cost = 0;
                // let platform_multiplier = 0;
                // var count = 0;
            
               
                // var question = quiz.questions.forEach(function(question) {
                //   var responses = question.responses;
                //   if(typeof(question.response) !== 'undefined') {
                    
                //     platform_multiplier = 1;
                  
                //     if(typeof(question.response) == 'number' && typeof(responses[question.response].value.multiplier) == 'number') {
                //         multiplier = responses[question.response].value.multiplier;
                //         console.log('multiplier is now ' + multiplier);
                //     }

                //     if(typeof(question.response) == 'number' && typeof(responses[question.response].value.hours) == 'number') {
                //         if(typeof(question.calculate) == 'undefined' || question.calculate) hours += responses[question.response].value.hours;
                //     } else if (typeof(question.response) == 'object') { 
                //         count = 0;

                //         question.response.forEach(function(index) { 
                //             if(typeof(responses[index].value.platform_multiplier) == 'number') {
                //                 count = count + 1;
                //             }
                //         }); 

                //         question.response.forEach(function(index) {
                //             if(typeof(responses[index].value.hours) == 'number') {
                //                 if(count >= 2) {
                //                     console.log('pair found and discounted applied! ' + (responses[index].value.hours * responses[index].value.platform_multiplier));
                //                     if(typeof(question.calculate) == 'undefined' || question.calculate) hours += responses[index].value.hours * responses[index].value.platform_multiplier;
                //                 }
                //                 else {
                //                     if(typeof(question.calculate) == 'undefined' || question.calculate) hours += responses[index].value.hours;
                //                 }

                //             }
                //         });
                //     }
                //     else {
                //         // hours += responses[question.response].value.price;
                //     }
                // }});

                // var multiplier = 1;
                // if(typeof(quiz.questions[0].response) != 'undefined' && typeof(quiz.questions[0].responses[quiz.questions[0].response]) != 'undefined') multiplier = quiz.questions[0].responses[quiz.questions[0].response].value.multiplier;
 
                // hours = hours * multiplier; 
                // quiz.contactInformation.quoted_price = hours * quiz.hourly;
                // quiz.contactInformation.quoted_hours = hours;
                
                // console.log("totalCost - hourly " + hours + ' ' + quiz.hourly);
                return 100;//hours * quiz.hourly;
            },
            computed: function(questionId) {
                    let hours = 0;
                    var question = quiz.questions[questionId];
                    var responses = question.responses;

                    let cost = 0;
                    let multiplier = 1;
                    let platform_multiplier = 0;
                    var count = 0;
                
                    var responses = question.responses;
                    if(typeof(question.response) !== 'undefined') {
                    
                    platform_multiplier = 1;
                    
                    
                    if(typeof(question.response) == 'number' && typeof(responses[question.response].value.hours) == 'number') {
                        if(typeof(question.calculate) == 'undefined' || question.calculate) hours += responses[question.response].value.hours;
                    } else if (typeof(question.response) == 'object') { 

                        count = 0; 
                        question.response.forEach(function(index) { 
                            if(typeof(responses[index].value.platform_multiplier) == 'number') {
                                count = count + 1;
                            }
                        }); 

                        question.response.forEach(function(index) {
                            
                            if(typeof(responses[index].value.hours) == 'number') {
                                platform_multiplier = responses[index].value.platform_multiplier;
                                if(count >= 2) {
                                    // console.log('pair found and discounted applied! ' + (responses[index].value.hours * responses[index].value.platform_multiplier));
                                    if(index == 0) {
                                        if(typeof(question.calculate) == 'undefined' || question.calculate) hours += responses[index].value.hours;  
                                    }
                                    else {
                                        if(typeof(question.calculate) == 'undefined' || question.calculate) hours += responses[index].value.hours * platform_multiplier;
                                    }

                                }
                                else {
                                    hours += responses[index].value.hours;
                                }
                            }
                        });

                    }
                    else {
                        // hours += responses[question.response].value.price;
                    }
                };
                if(typeof(quiz.questions[0].response) != 'undefined' && typeof(quiz.questions[0].responses[quiz.questions[0].response]) != 'undefined') multiplier = quiz.questions[0].responses[quiz.questions[0].response].value.multiplier;
                hours = hours * multiplier;

                //console.log('computed = ' + hours);

                return hours;    
            },
            computedMonthly: function(questionId) {
                let monthly = 0;
                var question = quiz.questions[questionId];

                var responses = question.responses;
                if(typeof(question.response) !== 'undefined') {
                  if(typeof(question.response) == 'number' && typeof(responses[question.response].value.monthly) == 'number') {
                    monthly += responses[question.response].value.monthly;
                  }
                  else if(typeof(question.response) == 'number' && typeof(responses[question.response].value.monthly_hours) == 'number') {
                    monthly += responses[question.response].value.monthly_hours * quiz.hourly;
                  } 
                  else if (typeof(question.response) == 'object') { 
                    question.response.forEach(function(index) {
                      if(typeof(responses[index].value.monthly) == 'number') {
                        monthly += responses[index].value.monthly;
                      } 
                      else if(typeof(responses[index].value.monthly_hours) == 'number') {
                        monthly += responses[index].value.monthly_hours * quiz.hourly;
                      }
                    });
                  }
                }
                return monthly;
            },
            estimatedDate: function(h) {
                Date.prototype.addHours = function(hoursPerWeek, h) {   
                  
                    var totalWeeks = h / hoursPerWeek;
                    this.setTime(this.getTime() + ( 7 * totalWeeks * 24 * 60* 60*1000)); 
                    return this;   
                }

                var date = new Date().addHours(quiz.hoursPerWeek, h);
                var days = ['Sunday','Monday','Tuesday','Wednsday','Thursday','Friday','Saturday']
                var monthNames = ["January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November", "December" ];
                var weekDay = days[date.getDay()];
                var month = monthNames[date.getMonth()]
                
                quiz.contactInformation.quoted_date = weekDay + ", " + month + " " + date.getDate() + ", " + date.getFullYear();
                return weekDay + ", " + month + " " + date.getDate() + ", " + date.getFullYear();
            },
            computedSetup: function(questionId) {
                let setup = 0;
                var question = quiz.questions[questionId];
                alert('computedSetup');
                var responses = question.responses;
                if(typeof(question.response) !== 'undefined') {
                  if(typeof(question.response) == 'number' && typeof(responses[question.response].value.setup) == 'number') {
                    setup += responses[question.response].value.setup;
                  } else if (typeof(question.response) == 'object') { 
                    question.response.forEach(function(index) {
                      if(typeof(responses[index].value.setup) == 'number') {
                        setup += responses[index].value.setup;
                      }
                    });
                  }
                }
                return setup;
            }
        }
    });

    $('#app').show();
    $('#calculator-loading').hide();
};

var playObject;

function checkClosestResponse(parent) {
    $('.error').hide();

    if(parent.next('.response').prop('type') == 'radio') {
         $('.selector').css('border', 'none');
    }
    parent.next('.response').trigger('click');

    var isChecked = parent.next('.response').prop('checked');
    if(isChecked) {
        parent.css('border', '3px solid rgb(0, 123, 255, 0.9)'); 
    }
    else {
        parent.css('border', 'none');
    }
}

