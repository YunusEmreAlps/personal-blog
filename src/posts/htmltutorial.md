- HTML : Hyper Text Markup Language
- HTML is the building block for web pages.
- You’ll learn to use HTML to author an HTML page to display in a web   browser.
- You’ll need a text editor, such as Notepad++, VS code, Atom and an Internet browser, such as Google Chrome.

# What is an HTML files ?
- HTML is a format that tells a computer how to display a web page.The documents themselves are plain text files with special “tags” or codes that a web browser uses to interpret and display information on your computer screen.
1. An HTML file is a text file containing small markup tags (< >)
2. The markup tags tell the web browser how to display the page
3. An HTML file must have an hmt or html file extension. (.htm or .html)

# Example 1 : 
```
<!DOCTYPE html>

<html>
    <head>
        <meta charset = “utf-8”/>
        <title> Hello World </title>
    </head>
    <body>
        Hello World
    </body>
</html>
```
1. This html document is a website skeleton.
2. This is the minimum required information for a web document and all web document should contain these basic components.
3. This is the minimum required information for a web document and all web document should contain these basic components.
4. First tag in your html document is <html>. This tag tells your browser that this is the start of an html document.
5. First tag in your html document is <html>. This tag tells your browser that this is the start of an html document.
6. The last tag in your html document is </html>.This tag tells your browser that this is the end of an html document.
7. The text between the <head> tag and the </head> tag is header information.Header information is not displayed in the browser window.
8. The text between the <title> tag is the title in your document.
9. The <title> tag is used to uniquely identify each document and is also displayed in the title bar of the browser window.
10. The text between the <body> tag is the text that will be displayed in your browser.
11. The text between the <b> and </b> tags will be displayed in a bold font.

# Example 2 : 
```
<!DOCTYPE html>

<html>
    <head>
        <meta charset = “utf-8”/>
        <title> Web design </title>
    </head>
    <body>
        Sentence_1.<br/>Sentence_2.<br/>Sentence_3.Sentence_4.
    </body>
</html>
```

**Output :**

Sentence_1.

Sentence_2.

Sentence_3.Sentence_4.

<br/> : break line (carriage return) (new line)

# Example 3: 
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset = “utf-8”/>
        <title> Web design </title>
    </head>
    <body>
        <p>Paragraph 1 .</p>
        <p>Paragraph 2 .</p>
        Paragraph 3 . <br/>
        Paragraph 4 .
    </body>
</html>
```

**Output :**

Paragraph 1 .


Paragraph 2 .


Paragraph 3 .
Paragraph 4 .

<p>…</p> Create a new paragraph

# Example 4: 
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset = “utf-8”/>
        <title> HelloWorld </title>
    </head>
    <body>

        <h1>Hi</h1>
        <h2>Hi</h2>
        <h3>Hi</h3>
        <h4>Hi</h4>
        <h5>Hi</h5>
        <h6>Hi</h6>

        <p> Create <b> bold </b> text </p> <! — Should use <strong> -->
        <p> Create <strong> bold </strong> text </p>
        <hr/> <! — horizontal line →
        <p> Create <i> italicized </i>text </p> <! — Should use <em> -->
        <p> Create <em> italicized </em> text </p>
    </body>
</html>
```

**Output :**

# Hi
## Hi
### Hi
#### Hi
##### Hi
###### Hi

Create **bold** text  



Create **bold** text
___

Create *italicized* text 



Create *italicized* text

# Example 5: 
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset = “utf-8”/>
        <title> HelloWorld </title>
    </head>
    <body>
        <h2><font color = red ><em>LİST</em></font></h2>
        <p><b>Most important 3 language </b></p>
        <ol>
            <li>English</li>
            <li>Spanish</li>
            <li>French</li>
        </ol>
        <p><strong>3 arduino component </strong></p>
        <ul>
            <li> Led </li>
            <li> Resistor </li>
            <li> Transistor </li>
        </ul>
    </body>
</html>
```
**Output :**

1. English
2. Spanish
3. French

- Led
- Resistor
- Transistor

# Example 6: 
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset = “utf-8”/>
        <title> HelloWorld </title>
    </head>
    <body>
        <a href = “https://medium.com/@yunus192alpu”>Medium</a>
    </body>
</html>
```
**Output :**

[Medium](https://medium.com/@yunus192alp)
<a href = “URL”>NAME</a> : Creates a link that target location

# Example 7: 
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset = “utf-8”/>
        <title> HelloWorld </title>
    </head>
    <body>
        <img src = (https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png" alt = “Photo” align = “center “ width = “150” height = “250”>
    </body>
<html>
```
**Output :**

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
<img scr = “Photo URL”> : add image
aling = “left / center / right / top / bottom “ : image location location
alt “photo” : information in the image

# Example 8: 
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset = “utf-8”/>
        <title> HelloWorld </title>
    </head>
    <body>
        <audio contols>
        <source src = “music.html” type=”audio/mpeg”/>
        Error 404 found.
        </audio>
    </body>
</html>
```
**Output :**

<audio contols>…</audio> : add sound file in the website
<source src = “music.html” type =”audio/mpeg”/> : adding



# Example 9: 
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset = “utf-8”/>
        <title> HelloWorld </title>
    </head>
    <body>
        < video width=”400" height=”400" controls autoplay loop>
        <source src=”video url” type = “video / MP4”
        Error 404 found
        </video>
    </body>
</html>
```
**Output :**

<video > …</video> : add video on my website
<source src = “video url” type=”video/MP4" : this is type
controls : control item (< || >)

autoplay

loop

