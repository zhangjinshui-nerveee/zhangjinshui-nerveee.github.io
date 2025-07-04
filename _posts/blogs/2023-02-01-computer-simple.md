---
layout: post
title: "My experience on computer use"
category: 
  - blog
---

{{ page.title }}
================

<p class="meta">01 Feb 2023 - Carrboro</p>

I am not an expert on computers. This blog is only to share some of my opinions from the perspective of a (windows) computer user.

"We should not fight our computers." -- <em>How Linux Works.</em>

As a power electronics engineer, I deal with circuit boards all the time. When I test their functionality, the most scary thing is not that they always fail, like ten failures or explosions out of ten trials. The most terrible thing is that they only fail once out of ten or a hundred trials. 
Unpredictable success is much more terrifying than predictable failures. You can always fix a problem, but it's much harder to fix a "problem-ish" situation. 
I know it's natural to have a fear for uncontrollability. 
But I certainly don't want it, particularly when I am dealing with my computer, a thing that is supposed to listen to me and work stably on demand.

Due to work needs, I am still doing most of my work on Windows -- that might be one of the leading frustrations throughout my PhD. Windows is amazingly easy to start with -- everyone knows how to use it. But it's always not perfect:
- the start menu search sometimes won't take my keyboard input
- it may or may not recognize the only one external monitor that I have used with it
- you never know when it's gonna start upgrading itself (actually most people complain about it, but I feel that the pause updates function is working well with me)
- the back slash / slash, confusion?

I can list so many things that Windows has surprised me with. Hopefully someday I can get rid of it, but now I am stuck as I need LabVIEW FPGA development, Altium Designer. I believe there are lots of people like me, we really don't have a choice on which os to use. 

However, we do have a choice on software. Software should be easy to understand and manipulate. After all, software serves us instead of the opposite. 
It just doesn't make sense to me if we have to guess what results our software might give us, or why it is eating so much of my computing resource when I am literally doing nothing.

We may never be able to understand all the little details or behaviors of the software we are using. However, we should reserve the right to be able to do so. Open-source is crucial for this philosophy. Here I share some tools that I believe fit this principle.
I believe the following tools combined together can satisfy all basic needs of an electrical engineer or student without getting into the microsoft trap.
- vim: vim is lovely. Vim can be dumb: it won't automatically save your work, it won't pop up suggestions for you to fix your text, unless you are willing to find out how. 
- latex: vim + latex can really give any computer, even computers that are running windows, a really long battery time to do text editing. Plus, people may be abandoning latex since the birth of MS word, as latex looks like a programming language. But guess who is good at programming? Chat-gpt! Or any other AI chatbot you may use. "The Best Time To Use Latex Was 30 Years Ago, and the Second Best Time Is Now."
<p style="color: gray; font-size: smaller;">I should have a blog recording my favorites usage/tips of latex.</p>
- Inkscape: it's as functional as Adobe Illustrator, but free and open source.
- terminal. Microsoft is a notorious company, however, their powershell is fairly neat. (Of course, it might still not be as good as bash or zsh, but it's much better than other microsoft products.)
- wsl2: another decent outcome from MS. It's much better than running on a virtual machine, and it feels like a real Linux. Plus, it's open sourced now.
- ai in terminal: gemini-cli is definitely big news. Though, it seems to me that it has too much power over my computer (read / write files). I would be cautious about it if I am ever going to use it. Instead, something simpler such as [shell-gpt](https://github.com/TheR1D/shell_gpt) would be more reasonable and safer to use. 
- Altium Designer: This might be the only closed-source software that I plan to keep using for a long term. Altium Designer is pretty neat; its design graps what it takes to design good electric stuff. 
