---
layout: post
title: "My favirote computer tools"
category: 
  - blog
---

{{ page.title }}
================

<p class="meta">01 Feb 2023 - Carrboro</p>
From my own experience, the following tools, most are open-sourced and free, together have satisfied all my needs as an electrical engineer (student). 

- vim
- latex: vim + latex can really give any computer, even computers that are running windows, a really long battery time to do text editing. Plus, people may be abandoning latex since the birth of MS word, as latex looks like a programming language. But Chat-gpt Or any other AI chatbot really revived LaTeX as they can solve most of your problems in LaTeX.
- Inkscape: as functional as Adobe Illustrator, but free.
- terminal
- wsl2: much easier and safer to program here than on windows.
- ai in terminal: gemini-cli (powerful, sometimes too powerful), [shell-gpt](https://github.com/TheR1D/shell_gpt), etc
- Altium Designer: PCB layout design; they now provide a web version to allow us review PCB projects, the experience is even better than the executable version.

If you don't do much PCB design, you can get rid of altium designer and even windows.

Following are some of my configurations / tips on using these softwares.

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

### copy / paste on wsl vim
If you are using vim on wsl2, copying texts from vim to windows (such as a browser) might be tricky. I find nvim can solve this problem. Simply using nvim would do it.


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
Combining this powershell script with vim record function can level up your satisfaction from this.

# WSL2
A function that I miss of powershell is the invoke-item, or "ii". In my WSL2 system, I often need to open some .pdf / .png / .svg files. Since the windows already have a pdf reader or picture reader, I find it convinient to just use what I have on windows. 
What I did is to add an alias in .zshrc or .bashrc to map ii to 'explorer.exe'. Put this line to .zshrc. 
```
alias ii='explorer.exe'
```
And next time you use ii function to files on WSL2, you will find it is opened with the default application on windows, such as 
```
ii main.pdf
```
My computer will pop up a sumatra window with main.pdf.


## How to use Times New Roman font in WSL2 (Debian)
1. Edit apt sources in `/etc/apt/sources.list`, add `contrib non-free` to main sources, such as changing
`deb http://deb.debian.org/debian bookworm main`
to
`deb http://deb.debian.org/debian bookworm main contrib non-free`
2. sudo apt update
3. sudo apt install ttf-mscorefonts-installer
4. Refresh font cache
`sudo fc-cache -fv`
5. Should be able to see fonts.
`fc-list | grep "Times New Roman"`
Such as 
`/usr/share/fonts/truetype/msttcorefonts/Times_New_Roman.ttf`

To use Times fonts in matplotlib, there is a bit more extra work. 
```
font_path = "/usr/share/fonts/truetype/msttcorefonts/Times_New_Roman.ttf"
times_new_roman = fm.FontProperties(fname=font_path)

# Register the font globally
fm.fontManager.addfont(font_path)
plt.rcParams['font.family'] = times_new_roman.get_name()  # ensures all texts use it
```
