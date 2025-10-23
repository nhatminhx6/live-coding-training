
export type SolveState = 'unsolved' | 'attempted' | 'solved';

export interface Progress {
  [questionId: string]: { state: SolveState; lastCode?: string };
}

const KEY = 'rlcq.progress.v1';

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Progress) : {};
  } catch {
    return {};
  }
}

export function saveProgress(p: Progress) {
  localStorage.setItem(KEY, JSON.stringify(p));
}
