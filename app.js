var express = require('express');
var path = require('path');
var axios = require('axios');
var nodemailer = require('nodemailer');
var EmailTemplates = require('swig-email-templates');
var postmark = require("postmark");
 
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'jade');
 
app.use(express.static('public')); 
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))

var transporter = nodemailer.createTransport({
  host: 'smtp.postmarkapp.com',
  port: 25,
  secure: false, // true for 465, false for other ports
  auth: {
      user: "8eac40b7-32ca-40cb-a8e0-356f3a3342ca", // generated ethereal user
      pass: "8eac40b7-32ca-40cb-a8e0-356f3a3342ca" // generated ethereal password
  }
});

var postmark_client = new postmark.Client("8eac40b7-32ca-40cb-a8e0-356f3a3342ca");

 
 
var templates = new EmailTemplates({
  root: 'templates',
  autoescape: false,
  escape: false
});

app.get('/', function(req, res) {
  res.render('home', {
    title: 'Home'
  });
});
 
app.get('/contact', function(req, res) {
  res.render('contact', {
    title: 'Contact Us',
    posted: false
  });
});

function verifyRecaptcha(token) {
  return axios.get('https://www.google.com/recaptcha/api/siteverify?secret=6LdyF40UAAAAAAc7uEMQtH7t4BJAmjd7AQU4uz8K&response=' + token)
  .then(response => {
    console.log('Recaptcha Response:');
    console.log(response.data['success']);
    console.log(response.data['score']);
    console.log(response.data['error-codes']);
    if(response.data['success'] == true) 
    {
      console.log('recaptcha success ... reutrning score!');
      score = 12;
      return response.data['score'];
    }
  })
  .catch(error => {
    console.log('Recaptcha Error');
    console.log(error);
  }); 
}

function hubspotSubmit(fields, recaptcha_score, ip_address) {
  console.log('fields', fields);

  var full_name = getField(fields, "full_name");
  var phone = getField(fields, "phone_number");
  var first_name = full_name.split(' ').slice(0, -1).join(' '); 
  var last_name = full_name.split(' ').slice(-1).join(' ');
  var services_text = getFieldOptions(fields, "services[]", "n/a", false);

  console.log('phone', phone);
  if(typeof(recaptcha_score) == 'undefined') recaptcha_score = '?';

  var reason = getField(fields, "reason");
  var budget = getField(fields, "budget");
  var timeframe = getField(fields, "timeframe");


  fields.push({name: 'firstname', value: first_name});
  fields.push({name: 'lastname', value: last_name});
  fields.push({name: 'reCAPTCHA Score', value: recaptcha_score});
  fields.push({name: 'Phone Number', value: phone });
  fields.push({name: 'phone', value: phone });
  fields.push({name: 'Services', value: 'Hi' });
  fields.push({name: 'Reason', value: reason });
  fields.push({name: 'availabile_budget', value: budget });
  fields.push({name: 'Budget', value: budget });
  fields.push({name: 'Client Budget', value: budget });
  fields.push({name: 'Timeframe', value: timeframe });
  fields.push({name: 'Lead status', value: 'New'});
  fields.push({name: 'Lead_status', value: 'New'});
  fields.push({name: 'LeadStatus', value: 'New'});

  fields.push({name: 'Services Requested', value: 'Mobile Application Development,Social Network Marketing'});

console.log('fields after', fields);

  // fields.push({name: 'Services Requested', value: services_text});



  message = getField(fields, "message");


  if(typeof(message) !== 'undefined') {
    if(message.indexOf("SEO") !== -1 && message.indexOf("blog") !== -1 ) {
      console.log('denied!');
      return false;
    }

    if(message.indexOf("free") !== -1 && message.indexOf("trial") !== -1 ) {
      console.log('denied!');
      return false;
    }
  }


  axios.post('https://api.hsforms.com/submissions/v3/integration/submit/656806/48171d7f-be12-425e-a75a-87e0adfb15d8',
  {
    "fields": fields,
    "context": {
      "pageUri": "www.exqsd.com/contact",
      "ipAddress": ip_address,
      "pageName": "Contact Us"
    },
    "skipValidation": true
  })
  .then(response => {

    var context = {
      fullname: full_name,
      email: getField(fields, "email"),
      phone: getField(fields, "phone_number"),
      reason: getField(fields, "reason"),
      budget: getField(fields, "budget"),
      timeframe: getField(fields, "timeframe"),
      company_name: getField(fields, "company"),
      message: getField(fields, "message"),
      services: getFieldOptions(fields, "services[]", "n/a", true),
      hubspot_record: 'https://app.hubspot.com/contacts/656806/contacts/list/view/all/?query=' + getField(fields, "email")
    };

    name = typeof(context.company_name) == 'undefined' ? context.fullname : context.company_name;

    templates.render('LeadSubmission.html', context, function(err, html, text, subject) {
      transporter.sendMail({
          from: 'no-reply@exqsd.com',
          to: ['sshere@exqsd.com','contact@exqsd.com','shearse@exqsd.com'],
          subject: "Exquisite Software - Contact Form Submission for " + name,
          html: html,
          text: text
      });
    });



  })
  .catch(error => {
    console.log('error');
    console.log(error);
  });

  
  return false;
}


