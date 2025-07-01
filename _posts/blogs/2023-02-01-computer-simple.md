---
layout: post
title: "Getting along with my (Windows) computer: why and how"
category: 
  - blog
---

{{ page.title }}
================

<p class="meta">01 Feb 2023 - Carrboro</p>

"We should not fight our computers." -- <em>How Linux Works.</em>

As a power electronics engineer, I deal with circuit boards all the time. When I test their functionality, the most scary thing is not that they always fail, like ten failures or explosions out of ten trials. The most terrible thing is that they only fail once out of ten or a hundred trials. Predictable failure is much better than unpredictable success. You can always fix a problem, but it's so much harder to fix a "problem-ish" situation. I think it's ok and natural to have a fear for uncontrollability, especially in the context of productivity tools, like our computers.

Due to my work needs, I still have to do most of my work on Windows -- that might be one of the leading frustrations throughout my PhD. Windows is amazingly easy to start with -- everyone knows how to use it. But it's always not perfect:
- the start menu search sometimes won't take my keyboard input
- it may or may not recognize the only one external monitor that I have used with it
- you never know when it's gonna start upgrading itself (actually most people complain about it, but I feel that the pause updates function is working well with me)
- the back slash / slash, confusion?

I can list so many things that Windows has surprised me with. Hopefully someday I can get rid of it, but now I am stuck as I need LabVIEW FPGA development, Altium Designer. I believe there are lots of people like me, we really don't have a choice on which os to use. 

However, we indeed have a choice on software, software that are easy to understand and customize. After all, software serves us instead of the opposite. 
It just does not make sense to me that we have to learn or even guess what results our software might give us. 

We may never be able to understand all the little details or behaviors of the software we are using. However, we should reserve the right to be able to do so. Open-source is crucial for this philosophy. Here I share some tools that I believe fit this principle.
- vim for everything: vim is lovely. Vim can be dumb: it won't automatically save your work, it won't pop up suggestions for you to fix your text, unless you are willing to find out how. 
- latex: vim + latex can really give any computer, even computers that are running windows, a really long battery time to do text editing. Plus, people may be abandoning latex since the birth of MS word, as latex looks like a programming language. But guess who is good at programming? Chat-gpt! Or any other AI chatbot you may use. "The Best Time To Use Latex Was 30 Years Ago, and the Second Best Time Is Now."
<p style="color: gray; font-size: smaller;">I should have a blog recording my favorites usage/tips of latex.</p>
- Inkscape: it's as functional as Adobe Illustrator, but free and open source.
- terminal. Microsoft is a notorious company, however, their powershell is fairly neat. (Of course, it might still not be as good as bash or zsh, but it's much better than other microsoft products.)
- wsl2: another decent outcome from MS. It's much better than running on a virtual machine, and it feels like a real Linux. Plus, it's open sourced now.
- ai in terminal: gemini-cli is definitely big news. Though, it seems to me that it has too much power over my computer (read / write files). I would be cautious about it if I am ever going to use it. Instead, something simpler such as [shell-gpt](https://github.com/TheR1D/shell_gpt) would be more reasonable and safer to use. 
- Altium Designer: This might be the only closed-source software that I plan to keep using for a long term. Altium Designer is pretty neat; its design graps what it takes to design good electric stuff. 
