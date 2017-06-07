export function createTimer () {
  return ({
    key: Date.now().toString(),
    name: '',
    duration: 0,
    remaining: 0,
    started: null,
    running: false,
  });
}

export function startTimer (timer) {
  timer.running = true;
  timer.started = new Date();
  return timer;
}

export function pauseTimer (timer) {
  timer.remaining = getRemainingSeconds(timer);
  timer.running = false;
  timer.started = null;
}

export function resetTimer (timer) {
  timer.running = false;
  timer.remaining = timer.duration;
  timer.started = null;
}

export function isRunning (timer) {
  return timer.running;
}

export function isPaused (timer) {
  return !timer.running && timer.duration !== timer.remaining;
}

export function isStopped (timer) {
  return !timer.running && timer.duration === timer.remaining;
}

export function getRemainingSeconds (timer) {
  if (isRunning(timer)) {
    return timer.remaining - ((Date.now() / 1000).toFixed(0) - (timer.started.getTime() / 1000).toFixed(0));
  } else {
    return timer.remaining;
  }
}

export function hasFinished (timer) {
  return getRemainingSeconds(timer) <= 0;
}