function getField(fields, name, def_value = 'n/a') {
  for(i = 0; i<fields.length; i++) {
    console.log(fields[i].name);
    if(fields[i].name == name) {
      return fields[i].value;
    }
  }
}

function getFieldOptions(fields, name, def_value = 'n/a', html = false) {
  var text = '';
  if(html) text = text + '<ul>';
  for(i = 0; i<fields.length; i++) {
    console.log(fields[i].name);
    if(fields[i].name == name) {
      if(html) text = text + "<li>" + fields[i].value + "</li>";
      else  text = text + fields[i].value + "\r\n";
    }
  } 
  if(html) text = text + '</ul>';
  return text;
}

app.post('/quote/', function(req, res) {
  var date = Date.now().toString(); 
  quote = date.substr(date.length - 6);
  
  questions =  req.body.questions;
  var text = "";
  for(i=0; i < questions.length; i++) {
    text = text + "<b>" + questions[i].text + "</b><br>";
    text = text + "<ul>";
    if(typeof(questions[i].response) == "number")
    {
      text = text + "<li>" + questions[i].responses[questions[i].response].text + " @ " + questions[i].responses[questions[i].response].value.hours + " Hours</li>";
    } else {
      for(j=0; j< questions[i].response.length; j++) {
        text = text + "<li>" + questions[i].responses[questions[i].response[j]].text + " @ " + questions[i].responses[questions[i].response[j]].value.hours + " Hours</li>";
      }
    }
    text = text + "</ul><br/>";
  }

  var context = {
    fullname: req.body.contactInformation.fullname,
    email: req.body.contactInformation.email_address,
    phone: req.body.contactInformation.phone_number,
    website: req.body.contactInformation.website,
    reason: "Instant Quote",
    budget: "n/a",
    services: "See below.",
    timeframe: req.body.contactInformation.timeframe,
    company_name: req.body.contactInformation.company_name,
    message: text,
    quoted_cost: req.body.contactInformation.quoted_price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
    quoted_hours: req.body.contactInformation.quoted_hours,
    quoted_date: req.body.contactInformation.quoted_date
  };

  templates.render('InstantCalculatorLead.html', context, function(err, html, text, subject) {
    // Send email
    transporter.sendMail({
        from: 'no-reply@exqsd.com',
        to: ['sshere@exqsd.com','contact@exqsd.com','shearse@exqsd.com'],
        subject: "Exquisite Software - Instant Price Calculator Submission for " + context.company_name + " (#" + quote + ")",
        html: html,
        text: text
    });
  });

  res.send({success: true, message: "Quote was submitted successfully", "QuoteNumber": quote });
 
});

