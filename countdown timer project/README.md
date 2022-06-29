## Basic Countdown Timer

<p>Welcome to a basic countdown timer built in Javascript. This project followed a <a href="https://www.youtube.com/watch?v=3PHXvlpOkf4&t=17933s&ab_channel=freeCodeCamp.org">tutorial</a> by John Smilga from <a href="">freeCodeCamp.org</a>. It covers introductory Javascript concepts and is a perfect project for beginners, such as myself, to get comfortable with Javascript fundamentals.</p>

### Project Description

<p>This application does one simple job - run a countdown to a specified date in the future. Once the timer finished, a message will appear where the timer once stood stating it's completion. This project aimed to do _ things:</p>
<ol>
<li> Get comfortable with Javascript fundamentals.
<li> Reinforce learned concepts.
<li> Apply learned knowledge to a simple project.
</ol>

<p>As I am still very new to Javascript concepts, there was a couple of things I struggled with in this project. First, it was challenging making sure script worked properly. By the end of the tutorial, my page had still not worked as shown in the tutorial. I spent some time afterward troubleshooting the issue and found the solution was to simply move my script to the bottom of my HTML file. This is because of the Document Object Model. My understanding of DOM is still fairly vague so this was an interesting display of how it behaved. And second, the querySelector was not connecting to the text of the HTML file which meant the date was not displaying. In the end, I worked around this issue by assigning an id to the element instead of using a class.</p>

<p>In the future versions, I want to implement flexibility by adding features for the user to set and reset their own date as well as customise the message once the countdown is finished.</p>
