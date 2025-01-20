import Dexie, { type EntityTable } from 'dexie';

interface CounterModel {
    id: number,
    count: number
}

const db = new Dexie('CounterDb') as Dexie & {
    counters: EntityTable<
        CounterModel,
        'id' // primary key "id" (for the typings only)
    >;
};

// Schema declaration:
db.version(1).stores({
    counters: '++id, count' // primary key "id" (for the runtime!)
});

export type { CounterModel };
export { db };

