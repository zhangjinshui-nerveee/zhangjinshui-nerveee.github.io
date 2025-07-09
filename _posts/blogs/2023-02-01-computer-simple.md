---
layout: post
title: "My experience on computer use"
category: 
  - blog
---

{{ page.title }}
================

<p class="meta">01 Feb 2023 - Carrboro</p>
Disclaimer: I am not an expert on computers. This blog is only to share some of my opinions as a (windows) computer user.

I am a power electronics engineer; I deal with circuit boards all the time. During a circuit test, the most scary thing is not that it definitely will fail, instead, is that it "might" fail. To me, an unpredictable success is more terrifying than a predictable failure. 

Certainly I don't like this feeling. Yet, I don't have a choice in my research work -- if something is totally controllable and predictable, it's hard to be considered as a research. However, I don't want this fear for uncontrollability to appear in any other part of my life, such as my computer. 

Due to work needs, I am still doing most of my work on Windows -- that might be one of the leading frustrations throughout my PhD. Please don't mistaken me; I think Windows is a miracle still. It's amazingly easy to start with -- everyone knows how to use it. 

Only, sometimes it makes you want to kill yourself or punch through your computer. To name a few right now (on my fairly new laptop), 
- the start menu search sometimes won't take my keyboard input
- it may or may not recognize the only one external monitor that I have used with it
- you never know when it's gonna start upgrading itself (actually most people complain about it, but I feel that the pause updates function is working well with me)
- the back slash / slash, confusion? <br>
... 

I can list so many things that Windows has haunted me with. Hopefully someday I can get rid of it, but I am stuck as I need LabVIEW FPGA (which, is another blackhole), Altium Designer (This is decent). I believe there might be some people having a similar delimma like I do, we really don't have a choice on which OS to use. 

However, we do have a choice on what to run on this OS. We may never be able to understand all the little details or behaviors of the software we are using. However, we should reserve the right to be able to do so. Here is my struggle to have a fairly neat and controllable windows computer. 

I believe the following tools combined together can satisfy all basic needs of an electrical engineer or student without getting into the MicroSoft trap.
- vim: vim is lovely. Vim can be dumb: it won't automatically save your work, it won't pop up suggestions for you to fix your text, unless you are willing to find out how. 
- latex: vim + latex can really give any computer, even computers that are running windows, a really long battery time to do text editing. Plus, people may be abandoning latex since the birth of MS word, as latex looks like a programming language. But guess who is good at programming? Chat-gpt! Or any other AI chatbot you may use. "The Best Time To Use Latex Was 30 Years Ago, and the Second Best Time Is Now."
<p style="color: gray; font-size: smaller;">I should have a blog recording my favorites usage/tips of latex.</p>
- Inkscape: it's as functional as Adobe Illustrator, but free and open source. All the figures in my papers are created with either inkscape, latex, or Python.
- terminal. Microsoft is a notorious company, however, their powershell is fairly neat. (Of course, it might still not be as good as bash or zsh, but it's much better than other microsoft products.)
- wsl2: another decent outcome from MS. It's much better than running on a virtual machine, and it feels like a real Linux. Plus, it's open sourced now.
- ai in terminal: gemini-cli is definitely mind blowing. Though, it seems to me that it has too much power over my computer (read / write files). I would be cautious about it if I am ever going to use it. Instead, something simpler such as [shell-gpt](https://github.com/TheR1D/shell_gpt) would be more reasonable and safer to use. 
- Altium Designer: This might be the only closed-source software that I plan to keep using for a long term. Altium Designer is pretty neat; I might really miss it if I fully switch to linux.


## vim setup
```.vimrc
call plug#begin()
  Plug 'preservim/nerdtree'
  Plug 'morhetz/gruvbox'
  Plug 'junegunn/vim-easy-align'
call plug#end()


" set gruvbox colorscheme
syntax enable
set background=dark
colorscheme gruvbox

" turn off bell alerts
set belloff=all

" indent
set tabstop=4
set softtabstop=4
set shiftwidth=4
set smarttab
set expandtab

" backup files
set backup
set swapfile
set undofile

" Start NERDTree when Vim is started without file arguments.
autocmd StdinReadPre * let s:std_in=1
autocmd VimEnter * if argc() == 0 && !exists('s:std_in') | NERDTree | endif

set keywordprg=python3\ -m\ pydoc
set nu

set nobackup
```


## powershell setup

### script to auto transfer oscilloscope data from usb stick
```powershell
cd "d:\"
Write-Host "Copying data ... ..."

# Step 1: List all files in the current directory that start with "tek"

$filesToCopy = Get-ChildItem -File -Filter "tek*" -Path $PWD

# Step 2: Copy the files to c:\users\jinshui\desktop
$destinationPath = "C:\users\jinshui\Documents\data\MDO3054"
$filesToCopy | ForEach-Object {
    Copy-Item $_.FullName -Destination $destinationPath
    }

# Step 3: Get the most recent three files
$recentFiles = $filesToCopy | Sort-Object LastWriteTime -Descending | Select-Object -First 3

# Step 4: Delete all files except the most recent three
$filesToDelete = $filesToCopy | Where-Object { $_ -notin $recentFiles }
$filesToDelete | ForEach-Object { 
	Remove-Item $_.FullName -Force }

Write-Host "Files copied and old files deleted successfully!"
cd -
```

### auto compile latex file
```powershell
param (
    [string]$fileName = 'main.tex'
)

# Check if the file exists
if (-Not (Test-Path $fileName)) {
    Write-Host "File '$fileName' does not exist."
    exit 1
}

echo $fileName

# Extract the base name (without extension) from the file name
$baseName = [System.IO.Path]::GetFileNameWithoutExtension($fileName)

# Compile the LaTeX file using pdflatex
Write-Host "Compiling LaTeX file..."
& pdflatex -interaction=nonstopmode $fileName > nul

# Run biblatex for references
Write-Host "Running biblatex..."
# & biber $baseName
& bibtex $baseName

# Compile the LaTeX file again (twice) to ensure references are updated
Write-Host "Finalizing compilation..."
& pdflatex -interaction=nonstopmode $fileName > nul
& pdflatex -interaction=nonstopmode -synctex=1 $fileName > nul

# Delete auxiliary files
$auxFiles = @("$baseName.aux", "$baseName.log", "$baseName.out", "$baseName.bbl", "$baseName.blg")
foreach ($file in $auxFiles) {
    if (Test-Path $file) {
        Remove-Item $file
        Write-Host "Deleted $file"
    }
}
# rm *.log

Write-Host "Compilation finished. PDF generated as '$baseName.pdf'."

# ii "$baseName.pdf"
```
Combine this powershell script with vim record function. Works like a charm!


