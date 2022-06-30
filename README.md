## Basic Countdown Timer (wip)

<p>Welcome to a basic countdown timer built in Javascript. This project followed a <a href="https://www.youtube.com/watch?v=3PHXvlpOkf4&t=17933s&ab_channel=freeCodeCamp.org">tutorial</a> by John Smilga from <a href="">freeCodeCamp.org</a>. It covers introductory Javascript concepts and is a perfect project for beginners, such as myself, to get comfortable with Javascript fundamentals.</p>

### Project Description

<p>This application does one simple job - run a countdown to a specified date in the future. Once the timer finished, a message will appear where the timer once stood stating it's completion. This project aimed to do 3 things:</p>
<ol>
<li> Get comfortable with Javascript fundamentals.
<li> Reinforce learned concepts.
<li> Apply learned knowledge to a simple project.
</ol>

<p>As I am still very new to Javascript concepts, there was a couple of things I struggled with in this project. First, it was challenging making sure script worked properly. By the end of the tutorial, my page had still not worked as shown in the tutorial. I spent some time afterward troubleshooting the issue and found the solution was to simply move my script to the bottom of my HTML file. This is because of the Document Object Model. My understanding of DOM is still fairly vague so this was an interesting display of how it behaved. And second, the querySelector was not connecting to the text of the HTML file which meant the date was not displaying. In the end, I worked around this issue by assigning an id to the element instead of using a class.</p>

<p>An issue I was not able to resolve was keeping the minutes at time displayed to remain at 2 digits when the value is less than 10. For example:</p>
<p>9:00 will display as 9:0 , I placed a band-aid solution for this by setting the time to 9:30am instead.</p>

<p>In the future versions, I want to implement flexibility by adding features for the user to set and reset their own date as well as customise the message once the countdown is finished. Further, I also hope to resolve the issue of time displaying as a single digit when the value is below 10.</p>

### How to use

<p>You can clone repo to your local machine if you like, and set your own date and time to countdown using a program like Visual Studio Code. You can then set your own time and date and 'Go Live' to see it's time tick. It's basic and minimal, and definitely something I will continue to fiddle as my understanding grows and progresses.</p>

#### Credits

📄 <a href="https://www.youtube.com/watch?v=3PHXvlpOkf4&t=17933s&ab_channel=freeCodeCamp.org">Build 15 JavaScript Projects - Vanilla JavaScript Course</a> by John Smilga
