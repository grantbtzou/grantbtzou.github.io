<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="combined-header.css">
        <link rel="stylesheet" href="projects.css"> 
        <title> </title>
    </head>
    <body>
        <?php include 'shared-header.php';?>
        <div class="column"> 
                <h1>Projects</h1>
                <h2 id=top-text>Theme Song Bot</h2>
                <p>Developed a Discord bot using Python and the Discord API that plays user set music when they join voice calls. 
                    The program utilizes youtube-dl to access the audio from any user provided YouTube url and plays the audio with 
                    FFmpeg. It includes features to enable and disable the bot for the user, and also to list all of the users and 
                    their selected music. The bot is used on my discord server with over 100 members. View the source code on my
                    <span><a href=https://github.com/SomeGiraffe>Github</a></span>. 
                </p>
        
                <h2>Multi-language Development Security Trends</h2> 
                <p>Research assistant at the George Mason University Sun Security Lab. I work on projects investigating patterns 
                    in multi-(coding)language software. Our goal is to understand the trends and vulnerabilities present in these 
                    programs in order to prevent security weaknesses. I use Python to pull Github commits from a wide variety of 
                    repositories, involving languages such as C, C++, Rust, Python, Java, JavaScript, HTML, and CSS, and analyze 
                    them for commonalities. This involves both automated analysis with Python to read and create spreadsheets, and 
                    also manual examination that requires background in these languages. The primary repository of focus is the Django
                    webframework. Published results forthcoming. 
                </p>
        
         
                <h2>Source Film Maker Animation</h2>
                <p>Animated a short film using Valve's Source Film Maker software. Self taught basic keyframing, lighting, and editing. 
                    The final video was exported as an image sequence and compiled in Blender. 
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/K4jNCaaESw0"
                    title="How it FEELS to use teleporters in TF2 in 2022 [SFM]" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen id="SFM-Video"></iframe>
          
         
                <h2>Probability simulations and demonstrations</h2>
                <p id=bottom-text>Created several probability simulations, originally in Java or Python. Using JavaScript I've created visualizations of 
                    my favorite problems and uploaded them to this website. Check them out <span><a href=simulations.php>here!</a></span>
                </p>
        
        </div>
    </body>
</html>