function card_woi_1() {
  let obesity_title = [
    "Health Effects of Overweight",
    "Obesity Causes And Symptoms",
    "How to Prevent Obesity ?",
    "What are the effects of obesity ?",
    "Fitness Effect on Obesity",
  ];
  let obesity_link = [
    "https://www.cdc.gov/healthyweight/effects/index.html",
    "https://www.mayoclinic.org/diseases-conditions/obesity/symptoms-causes/syc-20375742",
    "https://www.healthline.com/health/how-to-prevent-obesity",
    "https://www.medicalnewstoday.com/articles/effects-of-obesity",
    "https://www.ncbi.nlm.nih.gov/books/NBK539893/",
  ];
  let obesity_desc = [
    "Achieving and maintaining a healthy weight includes healthy eating, physical activity, optimal sleep, and stress reduction. Several other factors may also affect weight gain.Healthy eating features a variety of healthy foods. Fad diets may promise fast results, but such diets limit your nutritional intake, can be unhealthy, and tend to fail in the long run.",
    "Obesity is a complex disease involving having too much body fat. Obesity isn't just a cosmetic concern. It's a medical problem that increases the risk of many other diseases and health problems. These can include heart disease, diabetes, high blood pressure, high cholesterol, liver disease, sleep apnea and certain cancers.There are many reasons why some people have trouble losing weight.",
    "Obesity is a common health issue that is defined by having a high percentage of body fat. A BMI of 30 or higher is an indicator of obesity.Over the last few decades, obesity has become a considerable health problem.In fact, it’s now considered to be an epidemic in the United States.Despite the rising percentages, there are plenty of ways to prevent obesity in both kids and adults.",
    "Experts determine obesity as having a body mass index (BMI) of 30 or moreTrusted Source. This means obesity occurs when a person’s weight is higher than what healthcare professionals consider healthy for their height.BMI is not the only indication of obesity. Healthcare professionals may also use a person’s waist-to-hip ratio to determine obesity and the risk of obesity-related conditions.",
    "Obesity represents a significant public health concern, with one-third of adults classified as living with obesity in the United States. Obesity correlates with cardiometabolic comorbidities that can decrease the quality of life.[1][2] Researchers have proposed that exercise is an important lifestyle measure to maintain a healthy weight. This review will cover the role of exercise in obesity and fitness.",
  ];
  let obesity_date = [
    "14-02-2024",
    "01-04-2024",
    "15-12-2023",
    "01-04-2024",
    "17-11-2023",
  ];

  let date_1 = document.getElementById("date1");
  let title_1 = document.getElementById("title1");
  let desc_1 = document.getElementById("desc1");
  let link_1 = document.getElementById("link1");

  let random_index = Math.floor(Math.random() * 5);
  date_1.innerText = obesity_date[random_index];
  title_1.innerText = obesity_title[random_index];
  desc_1.innerText = obesity_desc[random_index];
  link_1.href = obesity_link[random_index];
}
function card_woi_2() {
  let motivation_title = [
    "Top 10 Motivational Tips For Fitness",
    "5 Fitness Motivation Tips",
    "Motivation for Exercise",
    "In Training, Consistency Is the Key",
    "The Power of Consistency in Fitness",
  ];
  let motivation_link = [
    "https://www.realbuzz.com/articles-interests/fitness/article/top-10-motivational-tips-for-fitness/",
    "https://blog.nasm.org/fitness-motivation-tips",
    "https://www.verywellfit.com/fitness-motivation-4157145",
    "https://www.nifs.org/blog/in-training-consistency-is-the-key-to-your-fitness-goals",
    "https://www.trainerize.me/articles/the-power-of-consistency-in-fitness/#:~:text=In%20conclusion%2C%20consistency%20is%20the,and%20reach%20your%20fitness%20goals.",
  ];
  let motivation_desc = [
    "It can be a really fine line that divides motivational success or failure when it comes to exercise. Having the initial desire to get into shape is one thing, but keeping it going can be quite another. So, we thought it might help to offer some top tips to keep you motivated when those negative thoughts start to creep in.",
    "We often think that motivation is something that comes from within. Something that we must muster up every time that we should go workout. However, motivation does not just come from within (internally), it can come from outside (external) sources as well.Internal motivation often stems from the internal rewards you get from engaging in a task or activity, like exercise. ",
    "There are a lot of ingredients that go into creating a consistent exercise program—having goals, being prepared, being disciplined, and staying committed. But one of the most important, and sometimes most elusive, is motivation.We often wait for the motivation to exercise, thinking one day we'll wake up and it'll be there.Motivation can be defined in very simple terms: what drives us to maintain or achieve goals",
    "Consistency is arguably the most important component when working to accomplish goals, in or out of the gym. Without consistency, programs are unorganized, the body has a harder time adapting, and forming habits may be more challenging.Whatever your goals may be, they require a consistent level of training for you to reach them.",
    "When it comes to fitness, consistency is key. It’s not about working out for hours every day or doing intense workouts seven days a week. It’s about showing up and putting in consistent effort every day. Just like a penny that compounds over time, small steps add up to big results.Imagine you have a penny and you double it every day for 30 days",
  ];
  let motivation_date = [
    "16-04-2023",
    "14-01-2024",
    "02-05-2018",
    "06-06-2019",
    "21-02-2023",
  ];

  let date_2 = document.getElementById("date2");
  let title_2 = document.getElementById("title2");
  let desc_2 = document.getElementById("desc2");
  let link_2 = document.getElementById("link2");

  let random_index = Math.floor(Math.random() * 5);
  date_2.innerText = motivation_date[random_index];
  title_2.innerText = motivation_title[random_index];
  desc_2.innerText = motivation_desc[random_index];
  link_2.href = motivation_link[random_index];
}
function full_width_news(){
    let benefits_title = [
        "Role of Physical Activity on Mental Health and Well-Being",
        "Exercise for Mental Health",
        "What are the mental and physical health benefits of exercise?",
        "The Mental Health Benefits of Exercise",
        "Exercise and mental health",
      ];
      let benefits_link = [
        "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9902068/",
        "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1470658/#:~:text=Exercise%20improves%20mental%20health%20by,self%2Desteem%20and%20cognitive%20function.",
        "https://www.medicalnewstoday.com/articles/benefits-of-exercise",
        "https://www.helpguide.org/articles/healthy-living/the-mental-health-benefits-of-exercise.htm",
        "https://www.betterhealth.vic.gov.au/health/healthyliving/exercise-and-mental-health",
      ];
      let benefits_desc = [
        "In addition to its physical health benefits, physical activity has a positive impact on mental health. Physically inactive individuals often experience higher morbidity rates and increased healthcare costs. Exercise therapy is commonly recommended to preserve mental wellness.<br><br>According to empirical investigations, physical activity is positively associated with specific mental health traits. Notably, nonclinical studies highlight the significant effects of exercise on self-concept and body image. These aspects of mental health are profoundly influenced by engaging in regular physical activity.....",
        "In this era of exponential growth obrbenefitsf the “metabolic syndrome” and obesity, lifestyle modifications could be a cost-effective way to improve health and quality of life. Lifestyle modifications can assume especially great importance in individuals with serious mental illness. Many of these individuals are at a high risk of chronic diseases associated with sedentary behavior and medication side effects, including diabetes, hyperlipidemia, and cardiovascular disease.<br><br>The importance of exercise is not adequately understood or appreciated by patients and mental health professionals alike. Evidence has suggested that exercise may be an often-neglected intervention in mental health care.....",
        "Exercise has many benefits, both curative and preventive, for physical and mental health. Any amount of exercise, even if it falls below the suggested amount, is likely to produce benefits. <br><br>Exercise benefits both mental health and physical health. Indeed, the National Institute on AgingTrusted Source say studies show that “taking it easy” is risky.The Centers for Disease Control and Prevention (CDC)Trusted Source say that “Regular physical activity is one of the most important things you can do for your health,” and everyone can benefit.This article looks at some specific benefits of regular exercise for mental and physical health.....",
        "Exercise is not just about aerobic capacity and muscle size. Sure, exercise can improve your physical health and your physique, trim your waistline, improve your sex life, and even add years to your life. But that’s not what motivates most people to stay active.<br><br>People who exercise regularly tend to do so because it gives them an enormous sense of well-being. They feel more energetic throughout the day, sleep better at night, have sharper memories, and feel more relaxed and positive about themselves and their lives.And it’s also a powerful medicine for many common mental health challenges.....",
        "We all know how important exercise is for keeping us physically healthy. But did you know that exercise can also help keep you mentally healthy?<br><br>Research shows that people who exercise regularly have better mental health and emotional wellbeing, and lower rates of mental illness.<br>Taking up exercise seems to reduce the risk of developing mental illness. It also seems to help in treating some mental health conditions, like depression and anxiety.For example, for mild-moderate depression, research suggests physical activity can be as effective as antidepressants or psychological treatments like cognitive behavioural therapy....",
      ];
      let benefits_date = [
        "08-01-2023",
        "27-12-2022",
        "25-01-2021",
        "02-11-2018",
        "20-12-2021",
      ];
    
      let date_3 = document.getElementById("date3");
      let title_3 = document.getElementById("title3");
      let desc_3 = document.getElementById("desc3");
      let link_3 = document.getElementById("link3");
      let img = document.getElementById("imgg1");
      img.src = "https://source.unsplash.com/1600x1000/?barbell";
      let random_index = Math.floor(Math.random() * 5);
      date_3.innerText = benefits_date[random_index];
      title_3.innerText = benefits_title[random_index];
      desc_3.innerHTML = benefits_desc[random_index];
      link_3.href = benefits_link[random_index];
}
function card_1(){
    let food_title = [
        "Role of Nutrition",
        "Nutrition And Fitness",
        "Nutrition And Athletic",
        "Nutrition In Fitness",
        "Why Nutrition ?",
      ];
      let food_link = [
        "https://www.myhealthcare.co/health-blogs/role-of-nutrition-in-physical-fitness",
        "https://www.verywellfit.com/why-you-need-nutrition-and-fitness-3121363",
        "https://medlineplus.gov/ency/article/002458.htm",
        "https://www.futurefit.co.uk/blog/role-of-nutrition-in-fitness/",
        "https://www.stileschiropracticchicago.com/health-articles/why-nutrition-is-the-most-important-part-of-fitness",
      ];
      let food_desc = [
        "Proper nutrition is key to good health. Pair a balanced diet with physical exercise and you will have an immune system that could effectively prevent any infection or illness. Eating a balanced diet.....",
        "Whether you are a competitive athlete, play a recreational sport, or practice yoga, there is no doubt that physical activity has many health benefits. When it comes to maximizing your workouts......",
        "Good nutrition can help enhance athletic performance. An active lifestyle and exercise routine, along with eating well, is the best way to stay healthy.Eating a good diet can help provide.....",
        "In the world of fitness, nutrition plays a vital role in helping individuals achieve their goals and maintain a healthy lifestyle. Nutrition, in simple terms, refers.....",
        "The food we eat plays a vital role in how we look and feel. Regular exercise is important but according to research, nutrition has the largest impact on our fitness. Using food as our medicine has.....",
      ];
      let food_date = [
        "25-09-2023",
        "15-12-2021",
        "01-09-2024",
        "20-07-2023",
        "25-11-2020",
      ];
    
      let date_4 = document.getElementById("date4");
      let title_4 = document.getElementById("title4");
      let desc_4 = document.getElementById("desc4");
      let link_4 = document.getElementById("link4");
      let img = document.getElementById("imgg2");
      img.src = "https://source.unsplash.com/1600x1000/?Nutrition";
      let random_index = Math.floor(Math.random() * 5);
      date_4.innerText = food_date[random_index];
      title_4.innerText = food_title[random_index];
      desc_4.innerHTML = food_desc[random_index];
      link_4.href = food_link[random_index];
}
function card_2(){
    let lifestyle_title = [
        "Lifestyle Changes Fitness",
        "Healthy Living",
        "Importance Of Lifestyle",
        "Lifestyle Benefits",
        "Healthy Outlook",
      ];
      let lifestyle_link = [
        "https://www.muscleandfitness.com/nutrition/lose-fat/never-diet-again/",
        "https://www.sane.org/information-and-resources/facts-and-guides/healthy-living",
        "https://www.prime-health.co.uk/blog/importance-of-living-a-healthy-lifestyle/",
        "https://www.healthline.com/health/fitness-nutrition/healthy-lifestyle-benefits",
        "https://www.ucsfhealth.org/education/healthy-lifestyles-healthy-outlook",
      ];
      let lifestyle_desc = [
        "Let’s face it: Dieting can be miserable. No matter the method you go for, restricting your eating habits usually isn’t fun.Most of us want to grow bigger and stronger.....",
        "A healthy lifestyle is important for everyone. When we look after our physical health, we feel better too – fitter, more relaxed and better able to cope with things......",
        "Living a healthy lifestyle is important for anyone who wants to feel their best and stay healthier as they get older. However, we are presented with such a huge amount of advice every day.....",
        "Starting a healthy lifestyle can involve eating nutritious foods, engaging in regular physical activity, and prioritizing your mental health......",
        "A healthy lifestyle can help you thrive as you move through your life's journey. Making healthy choices isn't always easy – it can be hard to find the time.....",
      ];
      let lifestyle_date = [
        "01-15-2024",
        "30-10-2023",
        "08-04-2021",
        "06-01-2023",
        "08-05-2023",
      ];
    
      let date_5 = document.getElementById("date5");
      let title_5 = document.getElementById("title5");
      let desc_5 = document.getElementById("desc5");
      let link_5 = document.getElementById("link5");
      let img = document.getElementById("imgg3");
      img.src = "https://source.unsplash.com/1600x1000/?healthy-lifestyle";
      let random_index = Math.floor(Math.random() * 5);
      date_5.innerText = lifestyle_date[random_index];
      title_5.innerText = lifestyle_title[random_index];
      desc_5.innerHTML = lifestyle_desc[random_index];
      link_5.href = lifestyle_link[random_index];
}
function card_3(){
    let smart_title = [
        "Guide To Fitness Tech",
        "Best Gadgets",
        "Innovative Fitness",
        "Future Of Fitness",
        "Hi-tech Health",
      ];
      let smart_link = [
        "https://www.pcmag.com/picks/the-ultimate-guide-to-health-and-fitness-tech",
        "https://www.gq-magazine.co.uk/gallery/top-fitness-gadgets",
        "https://www.oho.co.uk/blog/the-ten-most-innovative-fitness-gadgets-for-2023-299222/",
        "https://thegadgetflow.com/blog/future-of-fitness-10high-tech-gadgets-to-take-your-workouts-to-the-next-level/",
        "https://www.ediiie.com/blog/smart-fitness-technology/",
      ];
      let smart_desc = [
        "Not a huge fan of the gym, or just too lazy to get your butt out of bed and travel there in the morning? Or maybe you're less than comfortable with.....",
        "The best fitness gadgets can make all the difference between you sticking to your new year's resolution and failing at it miserably. What with most of us figuring out......",
        "For the same monthly price as a gym membership, you could bring the gym to you. This 32 inch Full HD fitness mirror doesn’t just look sleek and stylish; it also offers.....",
        "Want to elevate your workouts with the latest tech advancements? Then check out today's roundup. We're highlighting a smartwatch for marathons, a fitness gaming......",
        "It’s all online now. Work, interactions, buying, touring, playing, you name it, it has an online counterpart. A virtual alternative. So why not fitness?.....",
      ];
      let smart_date = [
        "05-01-2024",
        "22-09-2018",
        "01-05-2023",
        "25-03-2023",
        "01-02-2024",
      ];
    
      let date_6 = document.getElementById("date6");
      let title_6 = document.getElementById("title6");
      let desc_6 = document.getElementById("desc6");
      let link_6 = document.getElementById("link6");
      let img = document.getElementById("imgg4");
      img.src = "https://source.unsplash.com/1600x1000/?Smart-Fitness";
      let random_index = Math.floor(Math.random() * 5);
      date_6.innerText = smart_date[random_index];
      title_6.innerText = smart_title[random_index];
      desc_6.innerHTML = smart_desc[random_index];
      link_6.href = smart_link[random_index];
}
function card_4(){
    let cardio_title = [
        "8 Benefits Of Cardio",
        "Aerobic Exercises",
        "19 Cardio Exercises",
        "Cardio Workout Program",
        "Oone Hour Workout",
      ];
      let cardio_link = [
        "https://greatist.com/fitness/benefits-of-cardio",
        "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/aerobic-exercise/art-20045541",
        "https://www.healthline.com/health/cardio-exercises-at-home",
        "https://www.verywellfit.com/cardio-workout-program-weight-loss-1230810",
        "https://www.puregym.com/blog/1-hour-gym-workouts/",
      ];
      let cardio_desc = [
        "Cardio (that’s short for “cardiovascular activity”) is basically anything that gets your blood pumping. Whether you’re running.....",
        "During aerobic activity, you repeatedly move large muscles in your arms, legs and hips. You'll notice your body's responses quickly.......",
        "Cardiovascular exercise, also known as cardio or aerobic exercise, is essential for good health. It gets your heart rate up, making you.....",
        "Setting up an effective cardio program for weight loss can be confusing. The guidelines of the American College of Sports Medicine......",
        "Sticking to short, high-intensity sessions may be tempting when time is tight. But if you have specific goals in mind,.....",
      ];
      let cardio_date = [
        "27-09-2022",
        "18-11-2023",
        "19-02-2020",
        "28-02-2022",
        "31-12-2023",
      ];
    
      let date_7 = document.getElementById("date7");
      let title_7 = document.getElementById("title7");
      let desc_7 = document.getElementById("desc7");
      let link_7 = document.getElementById("link7");
      let img = document.getElementById("imgg5");
      img.src = "https://source.unsplash.com/1600x1000/?Cardio";
      let random_index = Math.floor(Math.random() * 5);
      date_7.innerText = cardio_date[random_index];
      title_7.innerText = cardio_title[random_index];
      desc_7.innerHTML = cardio_desc[random_index];
      link_7.href = cardio_link[random_index];
}
function latest_1(){
      let sports_link = [
        "https://www.who.int/initiatives/sports-and-health#:~:text=Regular%20physical%20activity%20helps%20prevent,of%20life%20and%20well%2Dbeing.",
        "https://www.godigit.com/health-insurance/health-guides/health-benefits-of-sports",
        "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6572041/",
        "https://www.muhealth.org/conditions-treatments/pediatrics/adolescent-medicine/benefits-of-sports",
        "https://www.realbuzz.com/articles-interests/sports-activities/article/the-health-and-fitness-benefits-of-sport/",
      ];
      let sports_desc = [
        "Physical activity and health promotion",
        "Health Benefits of Playing Sports",
        "Physical Activity and Sports—Real Health Benefits",
        "Benefits of Sports for Adolescents",
        "The Health And Fitness Benefits Of Sport",
      ];
      let sports_date = [
        "06-10-2020",
        "17-08-2023",
        "23-05-2019",
        "01-13-2023",
        "14-06-2019",
      ];
    
      let date_8 = document.getElementById("date8");
      let desc_8 = document.getElementById("desc8");
      let link_8 = document.getElementById("link8");
      let img = document.getElementById("imgg6");
      img.src = "https://source.unsplash.com/1600x1000/?Sports";
      let random_index = Math.floor(Math.random() * 5);
      date_8.innerText = sports_date[random_index];
      desc_8.innerHTML = sports_desc[random_index];
      link_8.href = sports_link[random_index];
}
function latest_2(){
    let mental_link = [
      "https://www.mind.org.uk/information-support/tips-for-everyday-living/wellbeing/",
      "https://medlineplus.gov/howtoimprovementalhealth.html",
      "http://www.bcmhsus.ca/about/news-stories/stories/10-tips-to-boost-your-mental-health",
      "https://www.healthline.com/health/mental-health/habits-to-improve-mental-health",
      "https://www.helpguide.org/articles/mental-health/building-better-mental-health.htm",
    ];
    let mental_desc = [
      "How to improve your mental wellbeing",
      "How to Improve Mental Health",
      "10 tips to boost your mental health",
      "8 Daily Habits to Boost Mental Health — and Signs It May Be Time to Get Support",
      "Building Better Mental Health",
    ];
    let mental_date = [
      "04-08-2023",
      "05-07-2020",
      "06-07-2023",
      "02-05-2022",
      "08-11-2018",
    ];
  
    let date_9 = document.getElementById("date9");
    let desc_9 = document.getElementById("desc9");
    let link_9 = document.getElementById("link9");
    let img = document.getElementById("imgg7");
    img.src = "https://source.unsplash.com/1600x1000/?Mental-Health";
    let random_index = Math.floor(Math.random() * 5);
    date_9.innerText = mental_date[random_index];
    desc_9.innerHTML = mental_desc[random_index];
    link_9.href = mental_link[random_index];
}
function latest_3(){
    let calorie_link = [
      "https://www.mayoclinic.org/healthy-lifestyle/weight-loss/in-depth/exercise/art-20050999#:~:text=When%20you're%20active%2C%20your,2020%20Dietary%20Guidelines%20for%20Americans.",
      "https://www.everydayhealth.com/fitness/factors-that-can-affect-how-many-calories-you-burn/",
      "https://www.fittr.com/article/what-are-calories-127/",
      "https://www.healthline.com/nutrition/does-exercise-cause-weight-loss",
      "https://www.calories.info/calorie-intake-calculator",
    ];
    let calorie_desc = [
      "Exercise for weight loss: Calories burned in 1 hour",
      "6 Factors That Can Affect How Many Calories You Burn",
      "Understanding Calories: A Beginner’s Guide",
      "Does Exercise Help You Lose Weight? The Surprising Truth",
      "Daily Calorie Intake Calculator",
    ];
    let calorie_date = [
      "07-12-2021",
      "05-01-2022",
      "28-03-2023",
      "18-05-2020",
      "04-16-2020",
    ];
  
    let date_10 = document.getElementById("date10");
    let desc_10 = document.getElementById("desc10");
    let link_10 = document.getElementById("link10");
    let img = document.getElementById("imgg8");
    img.src = "https://source.unsplash.com/1600x1000/?healthy-food";
    let random_index = Math.floor(Math.random() * 5);
    date_10.innerText = calorie_date[random_index];
    desc_10.innerHTML = calorie_desc[random_index];
    link_10.href = calorie_link[random_index];
}
function latest_4(){
    let muscle_link = [
      "https://www.healthline.com/health/fitness/how-to-gain-muscle",
      "https://www.shape.com/fitness/tips/best-way-gain-lean-muscle",
      "https://www.medicalnewstoday.com/articles/319151",
      "https://www.menshealth.com/fitness/a19534499/10-muscle-building-tips/",
      "https://www.puregym.com/blog/the-best-gym-workout-plan-for-gaining-muscle/",
    ];
    let muscle_desc = [
      "How to Gain Muscle, No Matter Who You Are",
      "How to Gain Muscle In and Outside the Gym",
      "How to build muscle with exercise",
      "10 Muscle-Building Fundamentals You Need to Learn",
      "The Best Gym Workout Plan For Gaining Muscle",
    ];
    let muscle_date = [
      "11-04-2021",
      "30-07-2021",
      "08-01-2020",
      "13-13-2023",
      "02-01-2024",
    ];
  
    let date_11 = document.getElementById("date11");
    let desc_11 = document.getElementById("desc11");
    let link_11 = document.getElementById("link11");
    let img = document.getElementById("imgg9");
    img.src = "https://source.unsplash.com/1600x1000/?fitness";
    let random_index = Math.floor(Math.random() * 5);
    date_11.innerText = muscle_date[random_index];
    desc_11.innerHTML = muscle_desc[random_index];
    link_11.href = muscle_link[random_index];
}
function pick_1(){
    let myths_link = [
        "https://integrehab.com/blog/health-wellness/common-fitness-myths/",
        "https://www.mdanderson.org/publications/focused-on-health/exercise-myths.h12-1589046.html",
        "https://www.elementfitness.eu/blog/our-blog-1/breaking-14-common-fitness-myths-7",
        "https://www.cnet.com/health/fitness/fitness-myths-debunked/",
        "https://evofitness.ch/myths-exercise-diet/",
      ];
      let myths_title = [
        "10 Common Fitness Myths To Avoid",
        "7 Exercise Myths Debunked",
        "Breaking 14 Common Fitness Myths",
        "10 Fitness Myths Seen on Social Media That Are Completely False",
        "15 Muths & Facts About Exercise And Diet",
      ];
      let myths_date = [
        "23-01-2023",
        "09-03-2014",
        "06-09-2022",
        "12-11-2022",
        "23-08-2018",
      ];
    
      let date_12 = document.getElementById("date12");
      let title_12 = document.getElementById("title12");
      let link_12 = document.getElementById("link12");
    
      let random_index = Math.floor(Math.random() * 5);
      date_12.innerText = myths_date[random_index];
      title_12.innerHTML = myths_title[random_index];
      link_12.href = myths_link[random_index];
}
function pick_2(){
    let sleep_link = [
        "https://newsinhealth.nih.gov/2021/04/good-sleep-good-health",
        "https://www.healthline.com/nutrition/10-reasons-why-good-sleep-is-important",
        "https://www.medicalnewstoday.com/articles/325353",
        "https://www.acefitness.org/resources/everyone/blog/7818/7-benefits-of-sleep-for-exercise-recovery/#:~:text=One%20important%20benefit%20of%20sleep,necessary%20for%20optimal%20cognitive%20performance.",
        "https://theconversation.com/why-sleep-is-so-important-for-your-fitness-197969",
      ];
      let sleep_title = [
        "Good Sleep for Good Health",
        "10 Reasons to Get More Sleep",
        "Why sleep is essential for health",
        "7 Benefits of Sleep for Exercise Recovery",
        "Why Sleep Is So Important For Your Fitness",
      ];
      let sleep_date = [
        "29-03-2021",
        "25-02-2023",
        "31-05-2019",
        "11-13-2021",
        "20-02-2023",
      ];
    
      let date_13 = document.getElementById("date13");
      let title_13 = document.getElementById("title13");
      let link_13 = document.getElementById("link13");
    
      let random_index = Math.floor(Math.random() * 5);
      date_13.innerText = sleep_date[random_index];
      title_13.innerHTML = sleep_title[random_index];
      link_13.href = sleep_link[random_index];
}
function pick_3(){
    let diet_link = [
        "https://sand-puppy.com/importance-of-diet-in-exercise/",
        "https://www.narayanahealth.org/blog/importance-of-balanced-diet-for-a-healthy-lifestyle/",
        "https://www.nia.nih.gov/health/healthy-eating-nutrition-and-diet/diet-and-exercise-choices-today-healthier-tomorrow",
        "https://www.healthline.com/nutrition/diet-vs-exercise",
        "https://www.nursinginpractice.com/clinical/obesity-and-nutrition/nutrition/the-importance-of-a-healthy-diet-and-exercise/",
      ];
      let diet_title = [
        "Importance of Diet in Exercise",
        "Importance Of Balanced Diet In a Healthy Lifestyle",
        "Diet and Exercise: Choices Today for a Healthier Tomorrow",
        "Is Diet or Exercise More Important for Your Health?",
        "The Importance Of a Healthy Diet and Exercise",
      ];
      let diet_date = [
        "02-06-2021",
        "22-11-2019",
        "08-01-2024",
        "15-07-2021",
        "30-03-2018",
      ];
    
      let date_14 = document.getElementById("date14");
      let title_14 = document.getElementById("title14");
      let link_14 = document.getElementById("link14");
    
      let random_index = Math.floor(Math.random() * 5);
      date_14.innerText = diet_date[random_index];
      title_14.innerHTML = diet_title[random_index];
      link_14.href = diet_link[random_index];
}
function pick_4(){
    let diet_link = [
        "https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/exercise-and-stress/art-20044469",
        "https://www.health.harvard.edu/staying-healthy/exercising-to-relax",
        "https://www.medicalnewstoday.com/articles/how-does-exercise-reduce-stress",
        "https://www.everydayhealth.com/exercise-photos/exercises-that-relieve-stress.aspx",
        "https://www.helpguide.org/articles/stress/stress-management.htm",
      ];
      let diet_title = [
        "Exercise and stress: Get moving to manage stress",
        "Exercising to relax",
        "Can exercise help stress, anxiety, and depression?",
        "Exercise and Stress Relief",
        "Stress Management: How to Reduce and Relieve Stress",
      ];
      let diet_date = [
        "03-08-2022",
        "07-07-2020",
        "20-04-2022",
        "20-10-2023",
        "09-01-2024",
      ];
    
      let date_14 = document.getElementById("date14");
      let title_14 = document.getElementById("title14");
      let link_14 = document.getElementById("link14");
    
      let random_index = Math.floor(Math.random() * 5);
      date_14.innerText = diet_date[random_index];
      title_14.innerHTML = diet_title[random_index];
      link_14.href = diet_link[random_index];
}
function update(){

}
function refresh(){
    let ref = document.querySelector('.refresh-icon');
    ref.classList.remove('d-none');
    let body_ele = document.querySelector('.refresh');
    body_ele.classList.add('d-none');
    setTimeout(()=>{
        body_ele.classList.remove('d-none');
        ref.classList.add('d-none');
        card_woi_1();
        card_woi_2();
        full_width_news();
        card_1();
        card_2();
        card_3();
        card_4();
        latest_1()
        latest_2();
        latest_3();
        latest_4();
        pick_1();
        pick_2();
        pick_3();
        pick_4();
    },2500)
}

const hamburgerIcon = document.getElementById('hamburger-icon');
const sidebar = document.getElementById('sidebar');

hamburgerIcon.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});