app.post('/contact', function(req, res) {
  var token = getField(req.body, "recaptcha_token");
  verifyRecaptcha(token).then(function(score) {
    if(score => .5) {
      hubspotSubmit(req.body, score, req.connection.remoteAddress);
      res.send({success: true, message: "Contact form was submitted successfully.", score: score});
    }
    else if(score => 0) {
      res.send({success: true, message: "Your message was rejected. Traffic from your source has been reported to be suspicious. Please contact us by email or phone.", score: score});
    }
    else {
      res.send({success: false, message: "Could not validate the recaptcha response.", score: score});
    }
  });
});

var jobs = [];
 
const department_list = [
  {
    name : "All",
    id : 'All'
  },
  {
    name : "Software Engineering",
    id : 91881
  },
  {
    id : 92385,
    name : "Accounting & Finance",
  },
  {
    name : "Business Development",
    id : 91882,
  },
  {
    name : "Design",
    id : 92384,
  },
  {
    name : "Human Resources",
    id : 92392,
  },
  {
    name : "Marketing",
    id : 92386,
  },
  {
    name : "Operations",
    id : 92383,
  },
]

app.get('/careers', async function(req, res) {
  jobs = [];
  var url = 'https://api.manatal.com/open/v3/career-page/exquisite/jobs/';

  var options = {
    'method': 'GET',
    'url': url,
    'headers': {
      //'X-API-KEY': 'E6xwOg2BY4RbmiJogfyegrt746r7te',
      'Content-Type': 'application/json'
    }
  };

  const response = await axios(options);
  
  jobs = response.data.results;
  
  var locations = ["All"];
  var departments = ["All"];
  var positions = ['All'];

  jobs.map(e => {
    if(!locations.includes(e.location_display) && e.location_display != "") locations.push(e.location_display);
    if(!departments.includes(e.organization_name) && e.organization_name != "") departments.push(e.organization_name);
    if(!positions.includes(e.position_name) && e.position_name != "") positions.push(e.position_name);

    if(e.is_salary_visible) {
      e.salary_min = new Intl.NumberFormat('ja-JP').format(e.salary_min);
      e.salary_max = new Intl.NumberFormat('ja-JP').format(e.salary_max);
    }
    
    return e;
  });

  res.render('careers', {
    
    title: 'Work at Exquisite Software',
    jobs: jobs,
    locations: locations,
    departments: department_list,
    positions: positions,

    posted: true
  });
});

app.post('/application-success/', function(req, res) {

  var user = req.body;
  var msg = `<p>Thanks for your job application for Exquisite Open Role!</p>
  <br/><p>Will will reach out you soon after review your job application.</p>`;

  postmark_client.sendEmail({
    "From": "no-reply@exqsd.com",
    "To": user.email,
    "Subject": "EXQUISITE Job Application.",
    "HtmlBody": msg,
  });

  res.send({success: true});
 
});
 
// app.get('/portfolio/', function (req, res) {
//   res.render('portfolio', {
//     title: 'Portfolio'
//   });
// })
// app.get('/portfolio/:name', function (req, res) {
//   res.render('portfolio', {
//     title: 'Portfolio - ',
//     name: req.params.name
//   });
// })

app.get('/terms-of-service', function(req, res) {
  res.render('terms-of-service', {
    title: 'Terms of Service'
  });
});

app.get('/privacy-policy', function(req, res) {
  res.render('privacy-policy', {
    title: 'Privacy Policy'
  });
});

app.get('/instant-calculator', function(req, res) {
  res.render('calculator', {
    title: 'Instant Pricing Calculator'
  });
});

app.get('/instant-pricing-calculator', function(req, res) {
  res.render('calculator', {
    title: 'Instant Pricing Calculator'
  });
});

app.get('/instant-quote', function(req, res) {
  res.render('calculator', {
    title: 'Instant Pricing Calculator'
  });
});

app.get('/roi', function(req, res) {
  res.render('roi', {
    title: 'Return On Investment (ROI) Calculator'
  });
});

