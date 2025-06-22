---
layout: post
title: "Energy-optimized monophasic pulses with equivalent electric field"
category: 
  - publication
---

{{ page.title }}
================

<p class="meta">01 Mar 2024 - Durham</p>

<p style="color: gray; font-size: smaller;"><em>Selected Publications, but in Human Language</em> is a section where I introduce my publications with words that are as direct and simple as possible. I will assume that you already know the context of this paper.</p>

<div style="white-space: pre-wrap;">
@article{wang2023optimized,
  title={Optimized monophasic pulses with equivalent electric field for rapid-rate transcranial magnetic stimulation},
  author={Wang, Boshuo and Zhang, Jinshui and Li, Zhongxi and Grill, Warren M and Peterchev, Angel V and Goetz, Stefan M},
  journal={Journal of neural engineering},
  volume={20},
  number={3},
  pages={036027},
  year={2023},
  publisher={IOP Publishing}
}
</div>

This paper can be downloaded <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10464893/pdf/nihms-1906682.pdf">here</a>.

## Prerequisite Knowledge
1. Repetitive TMS is an effective therapeutic treatment for major depression disorder.
2. Monophasis TMS pulse works the best but has a high conduction loss.
3. Loss heats up TMS coil and limits the repetitive rate.

## Essence of This Paper
We tweaked a sinusoidal waveform by giving it a long pre-phase to slowly charge the current in the opposite direction to the main phase (which is short). So we can have a similar electric field in the brain but the current is shifted down by almost half. If you know how to calculate the RMS value of a signal, you will see what a great difference this approach made to the current RMS value, almost 75% down, which is also the reduction of the coil loss.
Thus, we can generate monophasic electric field (through the optimized sinusoidal current waveform) in our brain with a much higher rate.
