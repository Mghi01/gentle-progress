export interface Win {
  id: string;
  content: string;
  mood?: string;
  createdAt: Date;
}

const STORAGE_KEY = "small-wins";

export const getWins = (): Win[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    
    const wins = JSON.parse(stored);
    return wins.map((win: Win) => ({
      ...win,
      createdAt: new Date(win.createdAt),
    }));
  } catch {
    return [];
  }
};

export const addWin = (content: string, mood?: string): Win => {
  const wins = getWins();
  const newWin: Win = {
    id: crypto.randomUUID(),
    content,
    mood,
    createdAt: new Date(),
  };
  
  wins.unshift(newWin);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(wins));
  
  return newWin;
};

export const getRecentWins = (count: number = 6): Win[] => {
  const wins = getWins();
  return wins.slice(0, count);
};

export const getTodayWins = (): Win[] => {
  const wins = getWins();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return wins.filter((win) => {
    const winDate = new Date(win.createdAt);
    winDate.setHours(0, 0, 0, 0);
    return winDate.getTime() === today.getTime();
  });
};

export const getThisWeekWins = (): Win[] => {
  const wins = getWins();
  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  
  return wins.filter((win) => new Date(win.createdAt) >= weekAgo);
};

export const getRandomWins = (count: number = 6): Win[] => {
  const wins = getWins();
  const shuffled = [...wins].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Sample wins for first-time visitors
export const sampleWins: Win[] = [
  { id: "1", content: "I drank water today.", mood: "😊", createdAt: new Date() },
  { id: "2", content: "I took a short walk outside.", mood: "🌟", createdAt: new Date() },
  { id: "3", content: "I replied to that email I've been avoiding.", mood: "💪", createdAt: new Date() },
  { id: "4", content: "I asked for help when I needed it.", mood: "❤️", createdAt: new Date() },
  { id: "5", content: "I took a break without feeling guilty.", mood: "☁️", createdAt: new Date() },
  { id: "6", content: "I made my bed this morning.", mood: "😊", createdAt: new Date() },
];

export const initializeSampleWins = (): void => {
  const wins = getWins();
  if (wins.length === 0) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleWins));
  }
};