app.get('/roi-calculator', function(req, res) {
  res.render('roi', {
    title: 'Return On Investment (ROI) Calculator'
  });
});

app.get('/process/roadmap', function(req, res) {
  res.render('process-roadmap', {
    title: 'Our Process - Roadmap'
  });
});

app.get('/process/launch', function(req, res) {
  res.render('process-launch', {
    title: 'Our Process - Launch'
  });
});
 
app.get('/process/development', function(req, res) {
  res.render('process-development', {
    title: 'Our Process - Development'
  });
});
 

app.get('/why-exquisite', function(req, res) {
  res.render('why-exquisite', {
    title: 'Why Choose Exquisite?'
  });
});
 

 


app.get('/why-exquisite', function(req, res) {
  res.render('why-exquisite', {
    title: 'Why Choose Exquisite?'
  });
});
 

/* 
* Case Studies
*/

app.get('/our-work', function(req, res) {
  res.render('case-studies/index', {
    title: 'Client Case Studies'
  });
});


app.get('/our-work/thyrodine', function(req, res) {
  res.render('case-studies/thyrodine', {
    title: 'Thyrodine'
  });
});


app.get('/our-work/flyp', function(req, res) {
  res.render('case-studies/flyp', {
    title: 'FLYP - Fully Leverage Your Policy'
  });
});


app.get('/our-work/pocketpro', function(req, res) {
  res.render('case-studies/pocketpro', {
    title: 'PocketPro'
  });
});


app.get('/our-work/signals', function(req, res) {
  res.render('case-studies/signals', {
    title: 'Signals - Ninja Trader Addon'
  });
});

app.get('/our-work/mobile-erp', function(req, res) {
  res.render('case-studies/mobile-erp', {
    title: 'Client Case Studies'
  });
});

app.get('/our-work/coinoptions', function(req, res) {
  res.render('case-studies/coinoptions', {
    title: 'Client Case Studies'
  });
});

app.get('/our-work/parts-badger', function(req, res) {
  res.render('case-studies/parts-badger.jade', {
    title: 'Client Case Studies'
  });
});

app.get('/our-work/rugged-video', function(req, res) {
  res.render('case-studies/rugged-video.jade', {
    title: 'Client Case Studies'
  });
});


app.get('/our-work/real-estate-crm', function(req, res) {
  res.render('case-studies/real-estate-crm.jade', {
    title: 'Client Case Studies'
  });
});

app.get('/our-work/voice2pictures', function(req, res) {
  res.render('case-studies/voice2pictures.jade', {
    title: 'Client Case Studies'
  });
});

app.get('/our-work/tmflow', function(req, res) {
  res.render('case-studies/tmflow.jade', {
    title: 'Client Case Studies'
  });
});

app.get('/our-work/*', function(req, res) {
  res.render('case-studies/coming-soon.jade', {
    title: 'Project is coming soon.'
  });
});


app.get('/exquisite-development-plan', function(req, res) {
  res.render('exquisite-development-plan', {
    title: 'Execute a winning development strategy - Exquisite Development Plan™ '
  });
});

app.get('/exquisite-design-plan', function(req, res) {
  res.render('exquisite-design-plan', {
    title: 'Exquisite Success Plan™ '
  });
});

app.get('/exquisite-marketing-plan', function(req, res) {
  res.render('exquisite-marketing-plan', {
    title: 'Exquisite Marketing Plan™ '
  });
});

app.get('/exquisite-success-plan', function(req, res) {
  res.render('exquisite-success-plan', {
    title: 'Exquisite Success Plan™ '
  });
});


app.get('/exquisite-launch-plan', function(req, res) {
  res.render('exquisite-launch-plan', {
    title: 'Exquisite launch Plan™ '
  });
});

/* 
* Services
*/
app.get('/services/mobile-development', function(req, res) {
  res.render('mobile-development', {
    title: 'Mobile Application Development for iOS and Android'
  });
});

