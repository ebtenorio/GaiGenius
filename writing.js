function renderStrokeDiagram(character) {
  const data = kanaStrokes[character];
  return `<svg class="stroke-diagram" viewBox="0 0 109 109" role="img" aria-label="${character}, ${data.paths.length} strokes in writing order">
    <g class="stroke-ghost">${data.paths.map(path => `<path d="${path}"/>`).join('')}</g>
    <g class="stroke-lines">${data.paths.map(path => `<path class="stroke-ink" d="${path}" pathLength="1"/>`).join('')}</g>
    <g class="stroke-numbers">${data.numbers.map(number => `<text transform="${number.transform}">${number.label}</text>`).join('')}</g>
  </svg>`;
}

function renderStrokeControls(character) {
  const count = kanaStrokes[character].paths.length;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  return `<div class="writing-guide" aria-label="Writing guide for ${character}">
    <div class="writing-heading"><span>Stroke order</span><span class="stroke-status" role="status" aria-live="polite">${count} strokes</span></div>
    <div class="writing-toolbar"><div class="writing-playback">
      <button class="writing-button" data-action="stroke-play" aria-label="${reducedMotion?'Show all strokes':'Play stroke animation'}" title="${reducedMotion?'Show all strokes':'Play stroke animation'}"><i data-lucide="${reducedMotion?'eye':'play'}" aria-hidden="true"></i></button>
      <button class="writing-button" data-action="stroke-replay" aria-label="Replay stroke order" title="Replay stroke order"><i data-lucide="rotate-ccw" aria-hidden="true"></i></button>
    </div><div class="stroke-steps" role="group" aria-label="Numbered writing steps">${Array.from({length:count},(_,index) => `<button class="stroke-step" data-action="stroke-step" data-index="${index}" aria-label="Show stroke ${index+1} of ${count}" aria-pressed="false" title="Stroke ${index+1}">${index+1}</button>`).join('')}</div></div>
    <div class="stroke-credit">Stroke data: <a href="https://kanjivg.tagaini.net/" target="_blank" rel="noopener noreferrer">KanjiVG</a> · <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 3.0</a></div>
  </div>`;
}

function mountStrokeGuide() {
  const diagram = document.querySelector('.stroke-diagram');
  if (!diagram) return null;
  const paths = [...diagram.querySelectorAll('.stroke-ink')];
  const numbers = [...diagram.querySelectorAll('.stroke-numbers text')];
  const steps = [...document.querySelectorAll('.stroke-step')];
  const playButton = document.querySelector('[data-action="stroke-play"]');
  const status = document.querySelector('.stroke-status');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let animation = null;
  let playing = false;
  let complete = true;
  let current = paths.length-1;
  let generation = 0;

  function updateButton() {
    const label = reducedMotion.matches?'Show all strokes':playing?'Pause stroke animation':'Play stroke animation';
    playButton.setAttribute('aria-label',label);
    playButton.title = label;
    playButton.innerHTML = `<i data-lucide="${reducedMotion.matches?'eye':playing?'pause':'play'}" aria-hidden="true"></i>`;
    lucide.createIcons({attrs:{'stroke-width':1.7}});
  }

  function showStep(index, drawing = false) {
    paths.forEach((path,pathIndex) => {
      path.style.strokeDashoffset = pathIndex<=index?'0':'1';
      path.classList.toggle('current-stroke',pathIndex===index);
    });
    numbers.forEach((number,numberIndex) => number.classList.toggle('current-number',numberIndex===index));
    steps.forEach((step,stepIndex) => step.setAttribute('aria-pressed',String(stepIndex===index)));
    status.textContent = `${drawing?'Drawing stroke':'Stroke'} ${index+1} of ${paths.length}`;
  }

  function stop() {
    generation++;
    playing = false;
    animation?.cancel();
    animation = null;
  }

  function selectStep(index) {
    stop();
    current = index;
    complete = index===paths.length-1;
    showStep(index);
    updateButton();
  }

  async function play() {
    if (reducedMotion.matches) { selectStep(paths.length-1); return; }
    if (animation?.playState==='paused') {
      playing = true;
      animation.play();
      updateButton();
      return;
    }
    if (playing) return;
    if (complete) current = -1;
    const run = ++generation;
    playing = true;
    complete = false;
    updateButton();
    for (let index=current+1;index<paths.length;index++) {
      current = index;
      showStep(index,true);
      const path = paths[index];
      path.style.strokeDashoffset = '1';
      animation = path.animate([{strokeDashoffset:'1'},{strokeDashoffset:'0'}],{
        duration:700+Math.min(path.getTotalLength()*6,900),endDelay:220,fill:'forwards',easing:'linear',
      });
      try { await animation.finished; } catch { return; }
      if (run!==generation) return;
      path.style.strokeDashoffset = '0';
      animation.cancel();
      animation = null;
    }
    playing = false;
    complete = true;
    paths.forEach(path => path.classList.remove('current-stroke'));
    status.textContent = `${paths.length} of ${paths.length} strokes complete`;
    updateButton();
  }

  function handle(action,index) {
    if (action==='stroke-step') selectStep(index);
    if (action==='stroke-play') {
      if (playing) { animation?.pause(); playing = false; updateButton(); }
      else play();
    }
    if (action==='stroke-replay') { stop(); current = -1; complete = false; play(); }
  }

  function onMotionChange() {
    if (reducedMotion.matches) selectStep(paths.length-1);
    else updateButton();
  }
  reducedMotion.addEventListener('change',onMotionChange);
  return {handle,destroy() { stop(); reducedMotion.removeEventListener('change',onMotionChange); }};
}