app.get('/services/software-development', function(req, res) {
  res.render('software-development', {
    title: 'Enterprise Software Development'
  });
});

app.get('/services/web-design-and-development', function(req, res) {
  res.render('web-development', {
    title: 'Web Design and Development'
  });
});
 
 
app.get('/services/user-experience', function(req, res) {
  res.render('user-experience', {
    title: 'UI and UX Design and Optimzation'
  });
});
 
 
app.get('/services/development-consulting', function(req, res) {
  res.render('development-consulting', {
    title: 'Development Consultation'
  });
});
 

app.get('/services/devops', function(req, res) {
  res.render('devops', {
    title: 'Development Operations'
  });
});
 
app.get('/services/project-management', function(req, res) {
  res.render('project-management', {
    title: 'Project Management - Manage and Mitigate Project Risks'
  });
});

app.get('/services/quality-assurance', function(req, res) {
  res.render('quality-assurance', {
    title: 'Quality Assurance'
  });
});
 

app.get('/our-process', function(req, res) {
  res.render('process', {
    title: 'Our Process'
  });
});
 
app.get('/investors', function(req, res) {
  res.render('investors', {
    title: 'Investors'
  });
});
 
app.get('/partnerships', function(req, res) {
  res.render('partnerships', {
    title: 'Partnerships'
  });
});

 
app.get('/services/artificial-intelligence', function(req, res) {
  res.render('artificial-intelligence', {
    title: 'Artificial Intelligence & Machine Learning'
  });
});

app.get('/pricing-guarantee/', function(req, res) {
  res.render('pricing-guarantee', {
    title: 'Our Pricing Gurantee'
  });
});

app.get('/our-team/', function(req, res) {
  res.render('our-team', {
    title: 'Our Team'
  });
});


app.get('/careers/', function(req, res) {
  res.render('careers', {
    title: 'Career Openings at Exquisite Software'
  });
});

app.get('/services/online-marketing/', function(req, res) {
  res.render('online-marketing', {
    title: 'Online Marketing'
  });
});





app.get('/our-clients/', function(req, res) {
  res.render('our-clients', {
    title: 'Our Past Clients'
  });
});

app.get('/services/big-data', function(req, res) {
  res.render('big-data', {
    title: 'Big Data & Analytics'
  });
});

app.get('/services/augmented-reality', function(req, res) {
  res.render('augmented-reality', {
    title: 'Augmented & Virtual Reality'
  });
});

app.get('/services/robotic-and-embedded', function(req, res) {
  res.render('robotics', {
    title: 'Robitcs and Embedded Development'
  });
});



/* 
* Resources
*/

app.get('/resources/press-releases', function(req, res) {
  res.render('resources/press-releases', {
    title: 'Press Releases'
  });
});

app.get('/resources/', function(req, res) {
  res.render('resources/faq', {
    title: 'Frequently Asked Questions'
  });
});


app.get('/resources/faq', function(req, res) {
  res.render('resources/faq', {
    title: 'Frequently Asked Questions'
  });
});

app.get('/resources/webinars', function(req, res) {
  res.render('webinars', {
    title: 'Webinars'
  });
});

app.get('/resources/white-papers', function(req, res) {
  res.render('resources/white-papers/index', {
    title: 'White Papers & Ebooks'
  });
});



app.get('/resources/white-papers', function(req, res) {
  res.render('resources/white-papers/index', {
    title: 'White Papers & Ebooks'
  });
});




// var sendPwdReminder = transporter.templateSender(new EmailTemplate('templates/'), {
//   from: 'sshere@exqsd.com',
//   to: ['sshere@exqsd.com','contact@exqsd.com'],
//   subject: 'Contact Form'
// });

// sendPwdReminder(
//   {'to': ['sshere@exqsd.com','contact@exqsd.com']}, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
app.get('*', (req, res) => res.send('Page Not found 404'));

app.listen(3000);
console.log('Listening on port 3000')
 
